import type { Express } from "express";
import { eq, desc } from "drizzle-orm";
import { SERVICES, COUNCILS } from "../shared/routes/all-routes";
import { leads, type InsertLead } from "../shared/schema";
import { getDb } from "./lib/db";
import { generateToken, verifyToken, requireAuth } from "./middleware/auth";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@pestcontrolsydney.org";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export function registerRoutes(app: Express) {
  // ─── Health Check ─────────────────────────────────────────────────────
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // ─── Services (read-only from data) ───────────────────────────────────
  app.get("/api/services", (_req, res) => {
    res.json({
      services: SERVICES.map((s) => ({
        name: s.name,
        slug: s.slug,
        priceFrom: s.priceFrom,
        icon: s.icon,
        shortDescription: s.shortDescription,
        category: s.category,
      })),
    });
  });

  // ─── Councils (read-only from data) ───────────────────────────────────
  app.get("/api/councils", (_req, res) => {
    res.json({
      councils: COUNCILS.map((c) => ({
        name: c.name,
        slug: c.slug,
        suburbs: c.suburbs.map((s) => ({
          name: s.name,
          slug: s.slug,
          postcode: s.postcode,
        })),
      })),
    });
  });

  // ─── Auth ─────────────────────────────────────────────────────────────
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = generateToken({ id: 1, email, role: "admin" });
      res.json({
        user: { id: 1, email, name: "Admin", role: "admin" },
        token,
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  app.get("/api/auth/me", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.json(null);
    }
    const payload = verifyToken(authHeader.slice(7));
    if (!payload) return res.json(null);
    res.json({ id: payload.id, email: payload.email, name: "Admin", role: payload.role });
  });

  app.post("/api/auth/logout", (_req, res) => {
    res.json({ success: true });
  });

  // ─── Leads (public: create; admin: list, get, update, delete, export)─
  app.post("/api/leads", async (req, res) => {
    const { name, email, phone, pestType, message, address, suburb, postcode, urgency, source } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone are required" });
    }

    const db = getDb();
    if (!db) {
      return res.status(503).json({ error: "Database not connected. Please try again later." });
    }

    try {
      const values: InsertLead = {
        name,
        phone,
        pestType: pestType || "general-enquiry",
        urgency: urgency || "medium",
        source: source || "website",
      };
      if (email) values.email = email;
      if (message) values.message = message;
      if (address) values.address = address;
      if (suburb) values.suburb = suburb;
      if (postcode) values.postcode = postcode;

      const [lead] = await db.insert(leads).values(values).returning();
      res.status(201).json(lead);
    } catch (err: any) {
      console.error("Failed to create lead:", err);
      res.status(500).json({ error: "Failed to create lead", detail: err?.message || String(err) });
    }
  });

  app.get("/api/leads", requireAuth, async (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database not connected" });

    try {
      const page = parseInt(req.query.page as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 50;
      const status = req.query.status as string;
      const search = req.query.search as string;

      let query = db.select().from(leads).orderBy(desc(leads.createdAt));

      // Note: filtering applied at application level for simplicity
      const allLeads = await query;

      let filtered = allLeads;
      if (status && status !== "all") {
        filtered = filtered.filter((l) => l.status === status);
      }
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(
          (l) =>
            l.name.toLowerCase().includes(s) ||
            (l.email && l.email.toLowerCase().includes(s)) ||
            l.phone.includes(s)
        );
      }

      const total = filtered.length;
      const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

      res.json({ leads: paginated, total, page, pageSize });
    } catch (err) {
      console.error("Failed to fetch leads:", err);
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  app.get("/api/leads/export", requireAuth, async (_req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database not connected" });

    try {
      const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt));

      const headers = ["ID", "Name", "Email", "Phone", "Pest Type", "Suburb", "Postcode", "Status", "Urgency", "Source", "Notes", "Quoted Amount", "Created"];
      const rows = allLeads.map((l) => [
        l.id, l.name, l.email, l.phone, l.pestType,
        l.suburb || "", l.postcode || "", l.status, l.urgency,
        l.source, (l.notes || "").replace(/"/g, '""'),
        l.quotedAmount || "", l.createdAt.toISOString(),
      ]);

      const csv = [
        headers.join(","),
        ...rows.map((r) => r.map((v) => `"${v}"`).join(",")),
      ].join("\n");

      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", `attachment; filename=leads-${new Date().toISOString().split("T")[0]}.csv`);
      res.send(csv);
    } catch (err) {
      console.error("Failed to export leads:", err);
      res.status(500).json({ error: "Failed to export leads" });
    }
  });

  app.get("/api/leads/:id", requireAuth, async (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database not connected" });

    try {
      const id = parseInt(req.params.id);
      const [lead] = await db.select().from(leads).where(eq(leads.id, id));
      if (!lead) return res.status(404).json({ error: "Lead not found" });
      res.json(lead);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch lead" });
    }
  });

  app.patch("/api/leads/:id", requireAuth, async (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database not connected" });

    try {
      const id = parseInt(req.params.id);
      const { status, notes, assignedTo, quotedAmount, followUpDate } = req.body;

      const updates: Record<string, any> = { updatedAt: new Date() };
      if (status !== undefined) updates.status = status;
      if (notes !== undefined) updates.notes = notes;
      if (assignedTo !== undefined) updates.assignedTo = assignedTo;
      if (quotedAmount !== undefined) updates.quotedAmount = quotedAmount.toString();
      if (followUpDate !== undefined) updates.followUpDate = followUpDate ? new Date(followUpDate) : null;

      const [lead] = await db.update(leads).set(updates).where(eq(leads.id, id)).returning();
      if (!lead) return res.status(404).json({ error: "Lead not found" });
      res.json(lead);
    } catch (err) {
      res.status(500).json({ error: "Failed to update lead" });
    }
  });

  app.delete("/api/leads/:id", requireAuth, async (req, res) => {
    const db = getDb();
    if (!db) return res.status(503).json({ error: "Database not connected" });

    try {
      const id = parseInt(req.params.id);
      await db.delete(leads).where(eq(leads.id, id));
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: "Failed to delete lead" });
    }
  });
}
