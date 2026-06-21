import { useEngineState } from '../state/engineState';
import { assembleFinalPrompt } from '../compiler/finalPromptAssembler';
import { copyToClipboard, openInAI } from '../utils/aiRouter';
import { SiGooglegemini, SiAnthropic, SiPerplexity, SiOpenaigym } from '@icons-pack/react-simple-icons';
import { getTranslation } from '../locales/i18n';
import { Sparkles, Copy, RotateCcw } from 'lucide-react';

export default function ActionBar({ setGeneratedPrompt, showToast }) {
    const state = useEngineState();
    const { config, selectedModules, clearAll } = state;
    const t = getTranslation(config.lang);

    const handleGenerate = () => {
        if (!config.konu.trim()) {
            showToast(t.toastNeedTopic, 'warn');
            return;
        }
        if (selectedModules.length === 0) {
            showToast(t.toastNeedModule, 'warn');
            return;
        }
        const prompt = assembleFinalPrompt(state);
        setGeneratedPrompt(prompt);
        showToast(t.toastSuccess);
        setTimeout(() => {
            const previewCard = document.getElementById('preview-card');
            if (previewCard) previewCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const handleCopy = () => {
        const prompt = assembleFinalPrompt(state);
        if (!prompt) {
            showToast(t.toastNeedPrompt, 'warn');
            return;
        }
        copyToClipboard(prompt, 
            () => showToast(t.toastCopied),
            () => showToast(t.toastCopyFail, 'warn')
        );
    };

    const handleOpenAI = (aiName) => {
        const prompt = assembleFinalPrompt(state);
        if (!prompt) {
            showToast(t.toastNeedPrompt, 'warn');
            return;
        }
        
        openInAI(aiName, prompt, 
            () => showToast(t.toastUrlLimit, 'warn'),
            () => showToast(t.toastOpening)
        );
    };

    return (
        <div className="actions-bar" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', marginBottom: '16px' }}>
            {/* Row 1: Reset, Generate, Copy */}
            <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                <button className="btn btn-secondary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }} onClick={() => { clearAll(); setGeneratedPrompt(''); showToast(t.toastReset); }}>
                    <RotateCcw size={16} /> {t.btnReset}
                </button>
                <button className="btn btn-primary" style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', background: '#e9c46a', color: '#1a1a1a', borderColor: '#e9c46a' }} onClick={handleGenerate}>
                    <Sparkles size={16} /> {t.btnGenerate}
                </button>
                <button className="btn btn-secondary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }} onClick={handleCopy}>
                    <Copy size={16} /> {t.btnCopy}
                </button>
            </div>
            
            {/* Row 2: AI Export Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', width: '100%' }}>
                <button className="btn btn-gemini" style={{ background: '#1e326c', color: '#fff', borderColor: '#1e326c', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', padding: '8px 4px' }} onClick={() => handleOpenAI('gemini')}>
                    <SiGooglegemini size={14} /> Gemini
                </button>
                <button className="btn btn-secondary" style={{ background: '#10a37f', color: '#fff', borderColor: '#10a37f', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', padding: '8px 4px' }} onClick={() => handleOpenAI('chatgpt')}>
                    <SiOpenaigym size={14} /> ChatGPT
                </button>
                <button className="btn btn-secondary" style={{ background: '#d97757', color: '#fff', borderColor: '#d97757', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', padding: '8px 4px' }} onClick={() => handleOpenAI('claude')}>
                    <SiAnthropic size={14} /> Claude
                </button>
                <button className="btn btn-secondary" style={{ background: '#22b8cd', color: '#fff', borderColor: '#22b8cd', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.8rem', padding: '8px 4px' }} onClick={() => handleOpenAI('perplexity')}>
                    <SiPerplexity size={14} /> Perplexity
                </button>
            </div>
        </div>
    );
}
