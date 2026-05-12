# Tasks — Ticket 1033 - Update schema.prisma for Admin Plugin

> Generated from: `docs/tickets/milestone_admin/1033_update_schema_prisma_for_admin_plugin.md`
> Feature: `auth`
> Date: 2026-05-03

---

### Relevant Files

**Prisma:**
- `prisma/schema.prisma` (modified)
- `src/lib/auth.ts` (modified)
- `src/lib/auth-client.ts` (modified)

---

## Tasks

- [x] 1.0 Prisma Schema & Migration
  **Context:** Update the Auth config to include the Admin plugin and push changes to the database.

  - [x] 1.1 Configure Admin Plugin in Auth
    **Context:** Add `admin()` plugin to `betterAuth` config and `adminClient()` to `createAuthClient`.
    **Files:** `src/lib/auth.ts`, `src/lib/auth-client.ts`
    **Skills:** `better-auth-best-practices`

  - [x] 1.2 Update Prisma Schema
    **Context:** Run better-auth CLI to generate schema updates for the admin plugin (adds role, banned, etc. to User).
    **Files:** `prisma/schema.prisma`
    **Skills:** `prisma-cli`

  - [x] 1.3 Run Database Migration
    **Context:** Apply the schema changes to the database and generate the Prisma client.
    **Files:** `prisma/schema.prisma`
    **Skills:** `prisma-cli`

- [x] 2.0 Zod Schema
  **Context:** not required

- [x] 3.0 tRPC Router
  **Context:** not required

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
