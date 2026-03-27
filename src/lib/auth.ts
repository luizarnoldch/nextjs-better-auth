import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import prisma from "./prisma";
import { emailAndPasswordOptions } from "./auth/email-password/email";
import { emailVerificationOptions } from "./auth/email-password/verification";
import { hooksOptions } from "./auth/hooks/createMiddleware";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: emailAndPasswordOptions,
  emailVerification: emailVerificationOptions,
  plugins: [nextCookies()],
  hooks: hooksOptions,
  advanced: {
    database: {
      generateId: false,
    },
  },
});
