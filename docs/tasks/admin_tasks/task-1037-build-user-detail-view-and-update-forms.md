# Tasks — Ticket 1037 - Build User Detail View & Update Forms

> Generated from: `docs/tickets/milestone_admin/1037_build_user_detail_view_and_update_forms.md`
> Feature: `admin`
> Date: 2026-05-03

---

### Relevant Files

**App Router Pages (all SSR):**
- `src/app/dashboard/admin/users/[id]/page.tsx`

**Views & Loading (all SSR):**
- `src/features/admin/views/UserDetailView.tsx`

**Components — Client Islands ('use client' in-file):**
- `src/features/admin/components/UserUpdateForm.tsx`
- `src/features/admin/components/UserPasswordForm.tsx`

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
  **Context:** Create the user detail page route.

  - [x] 5.1 Create User Detail Page
    **Context:** Set up the Next.js page file for a specific user.
    **Files:** `src/app/dashboard/admin/users/[id]/page.tsx`
    **Skills:** `next-view-expert`

- [x] 6.0 Views, Layouts & Loading
  **Context:** Build the view for the user details.

  - [x] 6.1 Implement User Detail View
    **Context:** Fetch user data using `authClient.admin.getUser` and render the details and forms.
    **Files:** `src/features/admin/views/UserDetailView.tsx`
    **Skills:** `next-view-expert`

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** Build the interactive forms for updating user details and password.

  - [x] 8.1 Implement User Update Form
    **Context:** Create a client component form to update user details (name, role) using `authClient.admin.updateUser`.
    **Files:** `src/features/admin/components/UserUpdateForm.tsx`
    **Skills:** `next-component-expert`, `next-shadcn-component`

  - [x] 8.2 Implement User Password Form
    **Context:** Create a client component form to change user password using `authClient.admin.setUserPassword`.
    **Files:** `src/features/admin/components/UserPasswordForm.tsx`
    **Skills:** `next-component-expert`, `next-shadcn-component`
