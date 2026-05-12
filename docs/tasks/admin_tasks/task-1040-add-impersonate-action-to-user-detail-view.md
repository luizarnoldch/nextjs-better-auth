# Tasks — Ticket 1040 - Add Impersonate action to User Detail View

> Generated from: `docs/tickets/milestone_admin/1040_add_impersonate_action_to_user_detail_view.md`
> Feature: `admin`
> Date: 2026-05-03

---

### Relevant Files

**Views & Loading (all SSR):**
- `src/features/admin/views/UserDetailView.tsx` (modified)

**Components — Client Islands ('use client' in-file):**
- `src/features/admin/components/UserImpersonateButton.tsx`

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
  **Context:** not required

- [x] 6.0 Views, Layouts & Loading
  **Context:** Update the user detail view to include the impersonate button.

  - [x] 6.1 Add Impersonate Button to User Detail View
    **Context:** Integrate the `UserImpersonateButton` component into the existing user detail view.
    **Files:** `src/features/admin/views/UserDetailView.tsx`
    **Skills:** `next-view-expert`

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** Build the interactive impersonate button.

  - [x] 8.1 Implement User Impersonate Button Component
    **Context:** Create a client component button that triggers `authClient.admin.impersonateUser` and redirects to the main app.
    **Files:** `src/features/admin/components/UserImpersonateButton.tsx`
    **Skills:** `next-component-expert`, `next-shadcn-component`
