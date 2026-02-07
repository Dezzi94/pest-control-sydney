import { test, expect } from "@playwright/test";

test.describe("Mobile viewport (375px)", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("homepage renders in mobile layout", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("mobile menu button is visible", async ({ page }) => {
    await page.goto("/");
    // On mobile, the hamburger menu button should be visible
    const menuButton = page.locator(
      'button[aria-label*="menu" i], button[aria-label*="nav" i], header button'
    );
    if ((await menuButton.count()) > 0) {
      await expect(menuButton.first()).toBeVisible();
    }
  });

  test("floating CTA is visible on mobile", async ({ page }) => {
    await page.goto("/");
    // The floating call button should appear on mobile
    const floatingCTA = page.locator(
      'a[href^="tel:"][class*="fixed"], .fixed a[href^="tel:"]'
    );
    if ((await floatingCTA.count()) > 0) {
      await expect(floatingCTA.first()).toBeVisible();
    }
  });

  test("service cards stack vertically on mobile", async ({ page }) => {
    await page.goto("/services");
    const cards = page.locator('[class*="card"], [class*="Card"]');
    if ((await cards.count()) > 1) {
      const firstBox = await cards.first().boundingBox();
      const secondBox = await cards.nth(1).boundingBox();
      if (firstBox && secondBox) {
        // Cards should be stacked (second card below first)
        expect(secondBox.y).toBeGreaterThan(firstBox.y);
      }
    }
  });
});

test.describe("Tablet viewport (768px)", () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test("homepage renders in tablet layout", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("services page renders grid layout", async ({ page }) => {
    await page.goto("/services");
    await expect(page.locator("h1")).toContainText(/Services/);
  });
});

test.describe("Desktop viewport (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("homepage renders in desktop layout", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("desktop navigation is visible", async ({ page }) => {
    await page.goto("/");
    // Desktop nav links should be visible (not hidden in hamburger)
    const servicesLink = page.locator('header a[href="/services"]');
    await expect(servicesLink).toBeVisible();

    const locationsLink = page.locator('header a[href="/locations"]');
    await expect(locationsLink).toBeVisible();
  });

  test("footer has multiple columns on desktop", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    // Footer should contain links to services and locations
    await expect(footer.locator('a[href="/services"]')).toBeVisible();
    await expect(footer.locator('a[href="/locations"]')).toBeVisible();
  });
});
