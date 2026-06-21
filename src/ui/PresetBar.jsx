import { useEngineState } from '../store/engineState';
import { useShallow } from 'zustand/react/shallow';
import { getTranslation } from '../locales/i18n';
import { PRESETS } from '../engine/presetEngine';
import { Zap, FlaskConical, FileCheck, Wrench, Layers, BookOpen, Box, Terminal, Bug, Sparkles } from 'lucide-react';

const presetIcons = {
    hizli: Zap,
    derin: FlaskConical,
    sinav: FileCheck,
    muhendis: Wrench,
    tam: Layers,
    arastirmaci: BookOpen,
    temeller: Box,
    pratik: Terminal,
    hata: Bug,
    yaratici: Sparkles
};

export default function PresetBar() {
    const { config, setPreset, activePreset } = useEngineState(useShallow(state => ({
        config: state.config,
        setPreset: state.setPreset,
        activePreset: state.activePreset
    })));
    const t = getTranslation(config.lang);

    return (
        <section className="card delay-3">
            <div className="card-title"><span className="dot"></span> {t.presetsTitle || "Uzman Modları (System Presets)"}</div>
            <div className="presets-row">
                {Object.keys(PRESETS).map(key => {
                    const Icon = presetIcons[key] || Box;
                    return (
                        <button 
                            key={key}
                            className={`preset-btn ${activePreset === key ? 'active' : ''}`} 
                            onClick={() => setPreset(key)}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                        >
                            <Icon size={14} />
                            {t.presets?.[key] || key}
                        </button>
                    );
                })}
            </div>
            
            {activePreset && (
                <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--accent-1)', fontStyle: 'italic' }}>
                    {t.systemIntelligence} "{t.presets?.[activePreset]}" {t.presetAppliedDesc}
                </div>
            )}
        </section>
    );
}
