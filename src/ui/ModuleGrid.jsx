import { useEngineState } from '../state/engineState';
import { getModuleRegistry } from '../engine/moduleRegistry';
import { getTranslation } from '../locales/i18n';
import { 
    Target, Waypoints, ArrowDown10, GitFork, Infinity, Settings, 
    Hammer, RotateCcw, History, Swords, SplitSquareHorizontal, 
    Link, Combine, Brain, Component, PlaySquare, FlaskConical, 
    AlertTriangle, LightbulbOff, Lightbulb, XOctagon, Zap, Maximize, 
    Shuffle, TextQuote, BadgeCheck, PieChart, BookMarked, 
    CheckSquare, MoveRight, Telescope, Box, Flame, GraduationCap 
} from 'lucide-react';

const moduleIcons = {
    kalibrasyon: Target,
    onkosul: Waypoints,
    sirasi: ArrowDown10,
    ontoloji: GitFork,
    nedensellik: Infinity,
    mekanizma: Settings,
    insa: Hammer,
    tersine: RotateCcw,
    evrim: History,
    rakip: Swords,
    kontrast: SplitSquareHorizontal,
    esleme: Link,
    disiplinler: Combine,
    mental: Brain,
    diagram: Component,
    simulasyon: PlaySquare,
    deney: FlaskConical,
    yanilgilar: AlertTriangle,
    varsayimlar: LightbulbOff,
    basarisizlik: XOctagon,
    kirilma: Zap,
    olcek: Maximize,
    celiski: Shuffle,
    ornekler: TextQuote,
    uzman: BadgeCheck,
    pareto: PieChart,
    kaynak: BookMarked,
    quiz: CheckSquare,
    transfer: MoveRight,
    gelecek: Telescope,
    meta: GraduationCap,
    senaryo: Flame
};

export default function ModuleGrid() {
    const state = useEngineState();
    const { config, selectedModules, setModules, toggleModule, suggestions, dependencyHints } = state;
    const modules = getModuleRegistry(config.lang);
    const t = getTranslation(config.lang);

    return (
        <section className="card delay-4">
            <div className="modules-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
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
                                <span key={`hint-${idx}`} style={{ color: 'var(--accent-1)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    <Lightbulb size={12} /> {hint}
                                </span>
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
                    const Icon = moduleIcons[mod.id] || Box;
                    
                    return (
                        <div 
                            key={mod.id} 
                            className={`module-card ${isActive ? 'active' : ''}`}
                            onClick={() => toggleModule(mod.id)}
                            style={{ position: 'relative', ...(isSuggested && !isActive ? { border: '1px dashed var(--accent-2)' } : {}) }}
                        >
                            <div className="module-icon"><Icon size={20} strokeWidth={1.5} /></div>
                            <div className="module-info">
                                <div className="module-name" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    {mod.name}
                                    {isSuggested && !isActive && <span style={{ fontSize: '0.6rem', background: 'var(--text-secondary)', color: 'var(--bg-card)', padding: '1px 4px', borderRadius: '4px' }}>AI</span>}
                                </div>
                                <div className="module-desc">{mod.desc}</div>
                            </div>

                            {/* Custom Theme-Aware Tooltip */}
                            <div className="module-tooltip">
                                <div className="tooltip-title">{mod.name}</div>
                                <div className="tooltip-explain">{mod.explain}</div>
                                {mod.requires && mod.requires.length > 0 && (
                                    <div className="tooltip-reqs">
                                        <span className="tooltip-reqs-icon">🔗</span> {t.reqsLabel}: {mod.requires.map(reqId => {
                                            const reqName = modules.find(m => m.id === reqId)?.name || reqId;
                                            return `"${reqName}"`;
                                        }).join(', ')}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
