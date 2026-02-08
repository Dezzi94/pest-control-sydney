// ─── Single Source of Truth for ALL routes ────────────────────────────────────
// Every sitemap, prerender script, and audit tool imports from here.
// If you add a new page, add it here FIRST.

export const DOMAIN = "https://pestcontrolsydney.org";
export const PHONE = "(02) 8765-4321";
export const PHONE_HREF = "tel:+61287654321";

// ─── Services ─────────────────────────────────────────────────────────────────

export interface ServiceData {
  name: string;
  slug: string;
  priceFrom: string;
  icon: string; // Lucide icon name
  shortDescription: string;
  category: "termite" | "general" | "specialty" | "commercial";
}

export const SERVICES: ServiceData[] = [
  { name: "Termite Inspection", slug: "termite-inspection", priceFrom: "Quote", icon: "Search", shortDescription: "Comprehensive termite inspections using thermal imaging and moisture detection.", category: "termite" },
  { name: "Termite Treatment", slug: "termite-control", priceFrom: "$299", icon: "Bug", shortDescription: "Industry-leading termite treatments including baiting systems and chemical barriers.", category: "termite" },
  { name: "Rodent Control", slug: "rodent-control", priceFrom: "$199", icon: "Rat", shortDescription: "Effective rat and mouse control with humane trapping and exclusion methods.", category: "general" },
  { name: "Cockroach Treatment", slug: "cockroach-treatment", priceFrom: "$159", icon: "Bug", shortDescription: "Professional cockroach elimination using gel baits, sprays, and IGR treatments.", category: "general" },
  { name: "Spider Treatment", slug: "spider-treatment", priceFrom: "$179", icon: "Bug", shortDescription: "Safe spider removal and web treatment for homes and businesses.", category: "general" },
  { name: "Ant Control", slug: "ant-control", priceFrom: "$129", icon: "Bug", shortDescription: "Targeted ant colony elimination with bait stations and perimeter treatments.", category: "general" },
  { name: "Flea Treatment", slug: "flea-treatment", priceFrom: "$149", icon: "Bug", shortDescription: "Complete flea eradication for homes, carpets, and outdoor areas.", category: "general" },
  { name: "Bedbug Treatment", slug: "bedbug-treatment", priceFrom: "$399", icon: "Bed", shortDescription: "Thorough bedbug elimination using heat treatment and targeted insecticides.", category: "specialty" },
  { name: "Wasp Removal", slug: "wasp-removal", priceFrom: "$89", icon: "Bug", shortDescription: "Safe wasp nest removal by licensed technicians with protective equipment.", category: "specialty" },
  { name: "Silverfish Control", slug: "silverfish-control", priceFrom: "$139", icon: "Bug", shortDescription: "Silverfish treatment for wardrobes, bathrooms, and storage areas.", category: "general" },
  { name: "Bird Control", slug: "bird-control", priceFrom: "$249", icon: "Bird", shortDescription: "Humane bird deterrent systems including netting, spikes, and visual deterrents.", category: "specialty" },
  { name: "Pantry Pest Control", slug: "pantry-pest-control", priceFrom: "Quote", icon: "Cookie", shortDescription: "Treatment for pantry moths, weevils, and stored product pests.", category: "specialty" },
  { name: "Drain Fly Treatment", slug: "drain-fly-treatment", priceFrom: "Quote", icon: "Bug", shortDescription: "Drain fly elimination targeting breeding sites in pipes and drains.", category: "specialty" },
  { name: "Possum Removal", slug: "possum-removal", priceFrom: "Quote", icon: "Squirrel", shortDescription: "Licensed possum removal and relocation compliant with NSW regulations.", category: "specialty" },
  { name: "Bee Removal", slug: "bee-removal", priceFrom: "Quote", icon: "Bug", shortDescription: "Safe bee swarm removal and hive relocation by experienced handlers.", category: "specialty" },
  { name: "Tick Treatment", slug: "tick-treatment", priceFrom: "Quote", icon: "Bug", shortDescription: "Tick control for yards, gardens, and bush-adjacent properties.", category: "specialty" },
  { name: "Mite Control", slug: "mite-control", priceFrom: "Quote", icon: "Bug", shortDescription: "Treatment for bird mites, dust mites, and other mite infestations.", category: "specialty" },
  { name: "General Pest Control", slug: "general-pest-control", priceFrom: "$189", icon: "Shield", shortDescription: "Comprehensive pest treatment covering cockroaches, spiders, ants, and silverfish.", category: "general" },
  { name: "Commercial Pest Control", slug: "commercial-pest-control", priceFrom: "Quote", icon: "Building", shortDescription: "Tailored pest management programs for restaurants, offices, and warehouses.", category: "commercial" },
  { name: "Pre-Purchase Inspection", slug: "pre-purchase-inspection", priceFrom: "Quote", icon: "ClipboardCheck", shortDescription: "Detailed pest and termite inspection reports for property buyers.", category: "termite" },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

// ─── Council Areas & Suburbs ──────────────────────────────────────────────────

export interface SuburbData {
  name: string;
  slug: string;
  postcode: string;
}

export interface CouncilData {
  name: string;
  slug: string;
  suburbs: SuburbData[];
}

export const COUNCILS: CouncilData[] = [
  {
    name: "City of Sydney",
    slug: "city-of-sydney",
    suburbs: [
      { name: "Sydney CBD", slug: "sydney-cbd", postcode: "2000" },
      { name: "Surry Hills", slug: "surry-hills", postcode: "2010" },
      { name: "Pyrmont", slug: "pyrmont", postcode: "2009" },
      { name: "Ultimo", slug: "ultimo", postcode: "2007" },
      { name: "Darlinghurst", slug: "darlinghurst", postcode: "2010" },
    ],
  },
  {
    name: "Inner West",
    slug: "inner-west-council",
    suburbs: [
      { name: "Newtown", slug: "newtown", postcode: "2042" },
      { name: "Glebe", slug: "glebe", postcode: "2037" },
      { name: "Balmain", slug: "balmain", postcode: "2041" },
      { name: "Leichhardt", slug: "leichhardt", postcode: "2040" },
      { name: "Marrickville", slug: "marrickville", postcode: "2204" },
    ],
  },
  {
    name: "Northern Beaches",
    slug: "northern-beaches-council",
    suburbs: [
      { name: "Manly", slug: "manly", postcode: "2095" },
      { name: "Dee Why", slug: "dee-why", postcode: "2099" },
      { name: "Mona Vale", slug: "mona-vale", postcode: "2103" },
      { name: "Brookvale", slug: "brookvale", postcode: "2100" },
      { name: "Palm Beach", slug: "palm-beach", postcode: "2108" },
    ],
  },
  {
    name: "Waverley",
    slug: "waverley-council",
    suburbs: [
      { name: "Bondi", slug: "bondi", postcode: "2026" },
      { name: "Bronte", slug: "bronte", postcode: "2024" },
      { name: "Vaucluse", slug: "vaucluse", postcode: "2030" },
      { name: "Dover Heights", slug: "dover-heights", postcode: "2030" },
      { name: "Waverley", slug: "waverley", postcode: "2024" },
    ],
  },
  {
    name: "Willoughby",
    slug: "willoughby-city-council",
    suburbs: [
      { name: "Chatswood", slug: "chatswood", postcode: "2067" },
      { name: "Artarmon", slug: "artarmon", postcode: "2064" },
      { name: "Northbridge", slug: "northbridge", postcode: "2063" },
      { name: "Castlecrag", slug: "castlecrag", postcode: "2068" },
      { name: "Willoughby", slug: "willoughby", postcode: "2068" },
    ],
  },
  {
    name: "Parramatta",
    slug: "parramatta-council",
    suburbs: [
      { name: "Parramatta", slug: "parramatta", postcode: "2150" },
      { name: "Westmead", slug: "westmead", postcode: "2145" },
      { name: "North Parramatta", slug: "north-parramatta", postcode: "2151" },
      { name: "Harris Park", slug: "harris-park", postcode: "2150" },
      { name: "Granville", slug: "granville", postcode: "2142" },
    ],
  },
  {
    name: "Sutherland Shire",
    slug: "sutherland-shire",
    suburbs: [
      { name: "Cronulla", slug: "cronulla", postcode: "2230" },
      { name: "Miranda", slug: "miranda", postcode: "2228" },
      { name: "Gymea", slug: "gymea", postcode: "2227" },
      { name: "Caringbah", slug: "caringbah", postcode: "2229" },
      { name: "Engadine", slug: "engadine", postcode: "2233" },
    ],
  },
  {
    name: "Randwick",
    slug: "randwick-council",
    suburbs: [
      { name: "Coogee", slug: "coogee", postcode: "2034" },
      { name: "Maroubra", slug: "maroubra", postcode: "2035" },
      { name: "Randwick", slug: "randwick", postcode: "2031" },
      { name: "Kensington", slug: "kensington", postcode: "2033" },
      { name: "Kingsford", slug: "kingsford", postcode: "2032" },
    ],
  },
  {
    name: "North Sydney",
    slug: "north-sydney-council",
    suburbs: [
      { name: "North Sydney", slug: "north-sydney", postcode: "2060" },
      { name: "Crows Nest", slug: "crows-nest", postcode: "2065" },
      { name: "Neutral Bay", slug: "neutral-bay", postcode: "2089" },
      { name: "Kirribilli", slug: "kirribilli", postcode: "2061" },
      { name: "McMahons Point", slug: "mcmahons-point", postcode: "2060" },
    ],
  },
  {
    name: "Ryde",
    slug: "ryde-council",
    suburbs: [
      { name: "Ryde", slug: "ryde", postcode: "2112" },
      { name: "Eastwood", slug: "eastwood", postcode: "2122" },
      { name: "West Ryde", slug: "west-ryde", postcode: "2114" },
      { name: "North Ryde", slug: "north-ryde", postcode: "2113" },
      { name: "Meadowbank", slug: "meadowbank", postcode: "2114" },
    ],
  },
  {
    name: "Blacktown",
    slug: "blacktown-council",
    suburbs: [
      { name: "Blacktown", slug: "blacktown", postcode: "2148" },
      { name: "Seven Hills", slug: "seven-hills", postcode: "2147" },
      { name: "Quakers Hill", slug: "quakers-hill", postcode: "2763" },
      { name: "Kellyville", slug: "kellyville", postcode: "2155" },
      { name: "Stanhope Gardens", slug: "stanhope-gardens", postcode: "2768" },
    ],
  },
  {
    name: "Canterbury-Bankstown",
    slug: "canterbury-bankstown",
    suburbs: [
      { name: "Bankstown", slug: "bankstown", postcode: "2200" },
      { name: "Canterbury", slug: "canterbury", postcode: "2193" },
      { name: "Campsie", slug: "campsie", postcode: "2194" },
      { name: "Lakemba", slug: "lakemba", postcode: "2195" },
      { name: "Punchbowl", slug: "punchbowl", postcode: "2196" },
    ],
  },
];

export const COUNCIL_SLUGS = COUNCILS.map((c) => c.slug);

export function getAllSuburbs(): (SuburbData & { councilSlug: string; councilName: string })[] {
  const suburbs: (SuburbData & { councilSlug: string; councilName: string })[] = [];
  for (const council of COUNCILS) {
    for (const suburb of council.suburbs) {
      suburbs.push({ ...suburb, councilSlug: council.slug, councilName: council.name });
    }
  }
  return suburbs;
}

// ─── Route Types ──────────────────────────────────────────────────────────────

export type PageType =
  | "home"
  | "services-hub"
  | "service"
  | "locations-hub"
  | "council"
  | "suburb"
  | "suburb-service"
  | "static"
  | "admin";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
  pageType: PageType;
  changefreq?: string;
  priority?: number;
  serviceSlug?: string;
  councilSlug?: string;
  suburbSlug?: string;
}

