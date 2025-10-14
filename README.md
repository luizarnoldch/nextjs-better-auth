# Commands Required:

Library required

```bash

bun create next-app@latest . --yes

bunx --bun shadcn@latest init

bunx --bun shadcn@latest add --all

bun add next-themes

bun add -D prisma tsx

bun add @prisma/extension-accelerate @prisma/client

bunx prisma init

bun add @prisma/adapter-neon @prisma/adapter-pg

bunx prisma generate

bun add db@./src/generated/prisma

bun add better-auth

bunx @better-auth/cli generate

bunx prisma migrate dev --name "init_better_auth"

bunx prisma db push

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
