import { polar } from '@polar-sh/better-auth';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { admin, organization } from 'better-auth/plugins';
import { emailAndPasswordOptions } from './auth/email-password/email';
import { emailVerificationOptions } from './auth/email-password/verification';
import { hooksOptions } from './auth/hooks/createMiddleware';
import { ac, adminRole, memberRole } from './auth/permissions';
import { polarPluginOptions } from './auth/plugins/polar/config';
import config from './config';
import prisma from './prisma';
import { sendOrganizationInvitationEmail } from './resend';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: emailAndPasswordOptions,
  emailVerification: emailVerificationOptions,
  plugins: [
    polar(polarPluginOptions),
    admin({
      ac,
      roles: {
        admin: adminRole,
        user: memberRole,
      },
      defaultBanReason: 'Violation of Terms of Service',
      defaultBanExpiresIn: 60 * 60 * 24 * 7, // 7 days
    }),
    organization({
      ac,
      teams: {
        enabled: true,
        maximumTeams: 20,
        maximumMembersPerTeam: 50,
        allowRemovingAllTeams: false,
      },
      dynamicAccessControl: {
        enabled: true,
      },
      invitationExpiresIn: 60 * 60 * 24 * 2, // 48 hours
      invitationLimit: 100,
      cancelPendingInvitationsOnReInvite: true,
      sendInvitationEmail: async (data) => {
        const { email, organization, inviter, invitation } = data;
        const inviteUrl = `${config.nextPublicAppUrl}/accept-invitation/${invitation.id}`;
        // Fire and forget to prevent timing attacks
        sendOrganizationInvitationEmail({
          email,
          organizationName: organization.name,
          inviterName: inviter.user.name ?? 'Someone',
          inviteUrl,
        }).catch((err) => {
          console.error('[auth.ts] Failed to send organization invitation email:', err);
        });
      },
      organizationLimit: 10,
      membershipLimit: 100,
      schema: {
        member: {
          additionalFields: {
            subscriptionId: {
              type: 'string',
              required: false,
            },
          },
        },
      },
      hooks: {
        organization: {
          afterCreate: async ({ organization }: { organization: { name: string; id: string } }) => {
            console.log(`[auth.ts] Organization created: ${organization.name} (${organization.id})`);
          },
        },
        member: {
          afterCreate: async ({
            member,
            organization,
          }: {
            member: { userId: string; role: string };
            organization: { name: string };
          }) => {
            console.log(`[auth.ts] Member added to org ${organization.name}: ${member.userId} as ${member.role}`);
          },
        },
      },
    }),
    nextCookies(),
  ],
  hooks: hooksOptions,
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (config.admin.whitelist.includes(user.email)) {
            return {
              data: {
                ...user,
                role: 'admin',
              },
            };
          }
          return { data: user };
        },
      },
    },
    session: {
      create: {
        before: async (session) => {
          if (session.activeOrganizationId) {
            return { data: session };
          }
          const member = await prisma.member.findFirst({
            where: { userId: session.userId },
            orderBy: { createdAt: 'asc' },
            select: { organizationId: true },
          });
          if (member) {
            return {
              data: {
                ...session,
                activeOrganizationId: member.organizationId,
              },
            };
          }
          return { data: session };
        },
      },
    },
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
});
