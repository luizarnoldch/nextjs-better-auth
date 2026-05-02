# 1029 – Build Login Page
**Estimate:** 3 h  
**Blocked by:** 1027  
**Blocking:** –  

## Next‑Task‑Planner plan
- [ ] 1.0 Prisma Schema & Migration – not required
- [ ] 2.0 Zod Schema – not required
- [ ] 3.0 tRPC Router – not required
- [ ] 4.0 TanStack Query & Form Hooks – not required

- [ ] 5.0 App Router Pages
  **Context:** `/login` entry point.

  - [ ] 5.1 Scaffold `src/app/login/page.tsx` with Card layout, email/password fields, magic‑link button
    **Files:** `src/app/login/page.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 1 h

- [ ] 6.0 Views, Layouts & Loading
  **Context:** SSR view for login.

  - [ ] 6.1 Add `src/features/auth/views/LoginView.tsx` (prefetch, Suspense)
    **Files:** `src/features/auth/views/LoginView.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 0.5 h

- [ ] 7.0 Component UI — Pure Server
  **Context:** Static parts of login UI.

  - [ ] 7.1 Create `src/features/auth/components/LoginCard.tsx` (visual layout)
    **Files:** `src/features/auth/components/LoginCard.tsx`
    **Skills:** `next-component-expert`
    **Estimate:** 0.5 h

- [ ] 8.0 Component Client Islands
  **Context:** Form submit & magic‑link interactions.

  - [ ] 8.1 Create `src/features/auth/components/LoginFormActions.tsx` (`'use client'`) handling `signIn.email` & `signIn.magicLink` calls, error handling, loading UI
    **Files:** `src/features/auth/components/LoginFormActions.tsx`
    **Skills:** `next-component-expert`, `next-hooks-expert`
    **Estimate:** 0.5 h

  - [ ] 8.2 Export via `src/features/auth/components/LoginForm/index.tsx`
    **Files:** `src/features/auth/components/LoginForm/index.tsx`
    **Estimate:** 0.5 h