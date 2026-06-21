export const PRESETS = {
    hizli: {
        id: 'hizli',
        forceModules: ['mekanizma', 'ornekler', 'pareto'],
        override: { derinlik: 'temel', format: 'markdown', mod: 'feynman' },
        injectRules: ["Focus only on the 20% that gives 80% of the understanding.", "Use very simple analogies."]
    },
    derin: {
        id: 'derin',
        forceModules: ['ontoloji', 'mekanizma', 'evrim', 'rakip', 'varsayimlar'],
        override: { derinlik: 'derin', format: 'markdown', mod: 'sistem' },
        injectRules: ["Deconstruct the topic into its absolute fundamentals.", "Map the entire dependency tree of concepts."]
    },
    sinav: {
        id: 'sinav',
        forceModules: ['quiz', 'transfer'],
        override: { derinlik: 'orta', format: 'quiz', mod: 'sokratik' },
        injectRules: ["Enable spaced repetition principles in the questions.", "Focus strictly on recall-based questioning."]
    },
    muhendis: {
        id: 'muhendis',
        forceModules: ['insa', 'tersine', 'basarisizlik', 'kirilma', 'pareto'],
        override: { derinlik: 'derin', format: 'tablo', mod: 'ilkeler' },
        injectRules: ["Explain how to build this from scratch.", "Focus on architectural decisions and engineering tradeoffs."]
    },
    tam: {
        id: 'tam',
        forceModules: ['kalibrasyon', 'ontoloji', 'mekanizma', 'evrim', 'ornekler', 'gelecek'],
        override: { derinlik: 'kapsamli', format: 'markdown', mod: 'karma' },
        injectRules: ["Leave no stone unturned.", "Provide the most exhaustive explanation possible."]
    },
    arastirmaci: {
        id: 'arastirmaci',
        forceModules: ['ontoloji', 'nedensellik', 'evrim', 'rakip', 'varsayimlar', 'gelecek'],
        override: { derinlik: 'kapsamli', format: 'markdown', mod: 'sistem' },
        injectRules: ["Act as an academic researcher.", "Provide historical context and citations to dominant theories."]
    },
    temeller: {
        id: 'temeller',
        forceModules: ['kalibrasyon', 'onkosul', 'ontoloji', 'mekanizma'],
        override: { derinlik: 'temel', format: 'ders', mod: 'ilkeler' },
        injectRules: ["Focus purely on first principles.", "Do not introduce advanced topics until the core foundation is explicitly clear."]
    },
    pratik: {
        id: 'pratik',
        forceModules: ['ornekler', 'uzman', 'pareto', 'mental'],
        override: { derinlik: 'orta', format: 'markdown', mod: 'feynman' },
        injectRules: ["Use the 80/20 rule (Pareto principle).", "Provide extremely practical, real-world analogies."]
    },
    hata: {
        id: 'hata',
        forceModules: ['basarisizlik', 'kirilma', 'celiski', 'pareto'],
        override: { derinlik: 'derin', format: 'tablo', mod: 'sistem' },
        injectRules: ["Focus on Single Points of Failure (SPOF) and anti-patterns.", "Explain exactly when and why this concept or system falls apart."]
    },
    yaratici: {
        id: 'yaratici',
        forceModules: ['diagram', 'simulasyon', 'gelecek', 'mental'],
        override: { derinlik: 'derin', format: 'markdown', mod: 'ilkeler' },
        injectRules: ["Combine cross-disciplinary mental models.", "Propose highly creative future scenarios and synthesize new ideas."]
    }
};

export function applyPreset(presetId, lang = 'tr') {
    const preset = PRESETS[presetId];
    if (!preset) return { forceModules: [], override: {}, injectRules: [] };
    return preset;
}
