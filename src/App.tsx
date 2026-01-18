import * as React from 'react';
import { useHome } from './store/HomeContext.tsx';
import { AppLayout } from './components/layout/AppLayout.tsx';
import { BottomNav } from './components/layout/BottomNav.tsx';
import { Dashboard } from './views/Dashboard.tsx';
import { ScenesView } from './views/ScenesView.tsx';

//import { DevicesView } from './views/DevicesView.tsx';

export const App: React.FC = () => {
    const { state } = useHome();

    // If this log still says 'dashboard' after a click, 
    // we know the Provider is staying alive but the Reducer failed.
    console.log('APP_RENDER: Current Page is ->', state.activePage);

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-slate-950">
            <AppLayout pageKey={state.activePage}>
                {state.activePage === 'dashboard' && <Dashboard />}
                {state.activePage === 'scenes' && <ScenesView />}
                {state.activePage === 'devices' && <DevicesView />}

                {!['dashboard', 'scenes', 'devices'].includes(state.activePage) && (
                    <div className="flex items-center justify-center h-full text-slate-500 italic">
                        {state.activePage.toUpperCase()} View Coming Soon
                    </div>
                )}
            </AppLayout>
            <BottomNav />
        </div>
    );
};