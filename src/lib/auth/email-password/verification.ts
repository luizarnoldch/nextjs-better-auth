import { betterAuth } from 'better-auth';
import { sendVerificationEmail } from '@/lib/resend';

/**
 * Configuration for email verification logic.
 */
export const emailVerificationOptions: Parameters<typeof betterAuth>[0]['emailVerification'] = {
  autoSignInAfterVerification: false,
  expiresIn: 60 * 60 * 24,

  sendOnSignUp: true, // If requireEmailVerification is true, this might be true
  sendOnSignIn: false, // If requireEmailVerification is true, this might be true
  /**
   * Function used to send the verification email.
   */
  sendVerificationEmail: async ({ user, url, token }) => {
    const fullUser = user as any;
    // Default verification flow
    await sendVerificationEmail({
      user: {
        ...user,
        image: user.image ?? null,
        role: fullUser.role ?? null,
        banned: fullUser.banned ?? null,
        banReason: fullUser.banReason ?? null,
        banExpires: fullUser.banExpires ?? null,
      },
      url,
      token,
    });

    /* 
    // CUSTOMIZATION EXAMPLE:
    // You can change the verification URL or add custom parameters if you have a custom verify page.
    const customUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-email?token=${token}&email=${user.email}`;
    
    await sendEmail({
      to: user.email,
      subject: "Verify your account",
      html: `<p>Please verify your account by clicking <a href="${customUrl}">here</a>.</p>`
    });
    */
  },

  beforeEmailVerification: async (user) => {
    console.log(`[auth/email-auth.ts] Email verification for user: ${user.email}`);
    // TODO: Implement email verification notification
    // console.log(`Email for user ${user.email} has been verified.`);
  },

  afterEmailVerification: async (user) => {
    console.log(`[auth/email-auth.ts] Email verification for user: ${user.email}`);
    // TODO: Implement email verification notification
    // console.log(`Email for user ${user.email} has been verified.`);
  },
};
