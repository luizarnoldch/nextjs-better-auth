import { ResetPasswordCard } from '../components/ResetPasswordCard';

type ResetPasswordViewProps = {
  token: string;
};

export default function ResetPasswordView({ token }: ResetPasswordViewProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ResetPasswordCard token={token} />
      </div>
    </div>
  );
}
