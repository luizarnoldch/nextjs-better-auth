import type { WebhookCheckoutCreatedPayload } from '@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js';
import type { WebhookCheckoutUpdatedPayload } from '@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js';

export const onCheckoutCreated = async (payload: WebhookCheckoutCreatedPayload) => {
  // console.log('Checkout created', payload);
};

export const onCheckoutUpdated = async (payload: WebhookCheckoutUpdatedPayload) => {
  // console.log('Checkout updated', payload);
};
