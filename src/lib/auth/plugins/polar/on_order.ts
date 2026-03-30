import type { WebhookOrderCreatedPayload } from '@polar-sh/sdk/models/components/webhookordercreatedpayload.js';
import type { WebhookOrderPaidPayload } from '@polar-sh/sdk/models/components/webhookorderpaidpayload.js';
import type { WebhookOrderRefundedPayload } from '@polar-sh/sdk/models/components/webhookorderrefundedpayload.js';
import type { WebhookOrderUpdatedPayload } from '@polar-sh/sdk/models/components/webhookorderupdatedpayload.js';

export const onOrderCreated = async (payload: WebhookOrderCreatedPayload) => {
  console.log('Order created', payload);
};

export const onOrderUpdated = async (payload: WebhookOrderUpdatedPayload) => {
  console.log('Order updated', payload);
};

export const onOrderPaid = async (payload: WebhookOrderPaidPayload) => {
  console.log('Order paid', payload);
};

export const onOrderRefunded = async (payload: WebhookOrderRefundedPayload) => {
  console.log('Order refunded', payload);
};
