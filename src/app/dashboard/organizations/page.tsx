'use client';

import { useQuery } from '@tanstack/react-query';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import OrganizationCreateForm from '@/features/organization/components/OrganizationCreateForm';
import OrganizationList from '@/features/organization/components/OrganizationList';
import { useTRPC } from '@/trpc/client';

export default function OrganizationsPage() {
  const trpc = useTRPC();
  const { data: orgs, isLoading } = useQuery(trpc.organization.list.queryOptions());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Organizations</h1>
          <p className="text-muted-foreground text-sm">Manage your organizations and teams.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 size-4" /> New Organization
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Organization</DialogTitle>
              <DialogDescription>Add a new organization to manage members and teams.</DialogDescription>
            </DialogHeader>
            <OrganizationCreateForm />
          </DialogContent>
        </Dialog>
      </div>

      <OrganizationList orgs={orgs} isLoading={isLoading} />
    </div>
  );
}
