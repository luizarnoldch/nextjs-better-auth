import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import prisma from "./prisma";
import { sendVerificationEmail } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  emailVerification: {
    sendVerificationEmail: async (request) => {
      const safeRequest = {
        ...request,
        user: {
          ...request.user,
          image: request.user.image ?? null,
        },
      };
      await sendVerificationEmail(safeRequest);
    },
  },
  plugins: [nextCookies()],
  advanced: {
    database: {
      generateId: false,
    },
  },
});
