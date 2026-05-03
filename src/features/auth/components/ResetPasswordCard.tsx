import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ResetPasswordFormActions } from './ResetPasswordFormActions';

type ResetPasswordCardProps = {
  token: string;
};

export const ResetPasswordCard = ({ token }: ResetPasswordCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Set new password</CardTitle>
        <CardDescription className="text-xs md:text-sm">Choose a strong password for your account</CardDescription>
      </CardHeader>
      <CardContent>
        <ResetPasswordFormActions token={token} />
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="text-center text-sm py-4">
          Remember your password?{' '}
          <Link href="/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
        <div className="flex justify-center w-full border-t py-4">
          <p className="text-center text-xs text-neutral-500">
            Secured by <span className="text-orange-400">better-auth.</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
