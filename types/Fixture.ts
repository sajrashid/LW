// src/types/Fixture.ts

/**
 * Base fixture fields common to all devices.
 * Keep this minimal and stable; scene state should not need everything here.
 */
export type FixtureBase = {
    id: string;
    name: string;
    type: string; // e.g. "light" | "switch" | "sensor" | "outlet"
    controllerId?: string; // points to a Controller.id (esp32 or hub)
    meta?: Record<string, any>;
};

/**
 * Optional runtime state that a fixture may expose.
 * This is useful for UI and for scenes to store partial states.
 */
export type FixtureRuntimeState = {
    power?: boolean;
    brightness?: number; // 0-100
    color?: { r: number; g: number; b: number } | string;
    temperature?: number; // e.g., for thermostats
    [key: string]: any;
};

/**
 * Specific fixture variants. Add more as needed.
 */
export type SwitchFixture = FixtureBase & {
    type: "switch";
    config?: {
        mode?: "toggle" | "momentary";
        gangs?: number;
        inverted?: boolean;
    };
    state?: FixtureRuntimeState;
};

export type LightFixture = FixtureBase & {
    type: "light";
    config?: {
        supportsDimming?: boolean;
        supportsColor?: boolean;
    };
    state?: FixtureRuntimeState;
};

export type SensorFixture = FixtureBase & {
    type: "sensor";
    config?: {
        sensorType?: string;
    };
    state?: FixtureRuntimeState;
};

/**
 * Union of all fixture types.
 */
export type Fixture = SwitchFixture | LightFixture | SensorFixture | (FixtureBase & { state?: FixtureRuntimeState });

/**
 * A focused type for scene storage: the subset of fixture fields scenes typically need.
 * Prefer this over Partial<Fixture> if you want to avoid persisting controllerId/meta.
 */
export type FixtureState = {
    id: string;
    power?: boolean;
    brightness?: number;
    color?: { r: number; g: number; b: number } | string;
    temperature?: number;
    [key: string]: any;
};
