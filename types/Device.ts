// src/types/Device.ts

export type DeviceConnectionType =
    | "wifi"
    | "zigbee"
    | "bluetooth"
    | "ethernet"
    | "virtual";

export interface Device {
    id: string;                     // internal app ID
    name: string;                   // user-friendly name
    model: string;                  // e.g. "Hue Bulb A19", "Shelly Pro 4PM"
    manufacturer?: string;          // optional: Philips, Shelly, Nanoleaf, etc.

    connectionType: DeviceConnectionType;

    macAddress?: string;            // hardware identity (if available)
    ipAddress?: string;             // for Wi-Fi/Ethernet devices
    firmwareVersion?: string;       // for updates later

    fixtureIds: string[];           // fixtures exposed by this device

    online: boolean;                // is the device reachable?
    lastSeen: number;               // timestamp for diagnostics

    locationHint?: string;          // optional: "loft", "cupboard", "rack"
}
