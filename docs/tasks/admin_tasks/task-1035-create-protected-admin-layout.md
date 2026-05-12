# Tasks — Ticket 1035 - Create protected admin layout

> Generated from: `docs/tickets/milestone_admin/1035_create_protected_admin_layout.md`
> Feature: `admin`
> Date: 2026-05-03

---

### Relevant Files

**App Router Pages (all SSR):**
- `src/app/dashboard/admin/layout.tsx`

**Views & Loading (all SSR):**
- `src/features/admin/views/AdminLayout.tsx`

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
  **Context:** Create the protected layout route for the admin dashboard.

  - [x] 5.1 Create Admin App Layout
    **Context:** Set up the Next.js layout file that will wrap all admin pages.
    **Files:** `src/app/dashboard/admin/layout.tsx`
    **Skills:** `next-view-expert`

- [x] 6.0 Views, Layouts & Loading
  **Context:** Build the layout view that verifies the admin role.

  - [x] 6.1 Implement Protected Admin Layout View
    **Context:** Fetch session and verify `user.role === "admin"`. Redirect if not authorized. Render admin navigation.
    **Files:** `src/features/admin/views/AdminLayout.tsx`
    **Skills:** `next-view-expert`

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** not required
