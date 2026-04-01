import type { WebhookRefundCreatedPayload } from '@polar-sh/sdk/models/components/webhookrefundcreatedpayload.js';
import type { WebhookRefundUpdatedPayload } from '@polar-sh/sdk/models/components/webhookrefundupdatedpayload.js';

export const onRefundCreated = async (payload: WebhookRefundCreatedPayload) => {
  // console.log('Refund created', payload);
};

export const onRefundUpdated = async (payload: WebhookRefundUpdatedPayload) => {
  // console.log('Refund updated', payload);
};
