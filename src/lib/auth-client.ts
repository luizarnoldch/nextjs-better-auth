import { createAuthClient } from 'better-auth/react';
import { polarClient } from '@polar-sh/better-auth/client';
import { adminClient, organizationClient } from 'better-auth/client/plugins';
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
    organizationClient({
      ac,
      roles: {
        admin: adminRole,
        user: memberRole,
      },
      teams: { enabled: true },
      dynamicAccessControl: { enabled: true },
    }),
  ],
});

export const { signIn, signUp, signOut, useSession } = authClient;

export type AuthSessionType = typeof authClient.$Infer.Session;

export interface SessionWithImpersonation {
  session: {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    ipAddress?: string | null;
    userAgent?: string | null;
    impersonatedBy?: string;
    activeOrganizationId?: string | null;
  };
  user: {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null;
    role?: string;
  };
}
