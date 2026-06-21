import { useEngineState } from '../state/engineState';
import { getTranslation } from '../locales/i18n';
import { PRESETS } from '../engine/presetEngine';

export default function PresetBar() {
    const { config, setPreset, activePreset } = useEngineState();
    const t = getTranslation(config.lang);

    return (
        <section className="card delay-3">
            <div className="card-title"><span className="dot"></span> {t.presetsTitle || "Uzman Modları (System Presets)"}</div>
            <div className="presets-row">
                {Object.keys(PRESETS).map(key => (
                    <button 
                        key={key}
                        className={`preset-btn ${activePreset === key ? 'active' : ''}`} 
                        onClick={() => setPreset(key)}
                    >
                        {t.presets?.[key] || key}
                    </button>
                ))}
            </div>
            
            {activePreset && (
                <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--accent-1)', fontStyle: 'italic' }}>
                    {t.systemIntelligence} "{t.presets?.[activePreset]}" {t.presetAppliedDesc}
                </div>
            )}
        </section>
    );
}
