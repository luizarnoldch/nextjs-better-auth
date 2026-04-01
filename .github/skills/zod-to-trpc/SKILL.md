---
name: zod-to-trpc
description: Naming conventions and best practices for the `src/features/[entity]/server/` layer in a feature-based Next.js project. Use for tRPC routers and server-side logic.
---

# Use this skill when

- You need to create tRPC routers based on a Zod schemas.

## `src/features/[entity]/server/` — tRPC router

| File        | Convention           | Example             |
| ----------- | -------------------- | ------------------- |
| Router file | `[entity].router.ts` | `product.router.ts` |

- The name of the router file is `[entity].router.ts` for clarity in editor tabs and imports.
- Export a single router: `export const [entity]Router = createTRPCRouter({ ... })`.
- Import schemas from `../schema/[entity].schema.ts`.
- Import procedures from `@/trpc/init`.
- Create a router for each operation: `list`, `get`, `create`, `update`, `delete`.
- Use protected procedures for operations that require authentication.
- Use public procedures for operations that do not require authentication.

### Rules
- Ensure proper error handling for database operations.
- Iterate till there are no errors or issues.
- Avoid using "any" type in the code, create new object trying to follow types from zod schemas with the next structure:
  - Separate from the input the field or fields that are not having the right type.
  - Create a new object spreading the rest of the fields and adding the field with the right type.

### Integrate the New Router into the Main Router
- Open the main router file (src/trpc/routers/_app.ts).
- Import the newly created router.
- Add the new router to the main router export (e.g., { [entity]: [entity]Router }).


The common verbs for CRUD operations in prisma are:
- list -> findMany
- get -> findUnique
- create -> create
- update -> update
- delete -> delete

### Example for prisma

```ts
// product.router.ts
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
  getProductSchema,
} from "../schema/product.schema";
import { protectedProcedure, baseProcedure, createTRPCRouter } from "@/trpc/init";
export const productRouter = createTRPCRouter({
  [verb]: baseProcedure.query(async ({ input, ctx }) => {
    try {
      return await ctx.prisma.product.[operation](...)
    } catch (error) {
      throw new TRPCError({
        code: [TRPCErrorCode],
        message: [Error Message],
      });
    }
  }),
})
```

The common verbs for CRUD operations in drizzle are:
- list -> select().from([table_name])
- get -> select().from([table_name]).where(eq([table_name].id, input.id))
- create -> insert([table_name]).values(...)
- update -> update([table_name]).set(...).where(eq([table_name].id, input.id))
- delete -> delete([table_name]).where(eq([table_name].id, input.id))

### Example for drizzle

```ts
// product.router.ts
import {
  createProductSchema,
  updateProductSchema,
  deleteProductSchema,
  getProductSchema,
} from "../schema/product.schema";
import { protectedProcedure, baseProcedure, createTRPCRouter } from "@/trpc/init";
export const productRouter = createTRPCRouter({
  [verb]: baseProcedure.query(async ({ input, ctx }) => {
    try {
      return await ctx.db.product.[operation](...)
    } catch (error) {
      throw new TRPCError({
        code: [TRPCErrorCode],
        message: [Error Message],
      });
    }
  }),
})
```