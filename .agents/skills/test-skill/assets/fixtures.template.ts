// import { describe, test, beforeEach, vi } from "vitest";

// /**
//  * Test Fixtures Template
//  *
//  * This template provides reusable test data that maintains consistency
//  * across multiple test files and avoids duplication.
//  */

// // ============================================================================
// // USER FIXTURES
// // ============================================================================

// export const userFixtures = {
//   // Basic verified user
//   basicUser: {
//     id: "user-basic",
//     email: "basic@example.com",
//     name: "Basic User",
//     emailVerified: true,
//     twoFactorEnabled: false,
//     createdAt: new Date("2024-01-01"),
//     updatedAt: new Date("2024-01-01"),
//   },

//   // Unverified user (email not verified)
//   unverifiedUser: {
//     id: "user-unverified",
//     email: "unverified@example.com",
//     name: "Unverified User",
//     emailVerified: false,
//     twoFactorEnabled: false,
//     createdAt: new Date("2024-01-02"),
//     updatedAt: new Date("2024-01-02"),
//   },

//   // User with 2FA enabled
//   userWith2FA: {
//     id: "user-2fa",
//     email: "2fa@example.com",
//     name: "User with 2FA",
//     emailVerified: true,
//     twoFactorEnabled: true,
//     createdAt: new Date("2024-01-03"),
//     updatedAt: new Date("2024-01-03"),
//   },

//   // Admin user
//   adminUser: {
//     id: "user-admin",
//     email: "admin@example.com",
//     name: "Admin User",
//     emailVerified: true,
//     twoFactorEnabled: true,
//     role: "admin",
//     createdAt: new Date("2023-12-01"),
//     updatedAt: new Date("2024-01-10"),
//   },

//   // Premium user
//   premiumUser: {
//     id: "user-premium",
//     email: "premium@example.com",
//     name: "Premium User",
//     emailVerified: true,
//     twoFactorEnabled: true,
//     plan: "premium",
//     subscriptionExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
//     createdAt: new Date("2023-06-01"),
//     updatedAt: new Date("2024-01-10"),
//   },
// };

// // ============================================================================
// // SESSION FIXTURES
// // ============================================================================

// export const sessionFixtures = {
//   // Valid, non-expired session
//   validSession: {
//     id: "session-valid",
//     userId: "user-basic",
//     expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//     createdAt: new Date(),
//     ipAddress: "192.168.1.1",
//     userAgent: "Mozilla/5.0 (Test)",
//   },

//   // Expired session
//   expiredSession: {
//     id: "session-expired",
//     userId: "user-basic",
//     expiresAt: new Date(Date.now() - 1000),
//     createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
//     ipAddress: "192.168.1.2",
//     userAgent: "Mozilla/5.0 (Test)",
//   },

//   // Session expiring soon
//   soonToExpireSession: {
//     id: "session-expiring",
//     userId: "user-basic",
//     expiresAt: new Date(Date.now() + 1000),
//     createdAt: new Date(),
//     ipAddress: "192.168.1.3",
//     userAgent: "Mozilla/5.0 (Test)",
//   },
// };

// // ============================================================================
// // ORGANIZATION FIXTURES
// // ============================================================================

// export const organizationFixtures = {
//   // Basic organization
//   basicOrg: {
//     id: "org-basic",
//     name: "Basic Organization",
//     slug: "basic-org",
//     ownerId: "user-basic",
//     createdAt: new Date("2024-01-01"),
//     updatedAt: new Date("2024-01-01"),
//     logo: null,
//   },

//   // Organization with logo
//   orgWithLogo: {
//     id: "org-logo",
//     name: "Org With Logo",
//     slug: "org-with-logo",
//     ownerId: "user-basic",
//     logo: "https://example.com/logo.png",
//     createdAt: new Date("2024-01-02"),
//     updatedAt: new Date("2024-01-02"),
//   },

//   // Enterprise organization
//   enterpriseOrg: {
//     id: "org-enterprise",
//     name: "Enterprise Organization",
//     slug: "enterprise-org",
//     ownerId: "user-admin",
//     plan: "enterprise",
//     maxMembers: 1000,
//     createdAt: new Date("2023-06-01"),
//     updatedAt: new Date("2024-01-10"),
//   },
// };

// // ============================================================================
// // FORM INPUT FIXTURES
// // ============================================================================

// export const formInputFixtures = {
//   // Valid email/password signup
//   validSignup: {
//     email: "newuser@example.com",
//     password: "SecurePass123!",
//     confirmPassword: "SecurePass123!",
//     name: "New User",
//   },

//   // Invalid email formats
//   invalidEmails: [
//     "notanemail",
//     "missing@domain",
//     "@example.com",
//     "spaces in@example.com",
//     "double@@example.com",
//   ],

//   // Weak passwords
//   weakPasswords: [
//     "123", // Too short
//     "password", // No uppercase or numbers
//     "PASSWORD", // No lowercase or numbers
//     "Pass", // Too short
//   ],

//   // Valid password options
//   validPasswords: [
//     "SecurePass123!",
//     "MyP@ssw0rd",
//     "Str0ng!Pass",
//     "C0mpl3x#Pwd",
//   ],

//   // Valid login request
//   validLogin: {
//     email: "test@example.com",
//     password: "SecurePass123!",
//   },

