'use client';

import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

// Derive the exact permissions type from the typed admin client
type AdminPermissions = Parameters<
  typeof authClient.admin.hasPermission
>[0]['permissions'];

/**
 * Returns a `guardAction` wrapper that executes the callback only when the
 * current user has the specified permissions.
 * Uses `authClient.admin.hasPermission` for a server-validated check instead
 * of trusting the client-side session role value.
 *
 * @param permissions - Resource/action map, e.g. `{ user: ['ban'] }`
 * @param action      - Async callback executed only if permission granted
 */
export function useAdminGuard() {
  const guardAction = async (
    permissions: AdminPermissions,
    action: () => Promise<void> | void,
  ) => {
    const result = await authClient.admin.hasPermission({ permissions });

    if (!result.data?.success) {
      toast.error('Permission denied', {
        description: 'You do not have permission to perform this action.',
      });
      return;
    }

    await action();
  };

  return { guardAction };
}
