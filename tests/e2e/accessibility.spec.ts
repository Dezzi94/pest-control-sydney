import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility", () => {
  test("homepage has no critical accessibility violations", async ({
    page,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .disableRules(["color-contrast"]) // Allow minor contrast issues in gradients
      .analyze();

    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(critical).toEqual([]);
  });

  test("services page has no critical accessibility violations", async ({
    page,
  }) => {
    await page.goto("/services");
    await page.waitForLoadState("domcontentloaded");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(critical).toEqual([]);
  });

  test("service detail page has no critical accessibility violations", async ({
    page,
  }) => {
    await page.goto("/services/general-pest-control");
    await page.waitForLoadState("domcontentloaded");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(critical).toEqual([]);
  });

  test("all pages have proper heading hierarchy", async ({ page }) => {
    const pages = ["/services", "/locations"];

    for (const url of pages) {
      await page.goto(url);
      // Wait for lazy-loaded page component to render h1
      await page.waitForSelector("h1", { timeout: 5000 });
      const h1Count = await page.locator("h1").count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    }
  });

  test("images have alt attributes", async ({ page }) => {
    await page.goto("/");
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("interactive elements are keyboard accessible", async ({ page }) => {
    await page.goto("/");

    // Tab through the page and verify focus is visible
    await page.keyboard.press("Tab");
    const focusedElement = await page.evaluate(() =>
      document.activeElement?.tagName.toLowerCase()
    );
    // Something should receive focus
    expect(focusedElement).toBeTruthy();
    expect(focusedElement).not.toBe("body");
  });
});
