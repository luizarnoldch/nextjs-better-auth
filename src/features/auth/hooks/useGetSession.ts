'use client';

import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';

export function useGetSession() {
  const trpc = useTRPC();
  const { data, ...query } = useQuery(trpc.auth.getSession.queryOptions());
  return {
    data,
    ...query,
  };
}

export default useGetSession;
