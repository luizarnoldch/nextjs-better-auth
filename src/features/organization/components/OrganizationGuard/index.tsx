'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useTRPC } from '@/trpc/client';

export default function OrganizationGuard({ children }: { children: ReactNode }) {
  const trpc = useTRPC();
  const router = useRouter();
  const { data: orgs, isLoading } = useQuery(trpc.organization.list.queryOptions());

  useEffect(() => {
    if (!isLoading && (!orgs || orgs.length === 0)) {
      router.replace('/onboarding/organization');
    }
  }, [isLoading, orgs, router]);

  if (isLoading || !orgs || orgs.length === 0) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}
