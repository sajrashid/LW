export type UserRole = 'admin' | 'resident' | 'child' | 'guest' | 'service';
export type DeviceType = 'hub' | 'fixture' | 'switch' | 'sensor';
export type AccessLevel = 'view' | 'control' | 'full';

export interface AccessControlEntry {
    readonly userId: string;
    readonly targetId: string;   // Space ID or Fixture ID
    readonly level: AccessLevel;
    readonly _meta: SyncMetadata;
}

export interface SyncMetadata {
    readonly createdAt: number;
    readonly updatedAt: number;
    readonly lastSyncedAt: number | null;
    readonly isDeleted: boolean;
    readonly version: number;
}

export interface Space {
    readonly id: string;
    readonly parentId: string | null;
    readonly name: string;
    readonly type: 'property' | 'floor' | 'zone' | 'room' | 'outdoor' | 'furniture';
    readonly icon?: string;
    readonly _meta: SyncMetadata;
}

export interface Device {
    readonly id: string;
    readonly hardwareId: string;
    readonly serialNumber: string;
    readonly firmwareVersion: string;
    readonly manufactureDate: string;
    readonly securitySupportEnd: string;
    readonly _meta: SyncMetadata;
}
export interface SceneAction {
    readonly fixtureId: string;
    readonly brightness: number;
    readonly kelvin?: number;
    readonly power: boolean;
}

export interface Scene {
    readonly id: string;
    readonly name: string;
    readonly icon: string; // Heroicon name string
    readonly actions: readonly SceneAction[];
    readonly _meta: SyncMetadata;
}