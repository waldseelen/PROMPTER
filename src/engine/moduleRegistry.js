import modulesTrJson from '../data/modules_tr.json';
import modulesEnJson from '../data/modules_en.json';

// In the future, this file could load from an API or allow user-injected modules.
export function getModuleRegistry(lang = 'tr') {
    return lang === 'en' ? modulesEnJson : modulesTrJson;
}

export function getModuleById(id, lang = 'tr') {
    const registry = getModuleRegistry(lang);
    return registry.find(m => m.id === id);
}
