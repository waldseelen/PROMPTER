import { useEngineState } from '../state/engineState';
import { getTranslation } from '../locales/i18n';
import { Target, Compass } from 'lucide-react';

export default function TopicInput() {
    const state = useEngineState();
    const { config, setConfig } = state;
    const t = getTranslation(config.lang);

    return (
        <section className="card" style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="input-group">
                    <label htmlFor="inp-konu" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <Target size={14} /> {t.topicLabel} <span style={{color: 'var(--text-secondary)'}}>*</span>
                    </label>
                    <input 
                        type="text" 
                        id="inp-konu" 
                        placeholder={t.topicPlaceholder}
                        value={config.konu}
                        onChange={(e) => setConfig('konu', e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="inp-alan" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <Compass size={14} /> {t.domainLabel}
                    </label>
                    <input 
                        type="text" 
                        id="inp-alan" 
                        placeholder={t.domainPlaceholder}
                        value={config.alan}
                        onChange={(e) => setConfig('alan', e.target.value)}
                    />
                </div>
            </div>
        </section>
    );
}
