# Tasks — Ticket 1039 - Implement Ban/Unban and Delete User actions

> Generated from: `docs/tickets/milestone_admin/1039_implement_ban_unban_and_delete_user_actions.md`
> Feature: `admin`
> Date: 2026-05-03

---

### Relevant Files

**Views & Loading (all SSR):**
- `src/features/admin/views/UserDetailView.tsx` (modified)

**Components — Client Islands ('use client' in-file):**
- `src/features/admin/components/UserDestructiveActions.tsx`

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
  **Context:** Update the user detail view to include destructive actions.

  - [x] 6.1 Add Destructive Actions to User Detail View
    **Context:** Integrate the `UserDestructiveActions` component into the existing user detail view.
    **Files:** `src/features/admin/views/UserDetailView.tsx`
    **Skills:** `next-view-expert`

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** Build the interactive buttons and dialogs for ban/unban and delete.

  - [x] 8.1 Implement User Destructive Actions Component
    **Context:** Create a client component with Ban/Unban toggle and a Delete User button that opens a confirmation dialog requiring the user's email to be typed.
    **Files:** `src/features/admin/components/UserDestructiveActions.tsx`
    **Skills:** `next-component-expert`, `next-shadcn-component`
