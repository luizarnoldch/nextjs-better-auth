'use client';

import { useState } from 'react';
import { BarChart2, Loader2 } from 'lucide-react';
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

export function CustomPermissionButton() {
  const [open, setOpen] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleClick = async () => {
    setChecking(true);
    try {
      const result = await authClient.admin.hasPermission({
        permissions: { analytics: ['view'] },
      });

      if (result.data?.success) {
        setOpen(true);
      } else {
        toast.error('Permission denied', {
          description: 'You do not have the analytics:view permission.',
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
      <Button variant="outline" onClick={handleClick} disabled={checking}>
        {checking ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <BarChart2 className="mr-2 h-4 w-4" />
        )}
        Custom Permission Action
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Custom Permission Granted</AlertDialogTitle>
            <AlertDialogDescription>
              Your role has the <strong>analytics:view</strong> permission.
              This action was verified server-side via{' '}
              <code className="rounded bg-muted px-1 text-xs">
                hasPermission
              </code>{' '}
              — not from client-side session data.
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
