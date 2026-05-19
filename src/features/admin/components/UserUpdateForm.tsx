'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAdminGuard } from '../hooks/useAdminGuard';
import type { UserWithRole } from '../types/user.types';

export function UserUpdateForm({ user }: { user: UserWithRole }) {
  const queryClient = useQueryClient();
  const { guardAction } = useAdminGuard();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState<'user' | 'admin'>(user.role === 'admin' ? 'admin' : 'user');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await guardAction({ user: ['set-role', 'update'] }, async () => {
    setLoading(true);

    try {
      if (role !== user.role) {
        await authClient.admin.setRole({
          userId: user.id,
          role: role as 'user' | 'admin',
        });
      }
      
      if (name !== user.name) {
        toast.info("Updating user not fully implemented in this example for name");
      }

      await queryClient.invalidateQueries({ queryKey: ['user', user.id] });
      toast.success('User updated successfully');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update user';
      toast.error(message);
    } finally {
      setLoading(false);
    }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update User</CardTitle>
        <CardDescription>
          Update user role and basic details.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={user.email}
              disabled
              className="bg-muted"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={role} onValueChange={(v) => setRole(v as 'user' | 'admin')} disabled={loading}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}