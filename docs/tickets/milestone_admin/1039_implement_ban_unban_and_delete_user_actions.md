---
id: 1039
title: Implement Ban/Unban and Delete User actions
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
  - frontend
blocked_by: [1037]
blocking: []
---

# Description

Add buttons for banning/unbanning and deleting a user, including a strict confirmation dialog for deletion.

**Files / Paths to touch:**

- `src/app/dashboard/admin/users/[id]/page.tsx` — Add destructive actions.

## Technical Notes:

```tsx
// Pseudocode for component section
// 1. Ban/Unban toggle:
//    if (user.banned) await authClient.admin.unbanUser({ userId });
//    else await authClient.admin.banUser({ userId }); // Uses default reason/duration
// 2. Delete User button opens a Dialog/Modal.
// 3. Dialog requires typing user.email to enable confirm button.
// 4. On confirm: await authClient.admin.removeUser({ userId }); router.push('/dashboard/admin/users');
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] Ban/Unban toggles correctly
- [ ] Delete requires text confirmation and works
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
