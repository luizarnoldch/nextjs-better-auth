'use server';

import { Resend } from 'resend';
import EmailVerification from '@/features/email/components/email-verification';
import PasswordResetEmail from '@/features/email/components/password-reset-email';
import type { User } from '@/generated/prisma/client';

const resend = new Resend(process.env.RESEND_API_KEY);
const resend_from = process.env.RESEND_FROM_EMAIL ?? '';

type SendEmailVerificationProps = {
  user: User & { email: string | null };
  url: string;
  token: string;
};

export const sendVerificationEmail = async (request: SendEmailVerificationProps) => {
  const { user, url } = request;
  console.log('[resend.ts] sendVerificationEmail to:', user.email);
  try {
    console.log('[resend.ts] calling resend.emails.send...');
    const { data, error } = await resend.emails.send({
      from: resend_from,
      to: user.email,
      subject: 'Verify your email address',
      react: EmailVerification({ url }),
    });

    if (error) {
      console.error('[resend.ts] resend error:', error);
      throw error;
    }

    console.log('[resend.ts] verification email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('[resend.ts] catch error:', error);
    throw error;
  }
};

type SendPasswordResetEmailProps = {
  user: { email: string };
  url: string;
  token: string;
};

export const sendPasswordResetEmail = async (request: SendPasswordResetEmailProps) => {
  const { user, url } = request;
  console.log('[resend.ts] sendPasswordResetEmail to:', user.email);
  try {
    const { data, error } = await resend.emails.send({
      from: resend_from,
      to: user.email,
      subject: 'Reset your password',
      react: PasswordResetEmail({ url }),
    });

    if (error) {
      console.error('[resend.ts] resend error:', error);
      throw error;
    }

    console.log('[resend.ts] password reset email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('[resend.ts] catch error:', error);
    throw error;
  }
};
