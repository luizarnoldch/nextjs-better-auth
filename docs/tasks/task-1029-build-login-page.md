# 1029 – Build Login Page
**Estimate:** 3 h  
**Blocked by:** 1027  
**Blocking:** –  

## Next‑Task‑Planner plan
- [x] 1.0 Prisma Schema & Migration – not required
- [x] 2.0 Zod Schema – not required
- [x] 3.0 tRPC Router – not required
- [x] 4.0 TanStack Query & Form Hooks – not required

- [x] 5.0 App Router Pages
  **Context:** `/login` entry point.

  - [x] 5.1 Scaffold `src/app/(auth)/sign-in/page.tsx` (exists) (completed)
    **Files:** `src/app/login/page.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 1 h

- [x] 6.0 Views, Layouts & Loading
  **Context:** SSR view for login.

  - [x] 6.1 Add `src/features/auth/views/SignInView.tsx` (completed)
    **Files:** `src/features/auth/views/LoginView.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 0.5 h

- [x] 7.0 Component UI — Pure Server
  **Context:** Static parts of login UI.

  - [x] 7.1 AuthSignInForm component (`src/features/auth/components/AuthSignInForm.tsx`) exists (completed)
    **Files:** `src/features/auth/components/LoginCard.tsx`
    **Skills:** `next-component-expert`
    **Estimate:** 0.5 h

- [x] 8.0 Component Client Islands
  **Context:** Form submit & magic‑link interactions.

  - [x] 8.1 AuthSignInForm handles client actions (completed)
    **Files:** `src/features/auth/components/LoginFormActions.tsx`
    **Skills:** `next-component-expert`, `next-hooks-expert`
    **Estimate:** 0.5 h

  - [x] 8.2 Export via `src/features/auth/components/LoginForm/index.tsx`
    **Files:** `src/features/auth/components/LoginForm/index.tsx`
    **Estimate:** 0.5 h
