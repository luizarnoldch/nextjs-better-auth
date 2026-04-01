import type { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";
import type { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";
import type { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";
import type { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";
import type { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";
import type { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionupdatedpayload.js";
import prisma from "@/lib/prisma";

export const onSubscriptionCreated = async (
  payload: WebhookSubscriptionCreatedPayload,
) => {
  /**
   * NOTES:
   * - Polar sends the subscription.created event when a subscription is created,
   *   but it can not be considered because the userId (data.customer.externalId)
   *   is not guaranteed to be present. It is better to wait for the
   *   subscription.active event to create the subscription in our database.
   *
   * TODO:
   * - The button to start the subscription is on the frontend,
   *   so we can create a subscription with state "pending" and also sync with this
   *   hook till we receive the subscription.active event,
   *   then we can update the subscription to "active".
   *   when the user clicks the button, and then update it to "active"
   *   when we receive the subscription.active event.
   *   This way we can show the subscription in the user's dashboard immediately
   *   after they start the subscription, instead of waiting
   *   for the subscription.active event.
   */
  // const { data } = payload;
  // const userId = data.customer.externalId;
  // const polarSubscriptionId = data.id;
  // await prisma.userSubscription.create({
  //   data: {
  //     userId: userId ?? "",
  //     subscriptionId: data.productId,
  //     polarSubscriptionId,
  //     state: "pending",
  //     trialStartedAt: data.trialStart || null,
  //     trialEndedAt: data.trialEnd || null,
  //     startedAt: data.startedAt || null,
  //   },
  // });
  // const freeSubscription = await prisma.subscription.findFirst({
  //   where: {
  //     isFree: true,
  //   },
  // });
  // if (!freeSubscription) {
  //   console.warn(
  //     "onSubscriptionCreated: no free subscription found, skipping revoking old subscriptions",
  //   );
  //   return;
  // }
  // await prisma.userSubscription.updateMany({
  //   where: {
  //     subscriptionId: freeSubscription.id,
  //   },
  //   data: {
  //     state: "revoked",
  //   },
  // });
};

export const onSubscriptionUpdated = async (
  payload: WebhookSubscriptionUpdatedPayload,
) => {
  const { data } = payload;
  const polarSubscriptionId = data.id;

  if (!polarSubscriptionId) {
    console.warn(
      "onSubscriptionUpdated: missing subscription id, skipping update",
      data,
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: { polarSubscriptionId },
    data: {
      trialStartedAt: data.trialStart || null,
      trialEndedAt: data.trialEnd || null,
      startedAt: data.startedAt || null,
      endedAt: data.endsAt || null,
      endsAt: data.endsAt || null,
      cancelAtPeriodEnd: data.cancelAtPeriodEnd,
    },
  });
};

export const onSubscriptionActive = async (
  payload: WebhookSubscriptionActivePayload,
) => {
  const { data } = payload;
  const polarSubscriptionId = data.id;
  const userId = data.customer.externalId;

  if (!userId) {
    console.warn(
      "onSubscriptionActive: missing user id, skipping update",
      data,
    );
    return;
  }

  if (!polarSubscriptionId) {
    console.warn(
      "onSubscriptionActive: missing subscription id, skipping update",
      data,
    );
    return;
  }

  await prisma.userSubscription.upsert({
    where: {
      userId_subscriptionId_polarSubscriptionId: {
        userId: userId,
        subscriptionId: data.productId,
        polarSubscriptionId,
      },
    },
    update: {
      state: "active",
      trialStartedAt: data.trialStart || null,
      trialEndedAt: data.trialEnd || null,
      startedAt: data.startedAt || null,
      endedAt: data.endsAt || null,
      endsAt: data.endsAt || null,
      cancelAtPeriodEnd: data.cancelAtPeriodEnd,
    },
    create: {
      userId: userId ?? "",
      subscriptionId: data.productId,
      polarSubscriptionId,
      state: "active",
      trialStartedAt: data.trialStart || null,
      trialEndedAt: data.trialEnd || null,
      startedAt: data.startedAt || null,
      endedAt: data.endsAt || null,
      endsAt: data.endsAt || null,
      cancelAtPeriodEnd: data.cancelAtPeriodEnd,
    },
  });

  const freeSubscription = await prisma.subscription.findFirst({
    where: {
      isFree: true,
    },
  });

  if (!freeSubscription) {
    console.warn(
      "onSubscriptionActive: no free subscription found, skipping revoking old subscriptions",
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: {
      subscriptionId: freeSubscription.id,
    },
    data: {
      state: "revoked",
    },
  });
};

export const onSubscriptionCanceled = async (
  payload: WebhookSubscriptionCanceledPayload,
) => {
  const { data } = payload;
  const polarSubscriptionId = data.id;

  if (!polarSubscriptionId) {
    console.warn(
      "onSubscriptionCanceled: missing subscription id, skipping update",
      data,
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: { polarSubscriptionId },
    data: {
      cancelAtPeriodEnd: true,
      canceledAt: data.canceledAt || new Date(),
      trialStartedAt: data.trialStart || null,
      trialEndedAt: data.trialEnd || null,
      startedAt: data.startedAt || null,
      endedAt: data.endsAt || null,
      endsAt: data.endsAt || null,
    },
  });
};

export const onSubscriptionRevoked = async (
  payload: WebhookSubscriptionRevokedPayload,
) => {
  const { data } = payload;
  const polarSubscriptionId = data.id;

  if (!polarSubscriptionId) {
    console.warn(
      "onSubscriptionRevoked: missing subscription id, skipping update",
      data,
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: { polarSubscriptionId },
    data: {
      state: "revoked",
      revokedAt: new Date(),
      endedAt: data.endsAt || new Date(),
      endsAt: data.endsAt || new Date(),
      trialStartedAt: data.trialStart || null,
      trialEndedAt: data.trialEnd || null,
      startedAt: data.startedAt || null,
      cancelAtPeriodEnd: data.cancelAtPeriodEnd,
    },
  });

  const freeSubscription = await prisma.subscription.findFirst({
    where: {
      isFree: true,
    },
  });

  if (!freeSubscription) {
    console.warn(
      "onSubscriptionRevoked: no free subscription found, skipping revoking old subscriptions",
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: {
      subscriptionId: freeSubscription.id,
    },
    data: {
      state: "active",
    },
  });
};

export const onSubscriptionUncanceled = async (
  payload: WebhookSubscriptionUncanceledPayload,
) => {
  const { data } = payload;
  const polarSubscriptionId = data.id;

  if (!polarSubscriptionId) {
    console.warn(
      "onSubscriptionUncanceled: missing subscription id, skipping update",
      data,
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: { polarSubscriptionId },
    data: {
      state: "active",
      cancelAtPeriodEnd: false,
      canceledAt: null,
      trialStartedAt: data.trialStart || null,
      trialEndedAt: data.trialEnd || null,
      startedAt: data.startedAt || null,
      endedAt: data.endsAt || null,
      endsAt: data.endsAt || null,
    },
  });

  const freeSubscription = await prisma.subscription.findFirst({
    where: {
      isFree: true,
    },
  });

  if (!freeSubscription) {
    console.warn(
      "onSubscriptionUncanceled: no free subscription found, skipping revoking old subscriptions",
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: {
      subscriptionId: freeSubscription.id,
    },
    data: {
      state: "revoked",
    },
  });
};
