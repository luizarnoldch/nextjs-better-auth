"use server";

// import "server-only";
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

    console.log("Verification email sent to:", user.email);
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

// type SendOrganizationInvitationProps = {
//   data: SendInvitationEmailType;
// };

// export const SendOrganizationInvitation = async ({
//   data,
// }: SendOrganizationInvitationProps) => {
//   console.log("Sending organization invitation to:", data);

//   try {
//     const inviteLink = `${process.env.BETTER_AUTH_URL}/accept-invitation/${data.id}`;

//     const { data: EmailData, error } = await resend.emails.send({
//       from: resend_from,
//       to: data.email,
//       subject: `You're invited to join ${data.organization.name}`,
//       react: EmailOrganizationInvitation({
//         data: data,
//         inviteLink,
//       }),
//     });

//     if (error) {
//       console.error("Error sending organization invitation:", error);
//       throw error;
//     }

//     return { success: true, EmailData };
//   } catch (error) {
//     console.error("Error sending organization invitation:", error);
//     throw error;
//   }
// };
