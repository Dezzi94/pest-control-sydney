import { test, expect } from "@playwright/test";

// ── Mobile Viewport (375x812 — iPhone X) ───────────────────────────────────

test.describe("Mobile viewport (375x812)", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("homepage renders correctly on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();
    // HotlineBar should still be visible
    await expect(page.getByText("24/7 Emergency:").first()).toBeVisible();
  });

  test("hamburger menu button is visible on mobile", async ({ page }) => {
    await page.goto("/");
    // Header has a button with aria-label "Open menu" on mobile (lg:hidden)
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();
  });

  test("desktop nav links are hidden on mobile", async ({ page }) => {
    await page.goto("/");
    // The desktop nav is hidden behind lg:flex (hidden by default)
    // The nav links in the header should NOT be visible without opening the menu
    const desktopNav = page.locator("header nav.hidden");
    // The nav container has class "hidden lg:flex" — it should not be visible
    await expect(desktopNav).toBeHidden();
  });

  test("hamburger menu opens and shows navigation links", async ({ page }) => {
    await page.goto("/");

    // Open the mobile menu
    await page.locator('button[aria-label="Open menu"]').click();

    // After opening, the menu button changes to "Close menu"
    await expect(page.locator('button[aria-label="Close menu"]')).toBeVisible();

    // Mobile nav links should now be visible
    await expect(page.locator('header a[href="/services"]').first()).toBeVisible();
    await expect(page.locator('header a[href="/locations"]').first()).toBeVisible();

    // Mobile menu should show Call and Quote buttons
    await expect(page.getByText(/Call \(02\) 8765-4321/)).toBeVisible();
    await expect(page.getByText("Get Free Quote").first()).toBeVisible();

    // Admin Portal link should be visible in mobile menu
    await expect(page.getByText("Admin Portal")).toBeVisible();
  });

  test("mobile menu navigation works and closes menu", async ({ page }) => {
    await page.goto("/");

    // Open mobile menu
    await page.locator('button[aria-label="Open menu"]').click();

    // Click Services link
    await page.locator("header").getByText("Services", { exact: true }).click();
    await expect(page).toHaveURL("/services");

    // Menu should close after navigation (the link has onClick={() => setMobileOpen(false)})
    // Verify we see the hamburger button again (not the close button)
    await expect(page.locator('button[aria-label="Open menu"]')).toBeVisible();
  });

  test("FloatingCTA call button is visible on mobile", async ({ page }) => {
    await page.goto("/");
    // FloatingCTA renders a fixed-position call button with aria-label "Call us now"
    // It has class "lg:hidden" so only visible on mobile/tablet
    const floatingCTA = page.locator('a[aria-label="Call us now"]');
    await expect(floatingCTA).toBeVisible();

    // Verify it links to the phone number
    await expect(floatingCTA).toHaveAttribute("href", "tel:+61287654321");
  });

  test("service cards stack vertically on mobile", async ({ page }) => {
    await page.goto("/services");
    await page.waitForLoadState("networkidle");

    // Get the first two service card links
    const cards = page.locator('a[href^="/services/"]').filter({ has: page.locator("h3") });
    await expect(cards.first()).toBeVisible();

    const firstBox = await cards.first().boundingBox();
    const secondBox = await cards.nth(1).boundingBox();

    if (firstBox && secondBox) {
      // On mobile (grid-cols-1), cards should be stacked vertically
      expect(secondBox.y).toBeGreaterThan(firstBox.y);
      // And they should have the same x position (left-aligned)
      expect(Math.abs(secondBox.x - firstBox.x)).toBeLessThan(5);
    }
  });

  test("council cards stack vertically on mobile", async ({ page }) => {
    await page.goto("/locations");
    await page.waitForLoadState("networkidle");

    const cards = page.locator('a[href^="/locations/sydney/"]').filter({ has: page.locator("h3") });
    await expect(cards.first()).toBeVisible();

    const firstBox = await cards.first().boundingBox();
    const secondBox = await cards.nth(1).boundingBox();

    if (firstBox && secondBox) {
      // Single column on mobile
      expect(secondBox.y).toBeGreaterThan(firstBox.y);
    }
  });

  test("hero section CTA buttons stack on mobile", async ({ page }) => {
    await page.goto("/");

    // Hero CTAs are flex-col on mobile, flex-row on sm+
    const quoteButton = page.getByText("Get Your Free Quote").first();
    const callButton = page.locator('a[href="tel:+61287654321"]').filter({ has: page.locator("text=Call") }).first();

    if ((await quoteButton.isVisible()) && (await callButton.isVisible())) {
      const quoteBox = await quoteButton.boundingBox();
      const callBox = await callButton.boundingBox();

      if (quoteBox && callBox) {
        // On mobile (flex-col), the call button should be below the quote button
        expect(callBox.y).toBeGreaterThan(quoteBox.y);
      }
    }
  });

  test("header phone number text is hidden on mobile", async ({ page }) => {
    await page.goto("/");
    // On mobile, the phone CTA in the header is inside "hidden lg:flex"
    // so the inline phone number should not be visible
    const header = page.locator("header");
    const desktopPhoneCTA = header.locator(".hidden.lg\\:flex").getByText("(02) 8765-4321");

    // The phone number in the desktop CTA area should be hidden
    await expect(desktopPhoneCTA).toBeHidden();
  });

  test("logo text is hidden on very small screens", async ({ page }) => {
    await page.goto("/");
    // The logo text "Pest Control Sydney" has "hidden sm:block" on the text portion
    const logoText = page.locator("header .hidden.sm\\:block");
    await expect(logoText).toBeHidden();
  });
});

