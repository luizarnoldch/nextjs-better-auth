import { z } from 'zod';

// Organization schemas
export const listOrganizationsSchema = z.object({});

export const createOrganizationSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  logo: z.string().url().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

export const updateOrganizationSchema = z.object({
  organizationId: z.string().optional(),
  data: z.object({
    name: z.string().optional(),
    slug: z.string().optional(),
    logo: z.string().url().optional(),
    metadata: z.record(z.string(), z.any()).optional(),
  }),
});

export const deleteOrganizationSchema = z.object({
  organizationId: z.string(),
});

export const getFullOrganizationSchema = z.object({
  organizationId: z.string().optional(),
  organizationSlug: z.string().optional(),
});

export const setActiveOrganizationSchema = z.object({
  organizationId: z.string().nullable().optional(),
  organizationSlug: z.string().optional(),
});

export const checkSlugSchema = z.object({
  slug: z.string().min(1),
});

// Member schemas
export const listMembersSchema = z.object({
  organizationId: z.string().optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
});

export const updateMemberRoleSchema = z.object({
  memberId: z.string(),
  role: z.string(),
  organizationId: z.string().optional(),
});

export const removeMemberSchema = z.object({
  memberIdOrEmail: z.string(),
  organizationId: z.string().optional(),
});

export const leaveOrganizationSchema = z.object({
  organizationId: z.string(),
});

// Invitation schemas
export const inviteMemberSchema = z.object({
  email: z.string().email(),
  role: z.string().optional(),
  organizationId: z.string().optional(),
  teamId: z.string().optional(),
  resend: z.boolean().optional(),
});

export const acceptInvitationSchema = z.object({
  invitationId: z.string(),
});

export const cancelInvitationSchema = z.object({
  invitationId: z.string(),
});

export const rejectInvitationSchema = z.object({
  invitationId: z.string(),
});

export const listInvitationsSchema = z.object({
  organizationId: z.string().optional(),
});

export const getInvitationSchema = z.object({
  id: z.string(),
});

// Team schemas
export const createTeamSchema = z.object({
  name: z.string().min(1),
  organizationId: z.string().optional(),
});

export const listTeamsSchema = z.object({
  organizationId: z.string().optional(),
});

export const updateTeamSchema = z.object({
  teamId: z.string(),
  data: z.object({
    name: z.string().optional(),
  }),
});

export const removeTeamSchema = z.object({
  teamId: z.string(),
});

export const addTeamMemberSchema = z.object({
  teamId: z.string(),
  userId: z.string(),
});

export const removeTeamMemberSchema = z.object({
  teamId: z.string(),
  userId: z.string(),
});

export const setActiveTeamSchema = z.object({
  teamId: z.string().optional(),
});

// Permission schemas
export const hasPermissionSchema = z.object({
  organizationId: z.string().optional(),
  permissions: z.record(z.string(), z.array(z.string())),
});

// Role schemas
export const createRoleSchema = z.object({
  role: z.string().min(1),
  permission: z.record(z.string(), z.array(z.string())),
  organizationId: z.string().optional(),
});

export const updateRoleSchema = z.object({
  roleId: z.string(),
  permission: z.record(z.string(), z.array(z.string())),
});

export const deleteRoleSchema = z.object({
  roleId: z.string(),
  organizationId: z.string().optional(),
});

export const listRolesSchema = z.object({
  organizationId: z.string().optional(),
});

export const getRoleSchema = z.object({
  roleId: z.string(),
});

// Types
export type ListOrganizationsInput = z.infer<typeof listOrganizationsSchema>;
export type CreateOrganizationInput = z.infer<typeof createOrganizationSchema>;
export type UpdateOrganizationInput = z.infer<typeof updateOrganizationSchema>;
export type DeleteOrganizationInput = z.infer<typeof deleteOrganizationSchema>;
export type GetFullOrganizationInput = z.infer<typeof getFullOrganizationSchema>;
export type SetActiveOrganizationInput = z.infer<typeof setActiveOrganizationSchema>;
export type CheckSlugInput = z.infer<typeof checkSlugSchema>;

export type ListMembersInput = z.infer<typeof listMembersSchema>;
export type UpdateMemberRoleInput = z.infer<typeof updateMemberRoleSchema>;
export type RemoveMemberInput = z.infer<typeof removeMemberSchema>;
export type LeaveOrganizationInput = z.infer<typeof leaveOrganizationSchema>;

export type InviteMemberInput = z.infer<typeof inviteMemberSchema>;
export type AcceptInvitationInput = z.infer<typeof acceptInvitationSchema>;
export type CancelInvitationInput = z.infer<typeof cancelInvitationSchema>;
export type RejectInvitationInput = z.infer<typeof rejectInvitationSchema>;
export type ListInvitationsInput = z.infer<typeof listInvitationsSchema>;
export type GetInvitationInput = z.infer<typeof getInvitationSchema>;

export type CreateTeamInput = z.infer<typeof createTeamSchema>;
export type ListTeamsInput = z.infer<typeof listTeamsSchema>;
export type UpdateTeamInput = z.infer<typeof updateTeamSchema>;
export type RemoveTeamInput = z.infer<typeof removeTeamSchema>;
export type AddTeamMemberInput = z.infer<typeof addTeamMemberSchema>;
export type RemoveTeamMemberInput = z.infer<typeof removeTeamMemberSchema>;
export type SetActiveTeamInput = z.infer<typeof setActiveTeamSchema>;

export type HasPermissionInput = z.infer<typeof hasPermissionSchema>;

export type CreateRoleInput = z.infer<typeof createRoleSchema>;
export type UpdateRoleInput = z.infer<typeof updateRoleSchema>;
export type DeleteRoleInput = z.infer<typeof deleteRoleSchema>;
export type ListRolesInput = z.infer<typeof listRolesSchema>;
export type GetRoleInput = z.infer<typeof getRoleSchema>;
