'use client';

import { Mail, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useCancelInvitation } from '../../hooks/useOrganizationMutations';
import type { InvitationResponse } from '../../schema/organization.types';

export default function InvitationList({ invitations, orgId }: { invitations?: InvitationResponse[]; orgId: string }) {
  const cancel = useCancelInvitation();

  if (!invitations || invitations.length === 0) {
    return <p className="text-muted-foreground text-sm">No pending invitations.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Expires</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invitations.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell className="font-medium">{inv.email}</TableCell>
            <TableCell>
              <Badge variant="secondary">{inv.role ?? 'member'}</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{inv.status}</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {new Date(inv.expiresAt).toLocaleDateString()}
              </div>
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => cancel.mutateAsync({ invitationId: inv.id })}
                disabled={cancel.isPending}
              >
                <X className="size-4 text-destructive" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
