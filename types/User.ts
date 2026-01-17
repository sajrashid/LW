// src/types/User.ts

export interface User {
    id: string;
    name: string;
    role: "admin" | "teen" | "kid" | "guest";
    deviceIds: string[];
}
