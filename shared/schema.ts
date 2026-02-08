import { pgTable, serial, text, timestamp, integer, varchar, decimal } from "drizzle-orm/pg-core";

// ─── Leads Table ──────────────────────────────────────────────────────────────

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }).notNull(),
  address: text("address"),
  suburb: varchar("suburb", { length: 100 }),
  postcode: varchar("postcode", { length: 10 }),
  pestType: varchar("pest_type", { length: 100 }).notNull(),
  propertyType: varchar("property_type", { length: 50 }),
  message: text("message"),
  source: varchar("source", { length: 50 }).notNull().default("website"),
  urgency: varchar("urgency", { length: 20 }).notNull().default("medium"),
  status: varchar("status", { length: 20 }).notNull().default("new"),
  notes: text("notes"),
  assignedTo: varchar("assigned_to", { length: 255 }),
  quotedAmount: decimal("quoted_amount", { precision: 10, scale: 2 }),
  followUpDate: timestamp("follow_up_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ─── Users Table (Admin CRM) ─────────────────────────────────────────────────

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  role: varchar("role", { length: 20 }).notNull().default("staff"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ─── Settings Table ───────────────────────────────────────────────────────────

export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  key: varchar("key", { length: 100 }).notNull().unique(),
  value: text("value").notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ─── Type Exports ─────────────────────────────────────────────────────────────

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Setting = typeof settings.$inferSelect;
export type InsertSetting = typeof settings.$inferInsert;