// ─── Static Pages ─────────────────────────────────────────────────────────────

export const STATIC_PAGES: Record<string, Omit<PageMeta, "path" | "canonical">> = {
  "/": {
    title: "Pest Control Sydney | #1 Trusted Pest Exterminators | Same-Day Service",
    description: "Sydney's most trusted pest control experts. Licensed technicians, same-day service, 100% satisfaction guarantee. Termites, cockroaches, rodents & more. Call (02) 8765-4321.",
    pageType: "home",
    changefreq: "weekly",
    priority: 1.0,
  },
  "/services": {
    title: "Pest Control Services Sydney | 20+ Treatments | Licensed & Insured",
    description: "Comprehensive pest control services across Sydney. Termites, rodents, cockroaches, spiders, ants, bedbugs & more. Licensed technicians, eco-friendly treatments. Get a free quote.",
    pageType: "services-hub",
    changefreq: "weekly",
    priority: 0.9,
  },
  "/locations": {
    title: "Pest Control Locations | All Sydney Suburbs Covered | Same-Day Service",
    description: "Professional pest control across all Sydney suburbs. 12 council areas, 60+ suburbs. Fast response, local technicians. Find pest control near you.",
    pageType: "locations-hub",
    changefreq: "weekly",
    priority: 0.9,
  },
  "/about": {
    title: "About Us | Pest Control Sydney | Licensed #PCL4892 | Since 2009",
    description: "Learn about Sydney's trusted pest control experts. Licensed #PCL4892, AEPMA certified, 15+ years experience. Family-owned, eco-friendly pest control across Sydney.",
    pageType: "static",
    changefreq: "monthly",
    priority: 0.7,
  },
  "/contact": {
    title: "Contact Us | Pest Control Sydney | Call (02) 8765-4321",
    description: "Contact Pest Control Sydney for a free quote. Call (02) 8765-4321, email info@pestcontrolsydney.org, or fill out our contact form. Same-day service available.",
    pageType: "static",
    changefreq: "monthly",
    priority: 0.7,
  },
  "/reviews": {
    title: "Customer Reviews | Pest Control Sydney | 4.9\u2605 Rating | 127+ Reviews",
    description: "Read verified customer reviews for Pest Control Sydney. 4.9/5 average rating from 127+ reviews. See what Sydney homeowners say about our pest control services.",
    pageType: "static",
    changefreq: "monthly",
    priority: 0.7,
  },
};

