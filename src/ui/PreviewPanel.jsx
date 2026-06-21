import { analyzePromptComplexity } from '../compiler/finalPromptAssembler';
import { useEngineState } from '../state/engineState';
import { getTranslation } from '../locales/i18n';

export default function PreviewPanel({ generatedPrompt }) {
    const state = useEngineState();
    const { config } = state;
    const t = getTranslation(config.lang);

    const stats = analyzePromptComplexity(state);

    return (
        <section className="card" id="preview-card" style={{ marginTop: '2rem' }}>
            <div className="preview-header">
                <div className="card-title" style={{ marginBottom: 0 }}>
                    <span className="dot" style={{ background: 'var(--accent-2)' }}></span> {t.previewTitle}
                </div>
                {generatedPrompt && (
                    <div className="preview-stats" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span className="stat-chip">🧩 {stats.moduleCount} {t.statModules}</span>
                        <span className="stat-chip">🧠 {stats.layersUsed} {t.statLayers}</span>
                        <span className="stat-chip">⚡ {stats.complexityScore} {t.statComplexity}</span>
                        <span className="stat-chip">📏 ~{stats.tokens} {t.previewTokens}</span>
                    </div>
                )}
            </div>

            {stats.isTooLongForUrl && generatedPrompt && (
                <div style={{ padding: '12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', fontSize: '0.85rem', color: '#fca5a5' }}>
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
