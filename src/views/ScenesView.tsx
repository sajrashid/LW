import * as React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, MoonIcon, SunIcon, BeakerIcon } from '@heroicons/react/24/outline';
import { useHome } from '../store/HomeContext.tsx';

// Mapping string icons from seed to actual Heroicon components
const IconMap: Record<string, any> = {
    SparklesIcon,
    MoonIcon,
    SunIcon,
    BeakerIcon
};

export const ScenesView: React.FC = () => {
    const { state, dispatch } = useHome();
    const scenes = Object.values(state.scenes);

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-bold text-white">Scenes</h1>
                <p className="text-slate-400 text-sm">Automated lighting atmospheres</p>
            </header>

            <div className="grid grid-cols-2 gap-4">
                {scenes.map((scene) => {
                    const Icon = IconMap[scene.icon] || SparklesIcon;

                    return (
                        <motion.button
                            key={scene.id}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => dispatch({ type: 'ACTIVATE_SCENE', payload: scene.id })}
                            className="flex flex-col items-start p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-amber-500/50 transition-colors text-left group"
                        >
                            <div className="p-3 bg-slate-800 rounded-xl mb-4 group-hover:bg-amber-500/20 group-hover:text-amber-500 transition-colors">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-100">{scene.name}</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                                {scene.actions.length} Fixtures
                            </p>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
};