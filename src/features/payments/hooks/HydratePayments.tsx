import { HydrateClient, prefetch, trpc } from '@/trpc/server';
import { ReactNode } from 'react';

type HydratePaymentsProps = {
  children: ReactNode;
};

const HydratePayments = async ({ children }: HydratePaymentsProps) => {
  // Pre-fetching product list for server-side hydration
  prefetch(trpc.payment.list.queryOptions({}));

  return <HydrateClient>{children}</HydrateClient>;
};

export default HydratePayments;
