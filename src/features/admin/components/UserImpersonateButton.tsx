'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { authClient, useSession } from '@/lib/auth-client';
import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';
import { Loader2, UserCog } from 'lucide-react';
import { toast } from 'sonner';
import { useAdminGuard } from '../hooks/useAdminGuard';

export function UserImpersonateButton({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);
  const { refetch: refetchSession } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();
  const trpc = useTRPC();
  const { guardAction } = useAdminGuard();

  const handleImpersonate = async () => {
    await guardAction({ user: ['impersonate'] }, async () => {
    setLoading(true);
    try {
      await authClient.admin.impersonateUser({ userId });
      // Sync Better Auth reactive atom — drives all useSession() consumers (sidebar, banner)
      await refetchSession();
      // Sync tRPC session cache — drives AuthNavUser
      await queryClient.refetchQueries(trpc.auth.getSession.queryOptions());
      // Re-render server components with new impersonation cookie
      router.refresh();
      router.push('/dashboard');
    } catch (err: any) {
      toast.error(err.message || 'Failed to impersonate user');
      setLoading(false);
    }
    });
  };

  return (
    <Button
      variant="secondary"
      onClick={handleImpersonate}
      disabled={loading}
      className="w-full sm:w-auto"
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <UserCog className="mr-2 h-4 w-4" />
      )}
      Impersonate User
    </Button>
  );
}
