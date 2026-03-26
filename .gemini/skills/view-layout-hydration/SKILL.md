---
name: view-layout-hydration
description: Naming conventions and best practices for the `src/features/[entity]/views/` layer in a feature-based Next.js project. Use for page-level view components.
---

# Use this skill when

- You need to create React page-level view components.
- You need to create React layout components.
- You need to create React hydration components.
- You need to refactor React page-level view components.

## `src/features/[entity]/views/` — Page-level view component

| File             | Convention           | Example             |
| ---------------- | -------------------- | ------------------- |
| View component   | `[Entity]View.tsx`   | `ProductView.tsx`   |
| Layout component | `[Entity]Layout.tsx` | `ProductLayout.tsx` |

- A view is a page-level component that is responsible for rendering a page agnostic **of** the framework.
- **PascalCase** — aligns the filename with the exported React component name.
- One view per entity (or feature page). The view composes hooks and components; it owns no local logic.
- Default export matches the filename: `export default function [Entity]View() { ... }`.

### Example

```ts
// Framework page /src/app/products/page.tsx
import ProductsView from "@/features/product/views/ProductsView";

export default function ProductsPage() {
  return <ProductsView />;
}
```

```tsx
// src/features/product/views/ProductsLayout.tsx
import React from "react";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      {/* Layout structure for the products section */}
      {children}
    </div>
  );
}
```

```tsx
// src/features/product/views/ProductsView.tsx
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import HydrateProducts from "@/features/product/hooks/HydrateProducts";
import ProductsLayout from "./ProductsLayout";
import ProductList from "../components/ProductList";
import ProductFilters from "../components/ProductFilters";
import ProductStats from "../components/ProductStats";

export default function ProductsView() {
  return (
    <HydrateProducts>
      <ProductsLayout>
        <ErrorBoundary fallback={<div>Error loading filters</div>}>
          <Suspense fallback={<div>Loading filters...</div>}>
            <ProductFilters />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Error loading stats</div>}>
          <Suspense fallback={<div>Loading stats...</div>}>
            <ProductStats />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<div>Error loading products</div>}>
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductList />
          </Suspense>
        </ErrorBoundary>
      </ProductsLayout>
    </HydrateProducts>
  );
}
```