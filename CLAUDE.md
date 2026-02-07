# Pest Control Sydney - Complete Build Instructions

## Overview

This is a pest control business website for **Pest Control Sydney** (pestcontrolsydney.org). It's a React SPA with build-time prerendering for SEO, an Express API backend with CRM functionality, and Netlify deployment. The foundation has been scaffolded — your job is to build everything.

**Production domain:** `https://pestcontrolsydney.org`
**GitHub:** `Dezzi94/pest-control-sydney`
**Phone:** `(02) 8765-4321`

## Architecture

```
pest-control-sydney/
├── client/                    # React frontend (Vite)
│   ├── index.html             # Entry HTML with SEO placeholders
│   ├── src/
│   │   ├── main.tsx           # React entry point
│   │   ├── App.tsx            # Router
│   │   ├── pages/             # Page components
│   │   ├── components/        # Reusable components
│   │   │   ├── ui/            # shadcn/ui primitives
│   │   │   ├── layout/        # Header, Footer, HotlineBar
│   │   │   ├── forms/         # QuoteForm, ContactForm
│   │   │   └── sections/      # Hero, Stats, Process, Testimonials
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilities (cn, api client)
│   │   └── styles/            # globals.css with CSS variables
│   └── public/images/         # Static images (placeholders provided)
├── server/                    # Express backend
│   ├── index.ts               # Server entry
│   ├── routes.ts              # API routes
│   ├── routes/                # Route handlers by domain
│   ├── middleware/             # Auth, validation middleware
│   └── lib/                   # DB connection, helpers
├── shared/                    # Shared between client & server
│   ├── routes/all-routes.ts   # SINGLE SOURCE OF TRUTH for all routes
│   ├── types/api.ts           # API contract types
│   ├── schema.ts              # Drizzle database schema
│   ├── seo/metadata.ts        # SEO metadata resolution
│   └── data/                  # Content data files
├── scripts/                   # Build-time scripts
│   ├── generate-sitemap.ts    # Segmented XML sitemaps
│   ├── prerender-pages.ts     # Static HTML generation
│   └── audit-pages.ts         # Build validation
├── tests/e2e/                 # Playwright tests
├── CLAUDE.md                  # This file
├── netlify.toml               # Netlify config
└── package.json               # Dependencies & scripts
```

## Build Pipeline

```bash
npm run build:netlify
# 1. vite build              → dist/public/ (React SPA bundle)
# 2. generate-sitemap.ts     → sitemap-index.xml + sub-sitemaps
# 3. prerender-pages.ts      → 1300+ static HTML files with SEO content
# 4. audit-pages.ts          → validates every page has unique title, desc, canonical, schema
```

## Teammate Workflow

Build this project using specialized teammates. Each teammate owns specific files and must NOT edit files outside their domain. Work through teams sequentially (Team 1 → Team 2 → Team 3 → Team 4), but teammates WITHIN a team can work in parallel.

### File Ownership Rules (CRITICAL — prevents merge conflicts)

| Teammate | Owns | Must NOT Touch |
|----------|------|----------------|
| Backend Engineer | `server/`, `shared/schema.ts` | `client/src/pages/`, CSS files |
| Frontend Engineer | `client/src/pages/`, `client/src/components/`, `client/src/hooks/`, `client/src/App.tsx` | `server/`, `scripts/` |
| Brand Designer | `client/src/styles/`, `tailwind.config.ts`, CSS classes in components | `server/`, `scripts/`, data files |
| SEO Specialist | `scripts/`, `shared/seo/`, `shared/routes/`, `netlify.toml`, `robots.txt` | `server/`, component files |
| Copywriter | `shared/data/` (services.ts, councils.ts, testimonials.ts, faqs.ts) | Everything else |
| QA Engineer | `tests/`, `playwright.config.ts` | Source code (reads only) |

### Team 1: Foundation (Architect) — ALREADY DONE

