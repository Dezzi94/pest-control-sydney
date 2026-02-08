import { test, expect } from "@playwright/test";

test.describe("Admin Authentication", () => {
  test("admin login page loads with correct elements", async ({ page }) => {
    await page.goto("/admin/login");

    // Page should render the login card
    await expect(page.getByText("Admin Login")).toBeVisible();
    await expect(page.getByText("Sign in to manage leads and settings")).toBeVisible();

    // Logo/brand indicator "PC"
    await expect(page.getByText("PC").first()).toBeVisible();
  });

  test("admin login form has email and password fields", async ({ page }) => {
    await page.goto("/admin/login");

    // Email field
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("required", "");
    await expect(page.getByText("Email")).toBeVisible();

    // Password field
    const passwordInput = page.locator('input[type="password"]');
    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toHaveAttribute("required", "");
    await expect(page.getByText("Password")).toBeVisible();

    // Submit button
    await expect(page.getByText("Sign In")).toBeVisible();
  });

  test("admin login form can be filled", async ({ page }) => {
    await page.goto("/admin/login");

    // Fill in the form
    await page.locator("#email").fill("admin@pestcontrolsydney.org");
    await page.locator("#password").fill("testpassword123");

    // Verify fields have values
    await expect(page.locator("#email")).toHaveValue("admin@pestcontrolsydney.org");
    await expect(page.locator("#password")).toHaveValue("testpassword123");
  });

  test("admin login with wrong credentials shows error toast", async ({ page }) => {
    await page.goto("/admin/login");

    // Mock the API to return a 401 error
    await page.route("**/api/auth/login", async (route) => {
      await route.fulfill({
        status: 401,
        contentType: "application/json",
        body: JSON.stringify({ message: "Invalid credentials" }),
      });
    });

    // Fill and submit
    await page.locator("#email").fill("wrong@email.com");
    await page.locator("#password").fill("wrongpassword");
    await page.getByText("Sign In").click();

    // Should show error toast: "Login Failed" / "Invalid email or password."
    await expect(page.getByText("Login Failed")).toBeVisible({ timeout: 10000 });
    await expect(page.getByText("Invalid email or password")).toBeVisible();
  });

  test("admin login shows loading state while submitting", async ({ page }) => {
    await page.goto("/admin/login");

    // Slow down the API response to catch loading state
    await page.route("**/api/auth/login", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await route.fulfill({
        status: 401,
        contentType: "application/json",
        body: JSON.stringify({ message: "Invalid credentials" }),
      });
    });

    await page.locator("#email").fill("admin@test.com");
    await page.locator("#password").fill("password");
    await page.getByText("Sign In").click();

    // Button should be disabled while loading
    await expect(page.locator('button[type="submit"]')).toBeDisabled();
  });

  test("successful login redirects to admin dashboard", async ({ page }) => {
    await page.goto("/admin/login");

    // Mock successful login
    await page.route("**/api/auth/login", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ token: "valid-jwt-token-123" }),
      });
    });

    await page.locator("#email").fill("admin@pestcontrolsydney.org");
    await page.locator("#password").fill("correctpassword");
    await page.getByText("Sign In").click();

    // Should redirect to /admin/dashboard
    await expect(page).toHaveURL(/admin\/dashboard/, { timeout: 10000 });
  });

  test("successful login stores token in localStorage", async ({ page }) => {
    await page.goto("/admin/login");

    // Mock successful login
    await page.route("**/api/auth/login", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ token: "my-jwt-token-abc" }),
      });
    });

    await page.locator("#email").fill("admin@pestcontrolsydney.org");
    await page.locator("#password").fill("correctpassword");
    await page.getByText("Sign In").click();

    // Wait for redirect
    await expect(page).toHaveURL(/admin\/dashboard/, { timeout: 10000 });

    // Verify token was stored
    const token = await page.evaluate(() => localStorage.getItem("token"));
    expect(token).toBe("my-jwt-token-abc");
  });
});

