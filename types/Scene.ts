// src/types/Scene.ts
import type { FixtureState } from "./Fixture.ts";

/** Single action to apply to a fixture */
export type SceneAction = {
    fixtureId: string;
    command: string; // e.g., "setPower", "setBrightness", "setColor"
    params?: Record<string, any>;
};

/** Scene type with both persisted fixture states and explicit actions */
export interface Scene {
    id: string;
    name: string;
    description?: string;
    // Legacy or simple scenes may store target states
    fixtureStates?: Record<string, Partial<FixtureState>>;
    // Explicit actions to execute when the scene is applied
    actions?: SceneAction[];
}
