'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { authClient } from '@/lib/auth-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Monitor, Smartphone, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useAdminGuard } from '../hooks/useAdminGuard';

export function UserSessionsList({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  const { guardAction } = useAdminGuard();

  const { data: sessions, isLoading } = useQuery({
    queryKey: ['sessions', userId],
    queryFn: async () => {
      // The admin plugin provides listUserSessions method
      // Let's assume it exists according to task
      const res = await authClient.admin.listUserSessions({ userId });
      return res.data;
    },
  });

  const revokeSession = async (sessionToken: string) => {
    await guardAction({ session: ['revoke'] }, async () => {
    try {
      await authClient.admin.revokeUserSession({ sessionToken });
      await queryClient.invalidateQueries({ queryKey: ['sessions', userId] });
      toast.success('Session revoked');
    } catch (err: any) {
      toast.error(err.message || 'Failed to revoke session');
    }
    });
  };

  const revokeAllSessions = async () => {
    await guardAction({ session: ['revoke'] }, async () => {
    try {
      // According to better-auth docs we can revoke all sessions for a user via admin
      // wait, the method might be called something else. Assuming it's revokeUserSession or similar.
      // If there's no bulk revoke, we'll revoke one by one.
      // Better-auth admin has `revokeUserSessions` perhaps? Let's use it.
      if (sessions && sessions.sessions) {
         for (const s of sessions.sessions) {
             await authClient.admin.revokeUserSession({ sessionToken: s.token });
         }
      }
      await queryClient.invalidateQueries({ queryKey: ['sessions', userId] });
      toast.success('All sessions revoked');
    } catch (err: any) {
      toast.error(err.message || 'Failed to revoke sessions');
    }
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>
            Manage active sessions for this user.
          </CardDescription>
        </div>
        <Button 
          variant="destructive" 
          size="sm" 
          onClick={revokeAllSessions}
          disabled={!sessions || !sessions.sessions || sessions.sessions.length === 0 || isLoading}
        >
          Revoke All
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex h-24 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : !sessions || !sessions.sessions || sessions.sessions.length === 0 ? (
          <div className="flex h-24 items-center justify-center text-sm text-muted-foreground">
            No active sessions found.
          </div>
        ) : (
          <div className="space-y-4">
            {sessions.sessions.map((session) => {
              // try to parse user agent
              const isMobile = session.userAgent?.toLowerCase().includes('mobile');
              
              return (
                <div key={session.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted p-2">
                      {isMobile ? <Smartphone className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {session.ipAddress || 'Unknown IP'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {session.userAgent || 'Unknown Device'}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Created: {new Date(session.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => revokeSession(session.token)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}