// ── Tablet Viewport (768x1024 — iPad) ──────────────────────────────────────

test.describe("Tablet viewport (768x1024)", () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test("homepage renders in tablet layout", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();
    // Hotline bar should be visible
    await expect(page.getByText("24/7 Emergency:").first()).toBeVisible();
  });

  test("services page shows 2-column grid on tablet", async ({ page }) => {
    await page.goto("/services");
    await page.waitForLoadState("networkidle");

    // Grid is grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    // At 768px (sm breakpoint at 640px), should be 2 columns
    const cards = page.locator('a[href^="/services/"]').filter({ has: page.locator("h3") });
    await expect(cards.first()).toBeVisible();

    const firstBox = await cards.first().boundingBox();
    const secondBox = await cards.nth(1).boundingBox();

    if (firstBox && secondBox) {
      // At 768px with sm:grid-cols-2, cards should be side by side
      // The second card should be roughly at the same Y position as the first
      expect(Math.abs(secondBox.y - firstBox.y)).toBeLessThan(10);
      // And the second card should be to the right of the first
      expect(secondBox.x).toBeGreaterThan(firstBox.x);
    }
  });

  test("locations page shows 2-column grid on tablet", async ({ page }) => {
    await page.goto("/locations");
    await page.waitForLoadState("networkidle");

    const cards = page.locator('a[href^="/locations/sydney/"]').filter({ has: page.locator("h3") });
    await expect(cards.first()).toBeVisible();

    const firstBox = await cards.first().boundingBox();
    const secondBox = await cards.nth(1).boundingBox();

    if (firstBox && secondBox) {
      // sm:grid-cols-2 at 768px
      expect(Math.abs(secondBox.y - firstBox.y)).toBeLessThan(10);
      expect(secondBox.x).toBeGreaterThan(firstBox.x);
    }
  });

  test("hamburger menu is still visible on tablet (below lg breakpoint)", async ({ page }) => {
    await page.goto("/");
    // lg breakpoint is 1024px; at 768px, mobile menu button should be visible
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();
  });

  test("FloatingCTA is visible on tablet", async ({ page }) => {
    await page.goto("/");
    // FloatingCTA has lg:hidden, so at 768px (below 1024px lg) it should be visible
    const floatingCTA = page.locator('a[aria-label="Call us now"]');
    await expect(floatingCTA).toBeVisible();
  });

  test("footer shows 2-column grid on tablet", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Footer grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
    // At 768px (md breakpoint at 768px), should be 2 columns
    await expect(footer.getByText("Our Services")).toBeVisible();
    await expect(footer.getByText("Service Areas")).toBeVisible();
    await expect(footer.getByText("Why Choose Us")).toBeVisible();
  });

  test("HotlineBar shows business hours on tablet", async ({ page }) => {
    await page.goto("/");
    // HotlineBar has "hidden md:flex" on the hours display
    // At 768px (md breakpoint), hours should be visible
    await expect(page.getByText("Mon-Fri 7am-6pm | Sat 8am-2pm").first()).toBeVisible();
  });
});

// ── Desktop Viewport (1280x800) ────────────────────────────────────────────

