import type { Fixture } from "../types/Fixture";

export const readFixtureState = <K extends keyof NonNullable<Fixture["state"]>>(f: Fixture, k: K) =>
    (f.state?.[k] as any) ?? (f as any)[k];

export const writeFixtureState = <K extends keyof NonNullable<Fixture["state"]>>(f: Fixture, k: K, v: any) =>
    ({ ...f, state: { ...(f.state ?? {}), [k]: v } });
