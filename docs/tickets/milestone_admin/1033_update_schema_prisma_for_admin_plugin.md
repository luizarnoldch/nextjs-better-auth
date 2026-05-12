---
id: 1033
title: Update schema.prisma for Admin Plugin
status: backlog
project: 2001
priority: high
estimate: 2
url:
startTime:
endTime:
date: 2026-05-03
completed:
allDay: false
archived: false
tags:
  - database
blocked_by: []
blocking: [1034]
---

# Description

Update the Auth to include the necessary for the Admin plugin and push the changes on the database.

**Files / Paths to touch:**

- `src/lib/auth.ts` — Add the plugin to your auth config
- `src/lib/auth.ts` — Add new fields to the User model.

## Technical Notes:

```ts
// src/lib/auth.ts
import { betterAuth } from "better-auth"
import { admin } from "better-auth/plugins"

export const auth = betterAuth({
    // ... other config options
    plugins: [
        admin() 
    ]
})
```

Migrate the database

```bash
// Migrate
bunx --bun auth migrate
// Generate
bunx --bun auth generate
```

```ts
// src/lib/auth-client.ts
import { createAuthClient } from "better-auth/client"
import { adminClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    plugins: [
        adminClient()  
    ]
})
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] `schema.prisma` contains the new fields
- [ ] `bunx --bun prisma db push` succeeds locally
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
