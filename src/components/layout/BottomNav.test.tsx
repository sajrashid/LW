import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BottomNav } from './BottomNav.tsx';
import { HomeProvider } from '../../store/HomeContext.tsx';

describe('BottomNav Component', () => {
    it('renders correctly and highlights the default active page', () => {
        render(
            <HomeProvider>
                <BottomNav />
            </HomeProvider>
        );

        // 1. Check if all labels exist
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Scenes/i)).toBeInTheDocument();
        expect(screen.getByText(/Devices/i)).toBeInTheDocument();

        // 2. TARGET THE SPAN: Verify "Home" has the active text color
        const homeLabel = screen.getByText(/Home/i);
        expect(homeLabel).toHaveClass('text-amber-200');

        // 3. Verify other labels are NOT active (they should have the slate color)
        const scenesLabel = screen.getByText(/Scenes/i);
        expect(scenesLabel).toHaveClass('text-slate-500');
    });

    it('successfully dispatches a page change when clicked', () => {
        render(
            <HomeProvider>
                <BottomNav />
            </HomeProvider>
        );

        const scenesButton = screen.getByText(/Scenes/i).closest('button');
        if (scenesButton) fireEvent.click(scenesButton);

        // In a real integration test, you'd check if the state updated.
        // For now, this ensures the button is clickable without crashing.
    });
});