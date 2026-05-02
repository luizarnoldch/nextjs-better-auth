# 1023 – Update schema.prisma and generate auth migrations
**Estimate:** 2 h  
**Blocked by:** –  
**Blocking:** 1024  

## Next‑Task‑Planner plan
- [ ] 1.0 Prisma Schema & Migration  
  **Context:** Add Better‑Auth models to `prisma/schema.prisma` and push to DB.

  - [ ] 1.1 Run Better‑Auth CLI to generate models
    **Files:** `prisma/schema.prisma`
    **Skills:** `better-auth-best-practices`, `database-migrator`
    **Estimate:** 1 h

  - [ ] 1.2 Review generated models, adjust if needed
    **Files:** `prisma/schema.prisma`
    **Skills:** `better-auth-best-practices`
    **Estimate:** 0.5 h

  - [ ] 1.3 Push schema to database (`bunx prisma db push`)
    **Files:** `prisma/schema.prisma`
    **Skills:** `database-migrator`
    **Estimate:** 0.5 h

- [ ] 2.0 Zod Schema – not required
- [ ] 3.0 tRPC Router – not required
- [ ] 4.0 TanStack Query & Form Hooks – not required
- [ ] 5.0 App Router Pages – not required
- [ ] 6.0 Views, Layouts & Loading – not required
- [ ] 7.0 Component UI – not required
- [ ] 8.0 Component Client Islands – not required