import type { betterAuth } from "better-auth";
import { createAuthMiddleware } from "better-auth/api";
import prisma from "@/lib/prisma";

async function assignDefaultFreeSubscription(userId: string) {
  const freeSubscriptions = await prisma.subscription.findFirst({
    where: {
      isFree: true,
      isArchived: false,
    },
    select: {
      id: true,
    },
  });

  if (!freeSubscriptions) {
    console.warn("No free subscription found to assign to new user.");
    return;
  }

  const currentFree = await prisma.userSubscription.findFirst({
    where: {
      userId,
      subscriptionId: freeSubscriptions.id,
      state: "active",
    },
    select: { id: true },
  });

  if (currentFree) {
    return;
  }

  await prisma.userSubscription.create({
    data: {
      userId,
      subscriptionId: freeSubscriptions.id,
      state: "active",
      startedAt: new Date(),
    },
  });
}

/**
 * Better Auth Hooks configuration
 *
 * hooks allow you to intercept the authentication lifecycle.
 * - `before`: runs before an endpoint is executed. Use for validation or context modification.
 * - `after`: runs after an endpoint is executed. Use for post-auth logic (e.g., logging, background tasks).
 */
export const hooksOptions: Parameters<typeof betterAuth>[0]["hooks"] = {
  /**
   * Runs before the endpoint logic.
   * Useful for domain restrictions, pre-validation, or context tweaking.
   */
  before: createAuthMiddleware(async (_ctx) => {
    // Example: Restricted domain check
    // if (ctx.path === "/sign-up/email") {
    //   if (!ctx.body?.email.endsWith("@yourdomain.com")) {
    //     throw new APIError("BAD_REQUEST", { message: "Only yourdomain.com emails are allowed" });
    //   }
    // }

    // You can also return a modified context if needed
    return;
  }),

  /**
   * Runs after the endpoint logic.
   * Great for side-effects like analytics, notifications, or audit trails.
   */
  after: createAuthMiddleware(async (ctx) => {
    if (ctx.path === "/sign-up/email") {
      const newSession = ctx.context.newSession;
      if (newSession) {
        await assignDefaultFreeSubscription(newSession.user.id);
      }
    }

    return;
  }),
};
