'use client';

import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Field, FieldContent, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import useRequestPasswordReset from '../../hooks/useRequestPasswordReset';

const ForgotPasswordForm = () => {
  const { form, isPending } = useRequestPasswordReset();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="grid gap-4"
    >
      <form.Field name="email">
        {(field) => (
          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldContent>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="m@example.com"
                type="email"
                autoComplete="email"
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
            {isSubmitting || isPending ? <Loader2 size={16} className="animate-spin" /> : 'Send reset link'}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
};

export default ForgotPasswordForm;