//   // Invalid login attempts
//   invalidLogins: [
//     {
//       email: "nonexistent@example.com",
//       password: "Password123!",
//       error: "User not found",
//     },
//     {
//       email: "test@example.com",
//       password: "WrongPassword",
//       error: "Invalid credentials",
//     },
//   ],
// };

// // ============================================================================
// // PAYMENT/SUBSCRIPTION FIXTURES
// // ============================================================================

// export const subscriptionFixtures = {
//   // Active starter plan
//   activeStarter: {
//     id: "sub-starter",
//     userId: "user-basic",
//     plan: "starter",
//     status: "active",
//     currentPeriodStart: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
//     currentPeriodEnd: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
//     price: 9.99,
//     currency: "USD",
//     billingCycle: "month",
//   },

//   // Active premium plan
//   activePremium: {
//     id: "sub-premium",
//     userId: "user-premium",
//     plan: "premium",
//     status: "active",
//     currentPeriodStart: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
//     currentPeriodEnd: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000),
//     price: 29.99,
//     currency: "USD",
//     billingCycle: "month",
//   },

//   // Cancelled subscription
//   cancelled: {
//     id: "sub-cancelled",
//     userId: "user-basic",
//     plan: "pro",
//     status: "cancelled",
//     currentPeriodEnd: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
//     cancelledAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
//   },

//   // Past due subscription
//   pastDue: {
//     id: "sub-past-due",
//     userId: "user-basic",
//     plan: "premium",
//     status: "past_due",
//     currentPeriodEnd: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
//   },
// };

// // ============================================================================
// // EMAIL FIXTURES
// // ============================================================================

// export const emailFixtures = {
//   // Verification email
//   verificationEmail: {
//     to: "user@example.com",
//     subject: "Verify your email address",
//     from: "noreply@example.com",
//     template: "email-verification",
//     data: {
//       verificationCode: "123456",
//       expiryMinutes: 30,
//     },
//   },

//   // Password reset email
//   passwordResetEmail: {
//     to: "user@example.com",
//     subject: "Reset your password",
//     from: "noreply@example.com",
//     template: "password-reset",
//     data: {
//       resetToken: "reset-token-12345",
//       expiryMinutes: 60,
//     },
//   },

//   // Invitation email
//   invitationEmail: {
//     to: "invited@example.com",
//     subject: "You are invited to join Example Organization",
//     from: "noreply@example.com",
//     template: "team-invitation",
//     data: {
//       senderName: "Admin User",
//       organizationName: "Example Organization",
//       invitationToken: "invite-token-12345",
//     },
//   },
// };

// // ============================================================================
// // API RESPONSE FIXTURES
// // ============================================================================

// export const apiResponseFixtures = {
//   // Success response
//   successResponse: {
//     success: true,
//     data: {
//       id: "item-123",
//       name: "Test Item",
//     },
//   },

//   // Error response
//   errorResponse: {
//     success: false,
//     error: "Something went wrong",
//     code: "INTERNAL_ERROR",
//   },

//   // Validation error
//   validationError: {
//     success: false,
//     error: "Validation failed",
//     code: "VALIDATION_ERROR",
//     errors: {
//       email: "Invalid email format",
//       password: "Password must be at least 8 characters",
//     },
//   },

//   // Not found response
//   notFoundResponse: {
//     success: false,
//     error: "Resource not found",
//     code: "NOT_FOUND",
//   },

//   // Unauthorized response
//   unauthorizedResponse: {
//     success: false,
//     error: "Authentication required",
//     code: "UNAUTHORIZED",
//   },
// };

// // ============================================================================
// // UTILITY FUNCTIONS
// // ============================================================================

// /**
//  * Create test user with custom overrides
//  */
// export function createTestUser(overrides = {}) {
//   return {
//     ...userFixtures.basicUser,
//     id: `user-${Math.random().toString(36).substr(2, 9)}`,
//     ...overrides,
//   };
// }

// /**
//  * Create test organization with custom overrides
//  */
// export function createTestOrg(overrides = {}) {
//   return {
//     ...organizationFixtures.basicOrg,
//     id: `org-${Math.random().toString(36).substr(2, 9)}`,
//     ...overrides,
//   };
// }

// /**
//  * Create test session with custom overrides
//  */
// export function createTestSession(userId: string, overrides = {}) {
//   return {
//     ...sessionFixtures.validSession,
//     id: `session-${Math.random().toString(36).substr(2, 9)}`,
//     userId,
//     ...overrides,
//   };
// }

// // ============================================================================
// // USAGE EXAMPLE
// // ============================================================================

// /**
//  * Example usage in test files:
//  *
//  * import { userFixtures, createTestUser } from '@/lib/test/fixtures';
//  *
//  * describe('User Service', () => {
//  *   test('creates user with valid data', () => {
//  *     const user = createTestUser({
//  *       email: 'custom@example.com'
//  *     });
//  *
//  *     expect(user.email).toBe('custom@example.com');
//  *   });
//  * });
//  */

// export default {
//   userFixtures,
//   sessionFixtures,
//   organizationFixtures,
//   formInputFixtures,
//   subscriptionFixtures,
//   emailFixtures,
//   apiResponseFixtures,
//   createTestUser,
//   createTestOrg,
//   createTestSession,
// };
