/**
 * Sitemap Generator
 *
 * Generates segmented XML sitemaps from the single source of truth (all-routes.ts).
 * Outputs:
 *   - sitemap-index.xml (points to sub-sitemaps)
 *   - sitemap-static.xml (homepage, services hub, locations hub)
 *   - sitemap-services.xml (20 service pages)
 *   - sitemap-councils.xml (12 council pages)
 *   - sitemap-suburbs.xml (60 suburb pages)
 *   - sitemap-combos.xml (1200+ suburb+service combo pages)
 *
 * Usage: npx tsx scripts/generate-sitemap.ts
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import {
  DOMAIN,
  getAllRoutes,
  getRouteCount,
  type PageMeta,
} from "../shared/routes/all-routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const today = new Date().toISOString().split("T")[0];

function buildUrlEntry(meta: PageMeta): string {
  const loc = meta.path === "/" ? DOMAIN : `${DOMAIN}${meta.path}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq || "monthly"}</changefreq>
    <priority>${meta.priority ?? 0.5}</priority>
  </url>`;
}

function wrapUrlset(entries: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;
}

function buildSitemapIndex(sitemapFiles: string[]): string {
  const entries = sitemapFiles.map(
    (file) => `  <sitemap>
    <loc>${DOMAIN}/${file}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</sitemapindex>`;
}

function main() {
  const routes = getAllRoutes();
  const counts = getRouteCount();

  // Categorise routes by page type
  const staticRoutes: PageMeta[] = [];
  const serviceRoutes: PageMeta[] = [];
  const councilRoutes: PageMeta[] = [];
  const suburbRoutes: PageMeta[] = [];
  const comboRoutes: PageMeta[] = [];

  for (const route of routes) {
    switch (route.pageType) {
      case "home":
      case "services-hub":
      case "locations-hub":
      case "static":
        staticRoutes.push(route);
        break;
      case "service":
        serviceRoutes.push(route);
        break;
      case "council":
        councilRoutes.push(route);
        break;
      case "suburb":
        suburbRoutes.push(route);
        break;
      case "suburb-service":
        comboRoutes.push(route);
        break;
    }
  }

  // Build individual sitemaps
  const sitemaps: Record<string, string> = {
    "sitemap-static.xml": wrapUrlset(staticRoutes.map(buildUrlEntry)),
    "sitemap-services.xml": wrapUrlset(serviceRoutes.map(buildUrlEntry)),
    "sitemap-councils.xml": wrapUrlset(councilRoutes.map(buildUrlEntry)),
    "sitemap-suburbs.xml": wrapUrlset(suburbRoutes.map(buildUrlEntry)),
    "sitemap-combos.xml": wrapUrlset(comboRoutes.map(buildUrlEntry)),
  };

  // Build sitemap index
  const sitemapIndex = buildSitemapIndex(Object.keys(sitemaps));

  // Write to both client/public and dist/public
  const outputDirs = [
    path.resolve(__dirname, "..", "client", "public"),
    path.resolve(__dirname, "..", "dist", "public"),
  ];

  for (const dir of outputDirs) {
    if (!fs.existsSync(dir)) {
      if (dir.includes("dist")) continue; // Skip dist if not built yet
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write sitemap index
    fs.writeFileSync(path.join(dir, "sitemap-index.xml"), sitemapIndex);

    // Write sub-sitemaps
    for (const [filename, content] of Object.entries(sitemaps)) {
      fs.writeFileSync(path.join(dir, filename), content);
    }
  }

  console.log("\n  Sitemap Generation Complete");
  console.log("  " + "=".repeat(40));
  console.log(`  Static pages: ${staticRoutes.length}`);
  console.log(`  Service pages: ${serviceRoutes.length}`);
  console.log(`  Council pages: ${councilRoutes.length}`);
  console.log(`  Suburb pages: ${suburbRoutes.length}`);
  console.log(`  Combo pages: ${comboRoutes.length}`);
  console.log(`  Total URLs: ${routes.length}`);
  console.log(`  Sitemaps: ${Object.keys(sitemaps).length + 1} files`);
  console.log(`  Expected total: ${counts.total}`);
}

main();
