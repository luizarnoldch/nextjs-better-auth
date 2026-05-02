---
id: 1027
title: Setup Auth Client
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
tags: [frontend]
blocked_by: [1025]
blocking: [1028, 1029, 1030, 1032]
---
# Description
Initialize the Better Auth client for the React frontend.

**Files / Paths to touch:**
- `src/lib/auth-client.ts` — Create and export the React auth client.

## Technical Notes:
```typescript
import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    plugins: [
        magicLinkClient()
    ]
});
export const { useSession, signIn, signUp, signOut } = authClient;
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] `auth-client.ts` exports correctly typed hooks
- [ ] No TypeScript errors (`bun run build` passes)
- [ ] No lint errors (`bun lint` passes)
- [ ] Peer review requested
