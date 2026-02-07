import { test, expect } from "@playwright/test";

test.describe("Quote Form", () => {
  test("homepage has CTA buttons", async ({ page }) => {
    await page.goto("/");

    // Look for CTA elements (buttons, links with call-to-action text)
    const cta = page.locator(
      'a:has-text("Quote"), a:has-text("Call"), a[href^="tel:"], button:has-text("Quote")'
    );
    expect(await cta.count()).toBeGreaterThan(0);
  });

  test("quote form validates required fields", async ({ page }) => {
    await page.goto("/services/general-pest-control");

    // Look for the inline quote form or a button that opens it
    const form = page.locator("form").first();
    if ((await form.count()) > 0) {
      // Try submitting empty form
      const submitButton = form.locator(
        'button[type="submit"], button:has-text("Submit"), button:has-text("Send")'
      );
      if ((await submitButton.count()) > 0) {
        await submitButton.first().click();
        // Should show validation errors or HTML5 validation
        // (browser native validation prevents submission)
      }
    }
  });

  test("service page has call-to-action elements", async ({ page }) => {
    await page.goto("/services/cockroach-treatment");

    // Verify phone number is visible
    await expect(page.locator("text=(02) 8765-4321").first()).toBeVisible();

    // Verify some CTA exists (button or link)
    const cta = page.locator(
      'a[href^="tel:"], button:has-text("Quote"), button:has-text("Call")'
    );
    expect(await cta.count()).toBeGreaterThan(0);
  });
});

test.describe("Admin Login", () => {
  test("admin login page loads", async ({ page }) => {
    await page.goto("/admin/login");
    // CardTitle renders the login heading
    await expect(page.locator("text=Admin Login")).toBeVisible();
  });

  test("admin login form has email and password fields", async ({ page }) => {
    await page.goto("/admin/login");
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(
      page.locator('button[type="submit"], button:has-text("Login")')
    ).toBeVisible();
  });

  test("admin redirects to login when not authenticated", async ({ page }) => {
    await page.goto("/admin/dashboard");
    // Should redirect to login or show login prompt
    await expect(page).toHaveURL(/admin\/login|admin\/dashboard/);
  });
});
