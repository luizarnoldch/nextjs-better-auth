---
name: orm-to-zod
description: Naming conventions and best practices for the `src/features/[entity]/schema/` layer in a feature-based Next.js project. Use this skill for Zod schemas, backend operations inputs, and type definitions.
---

# Use this skill when

- You need to create Zod schemas for backend operations based on a ORM models.
- You need to create type definitions for backend operations based on a ORM models.
- You need to create input types for backend operations based on a ORM models.

## `src/features/[entity]/schema/` — Zod schemas for backend operations

| File             | Convention           | Example             |
| ---------------- | -------------------- | ------------------- |
| Main schema file | `[entity].schema.ts` | `product.schema.ts` |

- Use **dot-separated type suffix** (`.schema.`) — same pattern as `.test.ts`, `.config.ts`.
- Export named schemas: `[Entity]Schema`, `create[Entity]Schema`, `update[Entity]Schema`, `delete[Entity]Schema`.
- One file per entity is the default. Split into multiple files only if schemas grow beyond ~150 lines.

## Type Safety

### Example for Prisma Model

```prisma
// prisma/schema.prisma
model Product {
  id          String   @id @default(uuid())
  // ...
}
```

```ts
// product.schema.ts
export const productSchema = z.object({ ... })
export const createProductSchema = productSchema.extend({ ... })
export const updateProductSchema = productSchema.extend({ ... })
export const productIdSchema = productSchema.pick({ id: true })
export type ProductType = z.infer<typeof productSchema>;
export type CreateProductType = z.infer<typeof createProductSchema>
export type UpdateProductType = z.infer<typeof updateProductSchema>
export type ProductIdType = z.infer<typeof productIdSchema>
```

### Example for Drizzle Model

```ts
// db/schemas/products.ts
export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  // ...
}
```

```ts
// product.schema.ts
export const productSchema = createSelectSchema(products);
export const createProductSchema = createInsertSchema(products).extend({ ... });
export const updateProductSchema = createUpdateSchema(products);
export const productIdSchema = z.object({ id: z.number() });
export type ProductType = z.infer<typeof productSchema>;
export type CreateProductType = z.infer<typeof createProductSchema>
export type UpdateProductType = z.infer<typeof updateProductSchema>
export type ProductIdType = z.infer<typeof productIdSchema>
```

## Zod Schema Creation Rules

- Zod version (v4) https://zod.dev/api
- Use z.uuid() for UUID fields (do not use z.string.uuid(...) for uuid).
- Use z.json() for JSON fields (avoid using z.any() or z.unknow()).
- Use z.date() for date fields.
- Use z.enum([...]) for enum fields or use this example:
### Enum Structure
```ts
import z from "zod";
import { [Entity-Enum] } from "@/generated/prisma/enums";
const [entity]TypeEnum = z.enum(Object.values([Entity-Enum]));
const [entity]Schema= z.object({
  enumField: [entity]TypeEnum,
})
```
### Enum Example:
```ts
import z from "zod";
import { ClientType } from "@/generated/prisma/enums";
const clientTypeEnum = z.enum(Object.values(ClientType));
const clientSchema = z.object({
  ...
  status: clientTypeEnum,
  ...
})
```
- For required fields, use z.type()
- For nullable or optional fields, use z.type().optional()
- Iterate on the code until there is no error o deprecated messages.