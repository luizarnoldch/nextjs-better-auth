---
id: 1029
title: Build Login Page
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
Create the `/login` page with standard email/password authentication and a magic link option.

**Files / Paths to touch:**
- `src/app/login/page.tsx` — Build the page and form logic.

## Technical Notes:
```tsx
// Pseudocode for component
// 1. Render <Card> with standard credentials login
// 2. onSubmit for Password:
//    const { error } = await signIn.email({ email, password });
// 3. onClick for Magic Link:
//    const { error } = await signIn.magicLink({ email });
//    alert("Check your email for the magic link!");
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] Form is fully styled and responsive
- [ ] Login and Magic Link triggers work correctly
- [ ] No TypeScript errors (`bun build` passes)
- [ ] No lint errors (`bun lint` passes)
- [ ] Peer review requested
