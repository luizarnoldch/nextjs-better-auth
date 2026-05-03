---
id: 1028
title: Build Signup Page
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
Create the `/signup` page using Shadcn UI components for the form.

**Files / Paths to touch:**
- `src/app/signup/page.tsx` — Build the page and form logic.

## Technical Notes:
```tsx
// Pseudocode for component
// 1. Render <Card> containing <Form>
// 2. Inputs: Name, Email, Password
// 3. onSubmit async function:
//    const { data, error } = await signUp.email({ email, password, name });
//    if (error) setErrorMessage(error.message);
//    else router.push("/dashboard");
```

## Definition of Done:
- [ ] Code is committed and pushed
- [ ] Form is fully styled and responsive
- [ ] Successfully creates a new user in the DB
- [ ] No TypeScript errors (`bun run build` passes)
- [ ] No lint errors (`bun run lint` passes)
- [ ] Peer review requested
