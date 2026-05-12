---
id: 1035
title: Create protected admin layout
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
  - frontend
blocked_by: [1034]
blocking: [1036, 1037]
---

# Description

Create a layout for the admin dashboard that verifies the user has the `admin` role.

**Files / Paths to touch:**

- `src/app/dashboard/admin/layout.tsx` — Build the protected layout.

## Technical Notes:

```tsx
// Pseudocode for layout
// 1. Fetch session using better-fetch or server-side auth check
// 2. If !session or session.user.role !== "admin", redirect to /dashboard or /login
// 3. Render admin navigation sidebar/header
// 4. Render {children}
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] Non-admin users are redirected away from `/dashboard/admin/*`
- [ ] Layout renders correctly for admin users
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
