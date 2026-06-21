const AI_STRATEGIES = {
    chatgpt: {
        getBaseUrl: () => 'https://chatgpt.com/',
        getPromptUrl: (prompt) => 'https://chatgpt.com/?q=' + encodeURIComponent(prompt)
    },
    claude: {
        getBaseUrl: () => 'https://claude.ai/new',
        getPromptUrl: (prompt) => 'https://claude.ai/new?q=' + encodeURIComponent(prompt)
    },
    perplexity: {
        getBaseUrl: () => 'https://www.perplexity.ai/search',
        getPromptUrl: (prompt) => 'https://www.perplexity.ai/search?q=' + encodeURIComponent(prompt)
    },
    gemini: {
        getBaseUrl: () => 'https://gemini.google.com/app',
        getPromptUrl: (prompt) => 'https://gemini.google.com/app?prompt=' + encodeURIComponent(prompt)
    }
};

export function copyToClipboard(text, onSuccess, onError) {
    if (!navigator.clipboard) {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            if(onSuccess) onSuccess();
        } catch (err) {
            if(onError) onError(err);
        }
        document.body.removeChild(ta);
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        if(onSuccess) onSuccess();
    }).catch(err => {
        if(onError) onError(err);
    });
}

export function openInAI(aiName, prompt, onLengthWarning, onSuccessCopy) {
    if (!prompt) return;
    const strategy = AI_STRATEGIES[aiName];
    if (!strategy) return;

    const isTooLongForUrl = prompt.length > 4000;
    
    if (isTooLongForUrl) {
        if (onLengthWarning) onLengthWarning();
        // Synchronous window.open to bypass popup blocker
        window.open(strategy.getBaseUrl(), '_blank');
        copyToClipboard(prompt, () => {
            if(onSuccessCopy) onSuccessCopy();
        });
        return;
    }

    window.open(strategy.getPromptUrl(prompt), '_blank');
}
