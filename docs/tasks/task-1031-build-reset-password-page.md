# 1031 – Build Reset Password Page
**Estimate:** 3 h  
**Blocked by:** 1030  
**Blocking:** –  

## Next‑Task‑Planner plan
- [x] 1.0 Prisma Schema & Migration – not required
- [x] 2.0 Zod Schema – not required
- [x] 3.0 tRPC Router – not required
- [x] 4.0 TanStack Query & Form Hooks – not required

- [x] 5.0 App Router Pages
  **Context:** `/reset-password` entry point.

  - [x] 5.1 Scaffold `src/app/reset-password/page.tsx` with password input (and optional token handling)
    **Files:** `src/app/reset-password/page.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 1 h

- [x] 6.0 Views, Layouts & Loading
  **Context:** SSR view for reset‑password.

  - [x] 6.1 Add `src/features/auth/views/ResetPasswordView.tsx` (prefetch, Suspense)
    **Files:** `src/features/auth/views/ResetPasswordView.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 0.5 h

- [x] 7.0 Component UI — Pure Server
  **Context:** Static layout.

  - [x] 7.1 Create `src/features/auth/components/ResetPasswordCard.tsx` (layout)
    **Files:** `src/features/auth/components/ResetPasswordCard.tsx`
    **Skills:** `next-component-expert`
    **Estimate:** 0.5 h

- [x] 8.0 Component Client Islands
  **Context:** Submit calls `authClient.resetPassword`.

  - [x] 8.1 Create `src/features/auth/components/ResetPasswordFormActions.tsx` (`'use client'`) handling submission, success redirect, error UI
    **Files:** `src/features/auth/components/ResetPasswordFormActions.tsx`
    **Skills:** `next-component-expert`, `next-hooks-expert`
    **Estimate:** 0.5 h

  - [x] 8.2 Export via `src/features/auth/components/ResetPasswordForm/index.tsx`
    **Files:** `src/features/auth/components/ResetPasswordForm/index.tsx`
    **Estimate:** 0.5 h
