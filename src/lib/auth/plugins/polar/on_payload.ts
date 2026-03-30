import type { validateEvent } from '@polar-sh/sdk/webhooks.js';

const onPayload = async (payload: ReturnType<typeof validateEvent>) => {
  // Catch-all for all events
  console.log('Payload', payload);
};

export default onPayload;
