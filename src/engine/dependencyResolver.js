import { getModuleRegistry } from './moduleRegistry';

export class DependencyGraph {
    constructor(modulesJson) {
        this.modules = {};
        this.adjacencyList = {}; 
        
        modulesJson.forEach(mod => {
            this.modules[mod.id] = mod;
            this.adjacencyList[mod.id] = mod.requires || [];
        });
    }

    resolveDependencies(selectedIds) {
        const resolved = new Set(selectedIds);
        let addedNew = true;

        while (addedNew) {
            addedNew = false;
            for (const id of resolved) {
                const deps = this.adjacencyList[id] || [];
                for (const dep of deps) {
                    if (!resolved.has(dep)) {
                        resolved.add(dep);
                        addedNew = true;
                    }
                }
            }
        }
        return Array.from(resolved);
    }

    topologicalSort(resolvedIds) {
        const result = [];
        const visited = new Set();
        const visiting = new Set();

        const visit = (id) => {
            if (visiting.has(id)) throw new Error(`Döngüsel Bağımlılık (Circular Dependency): ${id}`);
            if (!visited.has(id)) {
                visiting.add(id);
                const deps = this.adjacencyList[id] || [];
                
                for (const dep of deps) {
                    if (resolvedIds.includes(dep)) {
                        visit(dep);
                    }
                }
                
                visiting.delete(id);
                visited.add(id);
                result.push(this.modules[id]);
            }
        };

        for (const id of resolvedIds) {
            visit(id);
        }

        return result;
    }
}

// Global cached graphs
let graphTR = null;
let graphEN = null;

export function resolveDependencies(selectedIds, lang = 'tr') {
    const registry = getModuleRegistry(lang);
    if (lang === 'tr') {
        if (!graphTR) graphTR = new DependencyGraph(registry);
        return graphTR.resolveDependencies(selectedIds);
    } else {
        if (!graphEN) graphEN = new DependencyGraph(registry);
        return graphEN.resolveDependencies(selectedIds);
    }
}

export function sortDependencies(resolvedIds, lang = 'tr') {
    const registry = getModuleRegistry(lang);
    if (lang === 'tr') {
        if (!graphTR) graphTR = new DependencyGraph(registry);
        return graphTR.topologicalSort(resolvedIds);
    } else {
        if (!graphEN) graphEN = new DependencyGraph(registry);
        return graphEN.topologicalSort(resolvedIds);
    }
}
