# Project: Next.js Better Auth Template

This project is a comprehensive Next.js template integrated with Better Auth, Prisma, Shadcn UI, Minio, and Resend. It provides a robust foundation for building modern web applications with built-in authentication, storage, and email capabilities.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Authentication:** Better Auth
- **Database ORM:** Prisma
- **Database:** PostgreSQL (supports Neon for production)
- **UI Components:** Shadcn UI (Radix UI)
- **Styling:** Tailwind CSS
- **Object Storage:** Minio (S3 Compatible)
- **Email:** Resend
- **Linting/Formatting:** Biome

## Project Structure
- `src/app/`: Next.js App Router pages and API routes.
- `src/components/`: UI components, organized into `ui` (Shadcn).
- `src/features/`: Feature-specific logic, schemas, and components.
- `src/lib/`: Core libraries, clients (Prisma, Auth, Minio, Resend), and configuration.
- `src/generated/`: Auto-generated Prisma client and other generated assets.
- `prisma/`: Database schema (`schema.prisma`), migrations, and seed scripts.
- `docs/`: Project documentation and PRDs.

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) runtime.
- PostgreSQL database.
- Minio instance (or S3).
- Resend API key.

### Installation
```bash
bun install
```

### Environment Variables
Copy `.env.example` to `.env` and fill in the required values. Environment variables are validated in `src/lib/config.ts`.

### Development
```bash
bun dev
```
This command generates the Prisma client and starts the Next.js development server.

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