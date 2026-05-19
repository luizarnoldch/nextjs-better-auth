'use client';

import { useForm } from '@tanstack/react-form';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTRPC } from '@/trpc/client';
import { useCreateOrganization } from '../../hooks/useOrganizationMutations';

const schema = z.object({
  name: z.string().min(1, 'Organization name is required'),
  slug: z.string().min(1, 'Slug is required'),
  logo: z.string().url('Logo must be a valid URL').optional().or(z.literal('')),
});

type SchemaInput = z.infer<typeof schema>;

export default function OrganizationCreateForm({ onSuccess }: { onSuccess?: () => void }) {
  const create = useCreateOrganization({ onSuccess });
  const trpc = useTRPC();
  const { data: orgs } = useQuery(trpc.organization.list.queryOptions());

  const form = useForm({
    defaultValues: {
      name: '',
      slug: '',
      logo: '',
    } as SchemaInput,
    validators: {
      onChange: schema,
    },
    onSubmit: async ({ value }) => {
      const payload = { ...value, logo: value.logo || undefined };
      await create.mutateAsync(payload);
    },
  });

  const atLimit = (orgs?.length ?? 0) >= 1;
  if (atLimit) {
    return (
      <div className="text-muted-foreground text-sm">
        You have reached your organization limit. Upgrade to create more.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.Field name="name">
        {(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>Name</Label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Acme Inc"
            />
            {field.state.meta.errors.map((err) => (
              <span key={typeof err === 'string' ? err : err?.message} className="text-sm text-red-500">
                {typeof err === 'string' ? err : err?.message}
              </span>
            ))}
          </div>
        )}
      </form.Field>

      <form.Field name="slug">
        {(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>Slug</Label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="acme-inc"
            />
            {field.state.meta.errors.map((err) => (
              <span key={typeof err === 'string' ? err : err?.message} className="text-sm text-red-500">
                {typeof err === 'string' ? err : err?.message}
              </span>
            ))}
          </div>
        )}
      </form.Field>

      <form.Field name="logo">
        {(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>Logo URL (optional)</Label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="https://..."
            />
            {field.state.meta.errors.map((err) => (
              <span key={typeof err === 'string' ? err : err?.message} className="text-sm text-red-500">
                {typeof err === 'string' ? err : err?.message}
              </span>
            ))}
          </div>
        )}
      </form.Field>

      <Button type="submit" disabled={create.isPending} className="w-full">
        {create.isPending ? 'Creating...' : 'Create Organization'}
      </Button>
    </form>
  );
}
