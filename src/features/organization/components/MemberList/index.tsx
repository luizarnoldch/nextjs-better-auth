'use client';

import { Shield } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useUpdateMemberRole } from '../../hooks/useOrganizationMutations';
import type { MemberResponse } from '../../schema/organization.types';

const STATIC_ROLES = ['owner', 'admin', 'member'];

export default function MemberList({
  members,
  orgId,
  availableRoles,
}: {
  members?: MemberResponse[];
  orgId: string;
  availableRoles?: string[];
}) {
  const updateRole = useUpdateMemberRole();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Build role list from availableRoles or fallback to static
  const roleList = availableRoles?.length ? availableRoles : STATIC_ROLES;

  const handleRoleChange = async (memberId: string, newRole: string) => {
    setEditingId(null);
    await updateRole.mutateAsync({ memberId, role: newRole, organizationId: orgId });
  };

  if (!members || members.length === 0) {
    return <p className="text-muted-foreground text-sm">No members found.</p>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.user?.name ?? member.user?.email ?? member.userId}</TableCell>
            <TableCell>
              {editingId === member.id && member.role !== 'owner' ? (
                <Select value={member.role} onValueChange={(value) => handleRoleChange(member.id, value)} open>
                  <SelectTrigger className="h-8 w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {roleList.map((role) => (
                      <SelectItem key={role} value={role}>
                        <span className="flex items-center gap-2">
                          {role === 'owner' && <Shield className="size-3" />}
                          {role}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2"
                  onClick={() => member.role !== 'owner' && setEditingId(member.id)}
                  disabled={member.role === 'owner'}
                >
                  <Badge variant={member.role === 'owner' ? 'default' : 'secondary'}>{member.role}</Badge>
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
