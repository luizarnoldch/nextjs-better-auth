'use client';

import { useForm } from '@tanstack/react-form';
import { Eye, EyeOff, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCreateTeam, useRemoveTeam } from '../../hooks/useOrganizationMutations';
import type { TeamResponse } from '../../schema/organization.types';
import TeamMemberManager from '../TeamMemberManager';

export default function TeamList({ teams, orgId }: { teams?: TeamResponse[]; orgId: string }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openSheetTeamId, setOpenSheetTeamId] = useState<string | null>(null);

  const create = useCreateTeam({
    onSuccess: () => {
      setDialogOpen(false);
    },
  });
  const remove = useRemoveTeam();

  const form = useForm({
    defaultValues: { name: '' },
    validators: { onChange: z.object({ name: z.string().min(1, 'Name is required') }) },
    onSubmit: async ({ value }) => {
      await create.mutateAsync({ name: value.name, organizationId: orgId });
      form.reset();
    },
  });

  const renderCreateDialog = () => (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 size-4" /> Create Team
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
          <DialogDescription>Create a new team within your organization.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Engineering"
                />
                {field.state.meta.errors.map((err) => (
                  <span key={err?.message} className="text-sm text-red-500">
                    {err?.message}
                  </span>
                ))}
              </div>
            )}
          </form.Field>
          <Button type="submit" disabled={create.isPending} className="w-full">
            {create.isPending ? 'Creating...' : 'Create'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );

  if (!teams || teams.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground text-sm">No teams yet.</p>
        {renderCreateDialog()}
      </div>
    );
  }

  const activeTeam = teams.find((t) => t.id === openSheetTeamId);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Teams</h3>
        {renderCreateDialog()}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <Card key={team.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">{team.name}</CardTitle>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground text-xs">{team.teammembers?.length ?? 0}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpenSheetTeamId((prev) => (prev === team.id ? null : team.id))}
                >
                  {openSheetTeamId === team.id ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => remove.mutateAsync({ teamId: team.id })}
                  disabled={remove.isPending}
                >
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Sheet open={!!openSheetTeamId} onOpenChange={() => setOpenSheetTeamId(null)}>
        <SheetContent className="p-6 sm:p-8">
          <SheetHeader className="px-2">
            <SheetTitle>Team Members</SheetTitle>
            <SheetDescription>
              {activeTeam?.teammembers?.length ?? 0} member
              {(activeTeam?.teammembers?.length ?? 0) === 1 ? '' : 's'} in {activeTeam?.name}
            </SheetDescription>
          </SheetHeader>
          {activeTeam && (
            <div className="mt-6 px-2">
              <TeamMemberManager teamId={activeTeam.id} members={activeTeam.teammembers} />
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
