'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { authClient, useSession } from '@/lib/auth-client';
import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';
import { Loader2, UserCog } from 'lucide-react';
import { toast } from 'sonner';

export function ImpersonationBanner() {
  const { data: session, refetch: refetchSession } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  // impersonatedBy is added by the admin plugin on the session object
  const impersonatedBy = (session?.session as any)?.impersonatedBy as string | undefined;

  if (!session || !impersonatedBy) {
    return null;
  }

  const handleStop = async () => {
    setLoading(true);
    // Capture before session changes
    const impersonatedUserId = session.user.id;
    try {
      await authClient.admin.stopImpersonating();
      // Sync Better Auth reactive atom — drives all useSession() consumers (sidebar, banner)
      await refetchSession();
      // Sync tRPC session cache — drives AuthNavUser
      await queryClient.refetchQueries(trpc.auth.getSession.queryOptions());
      // Re-render server components with restored admin cookie
      router.refresh();
      router.push(`/dashboard/admin/users/${impersonatedUserId}`);
    } catch (err: any) {
      toast.error(err.message || 'Failed to stop impersonating');
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-between bg-destructive px-4 py-2 text-destructive-foreground shadow-sm">
      <div className="flex items-center gap-2 text-sm font-medium">
        <UserCog className="h-4 w-4 shrink-0" />
        <span>
          Impersonating{' '}
          <strong>{session.user.name}</strong>{' '}
          <span className="opacity-75">({session.user.email})</span>
        </span>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={handleStop}
        disabled={loading}
        className="h-7 shrink-0 border-destructive-foreground/30 bg-transparent text-destructive-foreground hover:bg-destructive-foreground/10 hover:text-destructive-foreground"
      >
        {loading && <Loader2 className="mr-2 h-3 w-3 animate-spin" />}
        Stop Impersonating
      </Button>
    </div>
  );
}
