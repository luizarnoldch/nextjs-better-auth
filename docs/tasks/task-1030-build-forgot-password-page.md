# 1030 – Build Forgot Password Page
**Estimate:** 3 h  
**Blocked by:** 1027  
**Blocking:** 1031  

## Next‑Task‑Planner plan
- [ ] 1.0 Prisma Schema & Migration – not required
- [ ] 2.0 Zod Schema – not required
- [ ] 3.0 tRPC Router – not required
- [ ] 4.0 TanStack Query & Form Hooks – not required

- [ ] 5.0 App Router Pages
  **Context:** `/forgot-password` entry point.

  - [ ] 5.1 Scaffold `src/app/forgot-password/page.tsx` with Shadcn Card + email input
    **Files:** `src/app/forgot-password/page.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 1 h

- [ ] 6.0 Views, Layouts & Loading
  **Context:** SSR view for forgot‑password.

  - [ ] 6.1 Add `src/features/auth/views/ForgotPasswordView.tsx` (prefetch, Suspense)
    **Files:** `src/features/auth/views/ForgotPasswordView.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 0.5 h

- [ ] 7.0 Component UI — Pure Server
  **Context:** Static UI elements.

  - [ ] 7.1 Create `src/features/auth/components/ForgotPasswordCard.tsx` (layout)
    **Files:** `src/features/auth/components/ForgotPasswordCard.tsx`
    **Skills:** `next-component-expert`
    **Estimate:** 0.5 h

- [ ] 8.0 Component Client Islands
  **Context:** Submit triggers `authClient.forgetPassword`.

  - [ ] 8.1 Create `src/features/auth/components/ForgotPasswordFormActions.tsx` (`'use client'`) handling submit, toast on success, error handling
    **Files:** `src/features/auth/components/ForgotPasswordFormActions.tsx`
    **Skills:** `next-component-expert`, `next-hooks-expert`
    **Estimate:** 0.5 h

  - [ ] 8.2 Export via `src/features/auth/components/ForgotPasswordForm/index.tsx`
    **Files:** `src/features/auth/components/ForgotPasswordForm/index.tsx`
    **Estimate:** 0.5 h