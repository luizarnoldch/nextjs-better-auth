import type { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js"
import type { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcreatedpayload.js"
import type { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js"
import type { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js"
import type { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js"

export const onBenefitCreated = async (payload: WebhookBenefitCreatedPayload) => {
  console.log("Benefit created", payload)
}

export const onBenefitUpdated = async (payload: WebhookBenefitUpdatedPayload) => {
  console.log("Benefit updated", payload)
}

export const onBenefitGrantCreated = async (payload: WebhookBenefitGrantCreatedPayload) => {
  console.log("Benefit grant created", payload)
}

export const onBenefitGrantUpdated = async (payload: WebhookBenefitGrantUpdatedPayload) => {
  console.log("Benefit grant updated", payload)
}

export const onBenefitGrantRevoked = async (payload: WebhookBenefitGrantRevokedPayload) => {
  console.log("Benefit grant revoked", payload)
}