# 1032 – Build User Profile and Logout Component
**Estimate:** 3 h  
**Blocked by:** 1027  
**Blocking:** –  

## Next‑Task‑Planner plan
- [x] 1.0 Prisma Schema & Migration – not required
- [x] 2.0 Zod Schema – not required
- [x] 3.0 tRPC Router – not required
- [x] 4.0 TanStack Query & Form Hooks – not required

- [x] 5.0 App Router Pages – not required

- [x] 6.0 Views, Layouts & Loading – not required

- [x] 7.0 Component UI — Pure Server
  **Context:** Base dropdown UI (no client hooks).

  - [x] 7.1 Create `src/components/user-profile.tsx` skeleton (DropdownMenu, display name/email) without `'use client'`
    **Files:** `src/components/user-profile.tsx`
    **Skills:** `next-component-expert`, Shadcn UI
    **Estimate:** 1 h

- [x] 8.0 Component Client Islands
  **Context:** Interactive logout logic.

  - [x] 8.1 Add `'use client'` to same file or split into `src/components/user-profile-client.tsx` handling `useSession`, `signOut`, router redirect
    **Files:** `src/components/user-profile.tsx` (client island)
    **Skills:** `next-component-expert`, `next-hooks-expert`
    **Estimate:** 1 h

  - [x] 8.2 Export component for reuse in navigation/header
    **Files:** `src/components/user-profile.tsx` (export)
    **Estimate:** 0.5 h

  - [x] 8.3 Verify logout flow clears session and redirects to `/login`
    **Files:** –
    **Estimate:** 0.5 h
