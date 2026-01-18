import { describe, it, expect } from 'vitest';
import { homeReducer } from './homeReducer';
import { initialSeed } from './seed';
import { AppState } from './types';

describe('Home Reducer', () => {
    it('should handle SET_PAGE correctly', () => {
        const action = { type: 'SET_PAGE' as const, payload: 'scenes' };
        const newState = homeReducer(initialSeed, action);

        expect(newState.activePage).toBe('scenes');
        // Ensure we didn't mutate the original seed
        expect(initialSeed.activePage).toBe('dashboard');
    });

    it('should update light brightness via SET_LIGHT', () => {
        const fixtureId = 'fix-001'; // Ensure this matches an ID in your seed
        const action = {
            type: 'SET_LIGHT' as const,
            payload: { id: fixtureId, brightness: 750 }
        };

        const newState = homeReducer(initialSeed, action);
        expect(newState.fixtures[fixtureId].state.brightness).toBe(750);
        expect(newState.fixtures[fixtureId].state.power).toBe(true);
    });
});