The following are already scaffolded and working:
- package.json with all dependencies
- vite.config.ts, tsconfig.json, postcss.config.js, tailwind.config.ts
- `shared/routes/all-routes.ts` — all routes, services, councils, suburbs
- `shared/types/api.ts` — API contract types
- `shared/schema.ts` — Drizzle database schema
- `shared/seo/metadata.ts` — SEO metadata resolution with breadcrumbs
- `client/index.html` with SEO placeholders
- Client entry (main.tsx, App.tsx) with placeholder pages
- Server entry (index.ts, routes.ts) with placeholder API endpoints
- `.env.example`, `.gitignore`, `drizzle.config.ts`

**Verify:** `npm run dev` starts, `npx tsc --noEmit` passes.

### Team 2: Parallel Build

#### Backend Engineer (7 tasks)

1. **Set up Express server properly** — Add CORS, session middleware, proper error handling in `server/index.ts`. Add `server/lib/db.ts` for Neon Postgres connection using Drizzle ORM.

2. **Implement auth system** — In `server/middleware/auth.ts` and `server/routes/auth.ts`:
   - JWT-based authentication
   - Login/logout endpoints
   - Auth middleware to protect admin routes
   - Use `ADMIN_EMAIL` and `ADMIN_PASSWORD` env vars for initial admin

3. **Build lead CRUD endpoints** — In `server/routes/leads.ts`:
   - POST /api/leads (create from quote form — public)
   - GET /api/leads (list with pagination, search, filter — admin only)
   - GET /api/leads/:id (detail — admin only)
   - PATCH /api/leads/:id (update status, notes — admin only)
   - DELETE /api/leads/:id (soft delete — admin only)

4. **Build CSV export** — GET /api/leads/export returns CSV download of all leads

5. **Build settings endpoints** — CRUD for business settings (phone, email, hours)

6. **Write curl-based API tests** — Create `scripts/test-api.sh`:
   ```bash
   # Test health
   curl -s http://localhost:5000/api/health | jq .
   # Test services list
   curl -s http://localhost:5000/api/services | jq .services[0]
   # Test lead creation
   curl -s -X POST http://localhost:5000/api/leads \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","phone":"0412345678","pestType":"general-pest-control"}' | jq .
   # Test auth
   curl -s -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@pestcontrolsydney.org","password":"admin123"}' | jq .
   ```

7. **Commit after each logical unit** — Don't wait until the end.

#### Frontend Engineer (8 tasks)

1. **Create shared layout** — In `client/src/components/layout/`:
   - `Header.tsx` — Logo, nav links (Services, Locations, Contact), phone CTA, mobile hamburger menu
   - `Footer.tsx` — Company info, service links, location links, legal links, copyright
   - `HotlineBar.tsx` — Dark navy bar at top: "24/7 Emergency: (02) 8765-4321" with green availability dot
   - `MobileNav.tsx` — Slide-out mobile menu
   - `Layout.tsx` — Wraps all pages with Header + Footer + HotlineBar
   - `FloatingCTA.tsx` — Orange call button fixed bottom-right on mobile

2. **Build Homepage** — `client/src/pages/HomePage.tsx`:
   - Hero section with full-width background, headline, subheadline, 2 CTAs (Get Quote, Call Now)
   - Stats bar (15+ Years, 10,000+ Jobs, 100% Guarantee, Same-Day Service)
   - Services overview grid (top 8 services with icons, hover effects)
   - 4-step process visualization (animated): 1. Call Us → 2. Inspection → 3. Treatment → 4. Prevention
   - Testimonials carousel (star ratings)
   - Trust badges (Licensed, AEPMA, Eco-Friendly, Satisfaction Guarantee)
   - Brand logos bar (BASF, Bayer, Dow, Syngenta, FMC, Ensystex)
   - Final CTA section

3. **Build Services hub page** — `client/src/pages/ServicesPage.tsx`:
   - Grid of all 20 service cards with icons, descriptions, pricing
   - Category filters (Termite, General, Specialty, Commercial)
   - Search functionality

4. **Build Individual service page** — `client/src/pages/ServiceDetailPage.tsx`:
   - Template-driven from `shared/routes/all-routes.ts` data + `shared/data/services.ts` content
   - H1, intro paragraph, "Why Choose Us", process steps, pricing card, FAQ accordion, CTA
   - Related services sidebar

