import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import { listProductsSchema } from '../schema/payments.schema';

export function useListProducts(input: { organizationId?: string } = {}) {
  const trpc = useTRPC();
  const { data, ...query } = useQuery(trpc.payment.list.queryOptions(input));

  return {
    data,
    ...query,
  };
}
