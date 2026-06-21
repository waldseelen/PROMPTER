/**
 * Intelligence Layer (Auto-Intelligence Layer)
 * Suggests modules based on user's current configuration or selected modules.
 * This turns the system from a "dumb form" into an "OS that thinks".
 */
export function getSuggestions(config, selectedModules, activePreset) {
    const suggestions = new Set();
    const has = (id) => selectedModules.includes(id);

    // Rule 1: If Quiz is selected, they should know the Foundations and Mechanisms
    if (has('quiz')) {
        if (!has('ontoloji')) suggestions.add('ontoloji');
        if (!has('mekanizma')) suggestions.add('mekanizma');
    }

    // Rule 2: If depth is 'temel' (basic), suggest Mental Models to grasp it easily
    if (config.derinlik === 'temel' && !has('mental')) {
        suggestions.add('mental');
    }

    // Rule 3: If format is 'ders' (lecture), suggest Pre-requisites
    if (config.format === 'ders' && !has('onkosul')) {
        suggestions.add('onkosul');
    }

    // Rule 4: If they want 'uzman' level knowledge, push them to Boundaries and Debugging
    if (config.seviye === 'uzman') {
        if (!has('varsayimlar')) suggestions.add('varsayimlar');
        if (!has('basarisizlik')) suggestions.add('basarisizlik');
    }

    return Array.from(suggestions);
}
