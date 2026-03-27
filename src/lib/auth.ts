import { betterAuth } from "better-auth";
import { polar } from "@polar-sh/better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import prisma from "./prisma";
import { hooksOptions } from "./auth/hooks/createMiddleware";
import { polarPluginOptions } from "./auth/plugins/polar/config";
import { emailAndPasswordOptions } from "./auth/email-password/email";
import { emailVerificationOptions } from "./auth/email-password/verification";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: emailAndPasswordOptions,
  emailVerification: emailVerificationOptions,
  plugins: [
    nextCookies(),
    polar(polarPluginOptions),
  ],
  hooks: hooksOptions,
  advanced: {
    database: {
      generateId: false,
    },
  },
});
