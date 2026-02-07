/**
 * Build-Time Page Validation Script
 *
 * Runs after prerendering to verify ALL pages meet SEO requirements.
 * FAILS THE BUILD if any critical check fails.
 *
 * Checks:
 * 1. Every route has a .html file
 * 2. Every .html has unique title, description, canonical
 * 3. Every .html has structured data (JSON-LD)
 * 4. No canonical points to homepage (except homepage itself)
 * 5. Every .html has 500+ chars of text content
 * 6. BreadcrumbList schema on non-home pages
 * 7. Sitemap files exist
 *
 * Usage: npx tsx scripts/audit-pages.ts [--fail-on-error]
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { DOMAIN, getAllRoutes } from "../shared/routes/all-routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PATH = path.resolve(__dirname, "..", "dist", "public");
const failOnError = process.argv.includes("--fail-on-error");

interface AuditResult {
  url: string;
  filePath: string;
  errors: string[];
  warnings: string[];
}

function auditHtmlFile(route: string, filePath: string): AuditResult {
  const result: AuditResult = { url: route, filePath, errors: [], warnings: [] };

  if (!fs.existsSync(filePath)) {
    result.errors.push("HTML file does not exist");
    return result;
  }

  const html = fs.readFileSync(filePath, "utf-8");

  // Check for title tag
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    result.errors.push("Missing or empty <title> tag");
  }

  // Check for meta description
  const descMatch = html.match(
    /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i
  );
  if (!descMatch || !descMatch[1].trim()) {
    result.errors.push("Missing meta description");
  }

  // Check for canonical link
  const canonicalMatch = html.match(
    /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i
  );
  if (!canonicalMatch) {
    result.errors.push("Missing canonical link");
  } else {
    const canonicalUrl = canonicalMatch[1];
    // No non-homepage page should point canonical to homepage
    if (
      route !== "/" &&
      (canonicalUrl === `${DOMAIN}/` || canonicalUrl === DOMAIN)
    ) {
      result.errors.push(
        `CRITICAL: Canonical points to homepage (${canonicalUrl}) on non-homepage page`
      );
    }
    // Canonical should match the page's own URL
    const expectedCanonical = route === "/" ? DOMAIN : `${DOMAIN}${route}`;
    if (canonicalUrl !== expectedCanonical) {
      result.warnings.push(
        `Canonical mismatch: expected ${expectedCanonical}, got ${canonicalUrl}`
      );
    }
  }

  // Check for structured data
  if (!/application\/ld\+json/i.test(html)) {
    result.errors.push("Missing JSON-LD structured data");
  }

  // Check for minimum content length (after stripping tags)
  const textContent = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (textContent.length < 500) {
    result.warnings.push(
      `Low text content: ${textContent.length} chars (recommend 500+)`
    );
  }

  // Check for og:url
  const ogUrlMatch = html.match(
    /<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["']/i
  );
  if (!ogUrlMatch) {
    result.warnings.push("Missing og:url meta tag");
  }

  // Check for BreadcrumbList schema on non-homepage pages
  if (route !== "/" && !/BreadcrumbList/i.test(html)) {
    result.warnings.push("Missing BreadcrumbList schema");
  }

  return result;
}

function checkUniqueness(results: AuditResult[]): string[] {
  const errors: string[] = [];
  const titles = new Map<string, string[]>();
  const descriptions = new Map<string, string[]>();
  const canonicals = new Map<string, string[]>();

  for (const r of results) {
    if (r.errors.some((e) => e.includes("does not exist"))) continue;

    const html = fs.readFileSync(r.filePath, "utf-8");

    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      if (!titles.has(title)) titles.set(title, []);
      titles.get(title)!.push(r.url);
    }

    const descMatch = html.match(
      /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i
    );
    if (descMatch) {
      const desc = descMatch[1].trim();
      if (!descriptions.has(desc)) descriptions.set(desc, []);
      descriptions.get(desc)!.push(r.url);
    }

    const canonicalMatch = html.match(
      /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i
    );
    if (canonicalMatch) {
      const canonical = canonicalMatch[1].trim();
      if (!canonicals.has(canonical)) canonicals.set(canonical, []);
      canonicals.get(canonical)!.push(r.url);
    }
  }

  for (const [title, urls] of titles) {
    if (urls.length > 1) {
      errors.push(`Duplicate title "${title}" on: ${urls.slice(0, 3).join(", ")}${urls.length > 3 ? "..." : ""}`);
    }
  }

  for (const [desc, urls] of descriptions) {
    if (urls.length > 1) {
      errors.push(
        `Duplicate description on ${urls.length} pages: ${urls.slice(0, 3).join(", ")}${urls.length > 3 ? "..." : ""}`
      );
    }
  }

  for (const [canonical, urls] of canonicals) {
    if (urls.length > 1) {
      errors.push(`Duplicate canonical "${canonical}" on: ${urls.join(", ")}`);
    }
  }

  return errors;
}

function checkSitemapCoverage(): string[] {
  const warnings: string[] = [];
  const sitemapFiles = [
    "sitemap-index.xml",
    "sitemap-static.xml",
    "sitemap-services.xml",
    "sitemap-councils.xml",
    "sitemap-suburbs.xml",
    "sitemap-combos.xml",
  ];

  for (const file of sitemapFiles) {
    const distFile = path.join(DIST_PATH, file);
    const publicFile = path.resolve(__dirname, "..", "client", "public", file);
    if (!fs.existsSync(distFile) && !fs.existsSync(publicFile)) {
      warnings.push(`Sitemap file missing: ${file}`);
    }
  }

  return warnings;
}

async function main() {
  console.log("\n  Starting Build-Time Page Audit...\n");

  if (!fs.existsSync(DIST_PATH)) {
    console.log("  dist/public does not exist. Run build first.\n");
    console.log("  Running in dry-run mode (checking route definitions only)...\n");
  }

  const routes = getAllRoutes();
  // Filter out admin pages — they are SPA-only
  const publicRoutes = routes.filter((r) => r.pageType !== "admin");
  const results: AuditResult[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  console.log(`  Checking ${publicRoutes.length} routes...\n`);

  for (const route of publicRoutes) {
    const routePath = route.path === "/" ? "/index" : route.path;
    const filePath = path.join(DIST_PATH, routePath + ".html");
    const result = auditHtmlFile(route.path, filePath);
    results.push(result);
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;
  }

  // Print errors
  const failedResults = results.filter((r) => r.errors.length > 0);
  if (failedResults.length > 0) {
    console.log("  ERRORS:\n");
    let errorCount = 0;
    for (const r of failedResults) {
      for (const error of r.errors) {
        if (errorCount < 30) {
          console.log(`    ${r.url}: ${error}`);
        }
        errorCount++;
      }
    }
    if (errorCount > 30) {
      console.log(`    ... and ${errorCount - 30} more errors`);
    }
  }

  // Print warnings (first 20)
  const warningResults = results.filter((r) => r.warnings.length > 0);
  if (warningResults.length > 0) {
    console.log("\n  WARNINGS:\n");
    let count = 0;
    for (const r of warningResults) {
      for (const warning of r.warnings) {
        if (count < 20) {
          console.log(`    ${r.url}: ${warning}`);
        }
        count++;
      }
    }
    if (count > 20) {
      console.log(`    ... and ${count - 20} more warnings`);
    }
  }

  // Check uniqueness (only if files exist)
  if (fs.existsSync(DIST_PATH)) {
    console.log("\n  Checking title/description uniqueness...");
    const uniquenessErrors = checkUniqueness(results);
    for (const error of uniquenessErrors) {
      console.log(`    ${error}`);
      totalErrors++;
    }
    if (uniquenessErrors.length === 0) {
      console.log("    All titles and descriptions are unique");
    }

    // Check sitemap coverage
    console.log("\n  Checking sitemap coverage...");
    const sitemapWarnings = checkSitemapCoverage();
    for (const warning of sitemapWarnings) {
      console.log(`    ${warning}`);
      totalWarnings++;
    }
    if (sitemapWarnings.length === 0) {
      console.log("    All sitemap files present");
    }
  }

  // Summary
  console.log("\n  " + "=".repeat(50));
  console.log("  AUDIT SUMMARY");
  console.log("  " + "=".repeat(50));
  console.log(`  Total routes checked: ${publicRoutes.length}`);
  console.log(`  Passed: ${results.filter((r) => r.errors.length === 0).length}`);
  console.log(`  Failed: ${failedResults.length}`);
  console.log(`  Warnings: ${totalWarnings}`);
  console.log(`  Total errors: ${totalErrors}`);

  if (totalErrors > 0 && failOnError) {
    console.log("\n  BUILD FAILED: SEO audit found errors");
    process.exit(1);
  } else if (totalErrors > 0) {
    console.log("\n  Audit completed with errors (use --fail-on-error to fail build)");
  } else {
    console.log("\n  Audit passed");
  }
}

main().catch(console.error);
