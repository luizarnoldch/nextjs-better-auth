'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import useResetPassword from '../hooks/useResetPassword';

type ResetPasswordFormActionsProps = {
  token: string;
};

export const ResetPasswordFormActions = ({ token }: ResetPasswordFormActionsProps) => {
  const router = useRouter();
  const { form, isPending } = useResetPassword({
    token,
    onSuccess: () => {
      router.push('/sign-in');
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="grid gap-4"
    >
      <form.Field name="newPassword">
        {(field) => (
          <Field>
            <FieldLabel>New password</FieldLabel>
            <FieldContent>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Min. 8 characters"
                type="password"
                autoComplete="new-password"
                required
              />
            </FieldContent>
            <FieldError errors={field.state.meta.errors} />
          </Field>
        )}
      </form.Field>
      <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" className="w-full" disabled={!canSubmit || isSubmitting || isPending}>
            {isSubmitting || isPending ? <Loader2 size={16} className="animate-spin" /> : 'Set new password'}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};
