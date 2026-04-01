---
name: components-ui
description: Naming conventions and best practices for the `src/features/[entity]/components/` layer in a feature-based Next.js project. Use for UI components and sub-components.
---

# Use this skill when

- You need to create React UI components and sub-components.
- You need to create React form components.
- You need to create React base UI components.
- You need to refactor React UI components.

## `src/features/[entity]/components/` — UI components

### Flat components (no sub-components)

| File           | Convention              | Example                               |
| -------------- | ----------------------- | ------------------------------------- |
| Component file | `[Entity][Purpose].tsx` | `ProductTable.tsx`, `ProductForm.tsx` |

- **PascalCase**, entity prefix prevents import collisions across features.
- Purpose segment describes the UI role: `Table`, `Form`, `Card`, `FilterBar`, `EmptyState`, `Actions`.

### Complex components (with sub-components)

```
components/
  ProductForm/
    index.tsx            ← entry point, re-exports <ProductForm />
    ProductFormFields.tsx
    ProductFormActions.tsx
    ProductFormHeader.tsx
```

- Folder name: `[Entity][Purpose]/` in PascalCase.
- `index.tsx` is the only public entry point — consumers import from `./ProductForm`, not from sub-files.
- Sub-components: `[Entity][Purpose][Part].tsx` — keeps the full namespace visible in every import.
- It should continue for sub-components of sub-components. For example, if `ProductFormFields.tsx` has sub-components, they should be named `ProductFormFields[Part].tsx` converting first `ProductFormFields.tsx` to a folder in PascalCase and set `index.tsx` as entry point.

### Base UI Components

- For the base UI components, we will use Shadcn located on `src/components/ui/` folder to create any component we need.
- We can use the components from Shadcn as they are, or we can create our own components by extending the Shadcn components.

#### Form Components

- For the form components, we will use hooks on `src/features/[entity]/hooks/` folder to create the forms.
- We will use the `Field` component from `src/components/ui/` folder to create the fields for the forms.