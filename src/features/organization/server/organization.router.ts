import { TRPCError } from '@trpc/server';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { createTRPCRouter, protectedProcedure } from '@/trpc/init';
import {
  acceptInvitationSchema,
  addTeamMemberSchema,
  cancelInvitationSchema,
  checkSlugSchema,
  createOrganizationSchema,
  createRoleSchema,
  createTeamSchema,
  deleteOrganizationSchema,
  deleteRoleSchema,
  getFullOrganizationSchema,
  getInvitationSchema,
  getRoleSchema,
  hasPermissionSchema,
  inviteMemberSchema,
  leaveOrganizationSchema,
  listInvitationsSchema,
  listMembersSchema,
  listRolesSchema,
  listTeamsSchema,
  rejectInvitationSchema,
  removeMemberSchema,
  removeTeamMemberSchema,
  removeTeamSchema,
  setActiveOrganizationSchema,
  setActiveTeamSchema,
  updateMemberRoleSchema,
  updateOrganizationSchema,
  updateRoleSchema,
  updateTeamSchema,
} from '../schema/organization.schema';
import type {
  CreateInvitationBody,
  CreateRoleBody,
  DeleteRoleBody,
  GetFullOrganizationQuery,
  GetOrgRoleQuery,
  HasPermissionBody,
  ListInvitationsQuery,
  ListMembersQuery,
  ListOrgRolesQuery,
  ListTeamsQuery,
  UpdateRoleBody,
} from '../schema/organization.types';

