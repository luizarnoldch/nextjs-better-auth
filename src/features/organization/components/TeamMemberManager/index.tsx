'use client';

import { useQuery } from '@tanstack/react-query';
import { Plus, Trash2, User, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTRPC } from '@/trpc/client';
import { useAddTeamMember, useRemoveTeamMember } from '../../hooks/useOrganizationMutations';
import type { TeamMemberResponse } from '../../schema/organization.types';

interface TeamMemberManagerProps {
  teamId: string;
  members?: TeamMemberResponse[];
}

export default function TeamMemberManager({ teamId, members }: TeamMemberManagerProps) {
  const trpc = useTRPC();
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const { data: orgMembersData } = useQuery(trpc.organization.member.list.queryOptions({}));

  const addMember = useAddTeamMember({
    onSuccess: () => {
      setSelectedUserId('');
      setDialogOpen(false);
    },
  });

  const removeMember = useRemoveTeamMember();

  const handleAddMember = async () => {
    if (!selectedUserId) return;
    await addMember.mutateAsync({ teamId, userId: selectedUserId });
  };

  const orgMembers = Array.isArray(orgMembersData) ? orgMembersData : (orgMembersData?.members ?? []);
  const existingMemberIds = new Set(members?.map((m) => m.userId) ?? []);
  const availableMembers = orgMembers.filter((m: { userId: string }) => !existingMemberIds.has(m.userId));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Users className="size-4" />
          <span>{members?.length ?? 0} members</span>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus className="mr-1 size-4" /> Add
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>Select a member from your organization to add to this team.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Member</Label>
                <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a member" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableMembers.length === 0 ? (
                      <SelectItem value="_none" disabled>
                        No available members
                      </SelectItem>
                    ) : (
                      availableMembers.map((m: { userId: string; user?: { name?: string | null; email: string } }) => (
                        <SelectItem key={m.userId} value={m.userId}>
                          {m.user?.name ?? m.user?.email ?? m.userId}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddMember} disabled={!selectedUserId || addMember.isPending} className="w-full">
                {addMember.isPending ? 'Adding...' : 'Add Member'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {members && members.length > 0 && (
        <div className="space-y-2">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between rounded-md border p-2">
              <div className="flex items-center gap-2">
                <div className="bg-muted relative flex size-8 items-center justify-center overflow-hidden rounded-full">
                  {member.user?.image ? (
                    <Image src={member.user.image} alt="" fill className="object-cover" />
                  ) : (
                    <User className="text-muted-foreground size-4" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{member.user?.name ?? member.user?.email ?? 'Unknown'}</p>
                  {member.user?.email && <p className="text-muted-foreground text-xs">{member.user.email}</p>}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeMember.mutateAsync({ teamId, userId: member.userId })}
                disabled={removeMember.isPending}
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {(!members || members.length === 0) && (
        <p className="text-muted-foreground text-sm">No members in this team yet.</p>
      )}
    </div>
  );
}
