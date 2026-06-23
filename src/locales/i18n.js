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
 monologDesc: 'Yapay zekanın arka plandaki düşünme adımlarını (reasoning) tetikleyerek daha mantıklı ve tutarlı yanıtlar üretmesini sağlar.',
 autoResolveDesc: 'Seçtiğiniz bir modülün çalışması için gereken diğer modülleri otomatik olarak belirler ve listeye ekler.',
  levelDescs: {
    otomatik: 'Otomatik: AI seviyeyi konunun karmaşıklığına göre kendisi ayarlar.',
    acemi: 'Acemi: Teknik terim kullanmadan, en basit benzetmelerle anlatır.',
    orta: 'Orta: Temel kavramları ve yaygın pratik kullanımları içerir.',
    ileri: 'İleri: Derinlemesine teknik ayrıntılara, matematiksel/yapısal modellere yer verir.',
    uzman: 'Uzman: Sektörel standartlarda, ileri düzey akademik ve teknik terminoloji kullanır.'
  },
  modeDescs: {
    karma: 'Karma: Konunun ihtiyacına göre pedagojik yöntemleri harmanlar.',
    feynman: 'Feynman: Karmaşık konuları 5 yaşındaki bir çocuğa anlatır gibi basitleştirir.',
    sistem: 'Sistem Analizi: Girdiler, çıktılar, geri beslemeler ve alt sistemleri inceler.',
    sokratik: 'Sokratik: Sorular ve sorgulamalar üzerinden kritik düşünmeyi teşvik eder.',
    ilkeler: 'Birinci İlkeler: Varsayımları yıkarak konuyu en temel kanıtlanmış gerçeklerine indirger.'
  },
  depthDescs: {
    temel: 'Temel: Temel kavramları ve genel resmi hızlıca özetler.',
    orta: 'Orta: Standart ana hatları ve mekanizmaları açıklar.',
    derin: 'Derin: Alt bileşenleri, örnekleri ve detaylı işleyişi ele alır.',
    kapsamli: 'Kapsamlı: Uç durumları, sınırları, tarihçeyi ve tüm detayları kapsar.'
  },
  formatDescs: {
    markdown: 'Markdown: Başlıklar, listeler ve kod bloklarıyla temiz bir hiyerarşi sunar.',
    tablo: 'Tablo Ağırlıklı: Karşılaştırmalı matrisler ve verileri tablolar halinde düzenler.',
    ders: 'Ders Notu: Müfredat formatında adım adım akademik bir akış sunar.',
    quiz: 'Quiz Destekli: Konu anlatımının sonuna pekiştirici soru ve cevaplar ekler.'
  },
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
 categories: {
    foundation: 'Temeller & Giriş',
    mechanism: 'İşleyiş & Simülasyon',
    context: 'Bağlantılar',
    boundaries: 'Sınırlar & Riskler',
    application: 'Pratik & Gelişim'
  },
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
 monologDesc: "Triggers the AI's background thinking/reasoning steps, enabling it to produce more logical and consistent responses.",
 autoResolveDesc: "Automatically detects and activates other modules required by your selected modules.",
  levelDescs: {
    otomatik: 'Auto: AI determines the explanation level based on topic complexity.',
    acemi: 'Novice: Explains simply using basic analogies, avoiding technical jargon.',
    orta: 'Intermediate: Covers main concepts and common practical applications.',
    ileri: 'Advanced: Introduces technical details, mathematical/structural models.',
    uzman: 'Expert: Utilizes high-level academic and professional industry terminology.'
  },
  modeDescs: {
    karma: 'Mixed: Blends pedagogical methods adaptively based on topic needs.',
    feynman: 'Feynman: Explains complex ideas simply as if teaching a 5-year-old child.',
    sistem: 'System Analysis: Examines inputs, outputs, feedbacks, and subsystems.',
    sokratik: 'Socratic: Prompts critical thinking through guiding questions.',
    ilkeler: 'First Principles: Deconstructs topic down to its most fundamental truths.'
  },
  depthDescs: {
    temel: 'Basic: Summarizes core concepts and the high-level big picture.',
    orta: 'Moderate: Details standard outlines and mechanisms.',
    derin: 'Deep: Investigates sub-components, examples, and detailed inner workings.',
    kapsamli: 'Comprehensive: Explores edge cases, limits, history, and exhaustive details.'
  },
  formatDescs: {
    markdown: 'Markdown: Organized hierarchy using headers, lists, and code blocks.',
    tablo: 'Table Heavy: Arranges comparisons and datasets in structured tables.',
    ders: 'Lecture Notes: Formats in academic curriculum style step-by-step.',
    quiz: 'With Quizzes: Adds interactive exercises and tests to consolidate learning.'
  },
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
 categories: {
    foundation: 'Foundations & Intro',
    mechanism: 'Mechanics & Sim',
    context: 'Connections',
    boundaries: 'Limits & Risks',
    application: 'Practice & Growth'
  },
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
