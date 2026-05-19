'use client';

import OrganizationCard from '../OrganizationCard';
import { Skeleton } from '@/components/ui/skeleton';
import type { OrganizationResponse } from '../../schema/organization.types';

export default function OrganizationList({ orgs, isLoading }: { orgs?: OrganizationResponse[]; isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (!orgs || orgs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <p className="text-muted-foreground text-sm">No organizations yet.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {orgs.map((org) => (
        <OrganizationCard key={org.id} org={org} />
      ))}
    </div>
  );
}
