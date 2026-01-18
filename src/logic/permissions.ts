import type { UserRole, AccessLevel } from '../types/schema.ts';
import type { AppState } from '../store/types.ts';

/**
 * Global Capability Matrix
 */
const ROLE_CAPABILITIES: Record<UserRole, readonly AccessLevel[]> = {
    admin: ['view', 'control', 'full'],
    resident: ['view', 'control'],
    child: ['view', 'control'],
    guest: ['view', 'control'],
    service: ['view']
};

export const canUserPerformAction = (
    state: AppState,
    targetId: string,
    requiredLevel: AccessLevel
): boolean => {
    const { currentUser, permissions, fixtures } = state;

    // 1. Admin Bypass (God Mode)
    if (currentUser.role === ('admin' as UserRole)) {
        return true;
    }

    // 2. Check Role Capabilities
    const capabilities = ROLE_CAPABILITIES[currentUser.role];
    if (!capabilities.includes(requiredLevel)) {
        return false;
    }

    // 3. Specific ACL Check
    // We check if the user has a direct entry for this target or the root
    const hasEntry = permissions.some(p =>
        p.userId === currentUser.id &&
        (p.targetId === targetId || p.targetId === 'sp-root') &&
        (p.level === requiredLevel || p.level === 'full')
    );

    if (!hasEntry) return false;

    // 4. Handle Fixture-specific locks (Child Lock)
    const fixture = fixtures[targetId];
    if (fixture?.state.locked) {
        // If it's locked, and we already checked above that they aren't an admin,
        // they are blocked regardless of their ACL entry.
        return false;
    }

    return true;
};