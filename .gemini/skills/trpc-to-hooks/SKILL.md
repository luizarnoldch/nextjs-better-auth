---
name: trpc-to-hooks
description: Naming conventions and best practices for the `src/features/[entity]/hooks/` layer in a feature-based Next.js project. Use for TanStack Query and TanStack Form hooks.
---

# Use this skill when

- You need to create hooks for TanStack Query and TanStack Form based on a Zod schemas.

## `src/features/[entity]/hooks/` — TanStack Query + TanStack Form hooks

| Action               | File                          | Convention        | Example                      |
| -------------------- | ----------------------------- | ----------------- | ---------------------------- |
| Hydration            | `Hydrate[Entity]s.ts`         | camelCase, plural | `HydrateProducts.ts`         |
| Read (list)          | `useList[Entity]s.ts`         | camelCase, plural | `useListProducts.ts`         |
| Read Suspense (list) | `useSuspenseList[Entity]s.ts` | camelCase, plural | `useSuspenseListProducts.ts` |
| Read (single)        | `useGet[Entity].ts`           | camelCase         | `useGetProduct.ts`           |
| Create               | `useCreate[Entity].ts`        | camelCase         | `useCreateProduct.ts`        |
| Update               | `useUpdate[Entity].ts`        | camelCase         | `useUpdateProduct.ts`        |
| Delete               | `useDelete[Entity].ts`        | camelCase         | `useDeleteProduct.ts`        |

## Rules
- Use `useSuspenseQuery` for read hooks.
- Use `useQuery` for read hooks.
- Use `useMutation` for mutation hooks.
- Use `useForm` for mutation hooks.

### Example Read hooks
**Read hooks** use `useSuspenseQuery` or `useQuery`:

```ts
// HydrateProducts.ts
import { HydrateClient, prefetch, trpc } from "@/trpc/server"
import { ReactNode } from "react"

type HydrateProductsProps = {
  children: ReactNode
}
const HydrateProducts = ({ children }: HydrateProductsProps) => {
  prefetch(trpc.product.list.queryOptions())
  prefetch(...{any other router required inside the HydrateClient})
  return (
    <HydrateClient>
      {children}
    </HydrateClient>
  )
}

export default HydrateProducts
```

```ts
import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"

// useListProducts.ts
export function useListProducts() {
  const trpc = useTRPC()
  const { data, ...query } = useQuery(trpc.product.list.queryOptions())
  return {
    data,
    ...query,
  }
}
```

```ts
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

// useSuspenseListProducts.ts
export function useSuspenseListProducts() {
  const trpc = useTRPC()
  const { data, ...query } = useSuspenseQuery(trpc.product.list.queryOptions())
  return {
    data,
    ...query,
  }
}
```

### Example Mutation hooks

**Mutation hooks** (Create/Update/Delete) combine TanStack Form + `useMutation`:

```ts
// useCreateProduct.ts, useUpdateProduct.ts, useDeleteProduct.ts
// [Verb] can be Create, Update, or Delete
"use client"

import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from '@tanstack/react-form';
import { createProductSchema } from "@/trpc/features/[entity]/schema";
import { toast } from "sonner";

type use[Verb][Entity]Props = {
  product?: UpdateProductType // If we need to update set initial values, omit by default
  onSuccess?: () => void
  onError?: (error: unknown) => void
  onMutate?: () => void
  onSettled?: () => void
}

const use[Verb][Entity] = ({ product, onSuccess, onError, onMutate, onSettled }: use[Verb][Entity]Props) => {
  const trpc = useTRPC()
  const queryClient = useQueryClient()
  const mutation = useMutation(trpc.product.create.mutationOptions({
    onSuccess: async (data, variables) => {
      await queryClient.invalidateQueries(trpc.product.list.queryOptions())
      onSuccess?.()
      form.reset();
      toast.success("[Entity] [Verb] successfully")
    },
    onError: (error, variables) => {
      onError?.(error)
      toast.error("[Entity] [Verb] failed")
    },
    onMutate: async (variables) => {
      onMutate?.()
      return undefined
    },
    onSettled: async (data, error, variables) => {
      onSettled?.()
    },
  }))
  const form = useForm({
    defaultValues: {
      [updateFields]: product.[attributes], // Use this for update and the information comes from props
      [requiredFields]: [initialValues], // Use this for create and require fields like enums, dates, etc.
      [optionalFields]: undefined, // Use this for optional fields
    } as Create[Entity]Type,
    validators: {
      onChange: create[Entity]Schema,
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value)
    },
  })
  return {
    form,
    ...mutation
  }
}

export default use[Verb][Entity]
```
