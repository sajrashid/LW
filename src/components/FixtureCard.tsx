import type { FC } from 'react';
import type { Fixture } from '../types/fixtures.ts';
import { useHome } from '../store/HomeContext.tsx';

interface Props {
    readonly fixture: Fixture;
}

export const FixtureCard: FC<Props> = ({ fixture }) => {
    const { dispatch } = useHome();

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'SET_LIGHT',
            payload: { id: fixture.id, brightness: parseInt(e.target.value) }
        });
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-lg font-medium text-slate-200">{fixture.alias}</h3>
                    <p className="text-xs text-slate-500 tabular-nums">
                        {fixture.telemetry.tempC}°C • {fixture.telemetry.rssi} dBm
                    </p>
                </div>

                {/* Visual indicator of power */}
                <div className={`h-2 w-2 rounded-full mt-2 ${fixture.state.power ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-slate-700'}`} />
            </div>

            <input
                type="range"
                min="0"
                max="1000"
                value={fixture.state.brightness}
                onChange={handleSliderChange}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />

            <div className="flex justify-between mt-2 text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
                <span>0%</span>
                <span>{Math.round(fixture.state.brightness / 10)}%</span>
                <span>100%</span>
            </div>
        </div>
    );
};