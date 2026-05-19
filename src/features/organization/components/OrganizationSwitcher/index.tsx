'use client';

import { useQuery } from '@tanstack/react-query';
import { Building2, ChevronsUpDown, Plus } from 'lucide-react';
import * as React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { useTRPC } from '@/trpc/client';
import { useSetActiveOrganization } from '../../hooks/useOrganizationMutations';
import type { OrganizationResponse } from '../../schema/organization.types';
import OrganizationCreateForm from '../OrganizationCreateForm';

export default function OrganizationSwitcher() {
  const { isMobile } = useSidebar();
  const trpc = useTRPC();
  const { data: orgs } = useQuery(trpc.organization.list.queryOptions());
  const { data: session } = useQuery(trpc.auth.getSession.queryOptions());
  const setActive = useSetActiveOrganization();

  const [openCreate, setOpenCreate] = React.useState(false);

  const typedOrgs = orgs as OrganizationResponse[] | undefined;
  const activeOrg = typedOrgs?.find((o) => o.id === session?.session.activeOrganizationId) || typedOrgs?.[0];

  if (!orgs || orgs.length === 0) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" onClick={() => setOpenCreate(true)}>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <Plus className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Create Organization</span>
            </div>
          </SidebarMenuButton>
          <Dialog open={openCreate} onOpenChange={setOpenCreate}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Organization</DialogTitle>
                <DialogDescription>Set up your first organization to start using the dashboard.</DialogDescription>
              </DialogHeader>
              <OrganizationCreateForm onSuccess={() => setOpenCreate(false)} />
            </DialogContent>
          </Dialog>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  {activeOrg?.logo ? (
                    <img src={activeOrg.logo} alt="" className="size-5 rounded" />
                  ) : (
                    <Building2 className="size-4" />
                  )}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{activeOrg?.name ?? 'Organization'}</span>
                  <span className="truncate text-xs">{activeOrg?.slug}</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              align="start"
              side={isMobile ? 'bottom' : 'right'}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-muted-foreground text-xs">Organizations</DropdownMenuLabel>
              {typedOrgs?.map((org) => (
                <DropdownMenuItem
                  key={org.id}
                  onClick={() => setActive.mutateAsync({ organizationId: org.id })}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-md border">
                    <Building2 className="size-3.5 shrink-0" />
                  </div>
                  {org.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 p-2" onClick={() => setOpenCreate(true)}>
                <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                  <Plus className="size-4" />
                </div>
                <div className="text-muted-foreground font-medium">Add organization</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <Dialog open={openCreate} onOpenChange={setOpenCreate}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Organization</DialogTitle>
            <DialogDescription>Add a new organization to your workspace.</DialogDescription>
          </DialogHeader>
          <OrganizationCreateForm onSuccess={() => setOpenCreate(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
