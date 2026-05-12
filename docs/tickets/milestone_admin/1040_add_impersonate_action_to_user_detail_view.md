---
id: 1040
title: Add Impersonate action to User Detail View
status: backlog
project: 2001
priority: medium
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
blocked_by: [1037]
blocking: [1041]
---

# Description

Add a button to the user detail page that triggers the impersonation flow.

**Files / Paths to touch:**

- `src/app/dashboard/admin/users/[id]/page.tsx` — Add impersonate button.

## Technical Notes:

```tsx
// Pseudocode for component section
// 1. Add "Impersonate" button.
// 2. onClick:
//    await authClient.admin.impersonateUser({ userId });
//    router.push('/dashboard'); // Redirect to main app as the user
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] Button triggers impersonation and redirects
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
