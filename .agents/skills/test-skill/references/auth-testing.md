# Authentication Testing Guide

## Overview

Authentication testing ensures critical security and user experience workflows function correctly. This guide covers testing email/password authentication, OAuth flows, session management, and 2FA.

## Test Layers for Auth

### Unit Tests

Test individual auth functions and hooks in isolation.

**Examples**:

- `validateEmail()` accepts/rejects email formats
- `validatePassword()` enforces password policies
- `useAuth()` hook returns correct initial state
- Token parsing and validation logic

### Integration Tests

Test auth module interactions with database and other services.

**Examples**:

- Signup creates user and sends verification email
- Password reset generates valid reset token
- Session persistence across requests
- OAuth token exchange and user creation

### E2E Tests

Test complete user workflows through the UI.

**Examples**:

- User signs up with email/password
- User verifies email and logs in
- User resets forgotten password
- User enables 2FA with authenticator app
- Existing user logs in with OAuth provider

## Key Testing Scenarios

### 1. Email/Password Authentication

```typescript
describe("Email/Password Auth", () => {
  test("signup creates user and sends verification email", async () => {
    const { user, verificationEmail } = await signupUser({
      email: "test@example.com",
      password: "SecurePass123!",
    });

    expect(user.email).toBe("test@example.com");
    expect(user.emailVerified).toBe(false);
    expect(verificationEmail).toBeDefined();
  });

  test("login fails with invalid credentials", async () => {
    const error = await loginUser({
      email: "test@example.com",
      password: "WrongPassword",
    });

    expect(error.code).toBe("INVALID_CREDENTIALS");
  });
});
```

### 2. Session Management

Test that sessions persist correctly and expire appropriately.

```typescript
test("session persists across page reloads", async () => {
  // Login
  await page.goto("/sign-in");
  await fillAndSubmitLoginForm(page);

  // Verify logged in
  expect(await page.locator('[data-testid="user-menu"]').isVisible()).toBe(
    true,
  );

  // Reload page
  await page.reload();

  // Verify still logged in
  expect(await page.locator('[data-testid="user-menu"]').isVisible()).toBe(
    true,
  );
});
```

### 3. Password Reset

```typescript
test("password reset flow completes successfully", async () => {
  // Request reset
  const resetEmail = await requestPasswordReset("test@example.com");

  // Extract token from email
  const resetToken = extractResetTokenFromEmail(resetEmail);

  // Reset password
  const result = await resetPassword({
    token: resetToken,
    newPassword: "NewSecurePass123!",
  });

  expect(result.success).toBe(true);

  // Verify old password no longer works
  const loginError = await loginUser({
    email: "test@example.com",
    password: "SecurePass123!", // old password
  });
  expect(loginError).toBeDefined();

  // Verify new password works
  const newLogin = await loginUser({
    email: "test@example.com",
    password: "NewSecurePass123!",
  });
  expect(newLogin.user).toBeDefined();
});
```

### 4. OAuth Provider Flow

```typescript
test("Google OAuth sign-in creates new user", async () => {
  await page.goto("/sign-in");
  await page.click('button:has-text("Sign in with Google")');

  // Simulate Google OAuth callback
  await mockGoogleOAuthFlow(page, {
    email: "user@gmail.com",
    name: "Test User",
  });

  // Verify user created and logged in
  expect(await page.url()).toContain("/dashboard");
  const user = await getCurrentUser();
  expect(user.email).toBe("user@gmail.com");
  expect(user.provider).toBe("google");
});
```

### 5. Two-Factor Authentication

```typescript
test("2FA setup and verification flow", async () => {
  // Navigate to security settings
  await page.goto("/settings/security");

  // Start 2FA setup
  await page.click('button:has-text("Enable 2FA")');
  const secret = await page
    .locator('[data-testid="totp-secret"]')
    .textContent();

  // Scan QR code or enter secret manually
  const authenticator = generateTOTPCode(secret);

  // Verify code
  await page.fill('input[name="verificationCode"]', authenticator);
  await page.click('button:has-text("Verify")');

  // Verify backup codes displayed
  const backupCodes = await page.locator('[data-testid="backup-codes"]');
  expect(await backupCodes.isVisible()).toBe(true);
});
```

## Common Assertions

```typescript
// User state
expect(user.emailVerified).toBe(true);
expect(user.twoFactorEnabled).toBe(true);
expect(user.lastSignInAt).toBeInstanceOf(Date);

// Session cookies
expect(response.headers["set-cookie"]).toContain("sessionId");

// Email verification
expect(verificationEmail.to).toBe("user@example.com");
expect(verificationEmail.text).toContain("verify");

// Error messages
expect(error.code).toBe("INVALID_CREDENTIALS");
expect(error.message).toBeDefined();
```

## Test Data Fixtures

```typescript
export const testUsers = {
  basic: {
    email: "test@example.com",
    password: "TestPass123!",
  },
  verified: {
    email: "verified@example.com",
    password: "TestPass123!",
    emailVerified: true,
  },
  with2FA: {
    email: "2fa@example.com",
    password: "TestPass123!",
    twoFactorEnabled: true,
  },
};
```

## Mocking Strategies

- Mock email service to capture verification codes
- Mock OAuth providers with test accounts
- Mock SMS service for OTP testing
- Use in-memory test database
- Mock external API calls

## Coverage Goals

- All auth endpoints: >90%
- All auth hooks: >85%
- Exception paths: >80%
- Session management: >85%
- Token validation: >90%
