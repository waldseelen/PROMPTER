import { analyzePromptComplexity } from '../compiler/finalPromptAssembler';
import { useEngineState } from '../state/engineState';
import { getTranslation } from '../locales/i18n';
import { Component, Brain, Zap, Hash } from 'lucide-react';

export default function PreviewPanel({ generatedPrompt }) {
    const state = useEngineState();
    const { config } = state;
    const t = getTranslation(config.lang);

    const stats = analyzePromptComplexity(state);

    return (
        <section className="card" id="preview-card" style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, marginBottom: 0 }}>
            <div className="preview-header">
                <div className="card-title" style={{ marginBottom: 0 }}>
                    <span className="dot" style={{ background: 'var(--accent-2)' }}></span> {t.previewTitle}
                </div>
                {generatedPrompt && (
                    <div className="preview-stats" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span className="stat-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Component size={12} /> {stats.moduleCount} {t.statModules}
                        </span>
                        <span className="stat-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Brain size={12} /> {stats.layersUsed} {t.statLayers}
                        </span>
                        <span className="stat-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Zap size={12} /> {stats.complexityScore} {t.statComplexity}
                        </span>
                        <span className="stat-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Hash size={12} /> ~{stats.tokens} {t.previewTokens}
                        </span>
                    </div>
                )}
            </div>

            {stats.isTooLongForUrl && generatedPrompt && (
                <div style={{ padding: '12px', background: 'var(--warning-bg)', border: '1px solid var(--warning-border)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--warning-text)', fontWeight: 500 }}>
                    {t.previewWarning}
                </div>
            )}

            {generatedPrompt ? (
                <div className="preview-box">
                    {generatedPrompt}
                </div>
            ) : (
                <div className="preview-empty">
                    {t.previewEmpty}
                </div>
            )}
        </section>
    );
}
