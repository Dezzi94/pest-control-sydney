import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Pest Control Sydney/);
    await expect(page.locator("h1").first()).toBeVisible();
  });

  test("services hub page loads", async ({ page }) => {
    await page.goto("/services");
    await expect(page).toHaveTitle(/Pest Control Services/);
    await expect(page.locator("h1")).toContainText(/Services/);
  });

  test("individual service page loads", async ({ page }) => {
    await page.goto("/services/termite-inspection");
    await expect(page).toHaveTitle(/Termite Inspection/);
    await expect(page.locator("h1")).toContainText(/Termite Inspection/);
  });

  test("locations hub page loads", async ({ page }) => {
    await page.goto("/locations");
    await expect(page).toHaveTitle(/Locations/);
    await expect(page.locator("h1")).toContainText(/Sydney/);
  });

  test("council page loads", async ({ page }) => {
    await page.goto("/locations/sydney/city-of-sydney");
    await expect(page).toHaveTitle(/City of Sydney/);
    await expect(page.locator("h1")).toContainText(/City of Sydney/);
  });

  test("suburb page loads", async ({ page }) => {
    await page.goto("/locations/sydney/city-of-sydney/sydney-cbd");
    await expect(page).toHaveTitle(/Sydney CBD/);
    await expect(page.locator("h1")).toContainText(/Sydney CBD/);
  });

  test("suburb+service combo page loads", async ({ page }) => {
    await page.goto(
      "/locations/sydney/city-of-sydney/sydney-cbd/services/cockroach-treatment"
    );
    await expect(page).toHaveTitle(/Cockroach Treatment.*Sydney CBD/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("404 page for invalid route", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.locator("text=404")).toBeVisible();
  });

  test("header navigation links work", async ({ page }) => {
    await page.goto("/");

    // Click Services link
    await page.click('header a[href="/services"]');
    await expect(page).toHaveURL("/services");

    // Click Locations link
    await page.click('header a[href="/locations"]');
    await expect(page).toHaveURL("/locations");

    // Click logo/home link
    await page.click('header a[href="/"]');
    await expect(page).toHaveURL("/");
  });

  test("footer contains company info", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText(/Pest Control Sydney/);
  });

  test("all 20 service slugs resolve", async ({ page }) => {
    const serviceSlugs = [
      "termite-inspection",
      "termite-control",
      "rodent-control",
      "cockroach-treatment",
      "spider-treatment",
      "ant-control",
      "flea-treatment",
      "bedbug-treatment",
      "wasp-removal",
      "silverfish-control",
      "bird-control",
      "pantry-pest-control",
      "drain-fly-treatment",
      "possum-removal",
      "bee-removal",
      "tick-treatment",
      "mite-control",
      "general-pest-control",
      "commercial-pest-control",
      "pre-purchase-inspection",
    ];

    for (const slug of serviceSlugs) {
      const response = await page.goto(`/services/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
    }
  });
});
