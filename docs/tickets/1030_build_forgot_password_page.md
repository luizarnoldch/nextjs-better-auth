---
id: 1030
title: Build Forgot Password Page
status: backlog
project: 2001
priority: medium
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
blocking: [1031]
---
# Description
Create the `/forgot-password` page to trigger email resets.

**Files / Paths to touch:**
- `src/app/forgot-password/page.tsx` — Build the page and form.

## Technical Notes:
```tsx
// Pseudocode for component
// 1. Render email input field
// 2. onSubmit async function:
//    await authClient.forgetPassword({ email, redirectTo: "/reset-password" });
// 3. Show success toast indicating email was sent
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] Form renders and styled with Shadcn UI
- [ ] Triggers recovery email correctly
- [ ] No TypeScript errors (`bun build` passes)
- [ ] No lint errors (`bun lint` passes)
- [ ] Peer review requested