// ─── Route Generators ─────────────────────────────────────────────────────────

export function getServicePath(serviceSlug: string): string {
  return `/services/${serviceSlug}`;
}

export function getCouncilPath(councilSlug: string): string {
  return `/locations/sydney/${councilSlug}`;
}

export function getSuburbPath(councilSlug: string, suburbSlug: string): string {
  return `/locations/sydney/${councilSlug}/${suburbSlug}`;
}

export function getSuburbServicePath(councilSlug: string, suburbSlug: string, serviceSlug: string): string {
  return `/locations/sydney/${councilSlug}/${suburbSlug}/services/${serviceSlug}`;
}

// ─── Title Case Helper ────────────────────────────────────────────────────────

export function toTitleCase(slug: string): string {
  return slug
    .split("-")
    .map((word) => {
      const upper = word.toUpperCase();
      if (["CBD", "NSW", "AEPMA"].includes(upper)) return upper;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// ─── Get All Routes ───────────────────────────────────────────────────────────
// Returns every public route that should be prerendered and in the sitemap.

export function getAllRoutes(): PageMeta[] {
  const routes: PageMeta[] = [];

  // Static pages
  for (const [path, meta] of Object.entries(STATIC_PAGES)) {
    routes.push({
      ...meta,
      path,
      canonical: `${DOMAIN}${path === "/" ? "" : path}`,
    });
  }

  // Service pages
  for (const service of SERVICES) {
    const path = getServicePath(service.slug);
    routes.push({
      path,
      title: `${service.name} Sydney | Professional ${service.name} | From ${service.priceFrom}`,
      description: `Professional ${service.name.toLowerCase()} services across Sydney. ${service.shortDescription} Licensed & insured. Call (02) 8765-4321.`,
      canonical: `${DOMAIN}${path}`,
      pageType: "service",
      changefreq: "monthly",
      priority: 0.8,
      serviceSlug: service.slug,
    });
  }

  // Council pages
  for (const council of COUNCILS) {
    const councilPath = getCouncilPath(council.slug);
    routes.push({
      path: councilPath,
      title: `Pest Control ${council.name} | Local Technicians | Same-Day Service`,
      description: `Professional pest control in ${council.name}. Servicing ${council.suburbs.map((s) => s.name).join(", ")}. Licensed technicians, fast response. Call (02) 8765-4321.`,
      canonical: `${DOMAIN}${councilPath}`,
      pageType: "council",
      changefreq: "monthly",
      priority: 0.7,
      councilSlug: council.slug,
    });

    // Suburb pages
    for (const suburb of council.suburbs) {
      const suburbPath = getSuburbPath(council.slug, suburb.slug);
      routes.push({
        path: suburbPath,
        title: `Pest Control ${suburb.name} ${suburb.postcode} | Local Experts | Same-Day Service`,
        description: `Trusted pest control in ${suburb.name} (${suburb.postcode}), ${council.name}. Termites, cockroaches, rodents & more. Local technicians, same-day service. Call (02) 8765-4321.`,
        canonical: `${DOMAIN}${suburbPath}`,
        pageType: "suburb",
        changefreq: "monthly",
        priority: 0.6,
        councilSlug: council.slug,
        suburbSlug: suburb.slug,
      });

      // Suburb + Service combo pages
      for (const service of SERVICES) {
        const comboPath = getSuburbServicePath(council.slug, suburb.slug, service.slug);
        routes.push({
          path: comboPath,
          title: `${service.name} ${suburb.name} ${suburb.postcode} | From ${service.priceFrom} | Call Now`,
          description: `${service.name} in ${suburb.name} (${suburb.postcode}). ${service.shortDescription} Licensed & insured, same-day service available. Call (02) 8765-4321.`,
          canonical: `${DOMAIN}${comboPath}`,
          pageType: "suburb-service",
          changefreq: "monthly",
          priority: 0.5,
          serviceSlug: service.slug,
          councilSlug: council.slug,
          suburbSlug: suburb.slug,
        });
      }
    }
  }

  return routes;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getCouncilBySlug(slug: string): CouncilData | undefined {
  return COUNCILS.find((c) => c.slug === slug);
}

export function getSuburbBySlug(councilSlug: string, suburbSlug: string): SuburbData | undefined {
  const council = getCouncilBySlug(councilSlug);
  return council?.suburbs.find((s) => s.slug === suburbSlug);
}

export function getRouteCount(): { static: number; services: number; councils: number; suburbs: number; combos: number; total: number } {
  const staticCount = Object.keys(STATIC_PAGES).length;
  const serviceCount = SERVICES.length;
  const councilCount = COUNCILS.length;
  const suburbCount = COUNCILS.reduce((acc, c) => acc + c.suburbs.length, 0);
  const comboCount = suburbCount * SERVICES.length;
  return {
    static: staticCount,
    services: serviceCount,
    councils: councilCount,
    suburbs: suburbCount,
    combos: comboCount,
    total: staticCount + serviceCount + councilCount + suburbCount + comboCount,
  };
}
