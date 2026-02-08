// ─── SEO Metadata Resolution ──────────────────────────────────────────────────
// Generates title, description, and structured data for every page type.

import {
  DOMAIN,
  type PageType,
  type PageMeta,
  SERVICES,
  COUNCILS,
  toTitleCase,
  getServiceBySlug,
  getCouncilBySlug,
  getSuburbBySlug,
  getServicePath,
  getCouncilPath,
  getSuburbPath,
} from "../routes/all-routes";

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  ogType: "website" | "article";
  noindex?: boolean;
}

export interface StructuredDataOptions {
  pageType: PageType;
  pageMeta: PageMeta;
  origin?: string;
}

// ─── Base Structured Data ─────────────────────────────────────────────────────

export function getBaseStructuredData(origin: string = DOMAIN) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${origin}/#business`,
      name: "Pest Control Sydney",
      image: `${origin}/images/brand/logo.svg`,
      url: origin,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.8688,
        longitude: 151.2093,
      },
      areaServed: {
        "@type": "City",
        name: "Sydney",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "08:00",
          closes: "14:00",
        },
      ],
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: origin,
      name: "Pest Control Sydney",
      potentialAction: {
        "@type": "SearchAction",
        target: `${origin}/services?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];
}

// ─── Page-Specific Structured Data ────────────────────────────────────────────

export function getPageStructuredData(options: StructuredDataOptions): object[] {
  const { pageType, pageMeta, origin = DOMAIN } = options;
  const schemas: object[] = [];

  // BreadcrumbList for all non-home pages
  if (pageType !== "home") {
    const breadcrumbs = getBreadcrumbs(pageMeta);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: crumb.url ? `${origin}${crumb.url}` : undefined,
      })),
    });
  }

  // Service schema
  if (pageType === "service" && pageMeta.serviceSlug) {
    const service = getServiceBySlug(pageMeta.serviceSlug);
    if (service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.shortDescription,
        provider: { "@id": `${origin}/#business` },
        areaServed: { "@type": "City", name: "Sydney" },
        ...(service.priceFrom !== "Quote" && {
          offers: {
            "@type": "Offer",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "AUD",
              price: service.priceFrom.replace("$", ""),
            },
          },
        }),
      });
    }
  }

  // Suburb-service combo schema
  if (pageType === "suburb-service" && pageMeta.serviceSlug && pageMeta.councilSlug && pageMeta.suburbSlug) {
    const service = getServiceBySlug(pageMeta.serviceSlug);
    const suburb = getSuburbBySlug(pageMeta.councilSlug, pageMeta.suburbSlug);
    if (service && suburb) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.name} in ${suburb.name}`,
        description: `Professional ${service.name.toLowerCase()} service in ${suburb.name} (${suburb.postcode}), Sydney.`,
        provider: { "@id": `${origin}/#business` },
        areaServed: {
          "@type": "PostalAddress",
          addressLocality: suburb.name,
          postalCode: suburb.postcode,
          addressRegion: "NSW",
          addressCountry: "AU",
        },
      });
    }
  }

  return schemas;
}

// ─── Breadcrumbs ──────────────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function getBreadcrumbs(pageMeta: PageMeta): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ name: "Home", url: "/" }];

  switch (pageMeta.pageType) {
    case "services-hub":
      crumbs.push({ name: "Services" });
      break;

    case "service":
      crumbs.push({ name: "Services", url: "/services" });
      if (pageMeta.serviceSlug) {
        const service = getServiceBySlug(pageMeta.serviceSlug);
        crumbs.push({ name: service?.name || toTitleCase(pageMeta.serviceSlug) });
      }
      break;

    case "locations-hub":
      crumbs.push({ name: "Locations" });
      break;

    case "council":
      crumbs.push({ name: "Locations", url: "/locations" });
      if (pageMeta.councilSlug) {
        const council = getCouncilBySlug(pageMeta.councilSlug);
        crumbs.push({ name: council?.name || toTitleCase(pageMeta.councilSlug) });
      }
      break;

    case "suburb":
      crumbs.push({ name: "Locations", url: "/locations" });
      if (pageMeta.councilSlug) {
        const council = getCouncilBySlug(pageMeta.councilSlug);
        crumbs.push({
          name: council?.name || toTitleCase(pageMeta.councilSlug),
          url: getCouncilPath(pageMeta.councilSlug),
        });
      }
      if (pageMeta.councilSlug && pageMeta.suburbSlug) {
        const suburb = getSuburbBySlug(pageMeta.councilSlug, pageMeta.suburbSlug);
        crumbs.push({ name: suburb?.name || toTitleCase(pageMeta.suburbSlug) });
      }
      break;

    case "suburb-service":
      crumbs.push({ name: "Locations", url: "/locations" });
      if (pageMeta.councilSlug) {
        const council = getCouncilBySlug(pageMeta.councilSlug);
        crumbs.push({
          name: council?.name || toTitleCase(pageMeta.councilSlug),
          url: getCouncilPath(pageMeta.councilSlug),
        });
      }
      if (pageMeta.councilSlug && pageMeta.suburbSlug) {
        const suburb = getSuburbBySlug(pageMeta.councilSlug, pageMeta.suburbSlug);
        crumbs.push({
          name: suburb?.name || toTitleCase(pageMeta.suburbSlug),
          url: getSuburbPath(pageMeta.councilSlug, pageMeta.suburbSlug),
        });
      }
      if (pageMeta.serviceSlug) {
        const service = getServiceBySlug(pageMeta.serviceSlug);
        crumbs.push({ name: service?.name || toTitleCase(pageMeta.serviceSlug) });
      }
      break;
  }

  return crumbs;
}
