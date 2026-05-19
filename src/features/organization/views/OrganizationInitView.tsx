'use client';

import { useQuery } from '@tanstack/react-query';
import { Building2, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import MyInvitationsList from '@/features/organization/components/MyInvitationsList';
import OrganizationCreateForm from '@/features/organization/components/OrganizationCreateForm';
import { useTRPC } from '@/trpc/client';

export default function OrganizationInitView() {
  const trpc = useTRPC();
  const router = useRouter();
  const { data: orgs, isLoading: orgsLoading } = useQuery(trpc.organization.list.queryOptions());
  const {
    data: invitations,
    isLoading: invLoading,
    refetch,
  } = useQuery(trpc.organization.invitation.listMine.queryOptions());

  useEffect(() => {
    if (!orgsLoading && orgs && orgs.length > 0) {
      router.replace('/dashboard');
    }
  }, [orgsLoading, orgs, router]);

  if (orgsLoading || invLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    );
  }

  if (orgs && orgs.length > 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
      </div>
    );
  }

  if (invitations && invitations.length > 0) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="bg-primary/10 flex size-12 items-center justify-center rounded-xl">
              <Mail className="text-primary size-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">You have pending invitations</h1>
            <p className="text-muted-foreground text-sm">
              Accept or reject these invitations before creating your own organization.
            </p>
          </div>

          <div className="space-y-4">
            <MyInvitationsList onAccept={() => router.push('/dashboard')} onReject={() => refetch()} />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2">or</span>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="mb-4 font-semibold">Create your own organization</h2>
              <OrganizationCreateForm
                onSuccess={() => {
                  router.push('/dashboard');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="bg-primary/10 flex size-12 items-center justify-center rounded-xl">
            <Building2 className="text-primary size-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Create your organization</h1>
          <p className="text-muted-foreground text-sm">
            To start using the dashboard, create your first organization. You can always add more later.
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <OrganizationCreateForm
            onSuccess={() => {
              router.push('/dashboard');
            }}
          />
        </div>
      </div>
    </div>
  );
}
