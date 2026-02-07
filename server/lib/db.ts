import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@shared/schema";

// Database connection — falls back to a no-op if DATABASE_URL isn't set
// This allows the dev server and build to work without a database
let db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!db) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      console.warn("DATABASE_URL not set — database operations will fail");
      return null;
    }
    const sql = neon(url);
    db = drizzle(sql, { schema });
  }
  return db;
}
