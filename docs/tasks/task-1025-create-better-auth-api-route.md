# 1025 – Create Better Auth API Route
**Estimate:** 2 h  
**Blocked by:** 1024  
**Blocking:** 1027  

## Next‑Task‑Planner plan
- [ ] 1.0 Prisma Schema & Migration – not required
- [ ] 2.0 Zod Schema – not required
- [ ] 3.0 tRPC Router – not required
- [ ] 4.0 TanStack Query & Form Hooks – not required
- [ ] 5.0 App Router Pages
  **Context:** Expose auth endpoints via Next.js App Router catch‑all route.

  - [ ] 5.1 Add file `src/app/api/auth/[...all]/route.ts` with handler export
    **Files:** `src/app/api/auth/[...all]/route.ts`
    **Skills:** `next-server-expert`
    **Estimate:** 1 h

  - [ ] 5.2 Verify route responds (`/api/auth/ok` etc.)
    **Files:** –
    **Skills:** manual testing / optional `e2e-endpoint-tester`
    **Estimate:** 0.5 h

  - [ ] 5.3 Lint & format route file
    **Files:** `src/app/api/auth/[...all]/route.ts`
    **Skills:** linting conventions
    **Estimate:** 0.5 h

- [ ] 6.0 Views, Layouts & Loading – not required
- [ ] 7.0 Component UI – not required
- [ ] 8.0 Component Client Islands – not required