export const i18n = {
 tr: {
 badge: 'PROMPTER',
 title: 'Parametrik Prompt Mühendisi',
 subtitle: 'Herhangi bir konuyu sistematik olarak parçala, analiz et, öğren.',
 topicLabel: 'Öğrenilecek Konu',
 topicPlaceholder: 'Transformer Mimarisi, Otonom Sinir Sistemi...',
 domainLabel: 'Hakim Olduğunuz Alan',
 domainPlaceholder: 'Yazılım Mühendisliği, Elektrik Devreleri...',
 levelLabel: 'Bilgi Seviyesi',
 modeLabel: 'Öğrenme Modu',
 depthLabel: 'Analiz Derinliği',
 formatLabel: 'Çıktı Formatı',
 levels: {
 otomatik: 'Otomatik (AI Belirler)',
 acemi: 'Acemi',
 orta: 'Orta',
 ileri: 'İleri',
 uzman: 'Uzman'
 },
 modes: {
 karma: 'Karma (Adaptif)',
 feynman: 'Feynman',
 sistem: 'Sistem Analizi',
 sokratik: 'Sokratik',
 ilkeler: 'Birinci İlkeler'
 },
 depths: {
 orta: 'Orta',
 temel: 'Temel',
 derin: 'Derin',
 kapsamli: 'Kapsamlı'
 },
 formats: {
 markdown: 'Markdown',
 tablo: 'Tablo Ağırlıklı',
 ders: 'Ders Notu',
 quiz: 'Quiz Destekli'
 },
 monologLabel: 'İç Ses (Reasoning) Modu',
 autoResolveLabel: 'Otomatik Bağımlılık Çözme',
 presetsTitle: 'Hazır Şablonlar',
 paramsTitle: 'Parametreler',
 presets: {
 hizli: 'Hızlı Özet',
 derin: 'Derin Analiz',
 sinav: 'Sınav Hazırlık',
 muhendis: 'Mühendis Yaklaşımı',
 tam: 'Tam Paket',
 arastirmaci: 'Araştırmacı',
 temeller: 'Temeller',
 pratik: 'Pratik Uygulama',
 hata: 'Hata Ayıklama',
 yaratici: 'Yaratıcı Sentez'
 },
 modulesTitle: 'Öğrenme Modülleri',
 selectAll: 'Tümünü Seç',
 clearAll: 'Temizle',
 reqsLabel: 'Gereksinimler',
 btnGenerate: 'Prompt Üret',
 btnCopy: 'Kopyala',
 btnReset: 'Sıfırla',
 toastSuccess: 'Prompt başarıyla oluşturuldu!',
 toastNeedTopic: 'Lütfen öğrenmek istediğiniz konuyu girin.',
 toastNeedModule: 'Lütfen en az bir modül seçin.',
 toastNeedPrompt: 'Önce prompt oluşturmalısınız.',
 toastCopied: 'Panoya kopyalandı!',
 toastCopyFail: 'Kopyalama başarısız oldu.',
 toastUrlLimit: 'Prompt çok uzun! URL sınırına takılmamak için panoya kopyalayıp yönlendiriyoruz...',
 toastOpening: 'Yapay Zeka açılıyor...',
 toastReset: 'Tüm ayarlar sıfırlandı.',
 previewTitle: 'Prompt Önizleme',
 previewChars: 'Karakter',
 previewTokens: 'Token',
 previewModules: 'modül',
 previewWarning: 'Uyarı: Bu prompt URL üzerinden taşınamayacak kadar uzun (>4000 karakter). Doğrudan AI butonlarına tıkladığınızda önce panoya kopyalanacak, ardından AI sayfası boş açılacaktır. Oraya yapıştırmanız (Ctrl+V) gerekecektir.',
 previewEmpty: 'Sol taraftan ayarları yapıp "Prompt Oluştur" butonuna tıklayın...',
 footer: 'Tüm veriler tarayıcınızda (Local Storage) kalır, hiçbir sunucuya gönderilmez.',
 
 // New Intelligence & UI Strings
 systemIntelligence: 'Sistem Zekası:',
 presetAppliedDesc: 'modu uygulandı. Derinlik ve mod konfigürasyonu en iyi pratiklere göre kilitlendi. Öğrenme kuralları motora enjekte edildi.',
 autoResolved: 'Otomatik eklendi',
 aiSuggestion: 'AI Önerisi',
 clickToAdd: 'Eklemek için tıkla',
 suggestAdd: 'kapsamı genişletmek için eklenebilir.',
 statModules: 'Modül',
 statLayers: 'Katman Derinliği',
 statComplexity: 'Karmaşıklık Skoru',
 tour: {
    btnSkip: 'Geç',
    btnNext: 'Sonraki',
    btnBack: 'Geri',
    btnFinish: 'Bitir',
    btnReplay: 'Kullanım Turu',
    steps: [
      {
        title: "PROMPTER'a Hoş Geldiniz!",
        content: "Yapay zekadan en derinlikli ve yapılandırılmış yanıtları almak için tasarlanmış gelişmiş parametrik prompt mühendisine adım attınız. Bu kısa turda arayüzü hızlıca tanıyalım.",
        selector: "body"
      },
      {
        title: "1. Parametre Konfigürasyonu",
        content: "Buradan yapay zekanın bilgi seviyesini, öğrenme modunu (Feynman, Sokratik vb.), analiz derinliğini ve çıktı formatını ayarlayabilirsiniz. İç Ses (Reasoning) modunu açarak AI'ın arka plandaki düşünme adımlarını tetikleyebilirsiniz.",
        selector: ".sidebar"
      },
      {
        title: "2. Şablonlar ve Öğrenme Modülleri",
        content: "Üstteki hazır şablonlarla tek tıkla en iyi ayarları yükleyebilir, altındaki modülleri (Analoji, Kodlama, Quiz vb.) tek tek seçerek promptunuzun hangi öğrenme başlıklarını içereceğini belirleyebilirsiniz.",
        selector: ".main-content"
      },
      {
        title: "3. Konu Girişi ve Üretim",
        content: "Öğrenmek istediğiniz konuyu ve bildiğiniz uzmanlık alanını yazıp 'Prompt Üret' butonuna tıklayın. Oluşan promptu kopyalayarak ChatGPT, Claude veya Gemini gibi AI modellerine doğrudan yapıştırabilirsiniz.",
        selector: ".right-sidebar"
      }
    ]
  }
 },
 en: {
 badge: 'PROMPTER',
 title: 'Parametric Prompt Engineer',
 subtitle: 'Systematically deconstruct, analyze, and learn any topic.',
 topicLabel: 'Topic to Learn',
 topicPlaceholder: 'Transformer Architecture, Autonomic Nervous System...',
 domainLabel: 'Your Domain Expertise',
 domainPlaceholder: 'Software Engineering, Electrical Circuits...',
 levelLabel: 'Knowledge Level',
 modeLabel: 'Learning Mode',
 depthLabel: 'Analysis Depth',
 formatLabel: 'Output Format',
 levels: {
 otomatik: 'Auto (AI decides)',
 acemi: 'Novice',
 orta: 'Intermediate',
 ileri: 'Advanced',
 uzman: 'Expert'
 },
 modes: {
 karma: 'Mixed (Adaptive)',
 feynman: 'Feynman',
 sistem: 'System Analysis',
 sokratik: 'Socratic',
 ilkeler: 'First Principles'
 },
 depths: {
 orta: 'Moderate',
 temel: 'Basic',
 derin: 'Deep',
 kapsamli: 'Comprehensive'
 },
 formats: {
 markdown: 'Markdown',
 tablo: 'Table Heavy',
 ders: 'Lecture Notes',
 quiz: 'With Quizzes'
 },
 monologLabel: 'Internal Monologue (Reasoning)',
 autoResolveLabel: 'Auto-Resolve Dependencies',
 presetsTitle: 'Quick Presets',
 paramsTitle: 'Parameters',
 presets: {
 hizli: 'Quick Summary',
 derin: 'Deep Analysis',
 sinav: 'Exam Prep',
 muhendis: 'Engineering',
 tam: 'Full Package',
 arastirmaci: 'Researcher',
 temeller: 'Foundations',
 pratik: 'Practical App',
 hata: 'Debugging',
 yaratici: 'Creative Synth'
 },
 modulesTitle: 'Learning Modules',
 selectAll: 'Select All',
 clearAll: 'Clear All',
 reqsLabel: 'Requires',
 btnGenerate: 'Generate Prompt',
 btnCopy: 'Copy',
 btnReset: 'Reset',
 toastSuccess: 'Prompt generated successfully!',
 toastNeedTopic: 'Please enter a topic to learn.',
 toastNeedModule: 'Please select at least one module.',
 toastNeedPrompt: 'You need to generate a prompt first.',
 toastCopied: 'Copied to clipboard!',
 toastCopyFail: 'Failed to copy.',
 toastUrlLimit: 'Prompt is too long! To avoid URL limits, we copied it to your clipboard...',
 toastOpening: 'Opening AI...',
 toastReset: 'All settings reset.',
 previewTitle: 'Prompt Preview',
 previewChars: 'Chars',
 previewTokens: 'Tokens',
 previewModules: 'modules',
 previewWarning: 'Warning: This prompt is too long to be passed via URL (>4000 chars). It will be copied to your clipboard and the AI page will open blank. You will need to paste it (Ctrl+V) there.',
 previewEmpty: 'Configure settings on the left and click "Generate Prompt"...',
 footer: 'All data stays in your browser (Local Storage), nothing is sent to any server.',
 
 // New Intelligence & UI Strings
 systemIntelligence: 'System Intelligence:',
 presetAppliedDesc: 'mode applied. Depth and format locked to best practices. Learning rules injected into engine.',
 autoResolved: 'Auto-resolved',
 aiSuggestion: 'AI Suggestion',
 clickToAdd: 'Click to add',
 suggestAdd: 'recommended for better context.',
 statModules: 'Modules',
 statLayers: 'Layers Deep',
 statComplexity: 'Complexity Score',
 tour: {
    btnSkip: 'Skip',
    btnNext: 'Next',
    btnBack: 'Back',
    btnFinish: 'Finish',
    btnReplay: 'Quick Tour',
    steps: [
      {
        title: "Welcome to PROMPTER!",
        content: "You have entered the advanced parametric prompt engineer designed to get the most structured and deep responses from AI. Let's take a quick tour of the interface.",
        selector: "body"
      },
      {
        title: "1. Parameter Configuration",
        content: "Here you can adjust the AI's knowledge level, learning mode (Feynman, Socratic, etc.), analysis depth, and output format. Toggle Internal Monologue (Reasoning) to activate the AI's background thinking steps.",
        selector: ".sidebar"
      },
      {
        title: "2. Presets & Learning Modules",
        content: "Apply quick presets at the top or select individual learning modules (Analogy, Coding, Quiz, etc.) below to define exactly what learning categories your prompt will cover.",
        selector: ".main-content"
      },
      {
        title: "3. Topic Input & Generation",
        content: "Type the topic you want to learn and your expertise, then click 'Generate Prompt'. Copy the generated prompt and paste it directly into AI models like ChatGPT, Claude, or Gemini.",
        selector: ".right-sidebar"
      }
    ]
  }
 }
};

export function getTranslation(lang) {
 return i18n[lang] || i18n.en;
}
