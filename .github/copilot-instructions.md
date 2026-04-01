# Project Guidelines

## Code Style

- Use TypeScript in all application code.
- Use Bun for commands and dependency management.
- Run `bun run lint` (`biome check`) after meaningful edits.
- Keep changes scoped to the feature boundary under `src/features/<feature>`.

## Architecture

- App shell and routing live in `src/app` (Next.js App Router).
- Business logic is feature-first under `src/features/<feature>/` with this split:
  - `schema/`: Zod inputs and shared types.
  - `server/`: tRPC routers and server-side operations.
  - `hooks/`: TanStack Query/TanStack Form client hooks.
  - `components/`: feature UI pieces.
  - `views/`: page-level feature composition.
- Global/shared primitives:
  - `src/trpc/`: tRPC initialization, client/server wiring, root router.
  - `src/lib/`: integrations and infra clients (`auth`, `prisma`, `polar`, `resend`, `config`).
  - `src/components/ui/`: shared Shadcn/Radix UI components.

Key examples:

- Root router composition: `src/trpc/routers/_app.ts`
- Better Auth server config: `src/lib/auth.ts`
- Auth feature router: `src/features/auth/server/auth.router.ts`
- Payments feature router: `src/features/payments/server/payments.router.ts`

## Build and Test

- Install dependencies: `bun install`
- Start dev server: `bun run dev`
- Build production: `bun run build`
- Start production server: `bun run start`
- Lint: `bun run lint`
- Format: `bun run format`

Database/Prisma:

- Reset DB: `bun run db:reset`
- Seed DB: `bun run db:seed`
- Generate Prisma client: `bunx prisma generate`
- Create migration: `bunx prisma migrate dev --name <migration_name>`

## Conventions

- Wire feature APIs through tRPC routers and expose them from `src/trpc/routers/_app.ts`.
- Keep auth and payment provider integration details in `src/lib/*`; keep feature routers focused on orchestration and validation.
- Prefer existing generated UI primitives in `src/components/ui/` before adding new shared components.
- Check existing skills before implementing feature-layer code:
  - `components-ui`
  - `orm-to-zod`
  - `zod-to-trpc`
  - `trpc-to-hooks-mutation`
  - `view-layout-hydration`
