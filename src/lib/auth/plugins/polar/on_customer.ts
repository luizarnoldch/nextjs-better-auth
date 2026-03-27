import type { WebhookCustomerCreatedPayload } from "@polar-sh/sdk/models/components/webhookcustomercreatedpayload.js"
import type { WebhookCustomerDeletedPayload } from "@polar-sh/sdk/models/components/webhookcustomerdeletedpayload.js"
import type { WebhookCustomerStateChangedPayload } from "@polar-sh/sdk/models/components/webhookcustomerstatechangedpayload.js"
import type { WebhookCustomerUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcustomerupdatedpayload.js"

export const onCustomerCreated = async (payload: WebhookCustomerCreatedPayload) => {
  console.log("Customer created", payload)
}

export const onCustomerUpdated = async (payload: WebhookCustomerUpdatedPayload) => {
  console.log("Customer updated", payload)
}

export const onCustomerDeleted = async (payload: WebhookCustomerDeletedPayload) => {
  console.log("Customer deleted", payload)
}

export const onCustomerStateChanged = async (payload: WebhookCustomerStateChangedPayload) => {
  console.log("Customer state changed", payload)
}