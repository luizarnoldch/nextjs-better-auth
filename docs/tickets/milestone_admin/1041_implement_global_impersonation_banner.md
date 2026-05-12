---
id: 1041
title: Implement Global Impersonation Banner
status: backlog
project: 2001
priority: medium
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
blocked_by: [1040]
blocking: []
---

# Description

Create a persistent banner that displays when a session is impersonated, allowing the admin to stop impersonating.

**Files / Paths to touch:**

- `src/app/layout.tsx` (or main app layout) — Add the banner component.
- `src/components/impersonation-banner.tsx` — Build the banner.

## Technical Notes:

```tsx
// Pseudocode for ImpersonationBanner component
// 1. const { data: session } = useSession();
// 2. if (!session || !session.session.impersonatedBy) return null;
// 3. Render fixed banner at top of screen: "⚠️ You are currently impersonating [session.user.name]."
// 4. Add "Stop Impersonating" button.
// 5. onClick:
//    await authClient.admin.stopImpersonating();
//    window.location.reload(); // or router.refresh()
```

## Definition of Done:

- [ ] Code is committed and pushed
- [ ] Banner appears only when impersonating
- [ ] Stop impersonating restores original session
- [ ] No TypeScript errors (`pnpm build` passes)
- [ ] No lint errors (`pnpm lint` passes)
- [ ] Peer review requested
