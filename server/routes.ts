import type { Express } from "express";
import { SERVICES, COUNCILS } from "@shared/routes/all-routes";

export function registerRoutes(app: Express) {
  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Services (read-only from data)
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

  // Councils (read-only from data)
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

  // Lead creation (quote form submission)
  app.post("/api/leads", (req, res) => {
    // TODO: Connect to database via Drizzle ORM
    const { name, email, phone, pestType, message, suburb, postcode, urgency } = req.body;

    if (!name || !email || !phone || !pestType) {
      return res.status(400).json({ error: "Name, email, phone, and pest type are required" });
    }

    // For now, return a mock response
    res.status(201).json({
      id: Date.now(),
      name,
      email,
      phone,
      pestType,
      message: message || null,
      suburb: suburb || null,
      postcode: postcode || null,
      urgency: urgency || "medium",
      status: "new",
      source: "website",
      notes: null,
      assignedTo: null,
      quotedAmount: null,
      followUpDate: null,
      address: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  });

  // Admin auth placeholder
  app.post("/api/auth/login", (req, res) => {
    // TODO: Implement proper auth with JWT
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      res.json({
        user: { id: 1, email, name: "Admin", role: "admin" },
        token: "placeholder-token",
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  app.get("/api/auth/me", (_req, res) => {
    // TODO: Implement session/JWT check
    res.json(null);
  });

  app.post("/api/auth/logout", (_req, res) => {
    res.json({ success: true });
  });
}
