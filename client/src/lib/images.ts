// Centralized image mapping for the entire site.
// Maps service slugs to pest-specific photos, page contexts to hero backgrounds,
// and provides SEO alt text for every image.

export interface ImageMeta {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// ─── Pest-Specific Photos ──────────────────────────────────────────────────────

const PEST_PHOTO_MAP: Record<string, ImageMeta> = {
  "termite-inspection":      { src: "/images/pest-photos/termite-damage.jpg", alt: "Termite damage on structural timber requiring professional inspection", width: 1200, height: 800 },
  "termite-control":         { src: "/images/pest-photos/termite-damage.jpg", alt: "Termite damage requiring professional treatment and control", width: 1200, height: 800 },
  "pre-purchase-inspection": { src: "/images/pest-photos/termite-damage.jpg", alt: "Timber pest damage found during pre-purchase property inspection", width: 1200, height: 800 },
  "cockroach-treatment":     { src: "/images/pest-photos/cockroach.jpg", alt: "Cockroach infestation requiring professional treatment", width: 1200, height: 800 },
  "spider-treatment":        { src: "/images/pest-photos/spider-web.jpg", alt: "Spider web on Australian property requiring treatment", width: 1200, height: 800 },
  "rodent-control":          { src: "/images/pest-photos/rodent.jpg", alt: "Rodent pest requiring professional control and exclusion", width: 1200, height: 800 },
  "ant-control":             { src: "/images/pest-photos/ant-colony.jpg", alt: "Ant colony infestation on residential property", width: 1200, height: 800 },
  "flea-treatment":          { src: "/images/pest-photos/bed-bug.jpg", alt: "Flea infestation requiring professional treatment", width: 1200, height: 800 },
  "bedbug-treatment":        { src: "/images/pest-photos/bed-bug.jpg", alt: "Bed bug infestation in residential property", width: 1200, height: 800 },
  "wasp-removal":            { src: "/images/pest-photos/wasp-nest.jpg", alt: "Wasp nest requiring safe professional removal", width: 1200, height: 800 },
  "bee-removal":             { src: "/images/pest-photos/wasp-nest.jpg", alt: "Bee hive requiring safe and humane removal", width: 1200, height: 800 },
  "bird-control":            { src: "/images/pest-photos/bird-building.jpg", alt: "Pigeons roosting on building requiring bird control", width: 1200, height: 800 },
  "possum-removal":          { src: "/images/pest-photos/possum.jpg", alt: "Possum in roof space requiring humane removal", width: 1200, height: 800 },
  "silverfish-control":      { src: "/images/pest-photos/general-pest.jpg", alt: "Professional pest control treatment for silverfish", width: 1200, height: 800 },
  "pantry-pest-control":     { src: "/images/pest-photos/general-pest.jpg", alt: "Professional pantry pest control service", width: 1200, height: 800 },
  "drain-fly-treatment":     { src: "/images/pest-photos/general-pest.jpg", alt: "Professional drain fly treatment service", width: 1200, height: 800 },
  "tick-treatment":          { src: "/images/pest-photos/general-pest.jpg", alt: "Professional tick treatment for properties", width: 1200, height: 800 },
  "mite-control":            { src: "/images/pest-photos/general-pest.jpg", alt: "Professional mite control service", width: 1200, height: 800 },
  "general-pest-control":    { src: "/images/pest-photos/general-pest.jpg", alt: "Professional pest control technician applying treatment", width: 1200, height: 800 },
  "commercial-pest-control": { src: "/images/pest-photos/general-pest.jpg", alt: "Commercial pest management service for businesses", width: 1200, height: 800 },
};

export function getPestPhoto(serviceSlug: string): ImageMeta | null {
  return PEST_PHOTO_MAP[serviceSlug] || null;
}

// ─── Hero Background Images ────────────────────────────────────────────────────

export const HERO_IMAGES = {
  homepage:  { src: "/images/hero/homepage-hero.jpg", alt: "Professional pest control technician inspecting a Sydney home", width: 1920, height: 1280 },
  locations: { src: "/images/hero/sydney-skyline.jpg", alt: "Sydney skyline and harbour bridge at sunset", width: 1920, height: 800 },
  council:   { src: "/images/hero/technician-inspecting.jpg", alt: "Pest control technician inspecting Sydney property", width: 1920, height: 800 },
  suburb:    { src: "/images/hero/technician-inspecting.jpg", alt: "Local pest control technician servicing Sydney suburb", width: 1920, height: 800 },
  about:     { src: "/images/hero/team-professional.jpg", alt: "Pest Control Sydney professional team", width: 1920, height: 800 },
  reviews:   { src: "/images/hero/clean-home.jpg", alt: "Clean modern Sydney home after professional pest treatment", width: 1920, height: 800 },
  contact:   { src: "/images/hero/contact-office.jpg", alt: "Friendly customer service team ready to help", width: 1920, height: 800 },
  services:  { src: "/images/hero/technician-inspecting.jpg", alt: "Professional pest control services across Sydney", width: 1920, height: 800 },
} as const;

// ─── Section Accent Images ──────────────────────────────────────────────────────

export const SECTION_IMAGES = {
  technicianEquipment: { src: "/images/sections/technician-equipment.jpg", alt: "Pest control technician with professional equipment", width: 800, height: 600 },
  familyHome:          { src: "/images/sections/family-home.jpg", alt: "Happy family in pest-free Sydney home", width: 800, height: 600 },
  serviceVan:          { src: "/images/sections/service-van.jpg", alt: "Pest Control Sydney service vehicle", width: 800, height: 600 },
} as const;
