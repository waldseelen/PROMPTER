import { useEngineState } from '../state/engineState';
import { getModuleRegistry } from '../engine/moduleRegistry';
import { getTranslation } from '../locales/i18n';

export default function ModuleGrid() {
    const state = useEngineState();
    const { config, selectedModules, setModules, toggleModule, suggestions, dependencyHints } = state;
    const modules = getModuleRegistry(config.lang);
    const t = getTranslation(config.lang);

    return (
        <section className="card delay-4">
            <div className="modules-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.25rem' }}>
                <div className="title-side">
                    <div className="card-title" style={{ marginBottom: 0 }}>
                        <span className="dot"></span> {t.modulesTitle}
                    </div>
                    <span className="module-counter" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '10px' }}>
                        {selectedModules.length} / {modules.length}
                    </span>
                    
                    {/* Intelligence Layer UI: Suggestions and Hints */}
                    {(dependencyHints.length > 0 || suggestions.length > 0) && (
                        <div style={{ marginTop: '8px', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {dependencyHints.map((hint, idx) => (
                                <span key={`hint-${idx}`} style={{ color: 'var(--accent-1)' }}>⚡ {hint}</span>
                            ))}
                            {suggestions.map((sug, idx) => {
                                const modName = modules.find(m => m.id === sug)?.name;
                                return (
                                    <span key={`sug-${idx}`} style={{ color: 'var(--accent-2)', cursor: 'pointer' }} onClick={() => toggleModule(sug)}>
                                        {t.aiSuggestion}: "{modName}" {t.suggestAdd} ({t.clickToAdd})
                                    </span>
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className="modules-actions" style={{ display: 'flex', gap: '8px' }}>
                    <button 
                        className="btn btn-secondary" 
                        style={{ padding: '4px 10px', fontSize: '0.75rem' }} 
                        onClick={() => setModules(modules.map(m => m.id))}
                    >
                        {t.selectAll}
                    </button>
                    <button 
                        className="btn btn-secondary" 
                        style={{ padding: '4px 10px', fontSize: '0.75rem' }} 
                        onClick={() => setModules([])}
                    >
                        {t.clearAll}
                    </button>
                </div>
            </div>
            
            <div className="modules-grid">
                {modules.map(mod => {
                    const isActive = selectedModules.includes(mod.id);
                    const isSuggested = suggestions.includes(mod.id);
                    
                    return (
                        <div 
                            key={mod.id} 
                            className={`module-card ${isActive ? 'active' : ''}`}
                            onClick={() => toggleModule(mod.id)}
                            style={isSuggested && !isActive ? { border: '1px dashed var(--accent-2)' } : {}}
                            title={mod.explain + (mod.requires.length ? `\n\n${t.reqsLabel}: ` + mod.requires.join(', ') : '')}
                        >
                            <div className="module-icon">{mod.icon}</div>
                            <div className="module-info">
                                <div className="module-name" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    {mod.name}
                                    {isSuggested && !isActive && <span style={{ fontSize: '0.6rem', background: 'var(--accent-2)', color: '#000', padding: '1px 4px', borderRadius: '4px' }}>AI</span>}
                                </div>
                                <div className="module-desc">{mod.desc}</div>
                            </div>
                            <div className="module-toggle"></div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
