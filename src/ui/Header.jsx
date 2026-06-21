import { useEngineState } from '../state/engineState';
import { getTranslation } from '../locales/i18n';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function Header() {
    const { config, setTheme, setConfig } = useEngineState();
    const t = getTranslation(config.lang);

    const toggleTheme = () => {
        if (config.theme === 'system') setTheme('light');
        else if (config.theme === 'light') setTheme('dark');
        else setTheme('system');
    };

    const toggleLang = () => {
        setConfig('lang', config.lang === 'en' ? 'tr' : 'en');
    };

    const ThemeIcon = () => {
        if (config.theme === 'light') return <Sun size={18} strokeWidth={1.5} />;
        if (config.theme === 'dark') return <Moon size={18} strokeWidth={1.5} />;
        return <Monitor size={18} strokeWidth={1.5} />;
    };

    return (
        <header className="header" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', right: 0, top: 0, display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button 
                    onClick={toggleLang}
                    style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', padding: '2px 6px', color: 'var(--text-secondary)', fontWeight: 600, transition: 'all 0.2s' }}
                    title={config.lang === 'en' ? 'Türkçe' : 'English'}
                    onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                    {config.lang === 'en' ? 'TR' : 'EN'}
                </button>
                <button 
                    onClick={toggleTheme}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s' }}
                    title={`Theme: ${config.theme}`}
                    onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                    <ThemeIcon />
                </button>
            </div>
            <div className="header-badge">{t.badge}</div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
        </header>
    );
}
