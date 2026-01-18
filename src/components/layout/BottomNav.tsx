import * as React from 'react';
import {
    HomeIcon,
    CubeIcon,
    SparklesIcon,
    CpuChipIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
// Import the hook directly from your context file:
import { useHome } from '../../store/HomeContext.tsx';

export const BottomNav: React.FC = () => {
    // Change React.useHome() to just useHome()
    const { state, dispatch } = useHome();

    const navItems = [
        { id: 'dashboard', label: 'Home', icon: HomeIcon },
        { id: 'spaces', label: 'Spaces', icon: CubeIcon },
        { id: 'scenes', label: 'Scenes', icon: SparklesIcon },
        { id: 'devices', label: 'Devices', icon: CpuChipIcon },
        { id: 'profile', label: 'User', icon: UserCircleIcon },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-2xl border-t border-white/10 pb-[env(safe-area-inset-bottom,1rem)] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-around h-16 max-w-screen-xl mx-auto">
                {navItems.map((item) => {
                    const isActive = state.activePage === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => dispatch({ type: 'SET_PAGE', payload: item.id })}
                            className="flex flex-col items-center justify-center gap-1 flex-1 h-full relative"
                        >
                            <item.icon className={`w-6 h-6 transition-all duration-200 ${isActive ? 'text-amber-500' : 'text-slate-400 group-active:scale-95'
                                }`} />

                            <span className={`text-[10px] font-bold uppercase tracking-tight transition-colors ${isActive ? 'text-amber-200' : 'text-slate-500'
                                }`}>
                                {item.label}
                            </span>

                            {isActive && (
                                <div className="absolute top-0 w-12 h-0.5 bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};