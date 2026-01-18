// src/data/defaultLocation.ts

import type { LocationState } from "../src/types/LocationState.ts";

export const defaultLocation: LocationState = {
    locationId: "loc-default",
    locationName: "My Home",
    type: "home",
    version: 1,
    createdAt: Date.now(),

    spaces: [
        // ---------------------------------------------------
        // LIVING ROOM
        // ---------------------------------------------------
        {
            id: "space-living",
            name: "Living Room",
            type: "indoor",
            subtype: "lounge",
            allowedUsers: [],
            quickAction: { on: [], off: [] },
            fixtures: [
                {
                    id: "fx-lr-spot",
                    name: "Spot Lights",
                    type: "light",
                    power: true,
                    brightness: 80,
                    temperature: 4000,
                    color: "#ffffff",
                    isOn: false
                },
                {
                    id: "fx-lr-ambient",
                    name: "Ambient Strip",
                    type: "light",
                    power: true,
                    brightness: 60,
                    temperature: 3000,
                    color: "#ffaa88",
                    isOn: false
                }
            ],
            scenes: [
                {
                    id: "scene-lr-relax",
                    name: "Relax",
                    fixtureStates: {
                        "fx-lr-spot": { brightness: 30, temperature: 3000, isOn: true },
                        "fx-lr-ambient": { brightness: 50, color: "#ffbb88", isOn: true }
                    }
                },
                {
                    id: "scene-lr-bright",
                    name: "Bright",
                    fixtureStates: {
                        "fx-lr-spot": { brightness: 100, temperature: 4500, isOn: true },
                        "fx-lr-ambient": { brightness: 80, isOn: true }
                    }
                }
            ]
        },

        // ---------------------------------------------------
        // BEDROOM 1
        // ---------------------------------------------------
        {
            id: "space-bedroom1",
            name: "Bedroom 1",
            type: "indoor",
            subtype: "bedroom",
            allowedUsers: [],
            quickAction: { on: [], off: [] },
            fixtures: [
                {
                    id: "fx-b1-main",
                    name: "Ceiling Light",
                    type: "light",
                    power: true,
                    brightness: 70,
                    temperature: 3500,
                    color: "#ffffff",
                    isOn: false
                },
                {
                    id: "fx-b1-lamp",
                    name: "Bedside Lamp",
                    type: "light",
                    power: true,
                    brightness: 40,
                    temperature: 2700,
                    color: "#ffddaa",
                    isOn: false
                }
            ],
            scenes: [
                {
                    id: "scene-b1-night",
                    name: "Night Mode",
                    fixtureStates: {
                        "fx-b1-main": { isOn: false },
                        "fx-b1-lamp": { brightness: 20, temperature: 2500, isOn: true }
                    }
                }
            ]
        },

        // ---------------------------------------------------
        // BEDROOM 2
        // ---------------------------------------------------
        {
            id: "space-bedroom2",
            name: "Bedroom 2",
            type: "indoor",
            subtype: "bedroom",
            allowedUsers: [],
            quickAction: { on: [], off: [] },
            fixtures: [
                {
                    id: "fx-b2-main",
                    name: "Ceiling Light",
                    type: "light",
                    power: true,
                    brightness: 75,
                    temperature: 3500,
                    color: "#ffffff",
                    isOn: false
                }
            ],
            scenes: [] // Bedroom 2 shares the Bedroom 1 scene conceptually
        },

        // ---------------------------------------------------
        // KITCHEN
        // ---------------------------------------------------
        {
            id: "space-kitchen",
            name: "Kitchen",
            type: "indoor",
            subtype: "kitchen",
            allowedUsers: [],
            quickAction: { on: [], off: [] },
            fixtures: [
                {
                    id: "fx-kit-main",
                    name: "Ceiling Spots",
                    type: "light",
                    power: true,
                    brightness: 90,
                    temperature: 4500,
                    color: "#ffffff",
                    isOn: false
                },
                {
                    id: "fx-kit-counter",
                    name: "Counter Strip",
                    type: "light",
                    power: true,
                    brightness: 70,
                    temperature: 3500,
                    color: "#ffeecc",
                    isOn: false
                }
            ],
            scenes: [
                {
                    id: "scene-kitchen-cook",
                    name: "Cooking Mode",
                    fixtureStates: {
                        "fx-kit-main": { brightness: 100, temperature: 5000, isOn: true },
                        "fx-kit-counter": { brightness: 90, isOn: true }
                    }
                }
            ]
        },

        // ---------------------------------------------------
        // PORCH
        // ---------------------------------------------------
        {
            id: "space-porch",
            name: "Porch",
            type: "outdoor",
            subtype: "entrance",
            allowedUsers: [],
            quickAction: { on: [], off: [] },
            fixtures: [
                {
                    id: "fx-porch-light",
                    name: "Porch Light",
                    type: "light",
                    power: true,
                    brightness: 100,
                    temperature: 3000,
                    color: "#ffffff",
                    isOn: false
                }
            ],
            scenes: [
                {
                    id: "scene-porch-welcome",
                    name: "Welcome Home",
                    fixtureStates: {
                        "fx-porch-light": { brightness: 100, isOn: true }
                    }
                }
            ]
        },

        // ---------------------------------------------------
        // PATIO
        // ---------------------------------------------------
        {
            id: "space-patio",
            name: "Patio",
            type: "outdoor",
            subtype: "garden",
            allowedUsers: [],
            quickAction: { on: [], off: [] },
            fixtures: [
                {
                    id: "fx-patio-string",
                    name: "String Lights",
                    type: "light",
                    power: true,
                    brightness: 50,
                    temperature: 2700,
                    color: "#ffcc88",
                    isOn: false
                }
            ],
            scenes: [
                {
                    id: "scene-patio-chill",
                    name: "Chill Evening",
                    fixtureStates: {
                        "fx-patio-string": { brightness: 40, color: "#ffbb77", isOn: true }
                    }
                },
                {
                    id: "scene-patio-party",
                    name: "Party Mode",
                    fixtureStates: {
                        "fx-patio-string": { brightness: 100, color: "#ffaa00", isOn: true }
                    }
                }
            ]
        }
    ],

    scenes: []
};
