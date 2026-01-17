// Controller represents routing endpoints: esp32 nodes, hubs, gateways
export type ControllerBase = {
    id: string;
    name: string;
    type: "esp32" | "hub" | "mock";
    // fixtures managed by this controller (IDs)
    fixtures: string[];
    meta?: Record<string, any>;
};

// ESP32 controller details
export type Esp32Controller = ControllerBase & {
    type: "esp32";
    ip?: string;
    port?: number;
    // protocol specifics if needed
};

// Hub controller details
export type HubController = ControllerBase & {
    type: "hub";
    protocol?: string; // e.g., "rs485", "zigbee", "zwave"
    address?: string; // serial port, gateway id, etc.
};

export type Controller = Esp32Controller | HubController | ControllerBase;
