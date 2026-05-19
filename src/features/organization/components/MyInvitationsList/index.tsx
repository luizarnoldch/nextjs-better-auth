'use client';

import { useQuery } from '@tanstack/react-query';
import { Building2, Check, Clock, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTRPC } from '@/trpc/client';
import { useAcceptInvitation, useRejectInvitation } from '../../hooks/useOrganizationMutations';
import type { InvitationResponse } from '../../schema/organization.types';

export default function MyInvitationsList({ onAccept, onReject }: { onAccept?: () => void; onReject?: () => void }) {
  const trpc = useTRPC();
  const { data: invitations, isLoading, refetch } = useQuery(trpc.organization.invitation.listMine.queryOptions());
  const accept = useAcceptInvitation({
    onSuccess: async () => {
      await refetch();
      onAccept?.();
    },
  });
  const reject = useRejectInvitation({
    onSuccess: async () => {
      await refetch();
      onReject?.();
    },
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading invitations...</div>;
  }

  if (!invitations || invitations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Pending Invitations</CardTitle>
          <CardDescription>You don&apos;t have any pending organization invitations.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {invitations.map((inv: InvitationResponse) => (
        <Card key={inv.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-base">
                <Building2 className="size-4" />
                {inv.organization?.name ?? 'Organization'}
              </CardTitle>
              <CardDescription>
                Invited by {inv.inviter?.user?.name ?? inv.inviter?.user?.email ?? 'Someone'}
              </CardDescription>
            </div>
            <Badge variant="outline">
              <Clock className="mr-1 size-3" />
              Expires {new Date(inv.expiresAt).toLocaleDateString()}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-muted-foreground">Role: </span>
                <Badge variant="secondary">{inv.role ?? 'member'}</Badge>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="default"
                  onClick={() => accept.mutateAsync({ invitationId: inv.id })}
                  disabled={accept.isPending || reject.isPending}
                >
                  <Check className="mr-1 size-4" />
                  Accept
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => reject.mutateAsync({ invitationId: inv.id })}
                  disabled={accept.isPending || reject.isPending}
                >
                  <X className="mr-1 size-4" />
                  Reject
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
