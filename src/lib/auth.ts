import { betterAuth } from 'better-auth';
import { polar } from '@polar-sh/better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { admin, organization } from 'better-auth/plugins';

import prisma from './prisma';
import config from './config';
import { hooksOptions } from './auth/hooks/createMiddleware';
import { polarPluginOptions } from './auth/plugins/polar/config';
import { emailAndPasswordOptions } from './auth/email-password/email';
import { emailVerificationOptions } from './auth/email-password/verification';
import { ac, adminRole, memberRole } from './auth/permissions';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: emailAndPasswordOptions,
  emailVerification: emailVerificationOptions,
  plugins: [
    nextCookies(),
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
    }),
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
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
});
