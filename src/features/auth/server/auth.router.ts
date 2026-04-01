import { TRPCError } from '@trpc/server';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '@/trpc/init';
import {
  signInSchema,
  signUpSchema,
  signOutSchema,
  requestPasswordResetSchema,
  resetPasswordSchema,
  changePasswordSchema,
  updateUserSchema,
  sendVerificationEmailSchema,
  updateUserImageSchema,
} from '../schema/auth.schema';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const authRouter = createTRPCRouter({
  getSession: protectedProcedure.query(async () => {
    try {
      const session = await auth.api.getSession({
        headers: await headers(),
      });
      if (!session) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'No active session',
        });
      }
      return session;
    } catch (error: unknown) {
      if (error instanceof TRPCError) throw error;
      const message = error instanceof Error ? error.message : 'Failed to get session';
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message,
      });
    }
  }),

  updateUser: protectedProcedure.input(updateUserSchema).mutation(async ({ input }) => {
    try {
      const response = await auth.api.updateUser({
        body: input,
        headers: await headers(),
      });
      return response;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to update user';
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message,
      });
    }
  }),

  sendVerificationEmail: protectedProcedure.input(sendVerificationEmailSchema).mutation(async ({ input }) => {
    try {
      await auth.api.sendVerificationEmail({
        body: {
          email: input.email,
          callbackURL: input.callbackURL,
        },
        headers: await headers(),
      });
      return { success: true };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to send verification email';
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message,
      });
    }
  }),

  updateUserImage: protectedProcedure.input(updateUserImageSchema).mutation(async ({ input }) => {
    try {
      const response = await auth.api.updateUser({
        body: { image: input.image },
        headers: await headers(),
      });
      return response;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to update user image';
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message,
      });
    }
  }),

  signIn: baseProcedure.input(signInSchema).mutation(async ({ input }) => {
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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Invalid email or password';
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message,
      });
    }
  }),

  signUp: baseProcedure.input(signUpSchema).mutation(async ({ input }) => {
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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to sign up';
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message,
      });
    }
  }),

  signOut: protectedProcedure.input(signOutSchema).mutation(async () => {
    try {
      await auth.api.signOut({
        headers: await headers(),
      });
      return { success: true };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to sign out';
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message,
      });
    }
  }),

  requestPasswordReset: protectedProcedure.input(requestPasswordResetSchema).mutation(async ({ input }) => {
    try {
      await auth.api.requestPasswordReset({
        body: {
          email: input.email,
          redirectTo: input.redirectTo,
        },
        headers: await headers(),
      });
      return { success: true };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to request password reset';
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message,
      });
    }
  }),

  resetPassword: protectedProcedure.input(resetPasswordSchema).mutation(async ({ input }) => {
    try {
      await auth.api.resetPassword({
        body: {
          token: input.token,
          newPassword: input.newPassword,
        },
        headers: await headers(),
      });
      return { success: true };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to reset password';
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message,
      });
    }
  }),

  changePassword: protectedProcedure.input(changePasswordSchema).mutation(async ({ input }) => {
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
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to change password';
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message,
      });
    }
  }),
});
