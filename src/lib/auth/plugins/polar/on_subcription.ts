import type { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js"
import type { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js"
import type { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js"
import type { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionrevokedpayload.js"
import type { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionuncanceledpayload.js"
import type { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptionupdatedpayload.js"

export const onSubscriptionCreated = async (payload: WebhookSubscriptionCreatedPayload) => {
  console.log("Subscription created", payload)
}

export const onSubscriptionUpdated = async (payload: WebhookSubscriptionUpdatedPayload) => {
  console.log("Subscription updated", payload)
}

export const onSubscriptionActive = async (payload: WebhookSubscriptionActivePayload) => {
  console.log("Subscription active", payload)
}

export const onSubscriptionCanceled = async (payload: WebhookSubscriptionCanceledPayload) => {
  console.log("Subscription canceled", payload)
}

export const onSubscriptionRevoked = async (payload: WebhookSubscriptionRevokedPayload) => {
  console.log("Subscription revoked", payload)
}

export const onSubscriptionUncanceled = async (payload: WebhookSubscriptionUncanceledPayload) => {
  console.log("Subscription uncanceled", payload)
}