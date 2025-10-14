import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL!,
  plugins: [organizationClient()],
});

export const { signIn, signUp, signOut, useSession } = authClient;

export type AuthSessionType = typeof authClient.$Infer.Session;
