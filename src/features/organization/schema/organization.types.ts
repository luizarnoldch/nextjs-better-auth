export type GetFullOrganizationQuery = {
  organizationId?: string;
  organizationSlug?: string;
  membersLimit?: number;
};

export type ListMembersQuery = {
  organizationId?: string;
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  filterField?: string;
  filterOperator?: string;
  filterValue?: string | number | boolean | string[] | number[];
};

export type CreateInvitationBody = {
  email: string;
  role?: 'member' | 'admin' | 'owner';
  organizationId?: string;
  teamId?: string;
  resend?: boolean;
};

export type ListInvitationsQuery = {
  organizationId?: string;
};

export type GetInvitationQuery = {
  id: string;
};

export type ListTeamsQuery = {
  organizationId?: string;
};

export type HasPermissionBody = {
  organizationId?: string;
  permissions: Record<string, string[]>;
};

export type CreateRoleBody = {
  role: string;
  permission: Record<string, string[]>;
  organizationId?: string;
};

export type UpdateRoleBody = {
  roleId?: string;
  roleName?: string;
  organizationId?: string;
  permission?: Record<string, string[]>;
};

export type DeleteRoleBody = {
  roleId?: string;
  roleName?: string;
  organizationId?: string;
};

export type ListOrgRolesQuery = {
  organizationId?: string;
};

export type GetOrgRoleQuery = {
  roleId?: string;
  roleName?: string;
  organizationId?: string;
};

export type InvitationResponse = {
  id: string;
  email: string;
  role: string;
  status: string;
  expiresAt: Date;
  organizationId: string;
  organization?: {
    id: string;
    name: string;
    slug: string;
    logo?: string | null;
  };
  inviterId: string;
  inviter?: {
    id: string;
    user?: {
      id: string;
      name?: string | null;
      email: string;
    };
  };
};

export type TeamResponse = {
  id: string;
  name: string;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
  teammembers?: TeamMemberResponse[];
};

export type ListTeamsResponse = {
  teams: TeamResponse[];
};

export type TeamMemberResponse = {
  id: string;
  teamId: string;
  userId: string;
  createdAt: Date | null;
  user?: {
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
  };
};

export type RoleResponse = {
  id: string;
  role: string;
  organizationId: string;
  permission: Record<string, string[]>;
  createdAt: Date;
  updatedAt: Date;
};

export type ListRolesResponse = {
  roles: RoleResponse[];
};

export type MemberResponse = {
  id: string;
  userId: string;
  organizationId: string;
  role: string;
  createdAt: Date;
  user?: {
    id: string;
    name?: string | null;
    email: string;
    image?: string | null;
  };
};

export type OrganizationResponse = {
  id: string;
  name: string;
  slug: string;
  logo?: string | null;
  createdAt: Date;
  members?: MemberResponse[];
  invitations?: InvitationResponse[];
};
