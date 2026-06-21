import { useEngineState } from '../state/engineState';
import { getTranslation } from '../locales/i18n';
import { GraduationCap, Workflow, Layers, FileText, BrainCircuit, Link } from 'lucide-react';

export default function ConfigPanel() {
    const state = useEngineState();
    const { config, setConfig } = state;
    const t = getTranslation(config.lang);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

            <section className="card" style={{ marginBottom: 0 }}>
                <div className="card-title"><span className="dot"></span> {t.paramsTitle || 'Parametreler'}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="input-group">
                        <label htmlFor="sel-seviye" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                            <GraduationCap size={14} /> {t.levelLabel}
                        </label>
                        <select id="sel-seviye" value={config.seviye} onChange={(e) => setConfig('seviye', e.target.value)}>
                            <option value="otomatik">{t.levels.otomatik}</option>
                            <option value="acemi">{t.levels.acemi}</option>
                            <option value="orta">{t.levels.orta}</option>
                            <option value="ileri">{t.levels.ileri}</option>
                            <option value="uzman">{t.levels.uzman}</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="sel-mod" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                            <Workflow size={14} /> {t.modeLabel}
                        </label>
                        <select id="sel-mod" value={config.mod} onChange={(e) => setConfig('mod', e.target.value)}>
                            <option value="karma">{t.modes.karma}</option>
                            <option value="feynman">{t.modes.feynman}</option>
                            <option value="sistem">{t.modes.sistem}</option>
                            <option value="sokratik">{t.modes.sokratik}</option>
                            <option value="ilkeler">{t.modes.ilkeler}</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="sel-derinlik" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                            <Layers size={14} /> {t.depthLabel}
                        </label>
                        <select id="sel-derinlik" value={config.derinlik} onChange={(e) => setConfig('derinlik', e.target.value)}>
                            <option value="orta">{t.depths.orta}</option>
                            <option value="temel">{t.depths.temel}</option>
                            <option value="derin">{t.depths.derin}</option>
                            <option value="kapsamli">{t.depths.kapsamli}</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="sel-format" style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                            <FileText size={14} /> {t.formatLabel}
                        </label>
                        <select id="sel-format" value={config.format} onChange={(e) => setConfig('format', e.target.value)}>
                            <option value="markdown">{t.formats.markdown}</option>
                            <option value="tablo">{t.formats.tablo}</option>
                            <option value="ders">{t.formats.ders}</option>
                            <option value="quiz">{t.formats.quiz}</option>
                        </select>
                    </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
                    <div className="input-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={config.monolog} onChange={(e) => setConfig('monolog', e.target.checked)} />
                            <span className="slider"></span>
                        </label>
                        <label style={{ margin: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => setConfig('monolog', !config.monolog)}>
                            <BrainCircuit size={14} /> {t.monologLabel}
                        </label>
                    </div>
                    <div className="input-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                        <label className="toggle-switch">
                            <input type="checkbox" checked={config.autoResolveDeps} onChange={(e) => setConfig('autoResolveDeps', e.target.checked)} />
                            <span className="slider"></span>
                        </label>
                        <label style={{ margin: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => setConfig('autoResolveDeps', !config.autoResolveDeps)}>
                            <Link size={14} /> {t.autoResolveLabel}
                        </label>
                    </div>
                </div>
            </section>
        </div>
    );
}
