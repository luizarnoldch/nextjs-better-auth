'use client';

import { useQuery } from '@tanstack/react-query';
import { authClient } from '@/lib/auth-client';
import { UserUpdateForm } from '../components/UserUpdateForm';
import { UserPasswordForm } from '../components/UserPasswordForm';
import { UserSessionsList } from '../components/UserSessionsList';
import { UserDestructiveActions } from '../components/UserDestructiveActions';
import { UserImpersonateButton } from '../components/UserImpersonateButton';
import { Loader2 } from 'lucide-react';

export function UserDetailView({ userId }: { userId: string }) {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const res = await authClient.admin.getUser({
        query: {
          id: userId,
        },
      });
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User Details</h2>
          <p className="text-muted-foreground">
            View and manage user details and settings.
          </p>
        </div>
        <UserImpersonateButton userId={userId} />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <UserUpdateForm user={user} />
          <UserDestructiveActions user={user} />
        </div>
        <div className="flex flex-col gap-8">
          <UserPasswordForm userId={userId} />
          <UserSessionsList userId={userId} />
        </div>
      </div>
    </div>
  );
}