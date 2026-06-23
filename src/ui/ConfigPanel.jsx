import { useEngineState } from '../store/engineState';
import { useShallow } from 'zustand/react/shallow';
import { getTranslation } from '../locales/i18n';
import { GraduationCap, Workflow, Layers, FileText, BrainCircuit, Link } from 'lucide-react';

export default function ConfigPanel() {
    const { config, setConfig } = useEngineState(useShallow(state => ({
        config: state.config,
        setConfig: state.setConfig
    })));
    const t = getTranslation(config.lang);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <section className="card" style={{ marginBottom: 0, height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="card-title" style={{ marginBottom: 0 }}><span className="dot"></span> {t.paramsTitle || 'Parametreler'}</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                    <div className="input-group">
                        <label htmlFor="sel-seviye" style={{display: 'flex', alignItems: 'center', gap: '6px', position: 'relative'}}>
                            <GraduationCap size={14} /> {t.levelLabel}
                            <div className="config-tooltip tooltip-down">
                                <ul className="tooltip-list">
                                    {Object.entries(t.levelDescs || {}).map(([key, text]) => {
                                        const [title, ...rest] = text.split(':');
                                        return (
                                            <li key={key}>
                                                <strong>{title}:</strong>{rest.join(':')}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
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
                        <label htmlFor="sel-mod" style={{display: 'flex', alignItems: 'center', gap: '6px', position: 'relative'}}>
                            <Workflow size={14} /> {t.modeLabel}
                            <div className="config-tooltip tooltip-down">
                                <ul className="tooltip-list">
                                    {Object.entries(t.modeDescs || {}).map(([key, text]) => {
                                        const [title, ...rest] = text.split(':');
                                        return (
                                            <li key={key}>
                                                <strong>{title}:</strong>{rest.join(':')}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
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
                        <label htmlFor="sel-derinlik" style={{display: 'flex', alignItems: 'center', gap: '6px', position: 'relative'}}>
                            <Layers size={14} /> {t.depthLabel}
                            <div className="config-tooltip">
                                <ul className="tooltip-list">
                                    {Object.entries(t.depthDescs || {}).map(([key, text]) => {
                                        const [title, ...rest] = text.split(':');
                                        return (
                                            <li key={key}>
                                                <strong>{title}:</strong>{rest.join(':')}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </label>
                        <select id="sel-derinlik" value={config.derinlik} onChange={(e) => setConfig('derinlik', e.target.value)}>
                            <option value="orta">{t.depths.orta}</option>
                            <option value="temel">{t.depths.temel}</option>
                            <option value="derin">{t.depths.derin}</option>
                            <option value="kapsamli">{t.depths.kapsamli}</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="sel-format" style={{display: 'flex', alignItems: 'center', gap: '6px', position: 'relative'}}>
                            <FileText size={14} /> {t.formatLabel}
                            <div className="config-tooltip">
                                <ul className="tooltip-list">
                                    {Object.entries(t.formatDescs || {}).map(([key, text]) => {
                                        const [title, ...rest] = text.split(':');
                                        return (
                                            <li key={key}>
                                                <strong>{title}:</strong>{rest.join(':')}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </label>
                        <select id="sel-format" value={config.format} onChange={(e) => setConfig('format', e.target.value)}>
                            <option value="markdown">{t.formats.markdown}</option>
                            <option value="tablo">{t.formats.tablo}</option>
                            <option value="ders">{t.formats.ders}</option>
                            <option value="quiz">{t.formats.quiz}</option>
                        </select>
                    </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                    <div className="toggle-row">
                        <div className="input-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <label className="toggle-switch">
                                <input type="checkbox" id="chk-monolog" checked={config.monolog} onChange={(e) => setConfig('monolog', e.target.checked)} />
                                <span className="slider"></span>
                            </label>
                            <label htmlFor="chk-monolog" style={{ margin: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <BrainCircuit size={14} /> {t.monologLabel}
                            </label>
                        </div>
                        <div className="config-tooltip">
                            {t.monologDesc}
                        </div>
                    </div>
                    <div className="toggle-row">
                        <div className="input-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                            <label className="toggle-switch">
                                <input type="checkbox" id="chk-autoresolve" checked={config.autoResolveDeps} onChange={(e) => setConfig('autoResolveDeps', e.target.checked)} />
                                <span className="slider"></span>
                            </label>
                            <label htmlFor="chk-autoresolve" style={{ margin: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Link size={14} /> {t.autoResolveLabel}
                            </label>
                        </div>
                        <div className="config-tooltip">
                            {t.autoResolveDesc}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
