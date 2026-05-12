---
id: 1034
title: Configure permissions.ts and admin plugin
status: backlog
project: 2001
priority: high
estimate: 3
url:
startTime:
endTime:
date: 2026-05-03
completed:
allDay: false
archived: false
tags:
  - backend
blocked_by: [1033]
blocking: [1035]
---

# Description

Create the permissions definition file and configure the `admin()` plugin in the Better Auth instance.

**Files / Paths to touch:**

- `src/lib/auth/permissions.ts` — Define roles and statements.
- `src/lib/auth.ts` — Add and configure the admin plugin.
- `src/lib/auth-client.ts` — Add adminClient plugin.

## Technical Notes:

```typescript
// src/lib/auth/permissions.ts
import { createAccessControl, defaultStatements } from "better-auth/plugins/access";
export const ac = createAccessControl(defaultStatements);
export const adminRole = ac.newRole({
  admin: ["*"]
});
export const userRole = ac.newRole({
  user: ["*"] // Adjust based on default statements
});

// src/lib/auth.ts
import { admin } from "better-auth/plugins";
// In betterAuth config:
plugins: [
  admin({
    defaultBanReason: "Violation of Terms of Service",
    bannedUserMessage: "Your account has been suspended. Please contact support.",
  })
]

// src/lib/auth-client.ts
import { adminClient } from "better-auth/client/plugins";
// In createAuthClient config:
plugins: [
  adminClient()
]
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] `permissions.ts` exports defined roles
- [ ] `auth.ts` and `auth-client.ts` include the admin plugin
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
