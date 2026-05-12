import { createAccessControl } from 'better-auth/plugins/access';
import { defaultStatements, adminAc } from 'better-auth/plugins/admin/access';

/**
 * Merge Better Auth's built-in admin statements with our custom resources.
 * `defaultStatements` contains the built-in `user` and `session` action lists.
 * Without this merge, defining custom roles would override those defaults.
 */
const statement = {
  ...defaultStatements,
  /** Custom resource: analytics dashboard access */
  analytics: ['view'],
} as const;

export const ac = createAccessControl(statement);

/** Full admin role — all built-in admin capabilities + analytics:view */
export const adminRole = ac.newRole({
  ...adminAc.statements,
  analytics: ['view'],
});

/** Regular member role — read-only access, no analytics permission */
export const memberRole = ac.newRole({
  user: ['list', 'get'],
  session: ['list', 'revoke'],
});
