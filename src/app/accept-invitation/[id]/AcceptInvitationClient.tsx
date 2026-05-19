'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Building2, Check, X, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import { useAcceptInvitation, useRejectInvitation } from '@/features/organization/hooks/useOrganizationMutations';
import type { InvitationResponse } from '@/features/organization/schema/organization.types';

export default function AcceptInvitationClient({ id }: { id: string }) {
  const router = useRouter();
  const trpc = useTRPC();
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  
  const { data: invitation, isLoading, error } = useQuery(
    trpc.organization.invitation.get.queryOptions({ id })
  );
  
  const accept = useAcceptInvitation({
    onSuccess: () => {
      setAccepted(true);
      setTimeout(() => router.push('/dashboard/organizations'), 2000);
    },
  });
  
  const reject = useRejectInvitation({
    onSuccess: () => {
      setRejected(true);
      setTimeout(() => router.push('/dashboard/invitations'), 2000);
    },
  });

  const inv = invitation as InvitationResponse | undefined;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md">
          <CardContent className="flex items-center justify-center py-12">
            <Loader2 className="size-8 animate-spin text-muted-foreground" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !invitation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Invitation Not Found</CardTitle>
            <CardDescription>This invitation may have expired or already been used.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (accepted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Check className="size-5" />
              Invitation Accepted!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Redirecting to organizations...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (rejected) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Invitation Declined</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Redirecting...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Building2 className="size-6 text-primary" />
          </div>
          <CardTitle>You&apos;ve been invited!</CardTitle>
          <CardDescription>
            Join {inv?.organization?.name ?? 'an organization'}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Organization</span>
              <span className="font-medium">{inv?.organization?.name ?? 'Unknown'}</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Your Role</span>
              <Badge variant="secondary">{inv?.role ?? 'member'}</Badge>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Invited by</span>
              <span className="text-sm">{inv?.inviter?.user?.name ?? inv?.inviter?.user?.email ?? 'Someone'}</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              className="flex-1"
              onClick={() => accept.mutateAsync({ invitationId: id })}
              disabled={accept.isPending || reject.isPending}
            >
              {accept.isPending ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Check className="mr-2 size-4" />}
              Accept
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => reject.mutateAsync({ invitationId: id })}
              disabled={accept.isPending || reject.isPending}
            >
              {reject.isPending ? <Loader2 className="mr-2 size-4 animate-spin" /> : <X className="mr-2 size-4" />}
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
