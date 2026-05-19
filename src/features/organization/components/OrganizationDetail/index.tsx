'use client';

import { Building2, FolderTree, Mail, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type {
  InvitationResponse,
  MemberResponse,
  OrganizationResponse,
  RoleResponse,
  TeamResponse,
} from '../../schema/organization.types';
import InvitationList from '../InvitationList';
import InviteMemberForm from '../InviteMemberForm';
import MemberList from '../MemberList';
import RoleManager from '../RoleManager';
import TeamList from '../TeamList';

const VALID_TABS = ['members', 'invitations', 'teams', 'roles'] as const;
type TabValue = (typeof VALID_TABS)[number];

export default function OrganizationDetail({
  org,
  members,
  invitations,
  teams,
  roles,
  availableRoles,
}: {
  org: OrganizationResponse;
  members?: MemberResponse[];
  invitations?: InvitationResponse[];
  teams?: TeamResponse[];
  roles?: RoleResponse[];
  availableRoles?: string[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const tabParam = searchParams.get('tab');
  const currentTab: TabValue = VALID_TABS.includes(tabParam as TabValue) ? (tabParam as TabValue) : 'members';

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'members') {
      params.delete('tab');
    } else {
      params.set('tab', value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
          {org.logo ? (
            <Image src={org.logo} alt="" width={32} height={32} className="size-8 rounded object-cover" unoptimized />
          ) : (
            <Building2 className="size-7 text-muted-foreground" />
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{org.name}</h1>
          <p className="text-muted-foreground text-sm">{org.slug}</p>
        </div>
      </div>

      <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">
            <Users className="mr-2 size-4" /> Members
          </TabsTrigger>
          <TabsTrigger value="invitations">
            <Mail className="mr-2 size-4" /> Invitations
          </TabsTrigger>
          <TabsTrigger value="teams">
            <FolderTree className="mr-2 size-4" /> Teams
          </TabsTrigger>
          <TabsTrigger value="roles">
            <Shield className="mr-2 size-4" /> Roles
          </TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Invite Member</CardTitle>
            </CardHeader>
            <CardContent>
              <InviteMemberForm orgId={org.id} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Members</CardTitle>
            </CardHeader>
            <CardContent>
              <MemberList members={members} orgId={org.id} availableRoles={availableRoles} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invitations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pending Invitations</CardTitle>
            </CardHeader>
            <CardContent>
              <InvitationList invitations={invitations} orgId={org.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <TeamList teams={teams} orgId={org.id} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Custom Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <RoleManager roles={roles} orgId={org.id} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
