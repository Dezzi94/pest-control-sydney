import { defineConfig } from "drizzle-kit";

// Prefer unpooled URL for migrations (DDL needs direct connection, not PgBouncer)
const url =
  process.env.DATABASE_URL ||
  process.env.NETLIFY_DATABASE_URL_UNPOOLED ||
  process.env.NETLIFY_DATABASE_URL;

if (!url) {
  throw new Error(
    "DATABASE_URL or NETLIFY_DATABASE_URL_UNPOOLED must be set"
  );
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url,
  },
});
