---
id: 1023
title: Update schema.prisma and generate auth migrations
status: backlog
project: 2001
priority: high
estimate: 2
url: 
startTime: 
endTime: 
date: 2026-04-30
completed: 
allDay: false
archived: false
tags: [database]
blocked_by: []
blocking: [1024]
---
# Description
Update the Prisma schema with Better Auth models using the CLI and push/migrate the changes to the database.

**Files / Paths to touch:**
- `prisma/schema.prisma` — Run auth CLI to generate models, or manually append them.

## Technical Notes:
Run the following to generate the models automatically:
```bash
bunx auth generate --output prisma/schema.prisma
```
After generation, review `schema.prisma` to ensure models are correctly formatted. Then push the schema:
```bash
bunx prisma db push
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] `schema.prisma` contains the correct Better Auth models
- [ ] `bunx prisma db push` succeeds locally
- [ ] No TypeScript errors (`bun run build` passes)
- [ ] No lint errors (`bun lint` passes)
- [ ] Peer review requested
