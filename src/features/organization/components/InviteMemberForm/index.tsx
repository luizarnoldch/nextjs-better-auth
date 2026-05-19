'use client';

import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useInviteMember } from '../../hooks/useOrganizationMutations';

const schema = z.object({
  email: z.string().email('Invalid email'),
  role: z.string(),
});

export default function InviteMemberForm({ orgId, onSuccess }: { orgId: string; onSuccess?: () => void }) {
  const invite = useInviteMember({ onSuccess });

  const form = useForm({
    defaultValues: {
      email: '',
      role: 'member',
    },
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      await invite.mutateAsync({ email: value.email, role: value.role, organizationId: orgId });
      form.reset();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.Field name="email">
        {(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>Email</Label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="colleague@company.com"
            />
            {field.state.meta.errors.map((err) => (
              <span key={err?.message} className="text-sm text-red-500">
                {err?.message}
              </span>
            ))}
          </div>
        )}
      </form.Field>

      <form.Field name="role">
        {(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>Role</Label>
            <Select value={field.state.value} onValueChange={(v) => field.handleChange(v)}>
              <SelectTrigger id={field.name}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="member">Member</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </form.Field>

      <Button type="submit" disabled={invite.isPending} className="w-full">
        {invite.isPending ? 'Sending...' : 'Send Invitation'}
      </Button>
    </form>
  );
}
