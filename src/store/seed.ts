// src/store/seed.ts
import type { AppState } from './types.ts';

/**
 * Shared metadata helper to reduce repetition and satisfy strict types
 */
const mockMeta = {
    createdAt: 1737158400000,
    updatedAt: 1737158400000,
    lastSyncedAt: null,
    isDeleted: false,
    version: 1
} as const;

export const initialSeed: AppState = {
    activePage: 'dashboard',
    currentUser: {
        id: 'user-01',
        role: 'admin'
    },

    // ACL List: user-01 is granted 'full' access to the root property
    permissions: [
        {
            userId: 'user-01',
            targetId: 'sp-root',
            level: 'full',
            _meta: mockMeta
        }
    ],

    activeSpaceId: 'sp-kitchen',
    isOffline: false,
    meshStatus: 'connected',

    spaces: {
        'sp-root': {
            id: 'sp-root',
            parentId: null,
            name: 'The Foundry Home',
            type: 'property',
            _meta: mockMeta
        },
        'sp-kitchen': {
            id: 'sp-kitchen',
            parentId: 'sp-root',
            name: 'Kitchen',
            type: 'room',
            _meta: mockMeta
        }
    },

    devices: {
        'dev-001': {
            id: 'dev-001',
            hardwareId: 'AC:67:B2:33:44:55',
            serialNumber: 'LUM-2026-0001',
            firmwareVersion: '1.2.0-stable',
            manufactureDate: '2026-01-10',
            securitySupportEnd: '2031-01-10',
            _meta: mockMeta
        }
    },

    fixtures: {
        'fix-001': {
            id: 'fix-001',
            deviceId: 'dev-001',
            spaceId: 'sp-kitchen',
            alias: 'Brass Bulkhead',
            capabilities: {
                canDim: true,
                canWarm: true,
                canRgb: false,
                isMeshRelay: true
            },
            state: {
                power: true,
                brightness: 750,
                kelvin: 2700,
                locked: false
            },
            telemetry: {
                rssi: -62,
                tempC: 45.2,
                watts: 9.8
            },
            _meta: mockMeta
        }
    },
    scenes: {
        'scene-night': {
            id: 'scene-night',
            name: 'Evening Glow',
            icon: 'MoonIcon',
            actions: [
                { fixtureId: 'fix-001', brightness: 100, kelvin: 2000, power: true }
            ],
            _meta: mockMeta
        }
    }
};