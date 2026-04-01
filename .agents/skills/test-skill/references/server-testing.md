# Server Function Testing Guide

## Overview

Server function testing validates tRPC procedures, API routes, database operations, and business logic that runs on the server.

## Testing Server Functions

### Unit Testing tRPC Procedures

```typescript
import { createCallerFactory } from "@/server/api/root";
import { vi } from "vitest";

describe("Auth tRPC Router", () => {
  test("signup creates user with valid input", async () => {
    const caller = createCallerFactory();

    const result = await caller.auth.signup({
      email: "test@example.com",
      password: "SecurePass123!",
      name: "Test User",
    });

    expect(result.user.email).toBe("test@example.com");
    expect(result.user.id).toBeDefined();
  });

  test("signup fails with duplicate email", async () => {
    const caller = createCallerFactory();

    // Create first user
    await caller.auth.signup({
      email: "test@example.com",
      password: "SecurePass123!",
      name: "Test User",
    });

    // Try to create with same email
    expect(
      caller.auth.signup({
        email: "test@example.com",
        password: "SecurePass123!",
        name: "Another User",
      }),
    ).rejects.toThrow("Email already exists");
  });
});
```

### Integration Testing with Database

```typescript
describe("User Service - Database Integration", () => {
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_TEST,
        },
      },
    });
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  afterEach(async () => {
    // Clean up test data
    await prisma.user.deleteMany();
  });

  test("creates user and associated profile", async () => {
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        name: "Test User",
        profile: {
          create: {
            bio: "Test bio",
            avatar: "https://example.com/avatar.jpg",
          },
        },
      },
      include: { profile: true },
    });

    expect(user.id).toBeDefined();
    expect(user.profile.bio).toBe("Test bio");
  });

  test("updates user settings atomically", async () => {
    // Create user with initial settings
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        emailVerified: false,
      },
    });

    // Update settings
    const updated = await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        lastSignInAt: new Date(),
      },
    });

    expect(updated.emailVerified).toBe(true);
    expect(updated.lastSignInAt).toBeInstanceOf(Date);
  });
});
```

### Testing HTTP API Routes

```typescript
describe("GET /api/user/profile", () => {
  test("returns user profile for authenticated request", async () => {
    const response = await fetch("http://localhost:3000/api/user/profile", {
      method: "GET",
      headers: {
        Cookie: `sessionId=${testSessionId}`,
      },
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.profile).toBeDefined();
    expect(data.profile.email).toBe("test@example.com");
  });

  test("returns 401 for unauthenticated request", async () => {
    const response = await fetch("http://localhost:3000/api/user/profile");

    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data.error).toBeDefined();
  });
});

describe("POST /api/user/settings", () => {
  test("updates user settings with valid input", async () => {
    const response = await fetch("http://localhost:3000/api/user/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `sessionId=${testSessionId}`,
      },
      body: JSON.stringify({
        theme: "dark",
        language: "es",
      }),
    });

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.settings.theme).toBe("dark");
  });

  test("validates input and returns 400 for invalid data", async () => {
    const response = await fetch("http://localhost:3000/api/user/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `sessionId=${testSessionId}`,
      },
      body: JSON.stringify({
        theme: "invalid-theme",
      }),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.errors).toBeDefined();
  });
});
```

### Testing Business Logic

```typescript
describe("PaymentService", () => {
  test("calculates subscription price correctly with discount", () => {
    const price = calculateSubscriptionPrice({
      plan: "pro",
      billingCycle: "annual",
      discountCode: "SAVE20",
    });

    // Pro annual is $120, 20% off = $96
    expect(price).toBe(96);
  });

  test("applies proration for mid-cycle upgrades", () => {
    const date = new Date("2024-06-15");
    const prorationAmount = calculateProration({
      currentPlan: "starter",
      newPlan: "pro",
      cycleStartDate: new Date("2024-06-01"),
      cycleEndDate: new Date("2024-07-01"),
      currentDate: date,
    });

    // Should pro-rate based on remaining days
    expect(prorationAmount).toBeGreaterThan(0);
    expect(prorationAmount).toBeLessThan(
      calculateSubscriptionPrice({ plan: "pro" }),
    );
  });

  test("prevents downgrade during active billing period", async () => {
    const result = await processDowngrade({
      userId: "user123",
      newPlan: "starter",
    });

    expect(result.canDowngrade).toBe(false);
    expect(result.reason).toContain("active billing period");
  });
});
```

### Error Handling Tests

```typescript
describe("Error Handling", () => {
  test("catches and logs database errors", async () => {
    const logSpy = vi.spyOn(console, "error");

    // Simulate database connection error
    vi.mocked(prisma.user.create).mockRejectedValueOnce(
      new Error("Database connection failed"),
    );

    expect(() =>
      caller.user.createUser({ email: "test@example.com" }),
    ).rejects.toThrow("Database connection failed");

    expect(logSpy).toHaveBeenCalled();
    logSpy.mockRestore();
  });

  test("returns user-friendly error messages", async () => {
    const result = await caller.user
      .createUser({
        email: "invalid-email",
      })
      .catch((e) => e);

    expect(result.message).toMatch(/invalid email/i);
    expect(result.code).toBe("INVALID_INPUT");
  });
});
```

### Mocking External Services

```typescript
describe("Email Service Integration", () => {
  beforeEach(() => {
    vi.mock("@/lib/email", () => ({
      sendVerificationEmail: vi.fn().mockResolvedValue({ id: "email123" }),
    }));
  });

  test("sends verification email on signup", async () => {
    const sendEmailSpy = vi.mocked(sendVerificationEmail);

    await caller.auth.signup({
      email: "test@example.com",
      password: "SecurePass123!",
      name: "Test User",
    });

    expect(sendEmailSpy).toHaveBeenCalledWith({
      email: "test@example.com",
      verificationCode: expect.any(String),
    });
  });

  test("handles email sending failure gracefully", async () => {
    vi.mocked(sendVerificationEmail).mockRejectedValueOnce(
      new Error("Email service unavailable"),
    );

    // Should still create user even if email fails
    const result = await caller.auth
      .signup({
        email: "test@example.com",
        password: "SecurePass123!",
        name: "Test User",
      })
      .catch((e) => e);

    expect(result.user).toBeDefined();
  });
});
```

## Test Data Fixtures

```typescript
export const testServerData = {
  users: [
    {
      id: "user1",
      email: "test1@example.com",
      name: "Test User 1",
    },
    {
      id: "user2",
      email: "test2@example.com",
      name: "Test User 2",
    },
  ],
  sessions: [
    {
      id: "session1",
      userId: "user1",
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  ],
};
```

## Coverage Goals

- All tRPC procedures: >85%
- All API routes: >80%
- Business logic: >90%
- Error paths: >80%
- Database operations: >85%
