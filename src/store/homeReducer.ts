import type { AppState, Action } from './types.ts';
import { canUserPerformAction } from '../logic/permissions.ts';

export const homeReducer = (state: AppState, action: Action): AppState => {
    // LOG 1: See every action that hits the reducer
    console.log('REDUCER: Incoming Action ->', action.type, action.payload);
    switch (action.type) {
        case 'SET_PAGE': {
            return {
                ...state,
                activePage: action.payload
            };
        }
        case 'ACTIVATE_SCENE': {

            const scene = state.scenes[action.payload];
            if (!scene) return state;

            // Clone current fixtures
            const updatedFixtures = { ...state.fixtures };

            scene.actions.forEach(action => {
                const fixture = updatedFixtures[action.fixtureId];
                if (fixture) {
                    updatedFixtures[action.fixtureId] = {
                        ...fixture,
                        state: {
                            ...fixture.state,
                            brightness: action.brightness,
                            power: action.power,
                            // Only update kelvin if the scene action provides it
                            kelvin: action.kelvin ?? fixture.state.kelvin
                        },
                        _meta: { ...fixture._meta, updatedAt: Date.now() }
                    };
                }
            });

            return {
                ...state,
                fixtures: updatedFixtures
            };
        }
        case 'SET_ACTIVE_SPACE': {
            return {
                ...state,
                activeSpaceId: action.payload
            };
        }
        case 'SET_LIGHT': {
            // Logic check
            if (!canUserPerformAction(state, action.payload.id, 'control')) {
                return state;
            }

            const fixture = state.fixtures[action.payload.id];
            if (!fixture) return state;

            // We return a new state object to maintain immutability
            return {
                ...state,
                fixtures: {
                    ...state.fixtures,
                    [action.payload.id]: {
                        ...fixture,
                        state: {
                            ...fixture.state,
                            brightness: action.payload.brightness,
                            power: action.payload.brightness > 0
                        },
                        _meta: {
                            ...fixture._meta,
                            updatedAt: Date.now()
                        }
                    }
                }
            };
        }

        case 'UPDATE_TELEMETRY': {
            const fixture = state.fixtures[action.payload.id];
            if (!fixture) return state;

            return {
                ...state,
                fixtures: {
                    ...state.fixtures,
                    [action.payload.id]: {
                        ...fixture,
                        telemetry: {
                            ...fixture.telemetry,
                            tempC: action.payload.temp,
                            rssi: action.payload.rssi
                        }
                    }
                }
            };
        }

        default:
            return state;
    }
};