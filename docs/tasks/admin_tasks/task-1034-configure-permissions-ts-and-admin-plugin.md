# Tasks — Ticket 1034 - Configure permissions.ts and admin plugin

> Generated from: `docs/tickets/milestone_admin/1034_configure_permissions_ts_and_admin_plugin.md`
> Feature: `auth`
> Date: 2026-05-03

---

### Relevant Files

**Backend Config:**
- `src/lib/auth/permissions.ts`
- `src/lib/auth.ts` (modified)
- `src/lib/auth-client.ts` (modified)

---

## Tasks

- [x] 1.0 Prisma Schema & Migration
  **Context:** not required

- [x] 2.0 Zod Schema
  **Context:** not required

- [x] 3.0 tRPC Router
  **Context:** Configure permissions and admin plugin settings.

  - [x] 3.1 Create permissions definition
    **Context:** Define roles and statements using `createAccessControl` from better-auth.
    **Files:** `src/lib/auth/permissions.ts`
    **Skills:** `better-auth-best-practices`

  - [x] 3.2 Configure Admin Plugin Options
    **Context:** Update the `admin()` plugin in `auth.ts` with default ban reasons and messages.
    **Files:** `src/lib/auth.ts`
    **Skills:** `better-auth-best-practices`

- [x] 4.0 TanStack Query & Form Hooks
  **Context:** not required

- [x] 5.0 App Router Pages
  **Context:** not required

- [x] 6.0 Views, Layouts & Loading
  **Context:** not required

- [x] 7.0 Component UI — Pure Server
  **Context:** not required

- [x] 8.0 Component Client Islands
  **Context:** not required
