<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Next.js Better Auth Template

This project is a web application that allows users to learn better-auth library and its features. The application provides a user-friendly interface for exploring the library's capabilities and understanding how to use it effectively.

## Tech Stack
- **Framework:** Next.js (app router with src) +16.2.0
- **Language:** TypeScript
- **Library:** React +19.2.4
- **Styling:** Tailwind CSS +4.2.2
- **UI Components:** Shadcn UI (Radix UI)
- **Backend:** tRPC
- **Frontend connection:** TanStack React Query with Server components integration.
- **Database and ORM:** Prisma with PostgreSQL (neon on production)
- **Authentication:** Better Auth
- **Payment processing:** Polar.sh
- **Form + Validator:** Tanstack React Form + Zod
- **Email service:** Resend
- **Linting/Formatting:** Biome
- **Object Storage:** Minio (S3 Compatible)

## Project Structure
- `src/app/`: Next.js App Router pages and API routes.
- `src/components/`: UI components, organized into `ui` (Shadcn).
- `src/features/`: Feature-specific logic, schemas, and components.
- `src/lib/`: Core libraries, clients (Prisma, Auth, Minio, Resend), and configuration.
- `src/generated/`: Auto-generated Prisma client and other generated assets.
- `prisma/`: Database schema (`schema.prisma`), migrations, and seed scripts.
- `docs/`: Project documentation and PRDs.

## Getting Started

### Environment Variables
Copy `.env.example` to `.env` and fill in the required values. Environment variables are validated in `src/lib/config.ts`.

### Package manager:
- Bun

### Database Management
- **Generate Client:** `bunx prisma generate`
- **Migrations:** `bunx prisma migrate dev --name <migration_name>`
- **Reset Database:** `bun run db:reset`
- **Seed Database:** `bun run db:seed`

### Building and Deployment
- **Build:** `bun run build`
- **Start:** `bun run start`

## Development Conventions
- **Code Style:** Use Biome for linting and formatting. Run `bun run lint` and `bun run format`.
- **UI:** Follow Shadcn UI patterns for new components.
- **Validation:** Use Zod for schema validation (forms, environment variables, etc.).
- **Authentication:** Utilize `auth` and `authClient` from `src/lib/` for server-side and client-side authentication.
- **Prisma Client:** Import the custom Prisma client from `src/lib/prisma` instead of `@prisma/client` directly to ensure proper adapter configuration.
- **No `any` Types:** Avoid using `any` type. Create proper type definitions or import types from libraries. If types are missing from third-party libraries, create custom types in `*.types.ts` files adjacent to the relevant module. Use type assertions with specific types instead of `any`.
