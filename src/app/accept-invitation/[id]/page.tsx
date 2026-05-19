import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import AcceptInvitationClient from './AcceptInvitationClient';

export default async function AcceptInvitationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect(`/sign-in?redirect=/accept-invitation/${id}`);
  }

  return <AcceptInvitationClient id={id} />;
}
