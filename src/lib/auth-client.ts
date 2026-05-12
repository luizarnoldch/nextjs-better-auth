import { createAuthClient } from 'better-auth/react';
import { polarClient } from '@polar-sh/better-auth/client';
import { adminClient } from 'better-auth/client/plugins';
import { ac, adminRole, memberRole } from './auth/permissions';

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
  plugins: [
    polarClient(),
    adminClient({
      ac,
      roles: {
        admin: adminRole,
        user: memberRole,
      },
    }),
  ],
});

export const { signIn, signUp, signOut, useSession } = authClient;

export type AuthSessionType = typeof authClient.$Infer.Session;
