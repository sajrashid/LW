// src/types/Space.ts
import type { Fixture } from "./Fixture.ts";
import type { Scene } from "./Scene.ts";

/**
 * QuickActionProfile stores lists of target IDs to apply when
 * the quick action is triggered. Prefer using fixture or scene IDs.
 */
export type QuickTarget = { kind: "fixture"; id: string } | { kind: "scene"; id: string };

export interface QuickActionProfile {
    on: QuickTarget[];
    off: QuickTarget[];
}

export interface Space {
    id: string;
    name: string;
    type: "indoor" | "outdoor";
    subtype?: string;
    fixtures: Fixture[];
    scenes: Scene[];
    allowedUsers: string[]; // userIds
    quickAction?: QuickActionProfile | null;
}
