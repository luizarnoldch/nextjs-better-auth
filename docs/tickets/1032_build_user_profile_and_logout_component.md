---
id: 1032
title: Build User Profile and Logout Component
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
tags: [frontend]
blocked_by: [1027]
blocking: []
---
# Description
Create a reusable profile dropdown component displaying user details and a logout action.

**Files / Paths to touch:**
- `src/components/user-profile.tsx` — Build the dropdown component.

## Technical Notes:
```tsx
import { useSession, signOut } from "@/lib/auth-client";
// Pseudocode
// const { data: session } = useSession();
// if (!session) return null;
// Render DropdownMenu with user name & email
// onClick Logout: 
//   await signOut({ fetchOptions: { onSuccess: () => router.push("/login") } });
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] Dropdown displays correct user info
- [ ] Logout invalidates session and redirects
- [ ] No TypeScript errors (`bun build` passes)
- [ ] No lint errors (`bun lint` passes)
- [ ] Peer review requested
