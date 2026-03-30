# E2E Test Setup Guide

## Overview

End-to-end (E2E) testing validates complete user workflows using Playwright. This guide covers setup, test execution, and best practices.

## Prerequisites

### Installation

```bash
# Install Playwright
bun add -D @playwright/test

# Install browsers
bunx playwright install
```

### Configuration (`playwright.config.ts`)

```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./__e2e__",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "bun run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
```

## Test Structure

```
__e2e__/
├── auth/
│   ├── signup.spec.ts
│   ├── login.spec.ts
│   ├── password-reset.spec.ts
│   └── oauth.spec.ts
├── dashboard/
│   ├── navigation.spec.ts
│   └── user-settings.spec.ts
├── payments/
│   ├── subscription.spec.ts
│   └── checkout.spec.ts
└── fixtures/
    └── auth.ts
```

## Test Examples

### Signup Flow

```typescript
import { test, expect } from "@playwright/test";

test.describe("User Signup", () => {
  test("complete signup flow", async ({ page }) => {
    // Navigate to signup
    await page.goto("/sign-up");

    // Fill form
    await page.fill('input[name="email"]', "newuser@example.com");
    await page.fill('input[name="password"]', "SecurePass123!");
    await page.fill('input[name="confirmPassword"]', "SecurePass123!");

    // Submit
    await page.click('button[type="submit"]');

    // Verify success
    await expect(page).toHaveURL("/verify-email");
    await expect(page.locator("text=Check your email")).toBeVisible();
  });

  test("shows validation errors for invalid email", async ({ page }) => {
    await page.goto("/sign-up");

    await page.fill('input[name="email"]', "invalid-email");
    await page.fill('input[name="password"]', "password");
    await page.click('button[type="submit"]');

    await expect(page.locator("text=Invalid email")).toBeVisible();
  });
});
```

### Login Flow

```typescript
test("login with email and password", async ({ page }) => {
  // Create test user first
  await createTestUser("test@example.com", "TestPass123!");

  // Navigate to login
  await page.goto("/sign-in");

  // Fill credentials
  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "TestPass123!");

  // Submit
  await page.click('button[type="submit"]');

  // Verify logged in
  await expect(page).toHaveURL("/dashboard");
  await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
});
```

### OAuth Flow

```typescript
test("login with Google OAuth", async ({ page }) => {
  await page.goto("/sign-in");

  // Click Google button
  await page.click('button:has-text("Google")');

  // Mock OAuth flow
  await mockGoogleOAuth(page, {
    email: "user@gmail.com",
    name: "Test User",
  });

  // Verify logged in
  await expect(page).toHaveURL("/dashboard");
});
```

### Settings Page

```typescript
test("update user settings", async ({ page, authenticatedContext }) => {
  // Use authenticated context (pre-logged-in)
  const authenticatedPage = await authenticatedContext.newPage();
  await authenticatedPage.goto("/settings");

  // Update settings
  await authenticatedPage.fill('input[name="language"]', "es");
  await authenticatedPage.selectOption('select[name="theme"]', "dark");

  // Save
  await authenticatedPage.click('button:has-text("Save")');

  // Verify success message
  await expect(
    authenticatedPage.locator("text=Settings updated"),
  ).toBeVisible();

  // Verify persistence
  await authenticatedPage.reload();
  await expect(
    authenticatedPage.selectOption('select[name="theme"]'),
  ).toHaveValue("dark");
});
```

## Fixtures for Test Context

### Authenticated Users

```typescript
// fixtures/auth.ts
import { test as base } from "@playwright/test";

export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    // Sign in
    await page.goto("/sign-in");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "TestPass123!");
    await page.click('button[type="submit"]');

    // Wait for redirect
    await page.waitForURL("/dashboard");

    // Use the authenticated page
    await use(page);
  },
});

export { expect };
```

### Test Data helpers

```typescript
// fixtures/helpers.ts
import { Page } from "@playwright/test";

export async function createTestUser(
  page: Page,
  email: string,
  password: string,
) {
  // Use API to create user
  const response = await page.request.post("/api/auth/register", {
    data: { email, password },
  });
  return response.json();
}

export async function mockGoogleOAuth(
  page: Page,
  userData: { email: string; name: string },
) {
  // Intercept Google OAuth callback
  await page.route("**/accounts.google.com/**", async (route) => {
    await route.abort();
  });

  // Simulate callback
  const callbackUrl = new URL(page.url());
  callbackUrl.searchParams.set("code", "mock-google-code");
  await page.goto(callbackUrl.toString());
}
```

## Common Patterns

### Wait for Element

```typescript
// Wait for element to appear
await page.waitForSelector('[data-testid="success-message"]');

// Wait for element to be visible
await expect(page.locator("button")).toBeVisible();

// Wait for specific state
await page.waitForLoadState("networkidle");
```

### Handle Navigation

```typescript
// Wait for navigation
await Promise.all([page.waitForNavigation(), page.click("button")]);

// Or with URL matching
await page.goto("/page");
await expect(page).toHaveURL("/page");
```

### Form Interactions

```typescript
// Fill and submit form
await page.fill('input[name="email"]', "test@example.com");
await page.selectOption('select[name="option"]', "value");
await page.check('input[type="checkbox"]');
await page.click('button[type="submit"]');

// Multi-step form
await page.click('button:has-text("Next")');
await expect(page.locator("h1")).toContainText("Step 2");
```

### API Interception

```typescript
// Mock API response
await page.route("**/api/user/**", async (route) => {
  await route.abort("failed");
});

// Verify API call
const requestPromise = page.waitForEvent("request");
await page.click("button");
const request = await requestPromise;
expect(request.url()).toContain("/api/endpoint");
```

## Debugging

```bash
# Run tests in headed mode (see browser)
bun run e2e:headed

# Run specific test with debug
bun run e2e:debug -- auth/login.spec.ts

# Generate report
bun run e2e:report

# Record video
PWVIDEO=on bun run e2e
```

## CI/CD Integration

```yaml
# .github/workflows/e2e.yml
name: E2E Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run e2e
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Best Practices

- ✓ Use `data-testid` attributes for reliable selectors
- ✓ Wait for elements explicitly before interaction
- ✓ Use fixtures for common setup
- ✓ Mock external APIs
- ✓ Run tests in parallel
- ✓ Use page objects for complex pages
- ✓ Keep tests focused on user behavior
- ✗ Avoid hardcoded delays (use `waitFor` instead)
- ✗ Avoid testing implementation details
- ✗ Don't share state between tests