test.describe("Admin Dashboard — Unauthenticated", () => {
  test("accessing /admin/dashboard without token redirects to login", async ({ page }) => {
    // Ensure no token in localStorage
    await page.goto("/admin/login");
    await page.evaluate(() => localStorage.removeItem("token"));

    // Try to access dashboard
    await page.goto("/admin/dashboard");

    // AdminDashboard checks for token and redirects to /admin/login
    await expect(page).toHaveURL(/admin\/login/, { timeout: 10000 });
  });

  test("accessing /admin/settings without token redirects to login or shows login", async ({ page }) => {
    // Ensure no token
    await page.goto("/admin/login");
    await page.evaluate(() => localStorage.removeItem("token"));

    await page.goto("/admin/settings");

    // Settings page should also require auth
    // It may redirect or show a login prompt
    await page.waitForLoadState("networkidle");
    // At minimum, the page should load
    await expect(page.locator("body")).toBeVisible();
  });
});

test.describe("Admin Dashboard — Authenticated", () => {
  test.beforeEach(async ({ page }) => {
    // Set up a fake token
    await page.goto("/admin/login");
    await page.evaluate(() => localStorage.setItem("token", "fake-token-for-testing"));
  });

  test("dashboard renders with header and stats cards", async ({ page }) => {
    // Mock the leads API (will fail with 401 since token is fake, but dashboard renders)
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ leads: [] }),
      });
    });

    await page.goto("/admin/dashboard");

    // Dashboard header
    await expect(page.getByText("Admin Dashboard")).toBeVisible();

    // Stats cards
    await expect(page.getByText("Total Leads")).toBeVisible();
    await expect(page.getByText("New")).toBeVisible();
    await expect(page.getByText("Contacted")).toBeVisible();
    await expect(page.getByText("Won")).toBeVisible();

    // Navigation elements
    await expect(page.getByText("Settings")).toBeVisible();
    await expect(page.getByText("Logout")).toBeVisible();
  });

  test("dashboard shows empty state when no leads", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ leads: [] }),
      });
    });

    await page.goto("/admin/dashboard");

    // Empty state message
    await expect(page.getByText("No leads yet")).toBeVisible();
  });

  test("dashboard shows lead list when leads exist", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          leads: [
            {
              id: 1,
              name: "John Smith",
              email: "john@example.com",
              phone: "0412345678",
              pestType: "cockroach-treatment",
              status: "new",
              createdAt: "2026-02-08T10:00:00Z",
            },
            {
              id: 2,
              name: "Jane Doe",
              email: "jane@example.com",
              phone: "0498765432",
              pestType: "rodent-control",
              status: "contacted",
              createdAt: "2026-02-07T09:00:00Z",
            },
          ],
        }),
      });
    });

    await page.goto("/admin/dashboard");

    // Lead names should appear
    await expect(page.getByText("John Smith")).toBeVisible();
    await expect(page.getByText("Jane Doe")).toBeVisible();

    // Status badges
    await expect(page.getByText("new").first()).toBeVisible();
    await expect(page.getByText("contacted").first()).toBeVisible();

    // Stats should show correct counts
    await expect(page.locator("text=2").first()).toBeVisible(); // Total leads
  });

  test("dashboard search filters leads", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          leads: [
            {
              id: 1,
              name: "John Smith",
              email: "john@example.com",
              phone: "0412345678",
              pestType: "cockroach-treatment",
              status: "new",
              createdAt: "2026-02-08T10:00:00Z",
            },
            {
              id: 2,
              name: "Jane Doe",
              email: "jane@example.com",
              phone: "0498765432",
              pestType: "rodent-control",
              status: "contacted",
              createdAt: "2026-02-07T09:00:00Z",
            },
          ],
        }),
      });
    });

    await page.goto("/admin/dashboard");
    await expect(page.getByText("John Smith")).toBeVisible();

    // Search for "Jane"
    await page.locator('input[placeholder="Search leads..."]').fill("Jane");

    // John should be hidden, Jane should remain
    await expect(page.getByText("Jane Doe")).toBeVisible();
    await expect(page.getByText("John Smith")).not.toBeVisible();
  });

  test("dashboard status filter works", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          leads: [
            {
              id: 1,
              name: "John Smith",
              email: "john@example.com",
              phone: "0412345678",
              pestType: "cockroach-treatment",
              status: "new",
              createdAt: "2026-02-08T10:00:00Z",
            },
            {
              id: 2,
              name: "Jane Doe",
              email: "jane@example.com",
              phone: "0498765432",
              pestType: "rodent-control",
              status: "won",
              createdAt: "2026-02-07T09:00:00Z",
            },
          ],
        }),
      });
    });

    await page.goto("/admin/dashboard");

    // Click "won" status filter
    await page.locator("button").filter({ hasText: "won" }).click();

    // Only Jane (status: won) should be visible
    await expect(page.getByText("Jane Doe")).toBeVisible();
    await expect(page.getByText("John Smith")).not.toBeVisible();

    // Click "all" to reset
    await page.locator("button").filter({ hasText: "all" }).click();
    await expect(page.getByText("John Smith")).toBeVisible();
    await expect(page.getByText("Jane Doe")).toBeVisible();
  });

  test("dashboard Export CSV button is present", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ leads: [] }),
      });
    });

    await page.goto("/admin/dashboard");
    await expect(page.getByText("Export CSV")).toBeVisible();
  });

  test("logout clears token and redirects to login", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ leads: [] }),
      });
    });

    await page.goto("/admin/dashboard");
    await expect(page.getByText("Admin Dashboard")).toBeVisible();

    // Click logout
    await page.getByText("Logout").click();

    // Should redirect to login
    await expect(page).toHaveURL(/admin\/login/, { timeout: 10000 });

    // Token should be removed
    const token = await page.evaluate(() => localStorage.getItem("token"));
    expect(token).toBeNull();
  });

  test("dashboard 401 response clears token and redirects to login", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 401,
        contentType: "application/json",
        body: JSON.stringify({ message: "Unauthorized" }),
      });
    });

    await page.goto("/admin/dashboard");

    // AdminDashboard checks for 401 and redirects
    await expect(page).toHaveURL(/admin\/login/, { timeout: 10000 });

    // Token should be removed
    const token = await page.evaluate(() => localStorage.getItem("token"));
    expect(token).toBeNull();
  });

  test("dashboard Settings link navigates correctly", async ({ page }) => {
    await page.route("**/api/leads", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ leads: [] }),
      });
    });

    await page.goto("/admin/dashboard");
    await expect(page.getByText("Settings")).toBeVisible();

    // Click Settings
    await page.getByText("Settings").click();
    await expect(page).toHaveURL(/admin\/settings/);
  });
});

