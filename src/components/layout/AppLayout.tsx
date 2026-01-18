import type { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppLayoutProps {
    children: ReactNode;
    pageKey: string; // Used by Framer Motion to detect page changes
}

export const AppLayout: FC<AppLayoutProps> = ({ children, pageKey }) => {
    return (
        <div className="fixed inset-0 flex flex-col bg-slate-950 text-slate-50 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.main
                    key={pageKey}
                    // Native-style slide & fade transition
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    /* pb-24 ensures content doesn't get hidden behind the fixed nav.
                       pt-[env(safe-area-inset-top)] handles the phone notch.
                    */
                    className="flex-1 overflow-y-auto px-6 pt-[env(safe-area-inset-top,2rem)] pb-24"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </div>
    );
};