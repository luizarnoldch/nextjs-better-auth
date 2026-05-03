# 1028 – Build Signup Page
**Estimate:** 3 h  
**Blocked by:** 1027  
**Blocking:** –  

## Next‑Task‑Planner plan
- [x] 1.0 Prisma Schema & Migration – not required
- [x] 2.0 Zod Schema – not required
- [x] 3.0 tRPC Router – not required
- [x] 4.0 TanStack Query & Form Hooks – not required

- [x] 5.0 App Router Pages
  **Context:** Create `/signup` page entry point.

  - [x] 5.1 Scaffold `src/app/(auth)/sign-up/page.tsx` (exists) (completed)
    **Files:** `src/app/signup/page.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 1 h

- [x] 6.0 Views, Layouts & Loading
  **Context:** SSR view for signup.

  - [x] 6.1 Add `src/features/auth/views/SignUpView.tsx` (completed)
    **Files:** `src/features/auth/views/SignupView.tsx`
    **Skills:** `next-view-expert`
    **Estimate:** 0.5 h

- [x] 7.0 Component UI — Pure Server
  **Context:** Server‑only UI pieces.

  - [x] 7.1 AuthSignUpForm component (`src/features/auth/components/AuthSignUpForm.tsx`) exists (completed)
    **Files:** `src/features/auth/components/SignupCard.tsx`
    **Skills:** `next-component-expert`, Shadcn UI
    **Estimate:** 0.5 h

- [x] 8.0 Component Client Islands
  **Context:** Form actions need client interactivity.

  - [x] 8.1 AuthSignUpForm handles client actions (completed)
    **Files:** `src/features/auth/components/SignupFormActions.tsx`
    **Skills:** `next-component-expert`, `next-hooks-expert`
    **Estimate:** 0.5 h

  - [x] 8.2 Wire actions into `SignupCard` via re‑export `index.tsx`
    **Files:** `src/features/auth/components/SignupForm/index.tsx`
    **Estimate:** 0.5 h
