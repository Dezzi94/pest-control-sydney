/**
 * Prerender Script
 *
 * Generates static HTML files for every public route by injecting
 * unique meta tags, structured data, and SEO content into the Vite-built template.
 *
 * CRITICAL: Uses _template.html backup for idempotency.
 *
 * Usage: npx tsx scripts/prerender-pages.ts
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import {
  DOMAIN,
  PHONE,
  SERVICES,
  COUNCILS,
  getAllRoutes,
  getRouteCount,
  getServiceBySlug,
  getCouncilBySlug,
  getSuburbBySlug,
  getServicePath,
  getCouncilPath,
  getSuburbPath,
  getSuburbServicePath,
  toTitleCase,
  type PageMeta,
} from "../shared/routes/all-routes";
import {
  getBaseStructuredData,
  getPageStructuredData,
  getBreadcrumbs,
} from "../shared/seo/metadata";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── HTML Helpers ────────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(str: string): string {
  return str.replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ─── Meta Tag Generation ─────────────────────────────────────────────────────

function generateMetaTags(meta: PageMeta): string {
  const canonical = meta.path === "/" ? DOMAIN : `${DOMAIN}${meta.path}`;
  const ogImage = `${DOMAIN}/images/brand/og-default.jpg`;

  return `
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeAttr(meta.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeAttr(meta.title)}" />
    <meta property="og:description" content="${escapeAttr(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Pest Control Sydney" />
    <meta property="og:locale" content="en_AU" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(meta.title)}" />
    <meta name="twitter:description" content="${escapeAttr(meta.description)}" />
    <meta name="robots" content="index, follow" />`;
}

// ─── Visual Breadcrumb Navigation ────────────────────────────────────────────

function generateVisualBreadcrumbs(meta: PageMeta): string {
  if (meta.pageType === "home") return "";

  const crumbs = getBreadcrumbs(meta);
  if (crumbs.length <= 1) return "";

  const items = crumbs.map((crumb, i) => {
    const isLast = i === crumbs.length - 1;
    if (isLast) {
      return `<span style="color: #334155;">${escapeHtml(crumb.name)}</span>`;
    }
    if (crumb.url) {
      return `<a href="${crumb.url}" style="color: #3b82f6; text-decoration: none;">${escapeHtml(crumb.name)}</a>`;
    }
    return `<span style="color: #64748b;">${escapeHtml(crumb.name)}</span>`;
  });

  return `
          <nav aria-label="Breadcrumb" style="font-size: 14px; color: #64748b; margin-bottom: 16px;">
            ${items.join(' <span style="margin: 0 6px;">&rsaquo;</span> ')}
          </nav>`;
}

// ─── Structured Data Generation ──────────────────────────────────────────────

function generateStructuredData(meta: PageMeta): string {
  const baseData = getBaseStructuredData(DOMAIN);
  const pageData = getPageStructuredData({
    pageType: meta.pageType,
    pageMeta: meta,
    origin: DOMAIN,
  });

  // Combine base + page-specific schemas
  const allSchemas = [...baseData, ...pageData];

  // Add Organization schema to homepage
  if (meta.pageType === "home") {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${DOMAIN}/#organization`,
      name: "Pest Control Sydney",
      url: DOMAIN,
      logo: `${DOMAIN}/images/brand/logo.svg`,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      sameAs: [],
    });
  }

  // Add AggregateRating schema on service pages
  if (meta.pageType === "service" && meta.serviceSlug) {
    const service = getServiceBySlug(meta.serviceSlug);
    if (service) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${DOMAIN}${getServicePath(meta.serviceSlug)}#service-rating`,
        name: service.name,
        provider: { "@id": `${DOMAIN}/#business` },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "127",
          bestRating: "5",
          worstRating: "1",
        },
      });
    }
  }

  // Add FAQPage schema for service and suburb-service pages
  if (meta.pageType === "service" || meta.pageType === "suburb-service") {
    const faqEntries = generateFaqEntries(meta);
    if (faqEntries.length > 0) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqEntries.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    }
  }

  return `<script type="application/ld+json">${JSON.stringify(allSchemas)}</script>`;
}

function generateFaqEntries(
  meta: PageMeta
): { question: string; answer: string }[] {
  const service = meta.serviceSlug
    ? getServiceBySlug(meta.serviceSlug)
    : undefined;
  const suburb =
    meta.councilSlug && meta.suburbSlug
      ? getSuburbBySlug(meta.councilSlug, meta.suburbSlug)
      : undefined;

  if (!service) return [];

  if (suburb) {
    return [
      {
        question: `How much does ${service.name.toLowerCase()} cost in ${suburb.name}?`,
        answer: `${service.name} pricing in ${suburb.name} (${suburb.postcode}) starts ${service.priceFrom === "Quote" ? "with a free quote" : `from ${service.priceFrom}`}. Contact us on ${PHONE} for an accurate quote based on your specific situation.`,
      },
      {
        question: `Do you offer same-day ${service.name.toLowerCase()} in ${suburb.name}?`,
        answer: `Yes, we offer same-day ${service.name.toLowerCase()} service in ${suburb.name} and surrounding suburbs. Call ${PHONE} before midday for same-day availability.`,
      },
      {
        question: `Are your ${service.name.toLowerCase()} technicians licensed?`,
        answer: `All our technicians are fully licensed by NSW Fair Trading, insured, and undergo regular training. We use APVMA-registered products from trusted brands.`,
      },
      {
        question: `What areas near ${suburb.name} do you service for ${service.name.toLowerCase()}?`,
        answer: `We provide ${service.name.toLowerCase()} across ${suburb.name} (${suburb.postcode}) and all surrounding suburbs. Our local technicians cover the entire council area and can typically arrive within 1-2 hours.`,
      },
      {
        question: `Is ${service.name.toLowerCase()} in ${suburb.name} safe for pets and children?`,
        answer: `Yes, we use APVMA-registered products from trusted brands like BASF, Bayer, and Syngenta. Our technicians will advise on any precautions specific to your treatment. Most treatments allow re-entry within 2-4 hours.`,
      },
    ];
  }

  return [
    {
      question: `How much does ${service.name.toLowerCase()} cost in Sydney?`,
      answer: `Our ${service.name.toLowerCase()} service ${service.priceFrom === "Quote" ? "is quoted based on your situation — contact us for a free, no-obligation quote" : `starts from ${service.priceFrom}`}. Call ${PHONE} for accurate pricing.`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer: `The duration depends on the property size and extent of the issue. Our technician will provide a time estimate at the start of the visit. Most residential treatments are completed within 1-3 hours.`,
    },
    {
      question: `Is your ${service.name.toLowerCase()} service guaranteed?`,
      answer: `Yes, all our treatments come with a service warranty. If the problem returns within the warranty period, we re-treat at no additional cost. Contact us for warranty details.`,
    },
    {
      question: `Do you offer emergency ${service.name.toLowerCase()} in Sydney?`,
      answer: `Yes, we offer 24/7 emergency pest control services across Sydney. For urgent ${service.name.toLowerCase()} needs, call ${PHONE} and we will dispatch a technician as soon as possible, often within hours.`,
    },
    {
      question: `What products do you use for ${service.name.toLowerCase()}?`,
      answer: `We use only APVMA-registered products from industry-leading brands including BASF, Bayer, Syngenta, FMC, and Ensystex. All products are safe for residential and commercial use when applied by our licensed technicians.`,
    },
  ];
}

// ─── SEO Content Generation ──────────────────────────────────────────────────

function generateServiceContent(meta: PageMeta): string {
  const service = meta.serviceSlug
    ? getServiceBySlug(meta.serviceSlug)
    : undefined;
  if (!service) return "";

  const relatedServices = SERVICES.filter(
    (s) => s.slug !== service.slug && s.category === service.category
  ).slice(0, 5);

  return `
          <h1>${escapeHtml(service.name)} Sydney | Professional ${escapeHtml(service.name)} Services</h1>
          <p style="font-size: 18px; line-height: 1.7; color: #334155;">${escapeHtml(meta.description)}</p>

          <section>
            <h2>Professional ${escapeHtml(service.name)} Across Sydney</h2>
            <p>${escapeHtml(service.shortDescription)} Our licensed technicians provide fast, effective ${service.name.toLowerCase()} services across all Sydney suburbs. We use APVMA-registered products from trusted brands including BASF, Bayer, and Syngenta.</p>
            <p>Pricing ${service.priceFrom === "Quote" ? "is provided via free quote" : `starts from ${service.priceFrom}`}. All treatments include a service warranty and are backed by our 100% satisfaction guarantee.</p>

            <h3>Our ${escapeHtml(service.name)} Process</h3>
            <ol>
              <li><strong>Inspection</strong> — Thorough assessment of your property to determine the extent of the problem</li>
              <li><strong>Treatment Plan</strong> — Tailored treatment plan using the most effective methods for your situation</li>
              <li><strong>Professional Treatment</strong> — Licensed technicians apply targeted treatments using industry-leading products</li>
              <li><strong>Prevention Advice</strong> — Practical advice and follow-up to prevent recurrence</li>
            </ol>

            <h3>Service Areas</h3>
            <p>We provide ${service.name.toLowerCase()} across all Sydney council areas:</p>
            <ul>
              ${COUNCILS.map((c) => `<li><a href="${getCouncilPath(c.slug)}">${c.name}</a> — ${c.suburbs.map((s) => s.name).join(", ")}</li>`).join("\n              ")}
            </ul>

            ${relatedServices.length > 0 ? `<h3>Related Services</h3>
            <ul>
              ${relatedServices.map((s) => `<li><a href="${getServicePath(s.slug)}">${s.name}</a> — ${s.shortDescription}</li>`).join("\n              ")}
            </ul>` : ""}
          </section>`;
}

function generateCouncilContent(meta: PageMeta): string {
  const council = meta.councilSlug
    ? getCouncilBySlug(meta.councilSlug)
    : undefined;
  if (!council) return "";

  return `
          <h1>Pest Control ${escapeHtml(council.name)} | Local Technicians</h1>
          <p style="font-size: 18px; line-height: 1.7; color: #334155;">${escapeHtml(meta.description)}</p>

          <section>
            <h2>Pest Control Services in ${escapeHtml(council.name)}</h2>
            <p>We provide comprehensive pest control services across all suburbs in the ${council.name} council area. Our local technicians know these suburbs intimately and deliver fast, effective treatments tailored to local conditions.</p>

            <h3>Suburbs We Service in ${escapeHtml(council.name)}</h3>
            <ul>
              ${council.suburbs.map((s) => `<li><a href="${getSuburbPath(council.slug, s.slug)}">Pest Control ${s.name} (${s.postcode})</a></li>`).join("\n              ")}
            </ul>

            <h3>Our Services</h3>
            <ul>
              ${SERVICES.slice(0, 10).map((s) => `<li><a href="${getServicePath(s.slug)}">${s.name}</a> — from ${s.priceFrom}</li>`).join("\n              ")}
            </ul>
            <p><a href="/services">View all ${SERVICES.length} services</a></p>
          </section>`;
}

function generateSuburbContent(meta: PageMeta): string {
  const council = meta.councilSlug
    ? getCouncilBySlug(meta.councilSlug)
    : undefined;
  const suburb =
    meta.councilSlug && meta.suburbSlug
      ? getSuburbBySlug(meta.councilSlug, meta.suburbSlug)
      : undefined;
  if (!council || !suburb) return "";

  return `
          <h1>Pest Control ${escapeHtml(suburb.name)} ${suburb.postcode} | Local Experts</h1>
          <p style="font-size: 18px; line-height: 1.7; color: #334155;">${escapeHtml(meta.description)}</p>

          <section>
            <h2>Professional Pest Control in ${escapeHtml(suburb.name)}</h2>
            <p>Looking for reliable pest control in ${suburb.name} (${suburb.postcode})? Our licensed technicians provide fast, effective pest treatments for homes and businesses in ${suburb.name} and surrounding suburbs in the ${council.name} council area.</p>

            <h3>Services Available in ${escapeHtml(suburb.name)}</h3>
            <ul>
              ${SERVICES.map((s) => `<li><a href="${getSuburbServicePath(council.slug, suburb.slug, s.slug)}">${s.name} in ${suburb.name}</a> — from ${s.priceFrom}</li>`).join("\n              ")}
            </ul>

            <h3>Nearby Suburbs</h3>
            <ul>
              ${council.suburbs.filter((s) => s.slug !== suburb.slug).map((s) => `<li><a href="${getSuburbPath(council.slug, s.slug)}">Pest Control ${s.name} (${s.postcode})</a></li>`).join("\n              ")}
            </ul>

            <p>Part of <a href="${getCouncilPath(council.slug)}">${council.name} Council Area</a></p>
          </section>`;
}

function generateSuburbServiceContent(meta: PageMeta): string {
  const service = meta.serviceSlug
    ? getServiceBySlug(meta.serviceSlug)
    : undefined;
  const council = meta.councilSlug
    ? getCouncilBySlug(meta.councilSlug)
    : undefined;
  const suburb =
    meta.councilSlug && meta.suburbSlug
      ? getSuburbBySlug(meta.councilSlug, meta.suburbSlug)
      : undefined;
  if (!service || !council || !suburb) return "";

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(
    0,
    8
  );
  const nearbySuburbs = council.suburbs.filter(
    (s) => s.slug !== suburb.slug
  );

  return `
          <h1>${escapeHtml(service.name)} ${escapeHtml(suburb.name)} ${suburb.postcode} | Professional Service</h1>
          <p style="font-size: 18px; line-height: 1.7; color: #334155;">${escapeHtml(meta.description)}</p>

          <section>
            <h2>${escapeHtml(service.name)} in ${escapeHtml(suburb.name)}</h2>
            <p>Need professional ${service.name.toLowerCase()} in ${suburb.name} (${suburb.postcode})? Our licensed technicians provide expert ${service.name.toLowerCase()} services throughout ${suburb.name} and the broader ${council.name} area. ${service.shortDescription}</p>
            <p>Pricing ${service.priceFrom === "Quote" ? "is available via free quote" : `starts from ${service.priceFrom}`}. Call ${PHONE} for same-day service availability in ${suburb.name}.</p>

            <h3>Why Choose Us for ${escapeHtml(service.name)} in ${escapeHtml(suburb.name)}</h3>
            <ul>
              <li>Local technicians who know ${suburb.name} and ${council.name}</li>
              <li>Licensed and insured — NSW Fair Trading accredited</li>
              <li>Same-day service available — call before midday</li>
              <li>100% satisfaction guarantee on all treatments</li>
              <li>APVMA-registered products from BASF, Bayer, and Syngenta</li>
            </ul>

            <h3>Other Services in ${escapeHtml(suburb.name)}</h3>
            <ul>
              ${otherServices.map((s) => `<li><a href="${getSuburbServicePath(council.slug, suburb.slug, s.slug)}">${s.name} ${suburb.name}</a></li>`).join("\n              ")}
            </ul>

            <h3>${escapeHtml(service.name)} in Nearby Suburbs</h3>
            <ul>
              ${nearbySuburbs.map((s) => `<li><a href="${getSuburbServicePath(council.slug, s.slug, service.slug)}">${service.name} ${s.name} (${s.postcode})</a></li>`).join("\n              ")}
            </ul>

            <p><a href="${getServicePath(service.slug)}">Learn more about our ${service.name} service</a> | <a href="${getSuburbPath(council.slug, suburb.slug)}">All services in ${suburb.name}</a></p>
          </section>`;
}

function generateHubContent(meta: PageMeta): string {
  if (meta.pageType === "services-hub") {
    return `
          <h1>Pest Control Services Sydney | ${SERVICES.length}+ Professional Treatments</h1>
          <p style="font-size: 18px; line-height: 1.7; color: #334155;">${escapeHtml(meta.description)}</p>

          <section>
            <h2>Our Pest Control Services</h2>
            <ul>
              ${SERVICES.map((s) => `<li><a href="${getServicePath(s.slug)}">${s.name}</a> — ${s.shortDescription} From ${s.priceFrom}.</li>`).join("\n              ")}
            </ul>

            <h2>Service Areas</h2>
            <ul>
              ${COUNCILS.map((c) => `<li><a href="${getCouncilPath(c.slug)}">${c.name}</a> — ${c.suburbs.map((s) => s.name).join(", ")}</li>`).join("\n              ")}
            </ul>
          </section>`;
  }

  if (meta.pageType === "locations-hub") {
    return `
          <h1>Pest Control Locations | All Sydney Suburbs</h1>
          <p style="font-size: 18px; line-height: 1.7; color: #334155;">${escapeHtml(meta.description)}</p>

          <section>
            <h2>Council Areas We Service</h2>
            <ul>
              ${COUNCILS.map((c) => `<li><a href="${getCouncilPath(c.slug)}">${c.name}</a> — ${c.suburbs.map((s) => `<a href="${getSuburbPath(c.slug, s.slug)}">${s.name}</a>`).join(", ")}</li>`).join("\n              ")}
            </ul>

            <h2>Our Services</h2>
            <ul>
              ${SERVICES.map((s) => `<li><a href="${getServicePath(s.slug)}">${s.name}</a></li>`).join("\n              ")}
            </ul>
          </section>`;
  }

  return "";
}

function generateHomeContent(meta: PageMeta): string {
  return `
          <h1>Pest Control Sydney | Trusted Pest Exterminators</h1>
          <p style="font-size: 18px; line-height: 1.7; color: #334155;">${escapeHtml(meta.description)}</p>

          <section>
            <h2>Sydney's Trusted Pest Control Experts</h2>
            <p>Pest Control Sydney provides professional, licensed pest management services across all Sydney suburbs. With 15+ years of experience, we deliver fast, effective treatments for homes and businesses. Same-day service available — call ${PHONE}.</p>

            <h3>Our Services</h3>
            <ul>
              ${SERVICES.map((s) => `<li><a href="${getServicePath(s.slug)}">${s.name}</a> — from ${s.priceFrom}</li>`).join("\n              ")}
            </ul>

            <h3>Areas We Service</h3>
            <ul>
              ${COUNCILS.map((c) => `<li><a href="${getCouncilPath(c.slug)}">${c.name}</a></li>`).join("\n              ")}
            </ul>

            <h3>Why Choose Pest Control Sydney?</h3>
            <ul>
              <li>Licensed & Insured — NSW Fair Trading accredited</li>
              <li>15+ Years Experience across Sydney</li>
              <li>Same-Day Service — call before midday</li>
              <li>100% Satisfaction Guarantee</li>
              <li>AEPMA Member — Australian Environmental Pest Managers Association</li>
              <li>Eco-Friendly Options available</li>
            </ul>
          </section>`;
}

// ─── Master Content Generator ────────────────────────────────────────────────

function generateSeoContent(meta: PageMeta): string {
  const year = new Date().getFullYear();
  let content = "";

  switch (meta.pageType) {
    case "home":
      content = generateHomeContent(meta);
      break;
    case "services-hub":
    case "locations-hub":
      content = generateHubContent(meta);
      break;
    case "service":
      content = generateServiceContent(meta);
      break;
    case "council":
      content = generateCouncilContent(meta);
      break;
    case "suburb":
      content = generateSuburbContent(meta);
      break;
    case "suburb-service":
      content = generateSuburbServiceContent(meta);
      break;
    default:
      content = `<h1>${escapeHtml(meta.title)}</h1><p>${escapeHtml(meta.description)}</p>`;
      break;
  }

  return `
      <div id="seo-content" data-seo-content>
        <header style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 20px; color: white;">
          <nav style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-bottom: 20px;">
            <a href="/" style="color: #3b82f6; text-decoration: none;">Home</a>
            <a href="/services" style="color: #3b82f6; text-decoration: none;">Services</a>
            <a href="/locations" style="color: #3b82f6; text-decoration: none;">Locations</a>
          </nav>
          <p style="text-align: center; margin: 0; font-size: 14px;">24/7 Emergency: <a href="tel:+61287654321" style="color: #f97316; text-decoration: none;">${PHONE}</a></p>
        </header>
        <main style="padding: 20px; max-width: 1200px; margin: 0 auto;">
          ${generateVisualBreadcrumbs(meta)}
          ${content}
        </main>
        <footer style="background: #0f172a; color: white; padding: 20px; text-align: center; margin-top: 30px;">
          <nav style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-bottom: 10px;">
            <a href="/services" style="color: #94a3b8; text-decoration: none;">Services</a>
            <a href="/locations" style="color: #94a3b8; text-decoration: none;">Locations</a>
          </nav>
          <p style="color: #64748b; margin: 0;">&copy; ${year} Pest Control Sydney. Licensed & Insured. AEPMA Member. 100% Satisfaction Guarantee.</p>
        </footer>
      </div>`;
}

// ─── Template Injection ──────────────────────────────────────────────────────

function injectIntoTemplate(template: string, meta: PageMeta): string {
  const metaTags = generateMetaTags(meta);
  const structuredData = generateStructuredData(meta);
  const seoContent = generateSeoContent(meta);

  const fallbackRegex =
    /<!--fallback-meta-start-->[\s\S]*?<!--fallback-meta-end-->/;

  const html = template
    .replace("<!--app-meta-->", metaTags)
    .replace(fallbackRegex, "")
    .replace("<!--app-structured-data-->", structuredData)
    .replace('<div id="root"></div>', `<div id="root">${seoContent}</div>`);

  return html;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const distPath = path.resolve(__dirname, "..", "dist", "public");
  const templatePath = path.join(distPath, "index.html");

  if (!fs.existsSync(distPath)) {
    console.error('  dist/public does not exist. Run "vite build" first.');
    process.exit(1);
  }

  if (!fs.existsSync(templatePath)) {
    console.error(
      '  dist/public/index.html does not exist. Run "vite build" first.'
    );
    process.exit(1);
  }

  // ─── Template Backup (idempotency) ───────────────────────────────────────
  const backupTemplatePath = path.join(distPath, "_template.html");
  let template: string;

  if (fs.existsSync(backupTemplatePath)) {
    const backupContent = fs.readFileSync(backupTemplatePath, "utf-8");
    if (
      backupContent.includes("<!--app-meta-->") &&
      backupContent.includes('<div id="root"></div>')
    ) {
      template = backupContent;
      console.log("  Using saved template backup (_template.html)");
    } else {
      template = fs.readFileSync(templatePath, "utf-8");
      console.log("  Using Vite-built index.html as template");
    }
  } else {
    template = fs.readFileSync(templatePath, "utf-8");
    console.log("  Using Vite-built index.html as template");
  }

  // Validate template has required placeholders
  if (
    !template.includes("<!--app-meta-->") ||
    !template.includes('<div id="root"></div>')
  ) {
    console.error(
      '  Template is missing required placeholders. Run "vite build" to regenerate.'
    );
    process.exit(1);
  }

  // Save clean template as backup
  fs.writeFileSync(backupTemplatePath, template);

  // ─── Get all routes ──────────────────────────────────────────────────────
  const allRoutes = getAllRoutes();
  // Filter out admin pages (SPA-only, no prerendering)
  const routes = allRoutes.filter((r) => r.pageType !== "admin");
  const counts = getRouteCount();
  let count = 0;

  console.log(`\n  Prerendering ${routes.length} pages...\n`);

  for (const route of routes) {
    const html = injectIntoTemplate(template, route);

    const routePath = route.path === "/" ? "/index" : route.path;
    const filePath = path.join(distPath, routePath + ".html");
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, html);
    count++;

    if (count % 100 === 0) {
      console.log(`  Prerendered ${count}/${routes.length} pages...`);
    }
  }

  // Generate 404.html
  const notFoundMeta: PageMeta = {
    path: "/404",
    title: "Page Not Found | Pest Control Sydney",
    description:
      "The page you are looking for does not exist. Browse our pest control services and Sydney suburb coverage.",
    canonical: `${DOMAIN}/404`,
    pageType: "static",
  };
  const notFoundHtml = injectIntoTemplate(template, notFoundMeta);
  fs.writeFileSync(path.join(distPath, "404.html"), notFoundHtml);
  count++;
  console.log("  Generated 404.html");

  console.log(`\n  Prerendered ${count} pages to ${distPath}`);
  console.log("\n  Summary:");
  console.log(`  Static pages: ${counts.static}`);
  console.log(`  Service pages: ${counts.services}`);
  console.log(`  Council pages: ${counts.councils}`);
  console.log(`  Suburb pages: ${counts.suburbs}`);
  console.log(`  Combo pages: ${counts.combos}`);
  console.log(`  Total: ${count}`);
}

main().catch(console.error);
