'use client';

import { useForm } from '@tanstack/react-form';
import { Dices, Eye, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
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
import { useCreateRole, useDeleteRole } from '../../hooks/useOrganizationMutations';
import type { RoleResponse } from '../../schema/organization.types';

const ALL_RESOURCES: Record<string, string[]> = {
  user: ['list', 'get', 'create', 'update', 'delete', 'ban', 'unban', 'impersonate'],
  session: ['list', 'revoke'],
  organization: ['update', 'delete'],
  member: ['create', 'update', 'delete'],
  invitation: ['create', 'cancel'],
  team: ['create', 'update', 'delete'],
  analytics: ['view'],
};

interface RoleManagerProps {
  roles?: RoleResponse[];
  orgId: string;
}

export default function RoleManager({ roles, orgId }: RoleManagerProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openSheetRoleId, setOpenSheetRoleId] = useState<string | null>(null);

  const create = useCreateRole({
    onSuccess: () => {
      setDialogOpen(false);
    },
  });
  const del = useDeleteRole();

  const form = useForm({
    defaultValues: {
      role: '',
      permissions: {} as Record<string, string[]>,
    },
    validators: {
      onChange: z.object({
        role: z.string().min(1, 'Role name is required'),
        permissions: z.record(z.string(), z.array(z.string())),
      }),
    },
    onSubmit: async ({ value }) => {
      await create.mutateAsync({ role: value.role, permission: value.permissions, organizationId: orgId });
      form.reset();
    },
  });

  const activeRole = roles?.find((r) => r.id === openSheetRoleId);

  const togglePermission = (resource: string, action: string) => {
    const current = (form.getFieldValue('permissions') as Record<string, string[]>) || {};
    const resourcePerms = new Set(current[resource] ?? []);
    if (resourcePerms.has(action)) {
      resourcePerms.delete(action);
    } else {
      resourcePerms.add(action);
    }
    form.setFieldValue('permissions', { ...current, [resource]: Array.from(resourcePerms) });
  };

  const handleDeleteRole = (roleId: string) => {
    if (confirm('Are you sure you want to delete this role?')) {
      del.mutateAsync({ roleId, organizationId: orgId });
    }
  };

  const renderPermissionBuilder = (editable: boolean) => {
    const fieldState = form.getFieldValue('permissions') as Record<string, string[]>;
    return Object.entries(ALL_RESOURCES).map(([resource, actions]) => (
      <div key={resource} className="space-y-2">
        <h4 className="text-sm font-medium capitalize">{resource}</h4>
        <div className="flex flex-wrap gap-3">
          {actions.map((action) => {
            const checked = fieldState?.[resource]?.includes(action) ?? false;
            return (
              <div key={`${resource}-${action}`} className="flex items-center gap-1.5 text-sm">
                {editable ? (
                  <Checkbox checked={checked} onCheckedChange={() => togglePermission(resource, action)} />
                ) : (
                  <Checkbox checked={checked} disabled />
                )}
                <span className={checked ? 'text-foreground' : 'text-muted-foreground'}>{action}</span>
              </div>
            );
          })}
        </div>
      </div>
    ));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Custom Roles</h3>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 size-4" /> Create Role
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create Role</DialogTitle>
              <DialogDescription>Define a custom role with specific permissions.</DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="space-y-4"
            >
              <form.Field name="role">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Role Name</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="moderator"
                    />
                    {field.state.meta.errors.map((err) => (
                      <span key={err?.message} className="text-sm text-red-500">
                        {err?.message}
                      </span>
                    ))}
                  </div>
                )}
              </form.Field>

              <form.Field name="permissions">
                {() => (
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Dices className="size-4" />
                      Permissions
                    </Label>
                    <div className="space-y-4 rounded-md border p-4">{renderPermissionBuilder(true)}</div>
                  </div>
                )}
              </form.Field>

              <Button type="submit" disabled={create.isPending} className="w-full">
                {create.isPending ? 'Creating...' : 'Create'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {!roles || roles.length === 0 ? (
        <p className="text-muted-foreground text-sm">No custom roles.</p>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base">{role.role}</CardTitle>
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground text-xs">
                    {Object.values(role.permission ?? {}).flat().length} permissions
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpenSheetRoleId((prev) => (prev === role.id ? null : role.id))}
                  >
                    {openSheetRoleId === role.id ? (
                      <Eye className="size-4" />
                    ) : (
                      <Eye className="size-4 text-muted-foreground" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteRole(role.id)}
                    disabled={del.isPending}
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(role.permission ?? {})
                    .filter(([, actions]) => actions.length > 0)
                    .map(([resource, actions]) => (
                      <span
                        key={resource}
                        className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs"
                      >
                        {resource}:{actions.length}
                      </span>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Sheet open={!!openSheetRoleId} onOpenChange={() => setOpenSheetRoleId(null)}>
        <SheetContent className="p-6 sm:p-8">
          <SheetHeader className="px-2">
            <SheetTitle>Role Details</SheetTitle>
            <SheetDescription>
              {activeRole?.role} — {Object.values(activeRole?.permission ?? {}).flat().length} permissions
            </SheetDescription>
          </SheetHeader>
          {activeRole && (
            <div className="mt-6 space-y-4 px-2">
              {Object.entries(ALL_RESOURCES).map(([resource, actions]) => {
                const rolePerms = new Set(activeRole.permission?.[resource] ?? []);
                return (
                  <div key={resource} className="space-y-2">
                    <h4 className="text-sm font-medium capitalize">{resource}</h4>
                    <div className="flex flex-wrap gap-3">
                      {actions.map((action) => (
                        <div key={`${resource}-${action}`} className="flex items-center gap-1.5 text-sm">
                          <Checkbox checked={rolePerms.has(action)} disabled />
                          <span className={rolePerms.has(action) ? 'text-foreground' : 'text-muted-foreground'}>
                            {action}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
