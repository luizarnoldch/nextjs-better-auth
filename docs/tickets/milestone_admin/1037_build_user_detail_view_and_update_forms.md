---
id: 1037
title: Build User Detail View & Update Forms
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
blocked_by: [1035]
blocking: [1038, 1039, 1040]
---

# Description

Create the user detail page, fetch user data, and implement forms to update user details and change passwords.

**Files / Paths to touch:**

- `src/app/dashboard/admin/users/[id]/page.tsx` — Build the detail view and forms.

## Technical Notes:

```tsx
// Pseudocode for component
// 1. Fetch user: const { data: user } = await authClient.admin.getUser({ userId: params.id });
// 2. Render user details (name, email, role, status).
// 3. Form to update user:
//    await authClient.admin.updateUser({ userId, update: { name, role } });
// 4. Form to change password:
//    await authClient.admin.setUserPassword({ userId, password });
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] User details are displayed correctly
- [ ] Update and password change forms work
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
