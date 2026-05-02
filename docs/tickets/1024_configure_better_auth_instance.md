---
id: 1024
title: Configure better-auth instance
status: backlog
project: 2001
priority: high
estimate: 3
url: 
startTime: 
endTime: 
date: 2026-04-30
completed: 
allDay: false
archived: false
tags: [backend]
blocked_by: [1023]
blocking: [1025, 1026]
---
# Description
Set up the central `betterAuth` configuration with Prisma, email/password, and Resend for magic links.

**Files / Paths to touch:**
- `src/lib/auth.ts` — Define and export `auth` instance.

## Technical Notes:
```typescript
// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { magicLink } from "better-auth/plugins";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // Or "sqlite", check project config
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, url }) => {
                // Call Resend to send the email with the magic link url
                // e.g. await resend.emails.send(...)
            }
        })
    ]
});
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] `auth.ts` exports a valid `betterAuth` instance
- [ ] Resend integration stub or actual call is in place
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
