---
id: 1026
title: Implement Route Protection Middleware
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
blocked_by: [1024]
blocking: []
---
# Description
Create Next.js middleware to block unauthenticated access to `/dashboard/*`.

**Files / Paths to touch:**
- `src/middleware.ts` — Define Next.js middleware logic.

## Technical Notes:
```typescript
import { betterFetch } from "@better-fetch/fetch";
import type { auth } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";

type Session = typeof auth.$Infer.Session;

export async function middleware(request: NextRequest) {
    const { data: session } = await betterFetch<Session>(
        "/api/auth/get-session",
        {
            baseURL: request.nextUrl.origin,
            headers: {
                cookie: request.headers.get("cookie") || "",
            },
        }
    );

    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] Accessing `/dashboard/test` without session redirects to `/login`
- [ ] No TypeScript errors (`bun run build` passes)
- [ ] No lint errors (`bun run lint` passes)
- [ ] Peer review requested
