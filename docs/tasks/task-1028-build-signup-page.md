# 1028 – Build Signup Page
**Estimate:** 3 h  
**Blocked by:** 1027  
**Blocking:** –  

## Next‑Task‑Planner plan
- [ ] 1.0 Prisma Schema & Migration – not required
- [ ] 2.0 Zod Schema – not required
- [ ] 3.0 tRPC Router – not required
- [ ] 4.0 TanStack Query & Form Hooks – not required

- [ ] 5.0 App Router Pages
  **Context:** Create `/signup` page entry point.

  - [ ] 5.1 Scaffold `src/app/signup/page.tsx` with Shadcn `<Card>` and `<Form>` skeleton
    **Files:** `src/app/signup/page.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 1 h

- [ ] 6.0 Views, Layouts & Loading
  **Context:** SSR view for signup.

  - [ ] 6.1 Add `src/features/auth/views/SignupView.tsx` (prefetch, Suspense, ErrorBoundary)
    **Files:** `src/features/auth/views/SignupView.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 0.5 h

- [ ] 7.0 Component UI — Pure Server
  **Context:** Server‑only UI pieces.

  - [ ] 7.1 Create `src/features/auth/components/SignupCard.tsx` (static layout)
    **Files:** `src/features/auth/components/SignupCard.tsx`
    **Skills:** `next-component-expert`, Shadcn UI
    **Estimate:** 0.5 h

- [ ] 8.0 Component Client Islands
  **Context:** Form actions need client interactivity.

  - [ ] 8.1 Create `src/features/auth/components/SignupFormActions.tsx` with `'use client'` handling submit, loading, error state
    **Files:** `src/features/auth/components/SignupFormActions.tsx`
    **Skills:** `next-component-expert`, `next-hooks-expert`
    **Estimate:** 0.5 h

  - [ ] 8.2 Wire actions into `SignupCard` via re‑export `index.tsx`
    **Files:** `src/features/auth/components/SignupForm/index.tsx`
    **Estimate:** 0.5 h