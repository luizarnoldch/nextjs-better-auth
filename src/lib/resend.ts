"use server";

import "server-only";
import { Resend } from "resend";
import EmailVerification from "@/components/modules/email/email-verification";
import { User } from "@/generated/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);
const resend_from = process.env.RESEND_FROM_EMAIL!;

type SendEmailVerificationProps = {
  user: User & { email: string | null };
  url: string;
  token: string;
};

export const sendVerificationEmail = async (
  request: SendEmailVerificationProps
) => {
  const { user, url, token } = request;
  try {
    const { data, error } = await resend.emails.send({
      from: resend_from,
      to: user.email,
      subject: "Verify your email address",
      react: EmailVerification({ url }),
    });
    if (error) {
      console.error("Error sending organization invitation:", error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};