export const organizationRouter = createTRPCRouter({
  list: protectedProcedure.query(async () => {
    try {
      return await auth.api.listOrganizations({ headers: await headers() });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to list organizations';
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
    }
  }),

  create: protectedProcedure.input(createOrganizationSchema).mutation(async ({ input }) => {
    try {
      const org = await auth.api.createOrganization({
        body: input,
        headers: await headers(),
      });

      await auth.api.setActiveOrganization({
        body: { organizationId: org.id },
        headers: await headers(),
      });

      return org;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to create organization';
      throw new TRPCError({ code: 'BAD_REQUEST', message });
    }
  }),

  update: protectedProcedure.input(updateOrganizationSchema).mutation(async ({ input }) => {
    try {
      return await auth.api.updateOrganization({
        body: input,
        headers: await headers(),
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to update organization';
      throw new TRPCError({ code: 'BAD_REQUEST', message });
    }
  }),

  delete: protectedProcedure.input(deleteOrganizationSchema).mutation(async ({ input }) => {
    try {
      return await auth.api.deleteOrganization({
        body: input,
        headers: await headers(),
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to delete organization';
      throw new TRPCError({ code: 'BAD_REQUEST', message });
    }
  }),

  getFull: protectedProcedure.input(getFullOrganizationSchema).query(async ({ input }) => {
    try {
      return await auth.api.getFullOrganization({
        query: input satisfies GetFullOrganizationQuery,
        headers: await headers(),
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to get organization';
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
    }
  }),

  setActive: protectedProcedure.input(setActiveOrganizationSchema).mutation(async ({ input }) => {
    try {
      return await auth.api.setActiveOrganization({
        body: input,
        headers: await headers(),
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to set active organization';
      throw new TRPCError({ code: 'BAD_REQUEST', message });
    }
  }),

  checkSlug: protectedProcedure.input(checkSlugSchema).query(async ({ input }) => {
    try {
      return await auth.api.checkOrganizationSlug({
        body: input,
        headers: await headers(),
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to check slug';
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
    }
  }),

  member: createTRPCRouter({
    list: protectedProcedure.input(listMembersSchema).query(async ({ input }) => {
      try {
        return await auth.api.listMembers({
          query: input satisfies ListMembersQuery,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to list members';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),

    updateRole: protectedProcedure.input(updateMemberRoleSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.updateMemberRole({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to update member role';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    remove: protectedProcedure.input(removeMemberSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.removeMember({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to remove member';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    leave: protectedProcedure.input(leaveOrganizationSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.leaveOrganization({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to leave organization';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    getActive: protectedProcedure.query(async () => {
      try {
        return await auth.api.getActiveMember({ headers: await headers() });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to get active member';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),
  }),

  invitation: createTRPCRouter({
    invite: protectedProcedure.input(inviteMemberSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.createInvitation({
          body: {
            email: input.email,
            role: input.role as 'member' | 'admin' | 'owner',
            organizationId: input.organizationId,
            teamId: input.teamId,
            resend: input.resend,
          } satisfies CreateInvitationBody,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to invite member';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    accept: protectedProcedure.input(acceptInvitationSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.acceptInvitation({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to accept invitation';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    cancel: protectedProcedure.input(cancelInvitationSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.cancelInvitation({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to cancel invitation';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    reject: protectedProcedure.input(rejectInvitationSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.rejectInvitation({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to reject invitation';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    list: protectedProcedure.input(listInvitationsSchema).query(async ({ input }) => {
      try {
        return await auth.api.listInvitations({
          query: input satisfies ListInvitationsQuery,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to list invitations';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),

    get: protectedProcedure.input(getInvitationSchema).query(async ({ input }) => {
      try {
        return await auth.api.getInvitation({
          query: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to get invitation';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),

    listMine: protectedProcedure.query(async () => {
      try {
        return await auth.api.listUserInvitations({ headers: await headers() });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to list user invitations';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),
  }),

  team: createTRPCRouter({
    create: protectedProcedure.input(createTeamSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.createTeam({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to create team';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    list: protectedProcedure.input(listTeamsSchema).query(async ({ input }) => {
      try {
        const api = auth.api as typeof auth.api & {
          listOrganizationTeams: (opts: { query: ListTeamsQuery; headers: Headers }) => Promise<unknown>;
        };
        const result = await api.listOrganizationTeams({
          query: input satisfies ListTeamsQuery,
          headers: await headers(),
        });
        const teams = result as Array<{
          id: string;
          name: string;
          organizationId: string;
          createdAt: Date;
          updatedAt: Date;
        }>;
        const teamsWithMembers = await Promise.all(
          teams.map(async (team) => {
            const members = await prisma.teamMember.findMany({
              where: { teamId: team.id },
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                  },
                },
              },
            });
            return {
              ...team,
              teammembers: members,
            };
          }),
        );
        return { teams: teamsWithMembers };
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to list teams';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),

    update: protectedProcedure.input(updateTeamSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.updateTeam({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to update team';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    remove: protectedProcedure.input(removeTeamSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.removeTeam({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to remove team';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    addMember: protectedProcedure.input(addTeamMemberSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.addTeamMember({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to add team member';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    removeMember: protectedProcedure.input(removeTeamMemberSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.removeTeamMember({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to remove team member';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    setActive: protectedProcedure.input(setActiveTeamSchema).mutation(async ({ input }) => {
      try {
        return await auth.api.setActiveTeam({
          body: input,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to set active team';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),
  }),

  permission: createTRPCRouter({
    has: protectedProcedure.input(hasPermissionSchema).query(async ({ input }) => {
      try {
        return await auth.api.hasPermission({
          body: input satisfies HasPermissionBody,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to check permission';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),
  }),

  role: createTRPCRouter({
    create: protectedProcedure.input(createRoleSchema).mutation(async ({ input }) => {
      try {
        const api = auth.api as typeof auth.api & {
          createOrgRole: (opts: { body: CreateRoleBody; headers: Headers }) => Promise<unknown>;
        };
        return await api.createOrgRole({
          body: input satisfies CreateRoleBody,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to create role';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    update: protectedProcedure.input(updateRoleSchema).mutation(async ({ input }) => {
      try {
        const api = auth.api as typeof auth.api & {
          updateOrgRole: (opts: { body: UpdateRoleBody; headers: Headers }) => Promise<unknown>;
        };
        return await api.updateOrgRole({
          body: {
            roleId: input.roleId,
            permission: input.permission,
          } satisfies UpdateRoleBody,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to update role';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    delete: protectedProcedure.input(deleteRoleSchema).mutation(async ({ input }) => {
      try {
        const api = auth.api as typeof auth.api & {
          deleteOrgRole: (opts: { body: DeleteRoleBody; headers: Headers }) => Promise<unknown>;
        };
        return await api.deleteOrgRole({
          body: input satisfies DeleteRoleBody,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to delete role';
        throw new TRPCError({ code: 'BAD_REQUEST', message });
      }
    }),

    list: protectedProcedure.input(listRolesSchema).query(async ({ input }) => {
      try {
        const api = auth.api as typeof auth.api & {
          listOrgRoles: (opts: { query: ListOrgRolesQuery; headers: Headers }) => Promise<unknown>;
        };
        return await api.listOrgRoles({
          query: input satisfies ListOrgRolesQuery,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to list roles';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),

    get: protectedProcedure.input(getRoleSchema).query(async ({ input }) => {
      try {
        const api = auth.api as typeof auth.api & {
          getOrgRole: (opts: { query: GetOrgRoleQuery; headers: Headers }) => Promise<unknown>;
        };
        return await api.getOrgRole({
          query: input satisfies GetOrgRoleQuery,
          headers: await headers(),
        });
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Failed to get role';
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message });
      }
    }),
  }),
});