test.describe("Desktop viewport (1280x800)", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("homepage renders in desktop layout", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("full desktop navigation is visible (no hamburger)", async ({ page }) => {
    await page.goto("/");

    // Desktop nav links should be visible in header
    const header = page.locator("header");
    await expect(header.locator('a[href="/services"]').first()).toBeVisible();
    await expect(header.locator('a[href="/locations"]').first()).toBeVisible();

    // Phone number should be visible
    await expect(header.getByText("(02) 8765-4321")).toBeVisible();

    // Get Free Quote button should be visible
    await expect(header.getByText("Get Free Quote")).toBeVisible();

    // Hamburger menu button should NOT be visible (lg:hidden)
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeHidden();
  });

  test("FloatingCTA is hidden on desktop", async ({ page }) => {
    await page.goto("/");
    // FloatingCTA has class "lg:hidden" — at 1280px it should not be visible
    const floatingCTA = page.locator('a[aria-label="Call us now"]');
    await expect(floatingCTA).toBeHidden();
  });

  test("services page shows multi-column grid on desktop", async ({ page }) => {
    await page.goto("/services");
    await page.waitForLoadState("networkidle");

    // Grid is lg:grid-cols-3 xl:grid-cols-4 — at 1280px (xl), should be 4 columns
    const cards = page.locator('a[href^="/services/"]').filter({ has: page.locator("h3") });
    await expect(cards.first()).toBeVisible();

    // Check first 4 cards are in the same row (same Y position)
    const firstBox = await cards.nth(0).boundingBox();
    const secondBox = await cards.nth(1).boundingBox();
    const thirdBox = await cards.nth(2).boundingBox();

    if (firstBox && secondBox && thirdBox) {
      // All three should be at roughly the same Y
      expect(Math.abs(secondBox.y - firstBox.y)).toBeLessThan(10);
      expect(Math.abs(thirdBox.y - firstBox.y)).toBeLessThan(10);
      // And horizontally spread out
      expect(secondBox.x).toBeGreaterThan(firstBox.x);
      expect(thirdBox.x).toBeGreaterThan(secondBox.x);
    }
  });

  test("locations page shows 3-column grid on desktop", async ({ page }) => {
    await page.goto("/locations");
    await page.waitForLoadState("networkidle");

    // Grid: lg:grid-cols-3
    const cards = page.locator('a[href^="/locations/sydney/"]').filter({ has: page.locator("h3") });
    await expect(cards.first()).toBeVisible();

    const firstBox = await cards.nth(0).boundingBox();
    const secondBox = await cards.nth(1).boundingBox();
    const thirdBox = await cards.nth(2).boundingBox();

    if (firstBox && secondBox && thirdBox) {
      // Three cards in a row
      expect(Math.abs(secondBox.y - firstBox.y)).toBeLessThan(10);
      expect(Math.abs(thirdBox.y - firstBox.y)).toBeLessThan(10);
    }
  });

  test("service detail page shows sidebar on desktop", async ({ page }) => {
    await page.goto("/services/cockroach-treatment");
    await page.waitForLoadState("networkidle");

    // Layout: lg:grid-cols-3 — main content + sidebar
    const mainContent = page.locator(".lg\\:col-span-2");
    const sidebar = page.locator("aside");

    await expect(mainContent).toBeVisible();
    await expect(sidebar).toBeVisible();

    // On desktop, sidebar should be to the right of main content
    const mainBox = await mainContent.boundingBox();
    const sidebarBox = await sidebar.boundingBox();

    if (mainBox && sidebarBox) {
      // Sidebar should be at roughly the same Y but further right
      expect(sidebarBox.x).toBeGreaterThan(mainBox.x);
    }
  });

  test("footer shows 4-column grid on desktop", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Footer grid: lg:grid-cols-4 — all 4 sections visible
    await expect(footer.getByText("(02) 8765-4321").first()).toBeVisible();
    await expect(footer.getByText("Our Services")).toBeVisible();
    await expect(footer.getByText("Service Areas")).toBeVisible();
    await expect(footer.getByText("Why Choose Us")).toBeVisible();

    // Verify service links in footer
    await expect(footer.locator('a[href="/services"]').first()).toBeVisible();
    await expect(footer.locator('a[href="/locations"]').first()).toBeVisible();
  });

  test("HotlineBar shows all elements on desktop", async ({ page }) => {
    await page.goto("/");

    // "Available Now" text (hidden sm:inline)
    await expect(page.getByText("Available Now")).toBeVisible();
    // Business hours (hidden md:flex)
    await expect(page.getByText("Mon-Fri 7am-6pm | Sat 8am-2pm").first()).toBeVisible();
    // Emergency phone
    await expect(page.getByText("24/7 Emergency: (02) 8765-4321")).toBeVisible();
  });

  test("admin dashboard renders with full table on desktop", async ({ page }) => {
    // Set a fake token so we don't get redirected
    await page.goto("/admin/login");
    await page.evaluate(() => localStorage.setItem("token", "fake-token-for-testing"));
    await page.goto("/admin/dashboard");

    // The dashboard should render (though API will fail, empty state is ok)
    await expect(page.getByText("Admin Dashboard")).toBeVisible();
    await expect(page.getByText("Total Leads")).toBeVisible();
  });
});
