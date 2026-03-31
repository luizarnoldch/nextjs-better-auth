import type { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";
import type { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";
import type { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";
import type { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js";
import type { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js";
import type { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionupdatedpayload.js";
import prisma from "@/lib/prisma";

const syncUserSubscription = async ({
  userId,
  polarProductId,
  endAt,
  startedAt,
}: {
  userId: string;
  polarProductId: string;
  endAt: Date | null;
  startedAt: Date | null;
}) => {
  const subscription = await prisma.subscription.findUnique({
    where: { polarExternalId: polarProductId },
  });

  if (!subscription) {
    console.warn(
      "syncUserSubscription: no Subscription found for productId",
      polarProductId,
    );
    return;
  }

  const endedAtForPreviousSubscriptions = startedAt ?? new Date();

  await prisma.$transaction([
    prisma.userSubscription.upsert({
      where: {
        userId_subscriptionId: { userId, subscriptionId: subscription.id },
      },
      create: { userId, subscriptionId: subscription.id, endAt },
      update: { endAt },
    }),
    prisma.userSubscription.updateMany({
      where: {
        userId,
        subscriptionId: { not: subscription.id },
        endAt: null,
      },
      data: { endAt: endedAtForPreviousSubscriptions },
    }),
  ]);
};

export const onSubscriptionCreated = async (
  payload: WebhookSubscriptionCreatedPayload,
) => {
  const { data } = payload;
  const userId = data.customer.externalId;

  if (!userId) {
    console.warn("onSubscriptionCreated: missing customer.externalId", data.id);
    return;
  }

  const endAt = data.endsAt ?? data.trialEnd ?? null;

  await syncUserSubscription({
    userId,
    polarProductId: data.productId,
    endAt,
    startedAt: data.startedAt,
  });
};

export const onSubscriptionUpdated = async (
  payload: WebhookSubscriptionUpdatedPayload,
) => {
  const { data } = payload;
  const userId = data.customer.externalId;

  if (!userId) {
    console.warn("onSubscriptionUpdated: missing customer.externalId", data.id);
    return;
  }

  const endAt = data.endsAt ?? data.trialEnd ?? null;

  await syncUserSubscription({
    userId,
    polarProductId: data.productId,
    endAt,
    startedAt: data.startedAt,
  });
};

export const onSubscriptionActive = async (
  payload: WebhookSubscriptionActivePayload,
) => {
  // console.log("Subscription active", payload);
};

export const onSubscriptionCanceled = async (
  payload: WebhookSubscriptionCanceledPayload,
) => {
  const { data } = payload;
  const userId = data.customer.externalId;

  if (!userId) {
    console.warn(
      "onSubscriptionCanceled: missing customer.externalId",
      data.id,
    );
    return;
  }

  const subscription = await prisma.subscription.findUnique({
    where: { polarExternalId: data.productId },
  });

  if (!subscription) {
    console.warn(
      "onSubscriptionCanceled: no Subscription found for productId",
      data.productId,
    );
    return;
  }

  const endAt = data.endsAt ?? data.currentPeriodEnd ?? null;

  await prisma.userSubscription.updateMany({
    where: { userId, subscriptionId: subscription.id },
    data: { endAt },
  });
};

export const onSubscriptionRevoked = async (
  payload: WebhookSubscriptionRevokedPayload,
) => {
  const { data } = payload;
  const userId = data.customer.externalId;

  if (!userId) {
    console.warn("onSubscriptionRevoked: missing customer.externalId", data.id);
    return;
  }

  const subscription = await prisma.subscription.findUnique({
    where: { polarExternalId: data.productId },
  });

  if (!subscription) {
    console.warn(
      "onSubscriptionRevoked: no Subscription found for productId",
      data.productId,
    );
    return;
  }

  await prisma.userSubscription.deleteMany({
    where: { userId, subscriptionId: subscription.id },
  });
};

export const onSubscriptionUncanceled = async (
  payload: WebhookSubscriptionUncanceledPayload,
) => {
  const { data } = payload;
  const userId = data.customer.externalId;

  if (!userId) {
    console.warn(
      "onSubscriptionUncanceled: missing customer.externalId",
      data.id,
    );
    return;
  }

  const subscription = await prisma.subscription.findUnique({
    where: { polarExternalId: data.productId },
  });

  if (!subscription) {
    console.warn(
      "onSubscriptionUncanceled: no Subscription found for productId",
      data.productId,
    );
    return;
  }

  await prisma.userSubscription.updateMany({
    where: { userId, subscriptionId: subscription.id },
    data: { endAt: null },
  });
};
