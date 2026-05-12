# Tasks — Ticket 1036 - Build User Data Grid

> Generated from: `docs/tickets/milestone_admin/1036_build_user_data_grid.md`
> Feature: `admin`
> Date: 2026-05-03

---

### Relevant Files

**App Router Pages (all SSR):**
- `src/app/dashboard/admin/users/page.tsx`

**Views & Loading (all SSR):**
- `src/features/admin/views/UsersView.tsx`

**Components — Client Islands ('use client' in-file):**
- `src/features/admin/components/UsersTable.tsx`

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
  **Context:** Create the users list page route.

  - [x] 5.1 Create Users Page
    **Context:** Set up the Next.js page file for the users list.
    **Files:** `src/app/dashboard/admin/users/page.tsx`
    **Skills:** `next-view-expert`

- [x] 6.0 Views, Layouts & Loading
  **Context:** Build the view for the users list.

  - [x] 6.1 Implement Users View
    **Context:** Render the users view containing the data grid.
    **Files:** `src/features/admin/views/UsersView.tsx`
    **Skills:** `next-view-expert`

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** Build the interactive data grid for users.

  - [x] 8.1 Implement Users Table Component
    **Context:** Create a client component with state for pagination, search, and sorting. Fetch users using `authClient.admin.listUsers`. Render Shadcn UI Table.
    **Files:** `src/features/admin/components/UsersTable.tsx`
    **Skills:** `next-component-expert`, `next-shadcn-component`
