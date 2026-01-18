// src/store/HomeContext.tsx
import * as React from 'react';
import { initialSeed } from './seed.ts';
import { homeReducer } from './homeReducer.ts';
import type { AppState, Action } from './types.ts';

interface HomeContextType {
    readonly state: AppState;
    readonly dispatch: (action: Action) => void;
}

const HomeContext = React.createContext<HomeContextType | undefined>(undefined);

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Use a lazy initializer (the function inside useReducer) 
    // to ensure initialSeed is only read on the very first mount.
    const [state, dispatch] = React.useReducer(homeReducer, initialSeed, (init) => {
        console.log('CONTEXT_INIT: State engine starting...');
        return init;
    });

    // Check the memory reference of 'state'
    React.useEffect(() => {
        console.log('CONTEXT_WATCHER: State just changed in Provider!', state.activePage);
    }, [state]);

    const value = React.useMemo(() => ({ state, dispatch }), [state]);

    return (
        <HomeContext.Provider value={value}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHome = () => {
    const context = React.useContext(HomeContext);
    if (!context) throw new Error('useHome must be used within HomeProvider');
    return context;
};