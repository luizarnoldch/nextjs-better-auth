---
id: 1038
title: Implement Session Control UI
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
blocked_by: [1037]
blocking: []
---

# Description

Add a section to the user detail view to list active sessions and provide buttons to revoke them.

**Files / Paths to touch:**

- `src/app/dashboard/admin/users/[id]/page.tsx` — Add session control section.

## Technical Notes:

```tsx
// Pseudocode for component section
// 1. Fetch sessions: const { data: sessions } = await authClient.admin.listUserSessions({ userId });
// 2. Render list/table of sessions (ipAddress, userAgent, expiresAt).
// 3. Revoke single session:
//    await authClient.admin.revokeUserSession({ sessionId });
// 4. Revoke all sessions:
//    await authClient.admin.revokeUserSessions({ userId });
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] Sessions are listed correctly
- [ ] Revoke actions work and update the UI
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
