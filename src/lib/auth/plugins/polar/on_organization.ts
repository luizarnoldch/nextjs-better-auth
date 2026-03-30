import type { WebhookOrganizationUpdatedPayload } from '@polar-sh/sdk/models/components/webhookorganizationupdatedpayload.js';

export const onOrganizationUpdated = async (payload: WebhookOrganizationUpdatedPayload) => {
  console.log('Organization updated', payload);
};
