import type { Space, Device, AccessControlEntry, UserRole } from '../types/schema.ts';
import type { Fixture } from '../types/fixtures.ts';
import type { Scene } from '../types/schema.ts';
export interface AppState {
    readonly currentUser: {
        readonly id: string;
        readonly role: UserRole;
        readonly activePage: string; // Add this
    };
    readonly scenes: Readonly<Record<string, Scene>>; // Add this
    readonly permissions: readonly AccessControlEntry[];
    readonly activePage: string; // Add this
    readonly spaces: Readonly<Record<string, Space>>;
    readonly devices: Readonly<Record<string, Device>>;
    readonly fixtures: Readonly<Record<string, Fixture>>;

    readonly activeSpaceId: string | null;
    readonly isOffline: boolean;
    readonly meshStatus: 'connected' | 'scanning' | 'error';
}

export type Action =
    | { type: 'INIT_APP'; payload: AppState }
    | { type: 'SET_LIGHT'; payload: { id: string; brightness: number } }
    | { type: 'UPDATE_TELEMETRY'; payload: { id: string; temp: number; rssi: number } }
    | { type: 'SET_ACTIVE_SPACE'; payload: string }
    | { type: 'SET_PAGE'; payload: string }
    | { type: 'ACTIVATE_SCENE'; payload: string };