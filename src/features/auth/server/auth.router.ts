import { TRPCError } from "@trpc/server";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { signInSchema, signUpSchema, signOutSchema, requestPasswordResetSchema, resetPasswordSchema, changePasswordSchema } from "../schema/auth.schema";
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

  requestPasswordReset: protectedProcedure
    .input(requestPasswordResetSchema)
    .mutation(async ({ input }) => {
      try {
        // Once you configured your server you can call requestPasswordReset function to send reset password link to user. If the user exists, it will trigger the sendResetPassword function you provided in the auth config.
        await auth.api.requestPasswordReset({
          body: {
            email: input.email,
            redirectTo: input.redirectTo,
          },
          headers: await headers(),
        });
        return { success: true };
      } catch (error: any) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: error.message || "Failed to request password reset",
        });
      }
    }),

  resetPassword: protectedProcedure
    .input(resetPasswordSchema)
    .mutation(async ({ input }) => {
      try {
        await auth.api.resetPassword({
          body: {
            token: input.token,
            newPassword: input.newPassword,
          },
          headers: await headers(),
        });
        return { success: true };
      } catch (error: any) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: error.message || "Failed to reset password",
        });
      }
    }),

  changePassword: protectedProcedure
    .input(changePasswordSchema)
    .mutation(async ({ input }) => {
      try {
        await auth.api.changePassword({
          body: {
            currentPassword: input.currentPassword,
            newPassword: input.newPassword,
            revokeOtherSessions: input.revokeOtherSessions,
          },
          headers: await headers(),
        });
        return { success: true };
      } catch (error: any) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: error.message || "Failed to change password",
        });
      }
    }),
});
