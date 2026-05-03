# 1025 – Create Better Auth API Route
**Estimate:** 2 h  
**Blocked by:** 1024  
**Blocking:** 1027  

## Next‑Task‑Planner plan
- [x] 1.0 Prisma Schema & Migration – not required
- [x] 2.0 Zod Schema – not required
- [x] 3.0 tRPC Router – not required
- [x] 4.0 TanStack Query & Form Hooks – not required
- [x] 5.0 App Router Pages
  **Context:** Expose auth endpoints via Next.js App Router catch‑all route.

  - [x] 5.1 Add file `src/app/api/auth/[...all]/route.ts` with handler export (completed)
    **Files:** `src/app/api/auth/[...all]/route.ts`
    **Skills:** `next-server-expert`
    **Estimate:** 1 h

  - [x] 5.2 Verify route responds (`/api/auth/ok` etc.)
    **Files:** –
    **Skills:** manual testing / optional `e2e-endpoint-tester`
    **Estimate:** 0.5 h

  - [x] 5.3 Lint & format route file (completed)
    **Files:** `src/app/api/auth/[...all]/route.ts`
    **Skills:** linting conventions
    **Estimate:** 0.5 h

- [x] 6.0 Views, Layouts & Loading – not required
- [x] 7.0 Component UI – not required
- [x] 8.0 Component Client Islands – not required
