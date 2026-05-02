---
id: 1025
title: Create Better Auth API Route
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
tags: [backend]
blocked_by: [1024]
blocking: [1027]
---
# Description
Expose the Better Auth API endpoints by creating the catch-all route in Next.js App Router.

**Files / Paths to touch:**
- `src/app/api/auth/[...all]/route.ts` — Mount the auth API.

## Technical Notes:
```typescript
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] `/api/auth/ok` or similar endpoint responds when tested
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
