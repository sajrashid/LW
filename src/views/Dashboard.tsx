import type { FC } from 'react';
import { useHome } from '../store/HomeContext.tsx';
import { FixtureCard } from '../components/FixtureCard.tsx';

export const Dashboard: FC = () => {
    const { state } = useHome();
    // This line ensures the dashboard only renders lights for the "Active" room
    const spaceFixtures = Object.values(state.fixtures).filter(
        (f) => f.spaceId === state.activeSpaceId
    );
    // Get all fixtures for the currently active space
    const activeFixtures = Object.values(state.fixtures).filter(
        f => f.spaceId === state.activeSpaceId
    );

    const activeSpaceName = state.spaces[state.activeSpaceId ?? '']?.name ?? 'Select Space';

    return (
        <main className="p-6 max-w-lg mx-auto">
            <header className="mb-8">
                <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">System Active</p>
                <h1 className="text-3xl font-light">{activeSpaceName}</h1>
            </header>

            <section className="grid gap-4">
                {activeFixtures.map(fixture => (
                    <FixtureCard key={fixture.id} fixture={fixture} />
                ))}
            </section>

            <footer className="mt-12 p-4 border-t border-slate-800 text-center">
                <p className="text-xs text-slate-600">
                    Role: <span className="text-amber-500/80 uppercase">{state.currentUser.role}</span>
                </p>
            </footer>
        </main>
    );
};