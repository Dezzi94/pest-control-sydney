import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  // ── Homepage ──────────────────────────────────────────────────────────────

  test("homepage loads with correct title containing Pest Control Sydney", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Pest Control Sydney/);
  });

  test("homepage displays hero headline", async ({ page }) => {
    await page.goto("/");
    const h1 = page.locator("h1").first();
    await expect(h1).toBeVisible();
    await expect(h1).toContainText("Pest Control");
  });

  test("homepage shows trust indicators in hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Licensed & Insured").first()).toBeVisible();
    await expect(page.getByText("Same-Day Service").first()).toBeVisible();
  });

  test("homepage shows CTA buttons", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Get Your Free Quote").first()).toBeVisible();
  });

  // ── Services Page ─────────────────────────────────────────────────────────

  test("services page loads and shows service cards", async ({ page }) => {
    await page.goto("/services");
    await expect(page).toHaveTitle(/Pest Control Services/);
    await expect(page.locator("h1")).toContainText("Pest Control Services Sydney");

    // Should display service cards — there are 20 services
    const serviceCards = page.locator('a[href^="/services/"]').filter({ has: page.locator("h3") });
    await expect(serviceCards.first()).toBeVisible();
    const count = await serviceCards.count();
    expect(count).toBe(20);
  });

  test("services page shows category filter buttons", async ({ page }) => {
    await page.goto("/services");
    await expect(page.getByText("All Services")).toBeVisible();
    await expect(page.getByText("General")).toBeVisible();
    await expect(page.getByText("Termite")).toBeVisible();
    await expect(page.getByText("Specialty")).toBeVisible();
    await expect(page.getByText("Commercial")).toBeVisible();
  });

  test("services page category filter works", async ({ page }) => {
    await page.goto("/services");

    // Click "Termite" filter
    await page.getByText("Termite", { exact: true }).click();

    // Should show only termite services (3: Termite Inspection, Termite Treatment, Pre-Purchase Inspection)
    const serviceCards = page.locator('a[href^="/services/"]').filter({ has: page.locator("h3") });
    const count = await serviceCards.count();
    expect(count).toBe(3);

    // Click "All Services" to reset
    await page.getByText("All Services", { exact: true }).click();
    const allCount = await serviceCards.count();
    expect(allCount).toBe(20);
  });

  test("click into a service page and verify content loads", async ({ page }) => {
    await page.goto("/services");

    // Click on the Termite Inspection card
    await page.locator('a[href="/services/termite-inspection"]').click();

    await expect(page).toHaveURL("/services/termite-inspection");
    await expect(page.locator("h1")).toContainText("Termite Inspection Sydney");

    // Verify breadcrumb is visible
    await expect(page.getByRole("navigation").getByText("Services")).toBeVisible();
    await expect(page.getByRole("navigation").getByText("Termite Inspection")).toBeVisible();

    // Verify process section is present
    await expect(page.getByText("Our Termite Inspection Process")).toBeVisible();

    // Verify FAQ section is present
    await expect(page.getByText("Termite Inspection FAQ")).toBeVisible();

    // Verify related services sidebar
    await expect(page.getByText("Related Services")).toBeVisible();

    // Verify CTA pricing card
    await expect(page.getByText("Free Quote").first()).toBeVisible();
  });

  // ── Locations Page ────────────────────────────────────────────────────────

  test("locations page loads and shows council cards", async ({ page }) => {
    await page.goto("/locations");
    await expect(page).toHaveTitle(/Pest Control Locations|Pest Control Across Sydney/);
    await expect(page.locator("h1")).toContainText("Pest Control Across Sydney");

    // Should display 12 council cards
    const councilCards = page.locator('a[href^="/locations/sydney/"]').filter({ has: page.locator("h3") });
    await expect(councilCards.first()).toBeVisible();
    const count = await councilCards.count();
    expect(count).toBe(12);
  });

  test("locations page council cards show suburb count and preview", async ({ page }) => {
    await page.goto("/locations");

    // City of Sydney card should show "5 suburbs" and some suburb names
    const cityCard = page.locator('a[href="/locations/sydney/city-of-sydney"]');
    await expect(cityCard).toBeVisible();
    await expect(cityCard.getByText("5 suburbs")).toBeVisible();
    await expect(cityCard.getByText("View suburbs")).toBeVisible();
  });

  test("click into a council page and verify suburbs listed", async ({ page }) => {
    await page.goto("/locations");

    // Click City of Sydney
    await page.locator('a[href="/locations/sydney/city-of-sydney"]').click();

    await expect(page).toHaveURL("/locations/sydney/city-of-sydney");
    await expect(page.locator("h1")).toContainText("Pest Control City of Sydney");

    // Verify breadcrumb
    await expect(page.getByRole("navigation").getByText("Locations")).toBeVisible();
    await expect(page.getByRole("navigation").getByText("City of Sydney")).toBeVisible();

    // Verify suburbs are listed
    await expect(page.getByText("Suburbs in City of Sydney")).toBeVisible();
    await expect(page.locator('a[href="/locations/sydney/city-of-sydney/sydney-cbd"]')).toBeVisible();
    await expect(page.locator('a[href="/locations/sydney/city-of-sydney/surry-hills"]')).toBeVisible();
    await expect(page.locator('a[href="/locations/sydney/city-of-sydney/pyrmont"]')).toBeVisible();
    await expect(page.locator('a[href="/locations/sydney/city-of-sydney/ultimo"]')).toBeVisible();
    await expect(page.locator('a[href="/locations/sydney/city-of-sydney/darlinghurst"]')).toBeVisible();

    // Verify services available section
    await expect(page.getByText("Services Available in City of Sydney")).toBeVisible();
  });

  test("click into a suburb page and verify content", async ({ page }) => {
    await page.goto("/locations/sydney/city-of-sydney");

    // Click into Sydney CBD
    await page.locator('a[href="/locations/sydney/city-of-sydney/sydney-cbd"]').click();

    await expect(page).toHaveURL("/locations/sydney/city-of-sydney/sydney-cbd");
    await expect(page.locator("h1")).toContainText("Pest Control Sydney CBD 2000");

    // Verify breadcrumb chain
    const nav = page.getByRole("navigation");
    await expect(nav.getByText("Home")).toBeVisible();
    await expect(nav.getByText("Locations")).toBeVisible();
    await expect(nav.getByText("City of Sydney")).toBeVisible();
    await expect(nav.getByText("Sydney CBD")).toBeVisible();

    // Verify postcode badge
    await expect(page.getByText("2000").first()).toBeVisible();

    // Verify services grid exists
    await expect(page.getByText("Pest Control Services in Sydney CBD")).toBeVisible();

    // Verify links to service combo pages exist
    const comboLinks = page.locator('a[href^="/locations/sydney/city-of-sydney/sydney-cbd/services/"]');
    const count = await comboLinks.count();
    expect(count).toBe(20); // All 20 services should have links

    // Verify other suburbs section
    await expect(page.getByText("Other Suburbs in City of Sydney")).toBeVisible();
  });

  // ── Suburb + Service Combo Page ───────────────────────────────────────────

  test("navigate to a suburb+service combo page", async ({ page }) => {
    await page.goto("/locations/sydney/city-of-sydney/sydney-cbd/services/cockroach-treatment");

    await expect(page.locator("h1")).toContainText("Cockroach Treatment Sydney CBD 2000");

    // Verify full breadcrumb chain
    const nav = page.getByRole("navigation");
    await expect(nav.getByText("Home")).toBeVisible();
    await expect(nav.getByText("Locations")).toBeVisible();
    await expect(nav.getByText("City of Sydney")).toBeVisible();
    await expect(nav.getByText("Sydney CBD")).toBeVisible();
    await expect(nav.getByText("Cockroach Treatment")).toBeVisible();

    // Verify localized content
    await expect(page.getByText("Cockroach Treatment in Sydney CBD, Sydney")).toBeVisible();

    // Verify FAQ questions are suburb-specific
    await expect(page.getByText(/How much does cockroach treatment cost in Sydney CBD/)).toBeVisible();
    await expect(page.getByText(/How quickly can you get to Sydney CBD/)).toBeVisible();

    // Verify sidebar with other services and nearby suburbs
    await expect(page.getByText("Other Services in Sydney CBD")).toBeVisible();
    await expect(page.getByText("Nearby Suburbs")).toBeVisible();

    // Verify pricing card
    await expect(page.getByText("$159").first()).toBeVisible();
  });

  // ── 404 Page ──────────────────────────────────────────────────────────────

  test("404 page for invalid routes", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText("Page Not Found")).toBeVisible();

    // Verify navigation links on 404 page
    await expect(page.getByText("Go Home")).toBeVisible();
    await expect(page.getByText("View Services")).toBeVisible();
  });

  test("invalid service slug shows not found state", async ({ page }) => {
    await page.goto("/services/nonexistent-pest-service");
    await expect(page.getByText("Service Not Found")).toBeVisible();
    await expect(page.getByText("View All Services")).toBeVisible();
  });

  test("invalid council slug shows not found state", async ({ page }) => {
    await page.goto("/locations/sydney/fake-council");
    await expect(page.getByText("Location Not Found")).toBeVisible();
    await expect(page.getByText("View All Locations")).toBeVisible();
  });

  test("invalid suburb slug shows not found state", async ({ page }) => {
    await page.goto("/locations/sydney/city-of-sydney/fake-suburb");
    await expect(page.getByText("Location Not Found")).toBeVisible();
  });

  // ── Header Navigation ────────────────────────────────────────────────────

  test("header nav links work", async ({ page }) => {
    await page.goto("/");

    // Desktop viewport: nav links in header should be visible
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Click Services nav link
    await header.locator('a[href="/services"]').click();
    await expect(page).toHaveURL("/services");
    await expect(page.locator("h1")).toContainText("Pest Control Services Sydney");

    // Click Locations nav link
    await header.locator('a[href="/locations"]').click();
    await expect(page).toHaveURL("/locations");
    await expect(page.locator("h1")).toContainText("Pest Control Across Sydney");

    // Click logo/home link to go back
    await header.locator('a[href="/"]').click();
    await expect(page).toHaveURL("/");
  });

  test("header phone number is visible on desktop", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header.getByText("(02) 8765-4321")).toBeVisible();
  });

  test("header Get Free Quote CTA is visible on desktop", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");
    await expect(header.getByText("Get Free Quote")).toBeVisible();
  });

  // ── Footer Navigation ────────────────────────────────────────────────────

  test("footer links work", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Verify company info
    await expect(footer.getByText("Pest Control")).toBeVisible();
    await expect(footer.getByText("(02) 8765-4321")).toBeVisible();
    await expect(footer.getByText("info@pestcontrolsydney.org")).toBeVisible();

    // Verify service links exist
    await expect(footer.getByText("Our Services")).toBeVisible();
    await expect(footer.locator('a[href="/services/termite-inspection"]')).toBeVisible();
    await expect(footer.getByText("View All Services")).toBeVisible();

    // Verify location links exist
    await expect(footer.getByText("Service Areas")).toBeVisible();
    await expect(footer.locator('a[href="/locations/sydney/city-of-sydney"]')).toBeVisible();
    await expect(footer.getByText("View All Locations")).toBeVisible();

    // Verify trust signals
    await expect(footer.getByText("Why Choose Us")).toBeVisible();
    await expect(footer.getByText("Licensed & Fully Insured")).toBeVisible();
    await expect(footer.getByText("AEPMA Certified Member")).toBeVisible();

    // Verify bottom bar
    await expect(footer.getByText(/Pest Control Sydney. All rights reserved/)).toBeVisible();
    await expect(footer.getByText("Privacy Policy")).toBeVisible();
    await expect(footer.getByText("Terms & Conditions")).toBeVisible();
    await expect(footer.locator('a[href="/admin/login"]')).toBeVisible();
  });

  test("footer service link navigates correctly", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");

    // Click on a service link in the footer
    await footer.locator('a[href="/services/termite-inspection"]').click();
    await expect(page).toHaveURL("/services/termite-inspection");
    await expect(page.locator("h1")).toContainText("Termite Inspection Sydney");
  });

  test("footer location link navigates correctly", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");

    // Click on a council link in the footer
    await footer.locator('a[href="/locations/sydney/city-of-sydney"]').click();
    await expect(page).toHaveURL("/locations/sydney/city-of-sydney");
    await expect(page.locator("h1")).toContainText("Pest Control City of Sydney");
  });

  // ── HotlineBar ────────────────────────────────────────────────────────────

  test("hotline bar displays phone number and emergency text", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("24/7 Emergency: (02) 8765-4321")).toBeVisible();
  });

  // ── All 20 service pages resolve correctly ────────────────────────────────

  test("all 20 service pages load with correct h1", async ({ page }) => {
    const services = [
      { slug: "termite-inspection", name: "Termite Inspection" },
      { slug: "termite-control", name: "Termite Treatment" },
      { slug: "rodent-control", name: "Rodent Control" },
      { slug: "cockroach-treatment", name: "Cockroach Treatment" },
      { slug: "spider-treatment", name: "Spider Treatment" },
      { slug: "ant-control", name: "Ant Control" },
      { slug: "flea-treatment", name: "Flea Treatment" },
      { slug: "bedbug-treatment", name: "Bedbug Treatment" },
      { slug: "wasp-removal", name: "Wasp Removal" },
      { slug: "silverfish-control", name: "Silverfish Control" },
      { slug: "bird-control", name: "Bird Control" },
      { slug: "pantry-pest-control", name: "Pantry Pest Control" },
      { slug: "drain-fly-treatment", name: "Drain Fly Treatment" },
      { slug: "possum-removal", name: "Possum Removal" },
      { slug: "bee-removal", name: "Bee Removal" },
      { slug: "tick-treatment", name: "Tick Treatment" },
      { slug: "mite-control", name: "Mite Control" },
      { slug: "general-pest-control", name: "General Pest Control" },
      { slug: "commercial-pest-control", name: "Commercial Pest Control" },
      { slug: "pre-purchase-inspection", name: "Pre-Purchase Inspection" },
    ];

    for (const { slug, name } of services) {
      const response = await page.goto(`/services/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toContainText(`${name} Sydney`);
    }
  });

  // ── All 12 council pages resolve correctly ────────────────────────────────

  test("all 12 council pages load with correct h1", async ({ page }) => {
    const councils = [
      { slug: "city-of-sydney", name: "City of Sydney" },
      { slug: "inner-west-council", name: "Inner West" },
      { slug: "northern-beaches-council", name: "Northern Beaches" },
      { slug: "waverley-council", name: "Waverley" },
      { slug: "willoughby-city-council", name: "Willoughby" },
      { slug: "parramatta-council", name: "Parramatta" },
      { slug: "sutherland-shire", name: "Sutherland Shire" },
      { slug: "randwick-council", name: "Randwick" },
      { slug: "north-sydney-council", name: "North Sydney" },
      { slug: "ryde-council", name: "Ryde" },
      { slug: "blacktown-council", name: "Blacktown" },
      { slug: "canterbury-bankstown", name: "Canterbury-Bankstown" },
    ];

    for (const { slug, name } of councils) {
      const response = await page.goto(`/locations/sydney/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toContainText(`Pest Control ${name}`);
    }
  });

  // ── Cross-navigation between page types ───────────────────────────────────

  test("full navigation flow: home -> services -> service -> back via breadcrumb", async ({ page }) => {
    await page.goto("/");

    // Navigate to services
    await page.locator('header a[href="/services"]').click();
    await expect(page).toHaveURL("/services");

    // Click into cockroach treatment
    await page.locator('a[href="/services/cockroach-treatment"]').click();
    await expect(page).toHaveURL("/services/cockroach-treatment");
    await expect(page.locator("h1")).toContainText("Cockroach Treatment Sydney");

    // Use breadcrumb to go back to services
    await page.getByRole("navigation").getByText("Services").click();
    await expect(page).toHaveURL("/services");
  });

  test("full navigation flow: locations -> council -> suburb -> combo page", async ({ page }) => {
    await page.goto("/locations");

    // Click into Inner West council
    await page.locator('a[href="/locations/sydney/inner-west-council"]').click();
    await expect(page).toHaveURL("/locations/sydney/inner-west-council");
    await expect(page.locator("h1")).toContainText("Pest Control Inner West");

    // Click into Newtown suburb
    await page.locator('a[href="/locations/sydney/inner-west-council/newtown"]').click();
    await expect(page).toHaveURL("/locations/sydney/inner-west-council/newtown");
    await expect(page.locator("h1")).toContainText("Pest Control Newtown 2042");

    // Click into a combo page (Newtown + Rodent Control)
    await page.locator('a[href="/locations/sydney/inner-west-council/newtown/services/rodent-control"]').click();
    await expect(page).toHaveURL("/locations/sydney/inner-west-council/newtown/services/rodent-control");
    await expect(page.locator("h1")).toContainText("Rodent Control Newtown 2042");
  });
});
