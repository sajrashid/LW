// src/types/fixtures.ts
import type { SyncMetadata } from './schema.ts';

export interface Fixture {
  readonly id: string;
  readonly deviceId: string;
  readonly spaceId: string;
  readonly alias: string;

  readonly capabilities: {
    readonly canDim: boolean;
    readonly canWarm: boolean;
    readonly canRgb: boolean;
    readonly isMeshRelay: boolean;
  };

  readonly state: {
    readonly power: boolean;
    readonly brightness: number;
    readonly kelvin: number;
    readonly locked: boolean;
  };

  readonly telemetry: {
    readonly rssi: number;
    readonly tempC: number;
    readonly watts: number;
    readonly error?: string;
  };

  readonly _meta: SyncMetadata;
}