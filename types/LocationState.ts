// src/types/LocationState.ts

import type { Scene } from "./Scene.ts";
import type { Space } from "./Space.ts";
import type { Controller } from "./Controller.ts";

export type LocationType = "home" | "museum" | "office" | "workshop" | "custom";

export interface LocationState {
    locationId: string;
    locationName: string;
    type: LocationType;
    version: number;
    createdAt: number;
    spaces: Space[];
    scenes: Scene[];
    // Optional: controllers at the location level (useful for site-wide gateways)
    controllers?: Controller[];
}
