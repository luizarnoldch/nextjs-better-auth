'use client';

import { useState } from 'react';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

export function AdminActionButton() {
  const [open, setOpen] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleClick = async () => {
    setChecking(true);
    try {
      const result = await authClient.admin.hasPermission({
        permissions: { user: ['ban'] },
      });

      if (result.data?.success) {
        setOpen(true);
      } else {
        toast.error('Admin permission required', {
          description: 'You need admin privileges to perform this action.',
        });
      }
    } catch {
      toast.error('Could not verify permission. Try again.');
    } finally {
      setChecking(false);
    }
  };

  return (
    <>
      <Button variant="default" onClick={handleClick} disabled={checking}>
        {checking ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <ShieldCheck className="mr-2 h-4 w-4" />
        )}
        Admin Action
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Admin Action Executed</AlertDialogTitle>
            <AlertDialogDescription>
              This action is restricted to administrators only. Your role has
              been verified server-side and the action was allowed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOpen(false)}>
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