5. **Build Locations hub page** — `client/src/pages/LocationsPage.tsx`:
   - Grid of 12 council area cards
   - Each card shows council name, number of suburbs, "View suburbs" link

6. **Build Council page + Suburb page** — `client/src/pages/CouncilPage.tsx` and `client/src/pages/SuburbPage.tsx`:
   - Council: list of suburbs, local info, services available
   - Suburb: local content (postcode, landmarks from data), services grid, local FAQ

7. **Build Quote form** — `client/src/components/forms/QuoteForm.tsx`:
   - Multi-step form: Step 1 (pest type, urgency) → Step 2 (name, email, phone, address) → Step 3 (confirm & submit)
   - Modal variant (triggered by CTA buttons) and inline variant (on service/suburb pages)
   - React Hook Form + Zod validation
   - Submits to POST /api/leads
   - Success toast with "We'll call you within 30 minutes"

8. **Build Admin pages** — In `client/src/pages/admin/`:
   - `AdminLogin.tsx` — Login form
   - `AdminDashboard.tsx` — Lead list with search, filter by status, pagination, CSV export button
   - `AdminLeadDetail.tsx` — Full lead info, add notes, change status, set follow-up date
   - `AdminSettings.tsx` — Business settings editor
   - Protected by auth check — redirect to login if not authenticated

   Update `client/src/App.tsx` to include ALL routes:
   ```tsx
   <Route path="/" component={HomePage} />
   <Route path="/services" component={ServicesPage} />
   <Route path="/services/:serviceSlug" component={ServiceDetailPage} />
   <Route path="/locations" component={LocationsPage} />
   <Route path="/locations/sydney/:councilSlug" component={CouncilPage} />
   <Route path="/locations/sydney/:councilSlug/:suburbSlug" component={SuburbPage} />
   <Route path="/locations/sydney/:councilSlug/:suburbSlug/services/:serviceSlug" component={SuburbServicePage} />
   <Route path="/admin/login" component={AdminLogin} />
   <Route path="/admin/dashboard" component={AdminDashboard} />
   <Route path="/admin/leads/:id" component={AdminLeadDetail} />
   <Route path="/admin/settings" component={AdminSettings} />
   ```

#### Brand Designer (5 tasks)

