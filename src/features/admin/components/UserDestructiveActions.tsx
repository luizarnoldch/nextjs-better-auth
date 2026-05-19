'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAdminGuard } from '../hooks/useAdminGuard';
import type { UserWithRole } from '../types/user.types';

export function UserDestructiveActions({ user }: { user: UserWithRole }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { guardAction } = useAdminGuard();
  const [loading, setLoading] = useState(false);
  const [banReason, setBanReason] = useState('');
  const [deleteConfirmEmail, setDeleteConfirmEmail] = useState('');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleBanToggle = async () => {
    await guardAction({ user: ['ban'] }, async () => {
    setLoading(true);
    try {
      if (user.banned) {
        await authClient.admin.unbanUser({ userId: user.id });
        toast.success('User unbanned successfully');
      } else {
        await authClient.admin.banUser({ 
          userId: user.id, 
          banReason: banReason || 'Violation of Terms' 
        });
        toast.success('User banned successfully');
        setBanReason('');
      }
      await queryClient.invalidateQueries({ queryKey: ['user', user.id] });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update ban status';
      toast.error(message);
    } finally {
      setLoading(false);
    }
    });
  };

  const handleDeleteUser = async () => {
    await guardAction({ user: ['delete'] }, async () => {
    if (deleteConfirmEmail !== user.email) {
      toast.error('Email does not match');
      return;
    }
    
    setLoading(true);
    try {
      await authClient.admin.removeUser({ userId: user.id });
      toast.success('User deleted successfully');
      router.push('/dashboard/admin/users');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete user';
      toast.error(message);
    } finally {
      setLoading(false);
      setIsDeleteDialogOpen(false);
    }
    });
  };

  const handleOpenDeleteDialog = async () => {
    await guardAction({ user: ['delete'] }, async () => {
      setIsDeleteDialogOpen(true);
    });
  };

  return (
    <Card className="border-destructive/50">
      <CardHeader>
        <CardTitle className="text-destructive flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Destructive Actions
        </CardTitle>
        <CardDescription>
          These actions can have severe consequences. Please proceed with caution.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 rounded-lg border p-4">
          <div>
            <h4 className="font-medium text-sm">Ban User</h4>
            <p className="text-sm text-muted-foreground">
              {user.banned 
                ? 'This user is currently banned. Unbanning will restore their access.'
                : 'Banning a user will immediately revoke their access to the platform.'}
            </p>
          </div>
          
          {!user.banned && (
            <div className="space-y-2">
              <Label htmlFor="ban-reason">Ban Reason (Optional)</Label>
              <Input
                id="ban-reason"
                placeholder="e.g. Violation of Terms of Service"
                value={banReason}
                onChange={(e) => setBanReason(e.target.value)}
                disabled={loading}
              />
            </div>
          )}
          
          <Button 
            variant={user.banned ? 'outline' : 'destructive'} 
            onClick={handleBanToggle} 
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {user.banned ? 'Unban User' : 'Ban User'}
          </Button>
        </div>

        <div className="space-y-4 rounded-lg border border-destructive/20 p-4">
          <div>
            <h4 className="font-medium text-sm text-destructive">Delete User</h4>
            <p className="text-sm text-muted-foreground">
              Permanently remove this user and all associated data. This action cannot be undone.
            </p>
          </div>
          
          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <Button variant="destructive" disabled={loading} onClick={handleOpenDeleteDialog}>
              Delete User
            </Button>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the user account
                  and remove their data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>
                    Type <span className="font-bold">{user.email}</span> to confirm
                  </Label>
                  <Input 
                    value={deleteConfirmEmail}
                    onChange={(e) => setDeleteConfirmEmail(e.target.value)}
                    placeholder={user.email}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={handleDeleteUser}
                  disabled={loading || deleteConfirmEmail !== user.email}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}