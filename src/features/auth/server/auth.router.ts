import { TRPCError } from "@trpc/server";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { signInSchema, signUpSchema, signOutSchema } from "../schema/auth.schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const authRouter = createTRPCRouter({
  signIn: baseProcedure
    .input(signInSchema)
    .mutation(async ({ input }) => {
      try {
        const response = await auth.api.signInEmail({
          body: {
            email: input.email,
            password: input.password,
            rememberMe: input.rememberMe,
          },
          headers: await headers(),
        });
        return response;
      } catch (error: any) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: error.message || "Invalid credentials",
        });
      }
    }),

  signUp: baseProcedure
    .input(signUpSchema)
    .mutation(async ({ input }) => {
      try {
        const response = await auth.api.signUpEmail({
          body: {
            email: input.email,
            password: input.password,
            name: input.name,
            image: undefined,
            rememberMe: input.rememberMe,
          },
          headers: await headers(),
        });
        return response;
      } catch (error: any) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: error.message || "Failed to sign up",
        });
      }
    }),

  signOut: protectedProcedure
    .input(signOutSchema)
    .mutation(async () => {
      try {
        await auth.api.signOut({
          headers: await headers(),
        });
        return { success: true };
      } catch (error: any) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message || "Failed to sign out",
        });
      }
    }),
});
