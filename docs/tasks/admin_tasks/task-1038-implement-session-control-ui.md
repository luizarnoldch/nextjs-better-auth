# Tasks — Ticket 1038 - Implement Session Control UI

> Generated from: `docs/tickets/milestone_admin/1038_implement_session_control_ui.md`
> Feature: `admin`
> Date: 2026-05-03

---

### Relevant Files

**Views & Loading (all SSR):**
- `src/features/admin/views/UserDetailView.tsx` (modified)

**Components — Client Islands ('use client' in-file):**
- `src/features/admin/components/UserSessionsList.tsx`

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
  **Context:** Update the user detail view to include the sessions list.

  - [x] 6.1 Add Sessions List to User Detail View
    **Context:** Integrate the `UserSessionsList` component into the existing user detail view.
    **Files:** `src/features/admin/views/UserDetailView.tsx`
    **Skills:** `next-view-expert`

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** Build the interactive sessions list with revoke actions.

  - [x] 8.1 Implement User Sessions List Component
    **Context:** Create a client component to fetch and display sessions using `authClient.admin.listUserSessions`. Add buttons to revoke single or all sessions.
    **Files:** `src/features/admin/components/UserSessionsList.tsx`
    **Skills:** `next-component-expert`, `next-shadcn-component`
