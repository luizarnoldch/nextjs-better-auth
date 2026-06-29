# Commands Required:

Components Migration

```bash
bunx --bun shadcn@latest init

bunx --bun shadcn@latest add --all
```

Migration Better-auth database

```bash
bunx @better-auth/cli generate

bunx prisma migrate dev --name "init_better_auth"

bunx prisma db push
```

## Getting Started

First, run the development server:

```bash
docker-compose up -d --build

bunx prisma db push

bun run db:seed

bun run dev
```
