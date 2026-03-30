// import { test, expect } from "@playwright/test";

// /**
//  * End-to-End Test Template
//  *
//  * This template demonstrates the structure and best practices for writing
//  * E2E tests using Playwright.
//  */

// test.describe("Complete User Workflow", () => {
//   // URL of the application
//   const baseURL = "http://localhost:3000";

//   test.beforeEach(async ({ page }) => {
//     // Navigate to home page before each test
//     await page.goto(baseURL);
//   });

//   test.describe("Authentication", () => {
//     test("user can sign up with email and password", async ({ page }) => {
//       // Navigate to signup page
//       await page.goto(`${baseURL}/sign-up`);

//       // Fill form fields
//       await page.fill('input[name="email"]', "newuser@example.com");
//       await page.fill('input[name="password"]', "SecurePass123!");
//       await page.fill('input[name="confirmPassword"]', "SecurePass123!");

//       // Submit form
//       await page.click('button[type="submit"]');

//       // Verify success - redirected to verification page
//       await expect(page).toHaveURL(/verify-email/);
//       await expect(page.locator("text=Check your email")).toBeVisible();
//     });

//     test("user can log in with valid credentials", async ({ page }) => {
//       // Navigate to login page
//       await page.goto(`${baseURL}/sign-in`);

//       // Fill credentials
//       await page.fill('input[name="email"]', "test@example.com");
//       await page.fill('input[name="password"]', "SecurePass123!");

//       // Submit
//       await page.click('button[type="submit"]');

//       // Verify logged in - redirected to dashboard
//       await expect(page).toHaveURL(/dashboard/);
//       await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
//     });

//     test("user sees error with invalid credentials", async ({ page }) => {
//       await page.goto(`${baseURL}/sign-in`);

//       await page.fill('input[name="email"]', "test@example.com");
//       await page.fill('input[name="password"]', "WrongPassword");

//       await page.click('button[type="submit"]');

//       // Verify error message displayed
//       await expect(page.locator("text=Invalid credentials")).toBeVisible();
//     });

//     test("user can log out", async ({ page }) => {
//       // First log in
//       await page.goto(`${baseURL}/sign-in`);
//       await page.fill('input[name="email"]', "test@example.com");
//       await page.fill('input[name="password"]', "SecurePass123!");
//       await page.click('button[type="submit"]');

//       // Wait for dashboard
//       await expect(page).toHaveURL(/dashboard/);

//       // Log out
//       await page.click('[data-testid="user-menu"]');
//       await page.click('button:has-text("Logout")');

//       // Verify redirected to login
//       await expect(page).toHaveURL(/sign-in/);
//     });
//   });

//   test.describe("Dashboard Navigation", () => {
//     test("authenticated user can navigate dashboard", async ({ page }) => {
//       // Login first
//       await page.goto(`${baseURL}/sign-in`);
//       await page.fill('input[name="email"]', "test@example.com");
//       await page.fill('input[name="password"]', "SecurePass123!");
//       await page.click('button[type="submit"]');

//       // Access dashboard
//       await page.goto(`${baseURL}/dashboard`);
//       await expect(page.locator("h1")).toContainText("Dashboard");

//       // Navigate to different sections
//       await page.click('a:has-text("Settings")');
//       await expect(page).toHaveURL(/settings/);

//       // Navigate back
//       await page.click('a:has-text("Dashboard")');
//       await expect(page).toHaveURL(/dashboard/);
//     });

//     test("unauthenticated user is redirected to login", async ({ page }) => {
//       // Try to access protected page
//       await page.goto(`${baseURL}/dashboard`);

//       // Should redirect to login
//       await expect(page).toHaveURL(/sign-in/);
//     });
//   });

//   test.describe("Form Validation", () => {
//     test("signup form validates email format", async ({ page }) => {
//       await page.goto(`${baseURL}/sign-up`);

//       // Enter invalid email
//       await page.fill('input[name="email"]', "invalid-email");
//       await page.click('button[type="submit"]');

//       // Verify error message
//       await expect(page.locator("text=Invalid email")).toBeVisible();

//       // Form should not submit
//       await expect(page).toHaveURL(/sign-up/);
//     });

//     test("signup form validates password strength", async ({ page }) => {
//       await page.goto(`${baseURL}/sign-up`);

//       await page.fill('input[name="email"]', "test@example.com");
//       await page.fill('input[name="password"]', "123"); // Too weak
//       await page.click('button[type="submit"]');

//       // Verify error message
//       await expect(
//         page.locator("text=Password must be at least"),
//       ).toBeVisible();
//     });

//     test("signup form validates password confirmation", async ({ page }) => {
//       await page.goto(`${baseURL}/sign-up`);

//       await page.fill('input[name="email"]', "test@example.com");
//       await page.fill('input[name="password"]', "SecurePass123!");
//       await page.fill('input[name="confirmPassword"]', "DifferentPass123!");
//       await page.click('button[type="submit"]');

//       // Verify error message
//       await expect(page.locator("text=Passwords do not match")).toBeVisible();
//     });
//   });

//   test.describe("Responsive Design", () => {
//     test("layout adapts to mobile viewport", async ({ page, context }) => {
//       // Create mobile context
//       const mobileContext = await context.browser()?.newContext({
//         viewport: { width: 375, height: 667 },
//       });

//       const mobilePage = await mobileContext!.newPage();

//       await mobilePage.goto(`${baseURL}/sign-in`);

//       // Verify mobile layout elements
//       const mobileMenu = mobilePage.locator('[data-testid="mobile-menu"]');
//       await expect(mobileMenu).toBeVisible();

//       const desktopNav = mobilePage.locator('[data-testid="desktop-nav"]');
//       await expect(desktopNav).not.toBeVisible();

//       await mobileContext?.close();
//     });
//   });
// });

// /**
//  * Playwright Best Practices:
//  *
//  * 1. Selectors (in order of preference):
//  *    - data-testid attribute
//  *    - text content (has-text)
//  *    - role + accessible name
//  *    - CSS selectors (last resort)
//  *
//  * 2. Waits:
//  *    - Use implicit waits (Playwright waits automatically)
//  *    - Use waitForURL for navigation
//  *    - Use waitForSelector for dynamic content
//  *    - Use toBeVisible for element visibility
//  *
//  * 3. Structure:
//  *    - Use test.describe for grouping
//  *    - Use test.beforeEach for setup
//  *    - Use test.afterEach for cleanup
//  *    - Keep tests focused and independent
//  *
//  * 4. Interactions:
//  *    - page.fill() for inputs
//  *    - page.click() for buttons
//  *    - page.selectOption() for dropdowns
//  *    - page.check() for checkboxes
//  *    - page.waitForNavigation() for page loads
//  *
//  * 5. Assertions:
//  *    - expect(page).toHaveURL(/path/)
//  *    - expect(element).toBeVisible()
//  *    - expect(element).toHaveText('text')
//  *    - expect(element).toHaveAttribute('attr', 'value')
//  *    - expect(element).toBeDisabled()
//  *
//  * Tips:
//  * - Test complete user workflows
//  * - Run tests in a real browser
//  * - Use fixtures for authentication state
//  * - Mock external APIs
//  * - Take screenshots on failure (automatic)
//  * - Run headless for CI, headed for debugging
//  * - Keep tests independent (no shared state)
//  * - Use descriptive test names
//  */
