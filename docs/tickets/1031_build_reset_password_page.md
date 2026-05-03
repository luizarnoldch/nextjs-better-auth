---
id: 1031
title: Build Reset Password Page
status: done
project: 2001
priority: medium
estimate: 3
url: 
startTime: 
endTime: 
date: 2026-04-30
completed: 2026-05-03
allDay: false
archived: false
tags: [frontend]
blocked_by: [1030]
blocking: []
---
# Description
Create the `/reset-password` page to accept a new password and complete the flow.

**Files / Paths to touch:**
- `src/app/reset-password/page.tsx` — Build the page.

## Technical Notes:
```tsx
// Pseudocode for component
// 1. Extract 'token' from URL search params (if required) or better auth handles it via cookies
// 2. Render new password input field
// 3. onSubmit async function:
//    await authClient.resetPassword({ newPassword, password }); // password token might be required based on better-auth flow
// 4. Redirect to login on success
```

## Definition of Done:
- [x] Code is committed and pushed
- [x] Password reset succeeds when tested
- [x] No TypeScript errors (`bun build` passes)
- [x] No lint errors (`bun lint` passes)
- [x] Peer review requested
