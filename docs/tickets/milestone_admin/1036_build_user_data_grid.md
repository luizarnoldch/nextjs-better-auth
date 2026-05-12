---
id: 1036
title: Build User Data Grid
status: backlog
project: 2001
priority: high
estimate: 4
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
blocking: []
---

# Description

Implement a data table to list users with pagination, search, and sorting using the auth client.

**Files / Paths to touch:**

- `src/app/dashboard/admin/users/page.tsx` — Build the user list page.

## Technical Notes:

```tsx
// Pseudocode for component
// 1. Use state for pagination (page, limit), search (searchField, searchValue), and sorting.
// 2. Fetch users:
//    const { data, isPending } = await authClient.admin.listUsers({
//      query: { limit, offset, sortBy, sortDirection, searchField, searchValue }
//    });
// 3. Render Shadcn UI Table with the fetched data.
// 4. Add search input and pagination controls.
// 5. Link rows to `/dashboard/admin/users/${user.id}`.
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] Table displays users correctly
- [ ] Pagination, search, and sorting work
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
