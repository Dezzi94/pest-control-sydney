# Location Pages Overhaul + Phone/License Removal + SEO-First Design

## Context
The location pages (CouncilPage, SuburbPage, SuburbServicePage) are currently generic, template-feeling information pages with no trust signals, no inline forms, no testimonials, no empathy-driven copy, and no urgency. Users land on these pages directly from Google (e.g., "ants in Bondi") and we must assume they've never seen the rest of the site. These pages ARE their landing page.

Additionally:
- **Remove all phone numbers site-wide** — conversion should happen exclusively through the quote form
- **Remove all license/licence numbers** (PCL4892, PMT Licence #12345, etc.) — these are placeholder/fake numbers
- **SEO-first design** — every page must be optimized for organic rankings with proper H1/H2 hierarchy, keyword-rich headings, structured data, internal linking, and substantial unique content

## Scope

### Part A: Remove Phone Numbers + License Numbers Site-Wide (25+ files)
### Part B: Location Pages Redesign — SEO-First, Psychology-Driven (3 page files + 1 new data file + 4 new/modified components)

---

## Part A: Phone + License Number Removal

Remove all phone numbers, "Call Now" buttons, tel: links, AND all license/licence number references (PCL4892, PMT Licence #12345, NSW Lic. #) across the entire site. Replace dual CTAs (Quote + Call) with form-only CTAs.

### Files to modify:

**Phone removal:**
1. **`shared/routes/all-routes.ts`** — Remove `PHONE` and `PHONE_HREF` exports
2. **`client/src/components/layout/HotlineBar.tsx`** — Remove phone, convert to availability + "Get a Free Quote" bar (keep green dot, hours)
3. **`client/src/components/layout/FloatingCTA.tsx`** — Change from phone button to "Get Quote" button opening quote modal
4. **`client/src/components/layout/Header.tsx`** — Remove phone from desktop CTA and mobile menu; keep "Get My Free Quote" button
5. **`client/src/components/sections/CTASection.tsx`** — Remove "Call" secondary button
6. **`client/src/components/sections/Hero.tsx`** — Remove "Call Now" secondary CTA
7. **`client/src/components/forms/HeroQuoteForm.tsx`** — Remove phone link from success state
8. **`client/src/components/forms/QuoteFormModal.tsx`** — Remove phone references
9. **`client/src/components/sections/Process.tsx`** — Update step 1 from "Call Us" to "Request a Quote"
10. **`client/src/pages/ContactPage.tsx`** — Remove phone display, keep contact form
11. **`client/src/pages/ServiceDetailPage.tsx`** — Remove "Call Now" buttons
12. **`client/src/pages/ReviewsPage.tsx`** — Remove phone references
13. **`client/src/components/layout/Footer.tsx`** — Remove phone number
14. **`client/src/components/sections/BeforeAfter.tsx`** — Remove phone if present
15. **`shared/data/testimonials.ts`** — Remove phone from process steps
16. **`shared/data/services.ts`** — Remove phone references from content
17. **`shared/data/councils.ts`** — Remove phone references
18. **`shared/data/combo-content.ts`** — Remove phone references
19. **`shared/seo/metadata.ts`** — Remove phone from meta descriptions

**License number removal (additional files):**
20. **`client/src/components/sections/Hero.tsx`** — Remove "NSW Lic. #PCL4892" badge
21. **`client/src/components/sections/ServicesOverview.tsx`** — Remove license references
22. **`client/src/pages/AboutPage.tsx`** — Remove license number references
23. **`shared/data/testimonials.ts`** — Remove `licenseNumber` from trust signals
24. **`client/src/components/layout/Footer.tsx`** — Remove license number
25. **`client/src/pages/ContactPage.tsx`** — Remove license references

**Location pages (CouncilPage, SuburbPage, SuburbServicePage)** will be fully rewritten in Part B so phone/license removal happens as part of the rewrite.

---

## Part B: Location Pages Redesign

### New File: `shared/data/location-copy.ts` (~500 lines)

Psychology-driven copy generation engine. Contains:

**1. Pest Psychology Maps** (for all 20 services):
```typescript
interface PestPsychology {
  fears: string[];           // What keeps them up at night
  painPoints: string[];      // The frustration/disgust they feel right now
  healthRisks: string[];     // Medical/safety concerns
  propertyRisks: string[];   // Financial/structural concerns
  empathyOpener: string;     // "We know how you're feeling..." paragraph
  urgencyDriver: string;     // Why they can't wait
  whyNotDIY: string;         // Pre-empts "I'll just buy Mortein"
}
```

Example for cockroaches:
- Fears: "contaminated food", "children crawling on contaminated surfaces", "guests seeing a cockroach"
- empathyOpener: "Nobody wants to feel disgusted in their own kitchen. If cockroaches are making you dread turning on the lights, you're not overreacting — and you don't have to live with it."
- urgencyDriver: "A single German cockroach egg case hatches 40 nymphs. The colony you see is 10% of what's hiding."

**2. Headline generators:**
- `getComboHeadline(service, suburb, postcode)` → "Cockroaches in Bondi? We'll Eliminate Them — Guaranteed."
- `getSuburbHeadline(suburb, postcode, pests)` → "Pest Control Bondi 2026 — Licensed Local Technicians"
- `getCouncilHeadline(council, suburbCount)` → "Pest Control Across Inner West — 5 Suburbs, Same-Day Service"

**3. Empathy section generators:**
- `getEmpathySection(serviceSlug, suburbName, landmarks)` → heading + paragraphs addressing the fear
- Uses suburb landmarks and building types from suburb data to make copy feel written for that area

**4. Testimonial filter:**
- `getLocalTestimonials(councilSlug, serviceSlug?)` → sorted/filtered testimonial array
- Priority: exact suburb match > same council > same service category > highest rated

**5. Urgency copy:**
- `getUrgencyBadge(serviceSlug)` → "Same-day service available in {suburb}"
- Social proof: "X homes in {council} treated this year"

### Component Changes

**1. `HeroQuoteForm.tsx` — Add `initialPestType` prop** (~10 lines changed)
- Accept optional `initialPestType?: string` prop
- When provided, pre-select that pest type and skip step 1 (go directly to contact details)
- Backward compatible — existing usage unchanged

**2. `CTASection.tsx` — Accept optional props** (~15 lines changed)
- Add optional `heading?: string` and `subheading?: string` props for location-specific copy
- Default to current copy when no props passed

**3. New: `client/src/components/sections/LocalTestimonials.tsx`** (~80 lines)
- Accepts filtered testimonials array + area name
- Shows 1 featured testimonial + 2 grid cards
- Adapts heading: "What {Area} Homeowners Say" or "What Our Clients Say"
- Uses same card design as homepage Testimonials section

**4. New: `client/src/components/sections/PestGrid.tsx`** (~70 lines)
- Clickable pest cards with icon, name, pain-point one-liner, "From $X" price
- Each card links to combo page (suburb+service)
- Uses PEST_ICON_MAP for unique icons per pest
- Heading: "Common Pests in {Suburb}" with empathy subheading

### SEO-First Requirements (All Location Pages)

Every location page must be a highly rankable piece of content:

1. **H1 tag** — One per page, keyword-rich: "{Service} in {Suburb} ({Postcode})" or "Pest Control {Suburb} {Postcode}"
2. **H2 tags** — Section headings that target long-tail keywords: "Why {Suburb} Homes Are Prone to {Pest}", "How We Treat {Pest} in {Suburb}", "Frequently Asked Questions About {Pest} in {Suburb}"
3. **Unique content** — Each page must have 500+ words of unique, non-templated copy. The empathy sections, local knowledge, and pest psychology provide this.
4. **Internal linking** — Every page links to: parent pages (breadcrumbs), sibling pages (other suburbs, other services), child pages (combo pages from suburb pages), and hub pages (services hub, locations hub)
5. **Schema markup** — LocalBusiness + Service + FAQPage + BreadcrumbList JSON-LD (already handled by prerender script, but page content must provide the data)
6. **Keyword density** — Naturally weave "{service} {suburb}", "{pest} {suburb} {postcode}", "pest control {suburb}" throughout headings and body copy
7. **Content depth** — FAQs answer real questions people search for: "Are cockroaches common in Bondi apartments?", "How much does termite inspection cost in Newtown?"
8. **Image alt text** — All icons/images have descriptive, keyword-rich alt text
9. **Semantic HTML** — Proper use of `<article>`, `<section>`, `<nav>` for breadcrumbs, `<address>` where relevant

### Page Redesigns

All 3 pages follow the same visual rhythm:
**Dark hero → Warm stats stripe → Light content → Process → Testimonials → Trust → Dark CTA**

#### SuburbServicePage.tsx (1200 pages — highest priority, complete rewrite)

Section order:
1. **Breadcrumb** (keep)
2. **Dark hero** — Left: empathy headline from `getComboHeadline()`, pain-point subheadline from pest psychology, 3 inline trust badges (Licensed, Same-Day, Guaranteed), pricing badge ("From $159"), social proof line. Right: **inline HeroQuoteForm** with `initialPestType={service.slug}`
3. **Stats bar** — reuse existing Stats component
4. **Empathy section** — "We Know What You're Going Through" + 2-3 paragraphs of psychology-driven copy addressing the specific fear for this pest in this suburb. Uses landmarks and building types. Ends with green promise box (guarantee callout)
5. **Process section** — "How We Solve Your {Pest} Problem in {Suburb}" + reuse Process component
6. **Benefits/Why Choose Us** — Enhanced with location context: "Local {suburb} technician", "We know the {postcode} area"
7. **Local testimonials** — Filtered for this council/service combo
8. **FAQ accordion** — From combo-content FAQs + pest psychology objection handlers
9. **Cross-links** — "People in {Suburb} Also Booked" + sidebar (other services, nearby suburbs)
10. **Brand logos** — reuse BrandLogos component
11. **CTA section** — Localized: "Don't Let {Pest} Take Over Your {Suburb} Home"

#### SuburbPage.tsx (60 pages — complete rewrite)

Section order:
1. **Breadcrumb**
2. **Dark hero** — Left: suburb-specific headline, empathy subheadline referencing top pests, trust badges, social proof. Right: **inline HeroQuoteForm** (no pre-selected pest)
3. **Stats bar**
4. **Local knowledge section** — "Why {Suburb} Homes Need Professional Pest Control" — uses localIntro data but framed around pain/risk, references landmarks to prove local expertise
5. **Pest grid** — PestGrid component: clickable cards for each common pest, links to combo pages
6. **Inline CTA bar** — "Need pest control in {suburb}?" with quote button
7. **Process section**
8. **Services grid** — All 20 services with pricing, linking to combo pages
9. **Local testimonials** — Filtered for this council area
10. **FAQ accordion**
11. **Other suburbs** — Cross-links within same council
12. **Brand logos**
13. **CTA section** — Localized copy

#### CouncilPage.tsx (12 pages — complete rewrite)

Section order:
1. **Breadcrumb**
2. **Dark hero** — Left: council-level headline, common pests reference, trust badges. Right: **inline HeroQuoteForm**
3. **Stats bar**
4. **Council description** — Framed as "Pest Challenges Across {Council}" with empathy-driven copy
5. **Pest grid** — Common pests for this council area
6. **Suburbs grid** — Clickable suburb cards with postcode
7. **Process section**
8. **Services grid**
9. **Local testimonials**
10. **FAQ accordion**
11. **Brand logos**
12. **CTA section**

---

## Implementation Order (with commits after each step)

1. **Phone removal (site-wide)** — Modify ~18 non-location files to remove all phone numbers, Call Now buttons, tel: links. Commit.
2. **Create `shared/data/location-copy.ts`** — Psychology-driven copy engine with all 20 pest profiles. Commit.
3. **Modify HeroQuoteForm** — Add `initialPestType` prop. Commit.
4. **Create LocalTestimonials + PestGrid components**. Commit.
5. **Rewrite SuburbServicePage.tsx** — Full redesign. Commit.
6. **Rewrite SuburbPage.tsx** — Full redesign. Commit.
7. **Rewrite CouncilPage.tsx** — Full redesign. Commit.
8. **Verify build, TypeScript, deploy**. Commit + push.

---

## Verification

After each step:
- `npx tsc --noEmit` — zero errors
- `npm run build` — succeeds

After all steps:
- Deploy to Netlify (`netlify deploy --prod`)
- Test form submission on production at https://pestcontrolsydney.org
- Verify no phone numbers appear anywhere on the site
- Check location pages render correctly with all new sections
- Verify cross-links work (suburb → combo pages)