1. **Define complete CSS variable theme** — Update `client/src/styles/globals.css`:
   - Light mode: blue primary (#3b82f6), green secondary, orange accent, near-white background
   - Dark mode: darker variants that maintain contrast
   - CSS custom properties for all spacing, shadows, transitions

2. **Style global elements** — Create component CSS utilities:
   - Button variants (primary blue, secondary green, accent orange, ghost, outline)
   - Card styles with glass-morphism (`backdrop-filter: blur(20px)`, subtle borders, shadow)
   - Form inputs with focus rings
   - Typography scale (h1 through body text with proper hierarchy)

3. **Create animations** — Tailwind keyframes + CSS:
   - Scroll reveal (fade-in-up as elements enter viewport)
   - Hover lift effects on cards (`transform: translateY(-4px)`)
   - Page transitions (subtle fade between routes)
   - Loading skeleton animations
   - Number counter animation for stats

4. **Style hero sections** — Full-width heroes:
   - Gradient overlays (50% dark navy over images)
   - Responsive text sizing
   - CTA buttons with hover glow effects

5. **Polish responsive breakpoints** — Mobile-first:
   - Mobile (< 640px): Single column, larger touch targets, sticky header
   - Tablet (640-1024px): 2-column grids
   - Desktop (> 1024px): Full layouts, sidebars, 3-4 column grids

### Team 3: Parallel Polish

#### SEO Specialist (5 tasks)

1. **Create prerender script** — `scripts/prerender-pages.ts`:
   - Import ALL routes from `shared/routes/all-routes.ts`
   - For each route, generate full HTML with:
     - Unique `<title>` and `<meta name="description">`
     - `<link rel="canonical">`
     - Open Graph tags (og:title, og:description, og:url, og:type)
     - JSON-LD structured data (LocalBusiness, Service, FAQPage, BreadcrumbList)
     - Pre-rendered HTML content (nav, headings, paragraphs, internal links)
   - Template injection: read `dist/public/index.html`, inject meta/content, save per-route HTML files
   - **Template backup**: Save `_template.html` before overwriting. Check for backup on re-runs.
   - Generate `404.html` with proper 404 content

   **CRITICAL**: Template idempotency pattern from AusWebsites:
   ```typescript
   // Save clean template backup
   const backupPath = path.join(distPath, '_template.html');
   if (fs.existsSync(backupPath)) {
     const backup = fs.readFileSync(backupPath, 'utf-8');
     if (backup.includes('<!--app-meta-->') && backup.includes('<div id="root"></div>')) {
       template = backup; // Use clean backup
     }
   }
   fs.writeFileSync(backupPath, template); // Always save clean backup
   ```

2. **Create sitemap generator** — `scripts/generate-sitemap.ts`:
   - `sitemap-index.xml` pointing to sub-sitemaps
   - `sitemap-static.xml` — homepage, services hub, locations hub
   - `sitemap-services.xml` — all 20 service pages
   - `sitemap-councils.xml` — all 12 council pages
   - `sitemap-suburbs.xml` — all 60 suburb pages
   - `sitemap-combos.xml` — all 1200+ suburb+service combo pages
   - Write to both `client/public/` and `dist/public/`

3. **Create audit script** — `scripts/audit-pages.ts`:
   - Check every prerendered HTML file for:
     - `<title>` exists and is unique
     - `<meta name="description">` exists and is unique
     - `<link rel="canonical">` exists and is correct
     - JSON-LD structured data present
     - 500+ characters of text content
     - BreadcrumbList schema on non-home pages
   - Check all sitemaps exist
   - `--fail-on-error` flag to fail CI builds
   - Print summary with error/warning counts

4. **Create netlify.toml** — Rewrite rules:
   ```toml
   [build]
     command = "npm run build:netlify"
     publish = "dist/public"

   # Prerendered pages (200 status, served as static HTML)
   [[redirects]]
     from = "/services"
     to = "/services.html"
     status = 200
   # ... for every prerendered route

   # Splat rules for dynamic segments
   [[redirects]]
     from = "/services/*"
     to = "/services/:splat.html"
     status = 200
   [[redirects]]
     from = "/locations/sydney/*"
     to = "/locations/sydney/:splat.html"
     status = 200

   # API proxy to server
   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/api/:splat"
     status = 200

   # SPA fallback (MUST BE LAST)
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   # Cache headers
   [[headers]]
     for = "/assets/*"
     [headers.values]
       Cache-Control = "public, max-age=31536000, immutable"

   [[headers]]
     for = "/*.html"
     [headers.values]
       Cache-Control = "public, max-age=3600, stale-while-revalidate=86400"
       X-Content-Type-Options = "nosniff"
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"

   [[headers]]
     for = "/*"
     [headers.values]
       X-Content-Type-Options = "nosniff"
       X-Frame-Options = "DENY"
   ```

5. **Create robots.txt** — In `client/public/robots.txt`:
   ```
   User-agent: *
   Allow: /
   Disallow: /admin/
   Disallow: /api/
   Sitemap: https://pestcontrolsydney.org/sitemap-index.xml
   ```

#### Copywriter (5 tasks)

Write ALL content in Australian English. Tone: professional, trustworthy, local Sydney expertise.

1. **Service descriptions** — Create `shared/data/services.ts`:
   - For each of the 20 services, write:
     - `longDescription`: 800+ words of unique, SEO-rich content
     - `process`: 4-step treatment process
     - `benefits`: 5 key benefits/why-choose-us points
     - `faqs`: 5 unique Q&As per service
     - `priceNote`: pricing context paragraph
   - Export as typed array matching `ServiceData` from routes

2. **Council area descriptions** — Create `shared/data/councils.ts`:
   - For each of the 12 councils:
     - `description`: 200+ words about pest issues in that area
     - `commonPests`: top 5 pests for that area (varies by geography)
     - `landmarks`: 3-5 notable landmarks/features
     - `faqs`: 5 location-specific Q&As

3. **Suburb-specific content** — Create `shared/data/suburbs.ts`:
   - For each of the 60 suburbs:
     - `localIntro`: 100+ words mentioning postcode, landmarks, local context
     - `commonPests`: pests specific to that suburb's geography
     - `faqs`: 3-5 suburb-specific Q&As

4. **Testimonials and trust signals** — Create `shared/data/testimonials.ts`:
   - 20+ unique testimonials with name, suburb, service, rating (4-5 stars), review text
   - Trust signal data (Licensed #, AEPMA member, years in business, guarantee text)
   - Process step descriptions (4 steps with title, description, icon)

5. **Combo page content templates** — Create `shared/data/combo-content.ts`:
   - Template functions that generate unique content for each suburb+service combination
   - Uses suburb data (postcode, landmarks) and service data to create contextual content
   - Each combo gets: intro paragraph, 3 benefits, 3 Q&As, cross-links

### Team 3 Checkpoint

After SEO Specialist and Copywriter complete:
```bash
npm run build:netlify    # Full pipeline must succeed
# Verify: 1300+ HTML files in dist/public/
# Verify: sitemap-index.xml exists
# Verify: audit passes with 0 errors
```

### Team 4: QA Engineer (6 tasks)

1. **Set up Playwright** — Create `playwright.config.ts`, install browsers

2. **Navigation tests** — `tests/e2e/navigation.spec.ts`:
   - Homepage loads with correct title
   - Services hub loads, shows all 20 services
   - Click into a service page, verify content
   - Locations hub loads, shows all 12 councils
   - Click into council → suburb → suburb+service
   - 404 page for invalid routes
   - All nav links work (header, footer)

3. **Form tests** — `tests/e2e/forms.spec.ts`:
   - Quote form opens from CTA button
   - Fill and submit quote form
   - Verify success toast
   - Validation errors for empty/invalid fields
   - Admin login form submission

4. **Responsive tests** — `tests/e2e/responsive.spec.ts`:
   - Mobile viewport (375px): hamburger menu, floating CTA, single column
   - Tablet viewport (768px): 2-column layout
   - Desktop viewport (1280px): full navigation, 3-column grid

5. **Accessibility tests** — `tests/e2e/accessibility.spec.ts`:
   - Integrate axe-core
   - Run on homepage, services page, a service detail page
   - Verify no critical or serious violations
   - Check keyboard navigation on menus and modals

6. **Run full suite** — Fix any failures, run again until all green

## Brand Identity

| Property | Value |
|----------|-------|
| **Name** | Pest Control Sydney |
| **Domain** | pestcontrolsydney.org |
| **Phone** | (02) 8765-4321 |
| **Primary (blue)** | `hsl(221.2, 83.2%, 53.3%)` / #3b82f6 |
| **Secondary (green)** | `hsl(142.1, 76.2%, 36.3%)` |
| **Accent (orange)** | `hsl(24.6, 95%, 53.1%)` |
| **Background** | `hsl(210, 40%, 98%)` — near-white blue tint |
| **Foreground** | `hsl(222.2, 84%, 4.9%)` — near-black |
| **Font** | Inter (300-700) |
| **Tone** | Professional, trustworthy, local Sydney expertise, Australian English |
| **Trust signals** | Licensed & Insured, AEPMA Member, 100% Satisfaction Guarantee, 15+ Years, Eco-Friendly |

## Design Direction

- Modern, premium, professional — NOT generic/template-looking
- Glass-morphism cards: `backdrop-filter: blur(20px)`, subtle borders, box-shadow
- Full-width hero sections with professional images + 50% dark gradient overlays
- Floating orange CTA button (call now) on mobile, bottom-right
- Dark navy hotline bar at top with green availability dot
- Star-rated testimonial cards
- Brand product logos (BASF, Bayer, Dow, Syngenta, FMC, Ensystex)
- Animated 4-step process visualization
- Service cards with Lucide icons, hover lift effects, and shadows
- Consistent spacing, generous whitespace, professional hierarchy

## Image Strategy

Use **Lucide React** icons for service icons (already installed). For photos, use placeholder SVGs:

```
client/public/images/
├── hero/           # Homepage hero backgrounds
├── services/       # One per service (e.g., termite-control.jpg)
├── fleet/          # Service vehicles, technicians
├── brand/          # logo.svg, logo-white.svg, favicon.ico
├── logos/          # Product brand logos (BASF, Bayer, etc.)
└── team/           # Team/technician photos
```

Create `placeholder.svg` files — simple grey boxes with labels like "Hero Image 1920x800". The user drops real images with the same filename, no code changes needed.

## Services (20 total)

| Service | Slug | Price From | Icon (Lucide) | Category |
|---------|------|-----------|-------|----------|
| Termite Inspection | termite-inspection | Quote | Search | termite |
| Termite Treatment | termite-control | $299 | Bug | termite |
| Rodent Control | rodent-control | $199 | Rat | general |
| Cockroach Treatment | cockroach-treatment | $159 | Bug | general |
| Spider Treatment | spider-treatment | $179 | Bug | general |
| Ant Control | ant-control | $129 | Bug | general |
| Flea Treatment | flea-treatment | $149 | Bug | general |
| Bedbug Treatment | bedbug-treatment | $399 | Bed | specialty |
| Wasp Removal | wasp-removal | $89 | Bug | specialty |
| Silverfish Control | silverfish-control | $139 | Bug | general |
| Bird Control | bird-control | $249 | Bird | specialty |
| Pantry Pest Control | pantry-pest-control | Quote | Cookie | specialty |
| Drain Fly Treatment | drain-fly-treatment | Quote | Bug | specialty |
| Possum Removal | possum-removal | Quote | Squirrel | specialty |
| Bee Removal | bee-removal | Quote | Bug | specialty |
| Tick Treatment | tick-treatment | Quote | Bug | specialty |
| Mite Control | mite-control | Quote | Bug | specialty |
| General Pest Control | general-pest-control | $189 | Shield | general |
| Commercial Pest Control | commercial-pest-control | Quote | Building | commercial |
| Pre-Purchase Inspection | pre-purchase-inspection | Quote | ClipboardCheck | termite |

## Council Areas (12) with Suburbs

| Council | Slug | Suburbs |
|---------|------|---------|
| City of Sydney | city-of-sydney | Sydney CBD (2000), Surry Hills (2010), Pyrmont (2009), Ultimo (2007), Darlinghurst (2010) |
| Inner West | inner-west-council | Newtown (2042), Glebe (2037), Balmain (2041), Leichhardt (2040), Marrickville (2204) |
| Northern Beaches | northern-beaches-council | Manly (2095), Dee Why (2099), Mona Vale (2103), Brookvale (2100), Palm Beach (2108) |
| Waverley | waverley-council | Bondi (2026), Bronte (2024), Vaucluse (2030), Dover Heights (2030), Waverley (2024) |
| Willoughby | willoughby-city-council | Chatswood (2067), Artarmon (2064), Northbridge (2063), Castlecrag (2068), Willoughby (2068) |
| Parramatta | parramatta-council | Parramatta (2150), Westmead (2145), North Parramatta (2151), Harris Park (2150), Granville (2142) |
| Sutherland Shire | sutherland-shire | Cronulla (2230), Miranda (2228), Gymea (2227), Caringbah (2229), Engadine (2233) |
| Randwick | randwick-council | Coogee (2034), Maroubra (2035), Randwick (2031), Kensington (2033), Kingsford (2032) |
| North Sydney | north-sydney-council | North Sydney (2060), Crows Nest (2065), Neutral Bay (2089), Kirribilli (2061), McMahons Point (2060) |
| Ryde | ryde-council | Ryde (2112), Eastwood (2122), West Ryde (2114), North Ryde (2113), Meadowbank (2114) |
| Blacktown | blacktown-council | Blacktown (2148), Seven Hills (2147), Quakers Hill (2763), Kellyville (2155), Stanhope Gardens (2768) |
| Canterbury-Bankstown | canterbury-bankstown | Bankstown (2200), Canterbury (2193), Campsie (2194), Lakemba (2195), Punchbowl (2196) |

**Scale:** ~1300+ unique pages (3 static + 20 services + 12 councils + 60 suburbs + 1200 combos)

## API Contract

Defined in `shared/types/api.ts`. Both frontend and backend MUST match these types.

```
POST   /api/leads           → CreateLeadRequest  → LeadResponse
GET    /api/leads           → query params        → LeadListResponse
GET    /api/leads/:id       →                     → LeadResponse
PATCH  /api/leads/:id       → UpdateLeadRequest   → LeadResponse
DELETE /api/leads/:id       →                     → { success: true }
GET    /api/leads/export    →                     → CSV file
POST   /api/auth/login      → LoginRequest        → AuthResponse
POST   /api/auth/logout     →                     → { success: true }
GET    /api/auth/me         →                     → user | null
GET    /api/services        →                     → ServiceListResponse
GET    /api/councils        →                     → CouncilListResponse
```

## Known Pitfalls (from AusWebsites experience)

1. **Template idempotency** — Prerendering overwrites `index.html`. ALWAYS save `_template.html` backup. If corrupted: `npx vite build && rm dist/public/_template.html`

2. **Netlify rewrite order** — Prerendered routes (200 status) MUST come BEFORE the SPA fallback (`/*`). Otherwise all pages serve the SPA shell instead of prerendered HTML.

3. **TypeScript `PageType` union** — `shared/routes/all-routes.ts` defines the `PageType` union. If you add a new page type, add it to the union FIRST, then use it in components.

4. **Sitemap/prerender sync** — Both scripts MUST import from `shared/routes/all-routes.ts`. Never hardcode routes in scripts.

5. **`a/an` grammar** — Use conditional article before service/suburb names where needed.

6. **CSS variable format** — In `globals.css`, CSS variables use space-separated HSL values WITHOUT `hsl()` wrapper. Tailwind adds `hsl()` in config via `hsl(var(--primary))`.

## Quality Gates

Run these exact commands at each checkpoint:

```bash
# After Team 2 (Build):
npm run dev              # Must start without errors
npx tsc --noEmit         # Zero TypeScript errors
curl http://localhost:5000/api/services  # Must return JSON
curl http://localhost:5000/api/health    # Must return ok

# After Team 3 (Polish):
npm run build:netlify    # Full pipeline succeeds (vite → sitemap → prerender → audit)
ls dist/public/*.html | wc -l  # Should show 1300+ files

# After Team 4 (QA):
npx playwright test      # All E2E tests pass
```

## Environment Variables

```
DATABASE_URL=postgresql://...   # Neon Postgres connection string
JWT_SECRET=...                  # JWT signing secret
ADMIN_EMAIL=...                 # Initial admin email
ADMIN_PASSWORD=...              # Initial admin password
SESSION_SECRET=...              # Express session secret
```

## Performance Requirements

- Lazy-load images: `loading="lazy"` + explicit `width`/`height`
- Code-split routes: `React.lazy()` for page components
- Preload critical fonts: Inter 400, 600, 700
- Lighthouse targets: Performance > 90, Accessibility > 90, SEO > 95

## Conversion Optimization

- Sticky header with phone number visible at all times
- Floating orange CTA button on mobile
- Trust badges near every CTA (Licensed, Guaranteed, Insured)
- Multi-step quote form (less intimidating)
- Social proof: "X people requested a quote today"
- Urgency: "Same-day service available"

## Deployment

- Push to `main` → Netlify auto-deploys
- Build command: `npm run build:netlify`
- Publish directory: `dist/public`
- Set env vars in Netlify UI

## Incremental Commits

Each teammate commits after completing each logical unit of work. Use descriptive commit messages:
- `feat(backend): implement lead CRUD endpoints`
- `feat(frontend): build homepage with hero and services grid`
- `style(brand): add glass-morphism card styles and animations`
- `feat(seo): create prerender pipeline for 1300+ pages`
- `content(copy): write service descriptions and FAQs`
- `test(e2e): add navigation and form submission tests`
