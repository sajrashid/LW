// src/types/UserState.ts

import type { User } from "./User.ts";

export interface UserState {
    users: User[];
    currentDeviceId: string;
    currentUserId?: string;
    permissionsEnabled: boolean;
}
