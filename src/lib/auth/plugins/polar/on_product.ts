import type { WebhookProductCreatedPayload } from '@polar-sh/sdk/models/components/webhookproductcreatedpayload.js';
import type { WebhookProductUpdatedPayload } from '@polar-sh/sdk/models/components/webhookproductupdatedpayload.js';

export const onProductCreated = async (payload: WebhookProductCreatedPayload) => {
  // console.log('Product created', payload);
};

export const onProductUpdated = async (payload: WebhookProductUpdatedPayload) => {
  // console.log('Product updated', payload);
};
