import { redirect } from 'next/navigation';
import ResetPasswordView from '@/features/auth/views/ResetPasswordView';

type ResetPasswordPageProps = {
  searchParams: Promise<{ token?: string }>;
};

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const { token } = await searchParams;

  if (!token) {
    redirect('/forgot-password');
  }

  return (
    <ResetPasswordView token={token} />
  );
}
