# 1024 – Configure better‑auth instance
**Estimate:** 3 h  
**Blocked by:** 1023  
**Blocking:** 1025, 1026  

## Next‑Task‑Planner plan
- [x] 1.0 Prisma Schema & Migration – not required
- [x] 2.0 Zod Schema – not required
- [x] 3.0 tRPC Router
  **Context:** Central auth instance required by routers & API.

  - [x] 3.1 Create `src/lib/auth.ts` exporting configured `betterAuth` (completed)
    **Files:** `src/lib/auth.ts`
    **Skills:** `better-auth-best-practices`
    **Estimate:** 1.5 h

  - [x] 3.2 Verify instance compiles with project build (completed)
    **Files:** –
    **Skills:** general TypeScript
    **Estimate:** 0.5 h

  - [x] 3.3 Lint & format file (completed)
    **Files:** `src/lib/auth.ts`
    **Skills:** linting conventions
    **Estimate:** 0.5 h

- [x] 4.0 TanStack Query & Form Hooks – not required
- [x] 5.0 App Router Pages – not required
- [x] 6.0 Views, Layouts & Loading – not required
- [x] 7.0 Component UI – not required
- [x] 8.0 Component Client Islands – not required
