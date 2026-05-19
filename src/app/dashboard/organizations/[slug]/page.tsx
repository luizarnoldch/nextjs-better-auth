'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import OrganizationDetail from '@/features/organization/components/OrganizationDetail';
import type {
  ListRolesResponse,
  ListTeamsResponse,
  MemberResponse,
  OrganizationResponse,
} from '@/features/organization/schema/organization.types';
import { useTRPC } from '@/trpc/client';

const STATIC_ROLES = ['owner', 'admin', 'member'];

export default function OrganizationDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const trpc = useTRPC();

  const { data: org, isLoading: orgLoading } = useQuery(
    trpc.organization.getFull.queryOptions({ organizationSlug: slug }),
  );

  const { data: teamsData } = useQuery(trpc.organization.team.list.queryOptions({}));

  const { data: rolesData } = useQuery(trpc.organization.role.list.queryOptions({}));

  if (orgLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  if (!org) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed p-16">
        <p className="text-muted-foreground">Organization not found.</p>
      </div>
    );
  }

  const teams = (teamsData as ListTeamsResponse | undefined)?.teams;
  const roles = (rolesData as ListRolesResponse | undefined)?.roles;

  // Build available roles list: static + custom
  const customRoleNames = roles?.map((r) => r.role) ?? [];
  const availableRoles = Array.from(new Set([...STATIC_ROLES, ...customRoleNames]));

  return (
    <OrganizationDetail
      org={org as OrganizationResponse}
      members={(org.members as MemberResponse[] | undefined) ?? []}
      invitations={org.invitations}
      teams={teams}
      roles={roles}
      availableRoles={availableRoles}
    />
  );
}
