import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { resolveDependencies } from '../engine/dependencyResolver';
import { getSuggestions } from '../engine/intelligenceLayer';
import { applyPreset } from '../engine/presetEngine';

export const useEngineState = create(
    persist(
        (set, get) => ({
            // 1. Core Configuration (Input State)
            config: {
                konu: '',
                alan: '',
                seviye: 'otomatik',
                mod: 'karma',
                derinlik: 'orta',
                format: 'markdown',
                monolog: false,
                autoResolveDeps: true,
                theme: 'system',
                lang: 'tr'
            },
            
            // 2. Active Behaviors (Modules & Presets)
            selectedModules: [],
            activePreset: null,
            injectedRules: [],
            
            // 3. Intelligence / Hints
            suggestions: [], 
            dependencyHints: [], 
            
            // Actions
            setConfig: (key, value) => set((state) => {
                const newConfig = { ...state.config, [key]: value };
                const suggestions = getSuggestions(newConfig, state.selectedModules, state.activePreset);
                return { config: newConfig, suggestions };
            }),
            
            setTheme: (themeVal) => set((state) => ({
                config: { ...state.config, theme: themeVal }
            })),
            
            toggleModule: (id) => set((state) => {
                const isSelected = state.selectedModules.includes(id);
                let newModules = isSelected 
                    ? state.selectedModules.filter(m => m !== id)
                    : [...state.selectedModules, id];
                
                let dependencyHints = [];
                
                // DAG Resolution
                if (state.config.autoResolveDeps && !isSelected) {
                    const resolved = resolveDependencies(newModules, state.config.lang);
                    if (resolved.length > newModules.length) {
                        const added = resolved.filter(x => !newModules.includes(x));
                        dependencyHints = [`${id} -> +[${added.join(', ')}] (Auto-resolved)`];
                    }
                    newModules = resolved;
                }
                
                const suggestions = getSuggestions(state.config, newModules, state.activePreset);
                
                return { 
                    selectedModules: newModules, 
                    activePreset: null, // User override breaks the pure preset
                    injectedRules: [],
                    dependencyHints,
                    suggestions
                };
            }),

            setPreset: (presetId) => set((state) => {
                const presetResult = applyPreset(presetId, state.config.lang);
                
                let newModules = presetResult.forceModules;
                let dependencyHints = [];
                
                if (state.config.autoResolveDeps) {
                    const resolved = resolveDependencies(newModules, state.config.lang);
                    if (resolved.length > newModules.length) {
                        const added = resolved.filter(x => !newModules.includes(x));
                        dependencyHints = [`Preset '${presetId}' applied -> +[${added.join(', ')}]`];
                    }
                    newModules = resolved;
                }

                const newConfig = { ...state.config, ...presetResult.override };

                return {
                    activePreset: presetId,
                    selectedModules: newModules,
                    injectedRules: presetResult.injectRules || [],
                    config: newConfig,
                    dependencyHints,
                    suggestions: getSuggestions(newConfig, newModules, presetId)
                };
            }),

            setModules: (moduleIds) => set((state) => {
                let newModules = moduleIds;
                if (state.config.autoResolveDeps) {
                    newModules = resolveDependencies(newModules, state.config.lang);
                }
                return { 
                    selectedModules: newModules,
                    suggestions: getSuggestions(state.config, newModules, state.activePreset)
                };
            }),

            clearAll: () => set((state) => ({
                selectedModules: [],
                activePreset: null,
                injectedRules: [],
                dependencyHints: [],
                suggestions: [],
                config: { ...state.config, konu: '', alan: '' }
            }))
        }),
        {
            name: 'learning-os-engine-storage',
            partialize: (state) => ({ config: state.config })
        }
    )
);
