'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from '@/trpc/client';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useUpdateOrganization, useDeleteOrganization } from '@/features/organization/hooks/useOrganizationMutations';

const schema = z.object({
  name: z.string().min(1),
  slug: z.string().optional(),
  logo: z.string().url().optional(),
});

export default function OrganizationSettingsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();
  const trpc = useTRPC();

  const { data: org, isLoading } = useQuery(
    trpc.organization.getFull.queryOptions({ organizationSlug: slug }),
  );

  const update = useUpdateOrganization();
  const del = useDeleteOrganization({
    onSuccess: () => router.push('/dashboard/organizations'),
  });

  const form = useForm({
    defaultValues: {
      name: org?.name ?? '',
      slug: org?.slug ?? undefined,
      logo: org?.logo ?? undefined,
    } as z.infer<typeof schema>,
    validators: { onChange: schema },
    onSubmit: async ({ value }) => {
      if (!org) return;
      await update.mutateAsync({ organizationId: org.id, data: value });
    },
  });

  if (isLoading) {
    return <Skeleton className="h-64 w-full" />;
  }

  if (!org) {
    return <p className="text-muted-foreground">Organization not found.</p>;
  }

  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold">Organization Settings</h1>
        <p className="text-muted-foreground text-sm">Update or delete this organization.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
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
                  />
                  {field.state.meta.errors.map((err) => (
                    <span key={err?.message} className="text-sm text-red-500">
                      {err?.message}
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
                  />
                </div>
              )}
            </form.Field>

            <form.Field name="logo">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Logo URL</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value ?? ''}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value || undefined)}
                  />
                </div>
              )}
            </form.Field>

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={update.isPending}>
                {update.isPending ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button
                type="button"
                variant="destructive"
                disabled={del.isPending}
                onClick={() => {
                  if (confirm('Are you sure? This will permanently delete the organization.')) {
                    del.mutateAsync({ organizationId: org.id });
                  }
                }}
              >
                {del.isPending ? 'Deleting...' : 'Delete Organization'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