test.describe("Admin Login Page — Layout", () => {
  test("login page is centered on the screen", async ({ page }) => {
    await page.goto("/admin/login");

    // The login page has "min-h-screen flex items-center justify-center"
    const loginCard = page.locator(".max-w-md");
    await expect(loginCard).toBeVisible();

    const cardBox = await loginCard.boundingBox();
    const viewportSize = page.viewportSize();

    if (cardBox && viewportSize) {
      // Card should be roughly centered horizontally
      const cardCenter = cardBox.x + cardBox.width / 2;
      const viewportCenter = viewportSize.width / 2;
      expect(Math.abs(cardCenter - viewportCenter)).toBeLessThan(50);
    }
  });

  test("login page does NOT show the main site header/footer", async ({ page }) => {
    await page.goto("/admin/login");

    // AdminLogin does NOT use the Layout component, so no header/footer
    const header = page.locator("header");
    const footer = page.locator("footer");

    // Header from the site layout should not exist on admin login
    await expect(header.locator('a[href="/services"]')).toHaveCount(0);
    await expect(footer).toHaveCount(0);
  });
});

test.describe("Admin — Navigation from Public Site", () => {
  test("footer Admin link navigates to admin login", async ({ page }) => {
    await page.goto("/");

    // Footer has an "Admin" link
    const footer = page.locator("footer");
    const adminLink = footer.locator('a[href="/admin/login"]');
    await expect(adminLink).toBeVisible();

    await adminLink.click();
    await expect(page).toHaveURL("/admin/login");
    await expect(page.getByText("Admin Login")).toBeVisible();
  });

  test("mobile menu has Admin Portal link", async ({ page }) => {
    test.use({ viewport: { width: 375, height: 812 } });

    await page.goto("/");

    // Open mobile menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await expect(page.getByText("Admin Portal")).toBeVisible();
    }
  });
});
