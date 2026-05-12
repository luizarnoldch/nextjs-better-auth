# Tasks — Ticket 1041 - Implement Global Impersonation Banner

> Generated from: `docs/tickets/milestone_admin/1041_implement_global_impersonation_banner.md`
> Feature: `admin`
> Date: 2026-05-03

---

### Relevant Files

**App Router Pages (all SSR):**
- `src/app/layout.tsx` (modified)

**Components — Client Islands ('use client' in-file):**
- `src/components/impersonation-banner.tsx`

---

## Tasks

- [x] 1.0 Prisma Schema & Migration
  **Context:** not required

- [x] 2.0 Zod Schema
  **Context:** not required

- [x] 3.0 tRPC Router
  **Context:** not required

- [x] 4.0 TanStack Query & Form Hooks
  **Context:** not required

- [x] 5.0 App Router Pages
  **Context:** Update the root layout to include the banner.

  - [x] 5.1 Add Impersonation Banner to Root Layout
    **Context:** Import and render the `ImpersonationBanner` component in the main layout.
    **Files:** `src/app/layout.tsx`
    **Skills:** `next-view-expert`

- [x] 6.0 Views, Layouts & Loading
  **Context:** not required

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** Build the interactive global banner.

  - [x] 8.1 Implement Impersonation Banner Component
    **Context:** Create a client component that checks the session for `impersonatedBy`. If true, render a fixed banner with a "Stop Impersonating" button that calls `authClient.admin.stopImpersonating()`.
    **Files:** `src/components/impersonation-banner.tsx`
    **Skills:** `next-component-expert`, `next-shadcn-component`
