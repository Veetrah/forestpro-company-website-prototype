const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wideScene = window.matchMedia('(min-width: 64.0625rem) and (min-height: 44rem)');
const hero = document.querySelector('[data-scroll-hero]');
const managementGap = document.querySelector('[data-management-gap]');
const gapIntro = managementGap?.querySelector('.gap-intro');
const gapIntroLabel = gapIntro?.querySelector('.section-label');
const gapIntroTitle = gapIntro?.querySelector('h2');
const gapIntroContext = gapIntro?.querySelector('.gap-intro-context');
const gapBeats = [...document.querySelectorAll('[data-gap-beat]')];
const whoWeAre = document.querySelector('[data-who-we-are]');
const fieldTeamStory = document.querySelector('[data-field-team-story]');
const operatingProfile = document.querySelector('[data-operating-profile]');
const profileRows = [...document.querySelectorAll('[data-profile-row]')];
const ourDirection = document.querySelector('[data-our-direction]');
const directionVisionFrame = document.querySelector('[data-direction-vision-frame]');
const directionMissionFrame = document.querySelector('[data-direction-mission-frame]');
const directionLabel = document.querySelector('[data-direction-label]');
const directionVisionLabel = document.querySelector('[data-direction-vision-label]');
const directionVisionTitle = document.querySelector('[data-direction-vision-title]');
const directionMissionLabel = document.querySelector('[data-direction-mission-label]');
const directionMissionItems = [...document.querySelectorAll('[data-direction-mission-item]')];
const directionLine = document.querySelector('[data-direction-line]');
const corporateValues = document.querySelector('[data-corporate-values]');
const valuesFrame = document.querySelector('[data-values-frame]');
const valuesLabel = document.querySelector('[data-values-label]');
const valuesTitle = document.querySelector('[data-values-title]');
const valuesList = document.querySelector('[data-values-list]');
const valueItems = [...document.querySelectorAll('[data-value-item]')];
const whatWeDo = document.querySelector('[data-what-we-do]');
const whatIntro = document.querySelector('[data-what-intro]');
const whatStages = [...document.querySelectorAll('[data-what-stage]')];
const whatNodes = [...document.querySelectorAll('[data-what-node]')];
const focusAreas = document.querySelector('[data-focus-areas]');
const focusIntro = document.querySelector('[data-focus-intro]');
const focusScroll = document.querySelector('[data-focus-scroll]');
const focusPanelField = document.querySelector('[data-focus-panels]');
const focusPanels = [...document.querySelectorAll('[data-focus-panel]')];
const focusStageHeading = document.querySelector('.focus-stage-heading');
const focusClosing = document.querySelector('[data-focus-closing]');
const sustainableOutcomes = document.querySelector('[data-sustainable-outcomes]');
const outcomesIntro = document.querySelector('[data-outcomes-intro]');
const outcomeChapters = [...document.querySelectorAll('[data-outcome-chapter]')];
const outcomesClosing = document.querySelector('[data-outcomes-closing]');
const outcomesClosingPrinciples = [...document.querySelectorAll('[data-outcomes-closing-principle]')];
const contactCta = document.querySelector('[data-contact-cta]');
const contactTitle = document.querySelector('[data-contact-title]');
const contactDetails = document.querySelector('[data-contact-details]');
const contactAction = document.querySelector('[data-contact-action]');
const siteFooter = document.querySelector('[data-site-footer]');
const siteFooterBrand = document.querySelector('[data-footer-brand]');
const siteFooterGroups = [...document.querySelectorAll('[data-footer-group]')];
const siteFooterMeta = document.querySelector('[data-footer-meta]');
const siteNav = document.querySelector('[data-site-nav]');
const siteNavToggle = document.querySelector('[data-nav-toggle]');
const siteNavToggleLabel = document.querySelector('[data-nav-toggle-label]');
const siteNavPanel = document.querySelector('[data-nav-panel]');
const siteNavLinks = [...document.querySelectorAll('[data-nav-link]')];
const languagePicker = document.querySelector('[data-language-picker]');
const languageToggle = document.querySelector('[data-language-toggle]');
const languageMenu = document.querySelector('[data-language-menu]');
const languageCurrentFlag = document.querySelector('[data-language-current-flag]');
const languageOptions = [...document.querySelectorAll('[data-language-option]')];
const languageStatus = document.querySelector('[data-language-status]');

const indonesianTranslations = {
  skipLink: 'Lompat ke konten utama',
  'common.backToTopLabel': 'ForestPro, kembali ke atas',
  'nav.primaryLabel': 'Navigasi utama',
  'nav.mobileLabel': 'Navigasi seluler',
  'nav.who': 'Tentang Kami',
  'nav.what': 'Layanan Kami',
  'nav.focus': 'Fokus Kami',
  'nav.sustainability': 'Keberlanjutan',
  'nav.contact': 'Kontak',
  'language.label': 'Bahasa',
  'language.optionsLabel': 'Pilihan bahasa',
  'hero.title': 'Towards <em>Greener</em> Future',
  'hero.imageAlt': 'Dua tenaga profesional lapangan dengan perlengkapan keselamatan meninjau kawasan hutan',
  'hero.copy': 'ForestPro mengembangkan potensi kawasan hutan melalui inovasi yang relevan dan kepatuhan regulasi, dengan keberlanjutan jangka panjang sebagai dasar setiap keputusan.',
  'hero.principlesLabel': 'Prinsip ForestPro',
  'hero.principleInnovation': 'Inovasi yang relevan',
  'hero.principleCompliance': 'Kepatuhan dalam praktik',
  'hero.principleStewardship': 'Pengelolaan jangka panjang',
  'gap.label': 'Dari Potensi Menjadi Praktik',
  'gap.title': 'Potensi hutan yang kuat membutuhkan pengelolaan yang sama kuatnya.',
  'gap.copy': 'Operasional kehutanan yang bertanggung jawab bergantung pada lebih dari sekadar sumber daya di dalam suatu kawasan. Perizinan, perencanaan, tim lapangan, partisipasi masyarakat, dan pemantauan berkelanjutan harus bekerja sebagai satu kesatuan.',
  'gap.comparisonLabel': 'Potensi hutan dan kebutuhan pengelolaan yang bertanggung jawab',
  'gap.potentialTitle': 'Yang dapat dikembangkan dari kawasan hutan',
  'gap.potentialArea': 'Pemanfaatan Kawasan Hutan',
  'gap.potentialCommodities': 'Komoditas Berbasis Hutan',
  'gap.potentialServices': 'Jasa Lingkungan',
  'gap.managementTitle': 'Yang dibutuhkan pengelolaan bertanggung jawab',
  'gap.managementPlanning': 'Perencanaan dan kepatuhan',
  'gap.managementField': 'Tim lapangan dan infrastruktur',
  'gap.managementCommunity': 'Partisipasi dan kapasitas masyarakat',
  'gap.managementMonitoring': 'Pemantauan dan sertifikasi',
  'gap.chapter': 'Potensi menjadi praktik',
  'who.label': 'Tentang Kami',
  'who.title': 'ForestPro mewujudkan potensi hutan menjadi praktik yang bertanggung jawab.',
  'who.copyPrimary': 'ForestPro adalah mitra strategis kehutanan bagi pemegang izin pengelolaan kawasan hutan dan pemilik lahan dalam sektor Forest and Other Land Uses. Kami membantu klien menjalankan usaha secara legal dan efisien, sekaligus menyelaraskan keberlanjutan usaha dengan kebijakan nasional dan standar lingkungan global.',
  'who.copySecondary': 'Tim profesional kami menyesuaikan setiap pendampingan dengan kebutuhan klien, dari tahap perencanaan hingga operasional lapangan.',
  'fieldTeam.sectionLabel': 'Tim lapangan ForestPro',
  'fieldTeam.imageAlt': 'Lima anggota tim ForestPro berdiri bersama di persemaian hutan',
  'profile.label': 'Profil Operasional',
  'profile.roleLabel': 'Peran Kami',
  'profile.roleValue': 'Mitra strategis kehutanan',
  'profile.scopeLabel': 'Lingkup Operasional',
  'profile.scopeValue': 'Perencanaan hingga operasional lapangan',
  'profile.principlesLabel': 'Prinsip Kerja',
  'profile.principlesValue': 'Kepatuhan, efisiensi, dan keberlanjutan',
  'direction.label': 'Arah Kami',
  'direction.visionLabel': 'Visi',
  'direction.vision': 'Menjadi pionir penyedia layanan pengelolaan areal konsesi kehutanan di Indonesia dan berperan aktif dalam mendorong pengelolaan hutan yang berkelanjutan dan bertanggung jawab secara global.',
  'direction.missionLabel': 'Misi Kami',
  'direction.clientLabel': 'Klien',
  'direction.clientCopy': 'Menyediakan solusi holistik yang strategis untuk pengelolaan hutan.',
  'direction.productivityLabel': 'Produktivitas',
  'direction.productivityCopy': 'Mendorong pengelolaan hutan yang inovatif dan bertanggung jawab, memperkuat nilai ekonomi jangka panjang, serta membantu membentuk industri yang lebih inklusif.',
  'direction.peopleLabel': 'Sumber Daya Manusia & Masyarakat',
  'direction.peopleCopy': 'Meningkatkan kesejahteraan melalui partisipasi aktif masyarakat dalam pengelolaan hutan.',
  'values.label': 'Nilai Perusahaan',
  'values.title': 'Prinsip dalam setiap pekerjaan kami.',
  'values.listLabel': 'Nilai perusahaan ForestPro',
  'values.responsibilityTitle': 'Tanggung Jawab',
  'values.responsibilityCopy': 'Alam dan generasi mendatang',
  'values.teamworkTitle': 'Kerja Sama',
  'values.teamworkCopy': 'Nilai yang lebih besar melalui kolaborasi',
  'values.integrityTitle': 'Integritas',
  'values.integrityCopy': 'Kejujuran dan transparansi',
  'values.actionTitle': 'Tindakan',
  'values.actionCopy': 'Keberlanjutan di lapangan',
  'values.excellenceTitle': 'Keunggulan',
  'values.excellenceCopy': 'Perbaikan yang berkelanjutan',
  'values.nurtureTitle': 'Menumbuhkembangkan',
  'values.nurtureCopy': 'Mengembangkan individu dan masyarakat',
  'values.sustainabilityTitle': 'Berkelanjutan',
  'values.sustainabilityCopy': 'Keseimbangan jangka panjang',
  'what.label': 'Layanan Kami',
  'what.title': 'Tiga kapabilitas. <span>Satu pendekatan yang terintegrasi.</span>',
  'what.copy': 'Dari keputusan strategis awal hingga pelaksanaan lapangan dan sistem kerja yang mendukungnya, ForestPro menyatukan setiap bagian pengelolaan hutan yang bertanggung jawab dalam satu pendekatan.',
  'what.stageOneKicker': '01 / Arah Strategis',
  'what.stageOneTitle': 'Konsultasi Strategis',
  'what.stageOneCopy': 'Kami membantu menjernihkan keputusan yang kompleks dengan menyelaraskan regulasi, tujuan usaha, dan potensi jangka panjang setiap kawasan hutan.',
  'what.stageOneOutcomesLabel': 'Hasil konsultasi strategis',
  'what.stageOneOutcomeOne': 'Kejelasan sebelum bertindak',
  'what.stageOneOutcomeTwo': 'Kepatuhan sejak perencanaan',
  'what.stageOneOutcomeThree': 'Nilai yang terarah',
  'what.stageTwoKicker': '02 / Implementasi',
  'what.stageTwoTitle': 'Implementasi Terintegrasi Menyeluruh',
  'what.stageTwoCopy': 'Kami menerjemahkan rencana menjadi kerja yang terkoordinasi, menyatukan tenaga ahli, sumber daya, dan pelaksanaan lapangan untuk menghasilkan kemajuan yang terukur.',
  'what.stageTwoOutcomesLabel': 'Hasil implementasi terintegrasi',
  'what.stageTwoOutcomeOne': 'Siap beroperasi',
  'what.stageTwoOutcomeTwo': 'Pelaksanaan yang terkoordinasi',
  'what.stageTwoOutcomeThree': 'Kemajuan di lapangan',
  'what.stageThreeKicker': '03 / Keberlanjutan Operasional',
  'what.stageThreeTitle': 'Pengembangan Sistem Kerja',
  'what.stageThreeCopy': 'Kami mengembangkan sistem kerja yang menjaga konsistensi dan ketertelusuran operasional kehutanan, sekaligus membantu kegiatan beradaptasi terhadap perubahan standar dan peluang.',
  'what.stageThreeOutcomesLabel': 'Hasil pengembangan sistem kerja',
  'what.stageThreeOutcomeOne': 'Konsistensi dalam skala luas',
  'what.stageThreeOutcomeTwo': 'Keputusan yang dapat ditelusuri',
  'what.stageThreeOutcomeThree': 'Siap menghadapi perubahan',
  'focus.label': 'Area Fokus Kami',
  'focus.title': 'Nilai lebih dari setiap kawasan hutan.',
  'focus.copy': 'ForestPro menyatukan pemanfaatan lahan produktif, komoditas berbasis hutan, dan jasa lingkungan dalam satu pendekatan yang terencana, legal, dan berkelanjutan.',
  'focus.stageHeading': 'Pemanfaatan hutan yang bertanggung jawab',
  'focus.stageSubheading': 'Tiga area fokus yang saling terhubung',
  'focus.areaImageAlt': 'Tenaga profesional kehutanan memegang bibit saat kegiatan lapangan',
  'focus.areaTitle': 'Pemanfaatan Kawasan Hutan',
  'focus.areaCopy': 'ForestPro mendukung bentuk pemanfaatan lahan seperti agroforestri, silvofishery, dan silvopastura, dengan tetap menjaga fungsi ekologis kawasan.',
  'focus.commoditiesImageAlt': 'Tenaga profesional kehutanan mengumpulkan lateks dari pohon karet',
  'focus.commoditiesTitle': 'Komoditas Berbasis Hutan',
  'focus.commoditiesCopy': 'ForestPro menghubungkan pengembangan komoditas kayu dan bukan kayu yang bertanggung jawab dengan perencanaan, pemanenan, dan sertifikasi yang sesuai ketentuan.',
  'focus.servicesImageAlt': 'Tim lapangan kehutanan meninjau informasi bersama di kawasan hutan',
  'focus.servicesTitle': 'Jasa Lingkungan',
  'focus.servicesCopy': 'ForestPro mendukung pengembangan jasa lingkungan terkait ekowisata, keanekaragaman hayati, dan proyek karbon untuk pasar nasional maupun internasional.',
  'focus.closing': 'Peluang-peluang ini dapat dikembangkan bersama dalam satu kawasan hutan.',
  'outcomes.label': 'Hasil Berkelanjutan',
  'outcomes.title': 'Hutan tidak dapat dikelola secara terpisah-pisah.',
  'outcomes.copy': 'Nilai jangka panjang bergantung pada hubungan antara integritas ekologi, kepentingan masyarakat, dan tata kelola yang akuntabel.',
  'outcomes.environmentLabel': 'Tanggung Jawab Lingkungan',
  'outcomes.environmentTitle': 'Hutan harus tetap berfungsi agar nilainya tetap terjaga.',
  'outcomes.environmentCopy': 'ForestPro mendukung keputusan pengelolaan yang menjaga keanekaragaman hayati, fungsi ekologis, dan produktivitas jangka panjang lanskap hutan.',
  'outcomes.environmentImageAlt': 'Perahu ForestPro membawa sejumlah orang melintasi perairan pesisir yang tenang',
  'outcomes.communityLabel': 'Masyarakat & Nilai Bersama',
  'outcomes.communityTitle': 'Masa depan hutan yang kuat melibatkan masyarakat yang hidup paling dekat dengannya.',
  'outcomes.communityCopy': 'ForestPro memasukkan partisipasi masyarakat, pengetahuan lokal, dan pertimbangan mata pencaharian ke dalam perencanaan hutan yang bertanggung jawab. Pendekatan ini membantu menyelaraskan keberlanjutan usaha jangka panjang dengan kepentingan masyarakat sekitar.',
  'outcomes.communityImageAlt': 'Perwakilan ForestPro dan masyarakat setempat berdiri bersama di ruang terbuka',
  'outcomes.governanceLabel': 'Tata Kelola Bertanggung Jawab',
  'outcomes.governanceTitle': 'Keberlanjutan bertahan ketika setiap keputusan dibuat secara bertanggung jawab.',
  'outcomes.governanceCopy': 'Perencanaan yang jelas, keselarasan regulasi, dokumentasi yang transparan, dan standar yang terukur membantu menerjemahkan komitmen keberlanjutan menjadi praktik lapangan yang bertanggung jawab.',
  'outcomes.governanceImageAlt': 'Tenaga profesional lapangan mendokumentasikan kondisi hutan pada papan catatan',
  'outcomes.closing': 'Keberlanjutan adalah cara kehutanan <em>bergerak maju.</em>',
  'outcomes.dimensionsLabel': 'Dimensi keberlanjutan',
  'chapter.contact': 'Terhubung dengan Kami',
  'contact.title': 'Bawa potensi hutan Anda menuju <em>praktik yang bertanggung jawab.</em>',
  'contact.copy': 'Diskusikan bersama ForestPro mengenai keselarasan regulasi, perencanaan operasional, dan implementasi berkelanjutan untuk kawasan hutan atau lahan Anda.',
  'contact.action': 'Diskusikan Proyek Kehutanan Anda',
  'contact.actionHref': 'mailto:contact@forestpro.id?subject=Diskusi%20Proyek%20Kehutanan',
  'contact.channelsLabel': 'Saluran kontak ForestPro',
  'contact.instagramLabel': 'ForestPro di Instagram, dibuka di tab baru',
  'contact.linkedinLabel': 'ForestPro Indonesia di LinkedIn, dibuka di tab baru',
  'footer.navigationLabel': 'Navigasi footer',
  'footer.index': 'Navigasi',
  'footer.home': 'Beranda',
  'footer.connect': 'Terhubung dengan kami',
  'footer.emailLabel': 'Kirim email ke ForestPro',
  'footer.copyright': '© 2024 ForestPro',
  'footer.affiliation': 'Bagian dari Arara Semesta Group',
  'footer.affiliationLabel': 'Kunjungi Arara Semesta Group, dibuka di tab baru',
  'footer.country': 'Indonesia',
  'footer.backToTop': 'Kembali ke atas',
};

const languageMetadata = {
  en: {
    title: 'ForestPro | Towards Greener Future',
    description: 'ForestPro is a strategic forestry partner connecting forest potential with responsible management, regulatory compliance, and long-term sustainability.',
    socialDescription: 'Responsible forest management shaped by relevant innovation, regulatory compliance, and long-term sustainability.',
  },
  id: {
    title: 'ForestPro | Towards Greener Future',
    description: 'ForestPro adalah mitra strategis kehutanan yang menghubungkan potensi hutan dengan pengelolaan bertanggung jawab, kepatuhan regulasi, dan keberlanjutan jangka panjang.',
    socialDescription: 'Pengelolaan hutan yang bertanggung jawab melalui inovasi yang relevan, kepatuhan regulasi, dan keberlanjutan jangka panjang.',
  },
};

const languageInterface = {
  en: {
    menu: 'Menu',
    close: 'Close',
    pickerLabel: 'Change language. Current: English',
    status: 'English selected',
  },
  id: {
    menu: 'Menu',
    close: 'Tutup',
    pickerLabel: 'Ganti bahasa. Aktif: Bahasa Indonesia',
    status: 'Bahasa Indonesia aktif',
  },
};

const textTranslations = [...document.querySelectorAll('[data-i18n]')].map((element) => ({
  element,
  key: element.dataset.i18n,
  english: element.textContent.trim(),
}));
const htmlTranslations = [...document.querySelectorAll('[data-i18n-html]')].map((element) => ({
  element,
  key: element.dataset.i18nHtml,
  english: element.innerHTML.trim(),
}));
const ariaTranslations = [...document.querySelectorAll('[data-i18n-aria]')].map((element) => ({
  element,
  key: element.dataset.i18nAria,
  english: element.getAttribute('aria-label'),
}));
const altTranslations = [...document.querySelectorAll('[data-i18n-alt]')].map((element) => ({
  element,
  key: element.dataset.i18nAlt,
  english: element.getAttribute('alt'),
}));
const hrefTranslations = [...document.querySelectorAll('[data-i18n-href]')].map((element) => ({
  element,
  key: element.dataset.i18nHref,
  english: element.getAttribute('href'),
}));

function readSavedLanguage() {
  try {
    return window.localStorage.getItem('forestpro-language') === 'id' ? 'id' : 'en';
  } catch {
    return 'en';
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem('forestpro-language', language);
  } catch {
    return;
  }
}

let currentLanguage = readSavedLanguage();

function translatedValue(item, language) {
  if (language === 'id') return indonesianTranslations[item.key] ?? item.english;
  return item.english;
}

function updateMetadata(language) {
  const metadata = languageMetadata[language];
  document.title = metadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.socialDescription);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.socialDescription);
}

function applyLanguage(language, announce = false) {
  currentLanguage = language === 'id' ? 'id' : 'en';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dataset.language = currentLanguage;

  textTranslations.forEach((item) => {
    item.element.textContent = translatedValue(item, currentLanguage);
  });
  htmlTranslations.forEach((item) => {
    item.element.innerHTML = translatedValue(item, currentLanguage);
  });
  ariaTranslations.forEach((item) => {
    item.element.setAttribute('aria-label', translatedValue(item, currentLanguage));
  });
  altTranslations.forEach((item) => {
    item.element.setAttribute('alt', translatedValue(item, currentLanguage));
  });
  hrefTranslations.forEach((item) => {
    item.element.setAttribute('href', translatedValue(item, currentLanguage));
  });

  updateMetadata(currentLanguage);

  if (languageToggle && languageCurrentFlag) {
    const isEnglish = currentLanguage === 'en';
    languageCurrentFlag.setAttribute('icon', isEnglish ? 'flag:gb-4x3' : 'flag:id-4x3');
    languageToggle.setAttribute('aria-label', languageInterface[currentLanguage].pickerLabel);
  }

  languageOptions.forEach((option) => {
    option.setAttribute('aria-pressed', String(option.dataset.languageOption === currentLanguage));
  });

  if (languageMenu) {
    languageMenu.setAttribute('aria-label', currentLanguage === 'id' ? 'Pilihan bahasa' : 'Language options');
  }

  if (siteNavToggle && siteNavToggleLabel) {
    const menuIsOpen = siteNavToggle.getAttribute('aria-expanded') === 'true';
    siteNavToggleLabel.textContent = menuIsOpen
      ? languageInterface[currentLanguage].close
      : languageInterface[currentLanguage].menu;
  }

  if (announce && languageStatus) {
    languageStatus.textContent = languageInterface[currentLanguage].status;
  }

  requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
}

function setLanguageMenuOpen(isOpen, returnFocus = false) {
  if (!languagePicker || !languageToggle || !languageMenu) return;

  languagePicker.classList.toggle('is-open', isOpen);
  siteNav?.classList.toggle('is-language-open', isOpen);
  languageToggle.setAttribute('aria-expanded', String(isOpen));
  languageMenu.setAttribute('aria-hidden', String(!isOpen));
  languageMenu.inert = !isOpen;

  if (isOpen) {
    const activeOption = languageOptions.find((option) => option.dataset.languageOption === currentLanguage);
    activeOption?.focus();
  } else if (returnFocus) {
    languageToggle.focus();
  }
}

if (languagePicker && languageToggle && languageMenu && languageOptions.length >= 2) {
  languageToggle.addEventListener('click', () => {
    const willOpen = languageToggle.getAttribute('aria-expanded') !== 'true';
    if (willOpen && siteNavToggle?.getAttribute('aria-expanded') === 'true') siteNavToggle.click();
    setLanguageMenuOpen(willOpen);
  });

  languageOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const nextLanguage = option.dataset.languageOption;
      if (nextLanguage !== currentLanguage) {
        applyLanguage(nextLanguage, true);
        saveLanguage(nextLanguage);
      }
      if (languagePicker.contains(option)) setLanguageMenuOpen(false, true);
    });
  });

  languagePicker.addEventListener('focusout', (event) => {
    if (!languagePicker.contains(event.relatedTarget)) setLanguageMenuOpen(false);
  });

  document.addEventListener('pointerdown', (event) => {
    if (!languagePicker.contains(event.target)) setLanguageMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && languageToggle.getAttribute('aria-expanded') === 'true') {
      setLanguageMenuOpen(false, true);
    }
  });
}

applyLanguage(currentLanguage);

const clamp = (value, minimum = 0, maximum = 1) => Math.min(maximum, Math.max(minimum, value));
const range = (value, start, end) => clamp((value - start) / (end - start));

function setScrollReveal(element, property, progress, distance = 2) {
  if (!element) return;
  element.style.setProperty(`--${property}-opacity`, String(progress));
  element.style.setProperty(`--${property}-y`, `${(1 - progress) * distance}rem`);
  element.style.setProperty(`--${property}-clip`, `${(1 - progress) * 100}%`);
}

if (siteNav && siteNavToggle && siteNavToggleLabel && siteNavPanel && siteNavLinks.length) {
  const desktopNavigation = window.matchMedia('(min-width: 64.0625rem)');
  const navSections = [...new Map(siteNavLinks.map((link) => {
    const target = document.querySelector(link.hash);
    return target ? [link.hash.slice(1), target] : null;
  }).filter(Boolean)).values()];
  let navFrameRequested = false;

  function setMenuOpen(isOpen, returnFocus = false) {
    if (isOpen) setLanguageMenuOpen(false);
    siteNav.classList.toggle('is-menu-open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    siteNavToggle.setAttribute('aria-expanded', String(isOpen));
    siteNavToggleLabel.textContent = isOpen
      ? languageInterface[currentLanguage].close
      : languageInterface[currentLanguage].menu;
    siteNavPanel.setAttribute('aria-hidden', String(!isOpen));
    siteNavPanel.inert = !isOpen;

    if (!isOpen && returnFocus) {
      siteNavToggle.focus();
    }
  }

  function renderNavigation() {
    navFrameRequested = false;
    const scrollTop = Math.max(window.scrollY, 0);
    const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = clamp(scrollTop / scrollRange);
    const referenceLine = siteNav.getBoundingClientRect().height + (window.innerHeight * 0.26);
    let activeId = '';

    siteNav.classList.toggle('is-scrolled', scrollTop > 24);
    siteNav.style.setProperty('--nav-progress', String(progress));

    navSections.forEach((section) => {
      if (section.getBoundingClientRect().top <= referenceLine) activeId = section.id;
    });

    siteNavLinks.forEach((link) => {
      if (link.hash === `#${activeId}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  function requestNavRender() {
    if (navFrameRequested) return;
    navFrameRequested = true;
    requestAnimationFrame(renderNavigation);
  }

  siteNavToggle.addEventListener('click', () => {
    setMenuOpen(siteNavToggle.getAttribute('aria-expanded') !== 'true');
  });

  siteNavLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNavToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false, true);
    }

    if (event.key === 'Tab' && siteNavToggle.getAttribute('aria-expanded') === 'true') {
      const menuFocusOrder = [siteNavToggle, ...siteNavPanel.querySelectorAll('a, button')];
      const firstItem = menuFocusOrder[0];
      const lastItem = menuFocusOrder[menuFocusOrder.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }
  });

  desktopNavigation.addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
    setLanguageMenuOpen(false);
    requestNavRender();
  });

  renderNavigation();
  window.addEventListener('scroll', requestNavRender, { passive: true });
  window.addEventListener('resize', requestNavRender);
}

if (hero && managementGap && whoWeAre && fieldTeamStory && operatingProfile && profileRows.length
  && whatWeDo && whatIntro && whatStages.length === 3 && whatNodes.length === 3
  && gapIntro && gapIntroLabel && gapIntroTitle && gapIntroContext && gapBeats.length === 2
  && focusAreas && focusIntro && focusScroll && focusPanelField && focusPanels.length === 3
  && focusStageHeading && focusClosing
  && sustainableOutcomes && outcomesIntro && outcomeChapters.length === 3 && outcomesClosing
  && outcomesClosingPrinciples.length === 3
  && contactCta && contactTitle && contactDetails && contactAction && siteFooter
  && !prefersReducedMotion) {
  document.body.classList.add('has-scroll-motion');

  let frameRequested = false;

  function renderScrollScene() {
    frameRequested = false;

    const viewportHeight = Math.max(window.innerHeight, 1);
    const heroBounds = hero.getBoundingClientRect();
    const isWideScene = wideScene.matches;

    document.body.classList.toggle('is-wide-scene', isWideScene);

    if (isWideScene) {
      const heroProgress = clamp(-heroBounds.top / (viewportHeight * 0.78));

      document.body.style.setProperty('--hero-headline-x', `${heroProgress * -14}vw`);
      document.body.style.setProperty('--hero-headline-y', `${heroProgress * -2.5}rem`);
      document.body.style.setProperty('--hero-headline-opacity', String(1 - (heroProgress * 0.82)));
      document.body.style.setProperty('--hero-visual-x', `${-58 - (heroProgress * 8)}%`);
      document.body.style.setProperty('--hero-visual-y', `${heroProgress * 4}rem`);
      document.body.style.setProperty('--hero-visual-scale', String(1 - (heroProgress * 0.12)));
      document.body.style.setProperty('--hero-visual-opacity', String(1 - (heroProgress * 0.88)));
      document.body.style.setProperty('--hero-copy-x', `${heroProgress * 13}vw`);
      document.body.style.setProperty('--hero-copy-y', `${heroProgress * -1.5}rem`);
      document.body.style.setProperty('--hero-copy-opacity', String(1 - (heroProgress * 0.82)));
    } else {
      const heroExit = clamp((viewportHeight * 0.82 - heroBounds.bottom) / (viewportHeight * 0.5));

      document.body.style.setProperty('--hero-headline-x', `${heroExit * -6}vw`);
      document.body.style.setProperty('--hero-headline-y', `${heroExit * -2}rem`);
      document.body.style.setProperty('--hero-headline-opacity', String(1 - (heroExit * 0.48)));
      document.body.style.setProperty('--hero-visual-x', `${-50 - (heroExit * 4)}%`);
      document.body.style.setProperty('--hero-visual-y', `${heroExit * 2.25}rem`);
      document.body.style.setProperty('--hero-visual-scale', String(1 - (heroExit * 0.06)));
      document.body.style.setProperty('--hero-visual-opacity', String(1 - (heroExit * 0.56)));
      document.body.style.setProperty('--hero-copy-x', `${heroExit * 6}vw`);
      document.body.style.setProperty('--hero-copy-y', `${heroExit * -1.25}rem`);
      document.body.style.setProperty('--hero-copy-opacity', String(1 - (heroExit * 0.48)));
    }

    if (isWideScene) {
      const gapBounds = managementGap.getBoundingClientRect();
      const scrollableDistance = Math.max(gapBounds.height - viewportHeight, 1);
      const gapProgress = clamp(-gapBounds.top / scrollableDistance);
      const gapEntryProgress = clamp((viewportHeight - gapBounds.top) / (viewportHeight * 0.82));

      const introIn = gapEntryProgress;
      const introOut = range(gapProgress, 0.15, 0.23);
      const comparisonIn = range(gapProgress, 0.2, 0.36);
      const comparisonOut = range(gapProgress, 0.86, 1);
      const axisIn = range(gapProgress, 0.36, 0.56);

      managementGap.style.setProperty('--gap-intro-opacity', String(introIn * (1 - introOut)));
      managementGap.style.setProperty('--gap-intro-y', `${(1 - introIn) * 4 - (introOut * 2.5)}rem`);
      managementGap.style.setProperty('--gap-intro-scale', String(0.97 + (introIn * 0.03) - (introOut * 0.02)));
      managementGap.style.setProperty('--gap-comparison-opacity', String(comparisonIn * (1 - comparisonOut)));
      managementGap.style.setProperty('--gap-left-x', `${(1 - comparisonIn) * -12 - (comparisonOut * 6)}vw`);
      managementGap.style.setProperty('--gap-right-x', `${(1 - comparisonIn) * 12 + (comparisonOut * 6)}vw`);
      managementGap.style.setProperty('--gap-side-y', `${(1 - comparisonIn) * 2 - (comparisonOut * 1.5)}rem`);
      managementGap.style.setProperty('--gap-axis-scale', String(axisIn * (1 - comparisonOut)));

      setScrollReveal(gapIntroLabel, 'gap-label', 1, 1.25);
      setScrollReveal(gapIntroTitle, 'gap-title', 1, 3);
      setScrollReveal(gapIntroContext, 'gap-context', 1, 1.5);
      gapBeats.forEach((beat) => {
        const beatTitle = beat.querySelector('.gap-side-title');
        const beatItems = [...beat.querySelectorAll('li')];
        setScrollReveal(beatTitle, 'gap-side-title', 1, 1.25);
        beatItems.forEach((item) => setScrollReveal(item, 'gap-item', 1, 1.25));
      });
    } else {
      const elementIn = (element, entry = 0.92, duration = 0.5) => {
        const bounds = element.getBoundingClientRect();
        return clamp((viewportHeight * entry - bounds.top) / (viewportHeight * duration));
      };
      const introIn = elementIn(gapIntro, 0.92, 0.68);

      setScrollReveal(gapIntroLabel, 'gap-label', range(introIn, 0, 0.3), 1.25);
      setScrollReveal(gapIntroTitle, 'gap-title', range(introIn, 0.1, 0.72), 3);
      setScrollReveal(gapIntroContext, 'gap-context', range(introIn, 0.48, 0.96), 1.5);

      gapBeats.forEach((beat) => {
        const beatIn = elementIn(beat, 0.92, 0.62);
        const beatTitle = beat.querySelector('.gap-side-title');
        const beatItems = [...beat.querySelectorAll('li')];

        setScrollReveal(beatTitle, 'gap-side-title', range(beatIn, 0, 0.34), 1.25);
        beatItems.forEach((item, index) => {
          const itemIn = range(beatIn, 0.18 + (index * 0.11), 0.58 + (index * 0.11));
          setScrollReveal(item, 'gap-item', itemIn, 1.25);
        });
      });
    }

    const whoBounds = whoWeAre.getBoundingClientRect();
    const whoEntry = clamp((viewportHeight - whoBounds.top) / (viewportHeight * 0.78));
    let whoLabelIn;
    let whoHeadlineIn;
    let whoCopyPrimaryIn;
    let whoCopySecondaryIn;
    let whoExit = 0;

    if (isWideScene) {
      const whoScrollableDistance = Math.max(whoBounds.height - viewportHeight, 1);
      const whoProgress = clamp(-whoBounds.top / whoScrollableDistance);

      whoLabelIn = range(whoEntry, 0.02, 0.32);
      whoHeadlineIn = range(whoEntry, 0.12, 0.9);
      whoCopyPrimaryIn = range(whoProgress, 0.04, 0.3);
      whoCopySecondaryIn = range(whoProgress, 0.25, 0.55);
      whoExit = range(whoProgress, 0.82, 1);
    } else {
      whoLabelIn = range(whoEntry, 0, 0.25);
      whoHeadlineIn = range(whoEntry, 0.1, 0.55);
      whoCopyPrimaryIn = range(whoEntry, 0.42, 0.75);
      whoCopySecondaryIn = range(whoEntry, 0.58, 0.92);
    }

    const whoPresence = 1 - whoExit;
    const whoHeadlineLift = isWideScene ? whoCopyPrimaryIn * 0.85 : 0;
    whoWeAre.style.setProperty('--who-label-opacity', String(whoLabelIn * whoPresence));
    whoWeAre.style.setProperty('--who-label-y', `${(1 - whoLabelIn) * 1.5 - (whoExit * 1.5)}rem`);
    whoWeAre.style.setProperty('--who-headline-opacity', String(whoHeadlineIn * whoPresence));
    whoWeAre.style.setProperty('--who-headline-y', `${(1 - whoHeadlineIn) * 4 - whoHeadlineLift - (whoExit * 2)}rem`);
    whoWeAre.style.setProperty('--who-headline-clip', `${(1 - whoHeadlineIn) * 100}%`);
    whoWeAre.style.setProperty('--who-copy-primary-opacity', String(whoCopyPrimaryIn * whoPresence));
    whoWeAre.style.setProperty('--who-copy-primary-y', `${(1 - whoCopyPrimaryIn) * 1.75 - (whoExit * 1.5)}rem`);
    whoWeAre.style.setProperty('--who-copy-primary-clip', `${(1 - whoCopyPrimaryIn) * 100}%`);
    whoWeAre.style.setProperty('--who-copy-secondary-opacity', String(whoCopySecondaryIn * whoPresence));
    whoWeAre.style.setProperty('--who-copy-secondary-y', `${(1 - whoCopySecondaryIn) * 1.75 - (whoExit * 1.5)}rem`);
    whoWeAre.style.setProperty('--who-copy-secondary-clip', `${(1 - whoCopySecondaryIn) * 100}%`);

    const teamBounds = fieldTeamStory.getBoundingClientRect();
    let teamProgress;

    if (isWideScene) teamProgress = clamp((viewportHeight * 0.9 - teamBounds.top) / (viewportHeight * 0.72));
    else teamProgress = clamp((viewportHeight * 0.9 - teamBounds.top) / (viewportHeight * 0.45));

    const teamReveal = range(teamProgress, 0.04, 0.9);
    const teamCaptionIn = range(teamProgress, 0.62, 0.96);
    fieldTeamStory.style.setProperty('--team-image-opacity', String(range(teamProgress, 0, 0.16)));
    fieldTeamStory.style.setProperty('--team-image-y', `${(1 - teamReveal) * 2}rem`);
    fieldTeamStory.style.setProperty('--team-clip-x', `${(1 - teamReveal) * 100}%`);
    fieldTeamStory.style.setProperty('--team-caption-opacity', String(teamCaptionIn));
    fieldTeamStory.style.setProperty('--team-caption-y', `${(1 - teamCaptionIn) * 0.75}rem`);

    const profileBounds = operatingProfile.getBoundingClientRect();
    const profileLabelIn = clamp((viewportHeight * 0.88 - profileBounds.top) / (viewportHeight * 0.28));
    operatingProfile.style.setProperty('--profile-label-opacity', String(profileLabelIn));
    operatingProfile.style.setProperty('--profile-label-y', `${(1 - profileLabelIn) * 1.75}rem`);

    profileRows.forEach((row) => {
      const rowBounds = row.getBoundingClientRect();
      const rowIn = clamp((viewportHeight * 0.94 - rowBounds.top) / (viewportHeight * 0.22));
      row.style.setProperty('--profile-row-opacity', String(rowIn));
      row.style.setProperty('--profile-row-y', `${(1 - rowIn) * 2.75}rem`);
      row.style.setProperty('--profile-line-scale', String(rowIn));
    });

    if (ourDirection && directionVisionFrame && directionMissionFrame && directionLabel
      && directionVisionLabel && directionVisionTitle && directionMissionLabel
      && directionMissionItems.length === 3 && directionLine) {
      if (isWideScene) {
        const directionBounds = ourDirection.getBoundingClientRect();
        const directionScrollableDistance = Math.max(directionBounds.height - viewportHeight, 1);
        const directionEntry = clamp((viewportHeight - directionBounds.top) / (viewportHeight * 0.78));
        const directionProgress = clamp(-directionBounds.top / directionScrollableDistance);
        const visionExit = range(directionProgress, 0.17, 0.29);

        setScrollReveal(directionLabel, 'direction-label', range(directionEntry, 0.02, 0.3), 1.25);
        setScrollReveal(directionVisionLabel, 'direction-vision-label', range(directionEntry, 0.08, 0.38), 1.25);
        setScrollReveal(directionVisionTitle, 'direction-title', range(directionEntry, 0.16, 0.88), 3.25);
        directionVisionFrame.style.setProperty('--direction-frame-opacity', String(1 - visionExit));
        directionVisionFrame.style.setProperty('--direction-frame-y', `${visionExit * -2.5}rem`);

        setScrollReveal(directionMissionLabel, 'direction-mission-label', range(directionProgress, 0.25, 0.34), 1.25);

        let directionLineProgress = 0;
        directionMissionItems.forEach((item, index) => {
          const lineStart = 0.31 + (index * 0.15);
          const segmentIn = range(directionProgress, lineStart, lineStart + 0.1);
          const itemIn = range(directionProgress, lineStart + 0.035, lineStart + 0.14);

          directionLineProgress += segmentIn / directionMissionItems.length;
          item.style.setProperty('--direction-item-line', String(segmentIn));
          setScrollReveal(item, 'direction-item', itemIn, 1.75);
        });

        directionLine.style.setProperty('--direction-line', String(directionLineProgress));

      } else {
        const directionElementIn = (element, entry = 0.9, duration = 0.42) => {
          const bounds = element.getBoundingClientRect();
          return clamp((viewportHeight * entry - bounds.top) / (viewportHeight * duration));
        };

        directionVisionFrame.style.setProperty('--direction-frame-opacity', '1');
        directionVisionFrame.style.setProperty('--direction-frame-y', '0rem');

        setScrollReveal(directionLabel, 'direction-label', directionElementIn(directionLabel), 1.25);
        setScrollReveal(directionVisionLabel, 'direction-vision-label', directionElementIn(directionVisionLabel), 1.25);
        setScrollReveal(directionVisionTitle, 'direction-title', directionElementIn(directionVisionTitle, 0.92, 0.52), 2.5);
        setScrollReveal(directionMissionLabel, 'direction-mission-label', directionElementIn(directionMissionLabel), 1.25);

        if (window.innerWidth <= 800) {
          directionLine.style.setProperty('--direction-line', '1');
          directionMissionItems.forEach((item) => {
            const itemIn = directionElementIn(item, 0.92, 0.42);
            item.style.setProperty('--direction-item-line', String(itemIn));
            setScrollReveal(item, 'direction-item', itemIn, 1.5);
          });
        } else {
          const missionBaseIn = directionElementIn(directionMissionFrame, 0.92, 0.62);
          let directionLineProgress = 0;

          directionMissionItems.forEach((item, index) => {
            const segmentIn = range(missionBaseIn, index * 0.22, 0.42 + (index * 0.22));
            directionLineProgress += segmentIn / directionMissionItems.length;
            item.style.setProperty('--direction-item-line', String(segmentIn));
            setScrollReveal(item, 'direction-item', segmentIn, 1.5);
          });

          directionLine.style.setProperty('--direction-line', String(directionLineProgress));
        }
      }
    }

    if (corporateValues && valuesFrame && valuesLabel && valuesTitle && valuesList && valueItems.length === 7) {
      if (isWideScene) {
        const valuesBounds = corporateValues.getBoundingClientRect();
        const valuesScrollableDistance = Math.max(valuesBounds.height - viewportHeight, 1);
        const valuesEntry = clamp((viewportHeight - valuesBounds.top) / (viewportHeight * 0.78));
        const valuesProgress = clamp(-valuesBounds.top / valuesScrollableDistance);
        const valuesFrameExit = range(valuesProgress, 0.17, 0.29);

        setScrollReveal(valuesLabel, 'values-label', range(valuesEntry, 0.02, 0.3), 1.25);
        setScrollReveal(valuesTitle, 'values-title', range(valuesEntry, 0.14, 0.88), 3);
        valuesFrame.style.setProperty('--values-frame-opacity', String(1 - valuesFrameExit));
        valuesFrame.style.setProperty('--values-frame-y', `${valuesFrameExit * -2.5}rem`);

        let valuesPrimaryLineProgress = 0;
        let valuesSecondaryLineProgress = 0;
        valueItems.forEach((item, index) => {
          const lineStart = 0.31 + (index * 0.075);
          const segmentIn = range(valuesProgress, lineStart, lineStart + 0.035);
          const itemIn = range(valuesProgress, lineStart + 0.02, lineStart + 0.065);

          if (index < 4) valuesPrimaryLineProgress += segmentIn / 4;
          else valuesSecondaryLineProgress += segmentIn / 3;
          item.style.setProperty('--value-line', String(segmentIn));
          setScrollReveal(item, 'value', itemIn, 1.5);
        });

        valuesList.style.setProperty('--values-line', String(valuesPrimaryLineProgress));
        valuesList.style.setProperty('--values-secondary-line', String(valuesSecondaryLineProgress));
      } else {
        const valuesElementIn = (element, entry = 0.92, duration = 0.42) => {
          const bounds = element.getBoundingClientRect();
          return clamp((viewportHeight * entry - bounds.top) / (viewportHeight * duration));
        };

        valuesFrame.style.setProperty('--values-frame-opacity', '1');
        valuesFrame.style.setProperty('--values-frame-y', '0rem');
        setScrollReveal(valuesLabel, 'values-label', valuesElementIn(valuesLabel), 1.25);
        setScrollReveal(valuesTitle, 'values-title', valuesElementIn(valuesTitle, 0.92, 0.5), 2.5);

        if (window.innerWidth <= 800) {
          valuesList.style.setProperty('--values-line', '1');
          valuesList.style.setProperty('--values-secondary-line', '1');
          valueItems.forEach((item) => {
            const itemIn = valuesElementIn(item, 0.94, 0.4);
            item.style.setProperty('--value-line', String(itemIn));
            setScrollReveal(item, 'value', itemIn, 1.25);
          });
        } else {
          const valuesBaseIn = valuesElementIn(valuesList, 0.92, 0.72);
          let valuesPrimaryLineProgress = 0;
          let valuesSecondaryLineProgress = 0;

          valueItems.forEach((item, index) => {
            const segmentIn = range(valuesBaseIn, index * 0.1, 0.3 + (index * 0.1));
            if (index < 4) valuesPrimaryLineProgress += segmentIn / 4;
            else valuesSecondaryLineProgress += segmentIn / 3;
            item.style.setProperty('--value-line', String(segmentIn));
            setScrollReveal(item, 'value', segmentIn, 1.25);
          });

          valuesList.style.setProperty('--values-line', String(valuesPrimaryLineProgress));
          valuesList.style.setProperty('--values-secondary-line', String(valuesSecondaryLineProgress));
        }
      }
    }

    const whatBounds = whatWeDo.getBoundingClientRect();

    if (isWideScene) {
      const whatScrollableDistance = Math.max(whatBounds.height - viewportHeight, 1);
      const whatProgress = clamp(-whatBounds.top / whatScrollableDistance);
      const whatEntry = clamp((viewportHeight - whatBounds.top) / (viewportHeight * 0.82));
      const whatIntroIn = whatEntry;
      const whatIntroOut = range(whatProgress, 0.12, 0.22);
      const whatIntroPresence = whatIntroIn * (1 - whatIntroOut);
      const progressIn = range(whatProgress, 0.16, 0.25);
      const progressOut = range(whatProgress, 0.96, 1);
      const stageWindows = [
        [0.2, 0.46],
        [0.43, 0.7],
        [0.67, 0.96],
      ];

      whatWeDo.style.setProperty('--what-intro-opacity', String(whatIntroPresence));
      whatWeDo.style.setProperty('--what-intro-y', `${(1 - whatIntroIn) * 4 - (whatIntroOut * 2)}rem`);
      whatWeDo.style.setProperty('--what-intro-clip', `${(1 - whatIntroIn) * 100}%`);
      whatWeDo.style.setProperty('--what-mark-opacity', String(whatIntroPresence * 0.09));
      whatWeDo.style.setProperty('--what-progress-opacity', String(progressIn * (1 - progressOut)));
      whatWeDo.style.setProperty('--what-progress-scale', String(range(whatProgress, 0.22, 0.88)));

      whatStages.forEach((stage, index) => {
        const [start, end] = stageWindows[index];
        const stageIn = range(whatProgress, start, start + 0.09);
        const stageOut = range(whatProgress, end - 0.05, end);
        const stagePresence = stageIn * (1 - stageOut);

        stage.style.setProperty('--what-stage-opacity', String(stagePresence));
        stage.style.setProperty('--what-stage-y', `${(1 - stageIn) * 4 - (stageOut * 2)}rem`);
        stage.style.setProperty('--what-stage-clip', `${(1 - stageIn) * 100}%`);
        whatNodes[index].style.setProperty('--what-node-opacity', String(0.32 + (stagePresence * 0.68)));
      });

    } else {
      const introBounds = whatIntro.getBoundingClientRect();
      const introIn = clamp((viewportHeight * 0.9 - introBounds.top) / (viewportHeight * 0.52));

      whatWeDo.style.setProperty('--what-intro-opacity', String(introIn));
      whatWeDo.style.setProperty('--what-intro-y', `${(1 - introIn) * 3}rem`);
      whatWeDo.style.setProperty('--what-intro-clip', `${(1 - introIn) * 100}%`);
      whatWeDo.style.setProperty('--what-mark-opacity', String(introIn * 0.09));

      whatStages.forEach((stage) => {
        const stageBounds = stage.getBoundingClientRect();
        const stageIn = clamp((viewportHeight * 0.9 - stageBounds.top) / (viewportHeight * 0.42));

        stage.style.setProperty('--what-stage-opacity', String(stageIn));
        stage.style.setProperty('--what-stage-y', `${(1 - stageIn) * 3}rem`);
        stage.style.setProperty('--what-stage-clip', `${(1 - stageIn) * 100}%`);
      });
    }

    const focusIntroBounds = focusIntro.getBoundingClientRect();
    const focusIntroIn = clamp((viewportHeight * 0.9 - focusIntroBounds.top) / (viewportHeight * 0.55));
    const focusCopyIn = range(focusIntroIn, 0.28, 0.78);

    focusAreas.style.setProperty('--focus-intro-opacity', String(focusIntroIn));
    focusAreas.style.setProperty('--focus-intro-y', `${(1 - focusIntroIn) * 3.25}rem`);
    focusAreas.style.setProperty('--focus-intro-clip', `${(1 - focusIntroIn) * 100}%`);
    focusAreas.style.setProperty('--focus-copy-opacity', String(focusCopyIn));
    focusAreas.style.setProperty('--focus-copy-y', `${(1 - focusCopyIn) * 2}rem`);

    const focusStageBounds = focusStageHeading.getBoundingClientRect();
    const focusStageIn = clamp((viewportHeight * 0.92 - focusStageBounds.top) / (viewportHeight * 0.36));
    focusStageHeading.style.setProperty('--focus-stage-opacity', String(focusStageIn));
    focusStageHeading.style.setProperty('--focus-stage-y', `${(1 - focusStageIn) * 1.25}rem`);

    if (isWideScene) {
      const focusBounds = focusScroll.getBoundingClientRect();
      const focusScrollableDistance = Math.max(focusBounds.height - viewportHeight, 1);
      const focusProgress = clamp(-focusBounds.top / focusScrollableDistance);
      const focusPosition = range(focusProgress, 0.05, 0.93) * (focusPanels.length - 1);
      const focusWeights = focusPanels.map((panel, index) => {
        const presence = clamp(1 - Math.abs(focusPosition - index));
        const detailPresence = clamp(1 - (Math.abs(focusPosition - index) * 1.4));

        panel.style.removeProperty('--focus-index-opacity');
        panel.style.removeProperty('--focus-title-opacity');
        panel.style.removeProperty('--focus-title-y');
        panel.style.removeProperty('--focus-media-clip');
        panel.style.removeProperty('--focus-media-scale');
        panel.style.setProperty('--focus-active', String(presence));
        panel.style.setProperty('--focus-detail-opacity', String(detailPresence));
        return `${(1 + (presence * 4)).toFixed(3)}fr`;
      });

      focusPanelField.style.setProperty('--focus-columns', focusWeights.join(' '));

      const focusClosingIn = range(focusProgress, 0.83, 0.94);
      focusAreas.style.setProperty('--focus-closing-opacity', String(focusClosingIn));
      focusAreas.style.setProperty('--focus-closing-y', `${(1 - focusClosingIn) * 1.25}rem`);
    } else {
      focusPanels.forEach((panel) => {
        const panelBounds = panel.getBoundingClientRect();
        const panelIn = clamp((viewportHeight * 0.9 - panelBounds.top) / (viewportHeight * 0.44));
        const mediaIn = range(panelIn, 0, 0.58);
        const titleIn = range(panelIn, 0.18, 0.76);
        const detailIn = range(panelIn, 0.48, 1);

        panel.style.setProperty('--focus-active', String(titleIn));
        panel.style.setProperty('--focus-index-opacity', String(range(panelIn, 0, 0.32)));
        panel.style.setProperty('--focus-title-opacity', String(titleIn));
        panel.style.setProperty('--focus-title-y', `${(1 - titleIn) * 1.5}rem`);
        panel.style.setProperty('--focus-detail-opacity', String(detailIn));
        panel.style.setProperty('--focus-media-clip', `${(1 - mediaIn) * 100}%`);
        panel.style.setProperty('--focus-media-scale', String(1.06 - (mediaIn * 0.06)));
      });

      const focusClosingBounds = focusClosing.getBoundingClientRect();
      const focusClosingIn = clamp((viewportHeight * 0.92 - focusClosingBounds.top) / (viewportHeight * 0.46));
      focusAreas.style.setProperty('--focus-closing-opacity', String(focusClosingIn));
      focusAreas.style.setProperty('--focus-closing-y', `${(1 - focusClosingIn) * 1.75}rem`);
    }

    const outcomesIntroBounds = outcomesIntro.getBoundingClientRect();
    const outcomesIntroIn = clamp((viewportHeight * 0.9 - outcomesIntroBounds.top) / (viewportHeight * 0.58));
    const outcomesTitleIn = range(outcomesIntroIn, 0.08, 0.68);
    const outcomesCopyIn = range(outcomesIntroIn, 0.42, 0.92);

    sustainableOutcomes.style.setProperty('--outcomes-label-opacity', String(range(outcomesIntroIn, 0, 0.3)));
    sustainableOutcomes.style.setProperty('--outcomes-label-y', `${(1 - outcomesIntroIn) * 1.5}rem`);
    sustainableOutcomes.style.setProperty('--outcomes-title-opacity', String(outcomesTitleIn));
    sustainableOutcomes.style.setProperty('--outcomes-title-y', `${(1 - outcomesTitleIn) * 4}rem`);
    sustainableOutcomes.style.setProperty('--outcomes-title-clip', `${(1 - outcomesTitleIn) * 100}%`);
    sustainableOutcomes.style.setProperty('--outcomes-copy-opacity', String(outcomesCopyIn));
    sustainableOutcomes.style.setProperty('--outcomes-copy-y', `${(1 - outcomesCopyIn) * 2}rem`);
    sustainableOutcomes.style.setProperty('--outcomes-line-scale', String(outcomesCopyIn));

    outcomeChapters.forEach((chapter) => {
      const chapterBounds = chapter.getBoundingClientRect();
      const chapterIn = clamp((viewportHeight * 0.92 - chapterBounds.top) / (viewportHeight * 0.62));
      const chapterLabelIn = range(chapterIn, 0, 0.28);
      const chapterTitleIn = range(chapterIn, 0.1, 0.7);
      const chapterCopyIn = range(chapterIn, 0.42, 0.94);
      const chapterMedia = chapter.querySelector('.outcome-media');
      const chapterMediaBounds = chapterMedia?.getBoundingClientRect();
      const chapterMediaIn = window.innerWidth <= 704 && chapterMediaBounds
        ? clamp((viewportHeight * 0.92 - chapterMediaBounds.top) / (viewportHeight * 0.58))
        : range(chapterIn, 0.22, 0.82);

      chapter.style.setProperty('--outcome-label-opacity', String(chapterLabelIn));
      chapter.style.setProperty('--outcome-label-y', `${(1 - chapterLabelIn) * 1.5}rem`);
      chapter.style.setProperty('--outcome-title-opacity', String(chapterTitleIn));
      chapter.style.setProperty('--outcome-title-y', `${(1 - chapterTitleIn) * 3.5}rem`);
      chapter.style.setProperty('--outcome-title-clip', `${(1 - chapterTitleIn) * 100}%`);
      chapter.style.setProperty('--outcome-copy-opacity', String(chapterCopyIn));
      chapter.style.setProperty('--outcome-copy-y', `${(1 - chapterCopyIn) * 2}rem`);
      chapter.style.setProperty('--outcome-rule-scale', String(range(chapterIn, 0.14, 0.88)));
      chapter.style.setProperty('--outcome-media-opacity', String(chapterMediaIn));
      chapter.style.setProperty('--outcome-media-y', `${(1 - chapterMediaIn) * 2.25}rem`);
      chapter.style.setProperty('--outcome-media-clip', `${(1 - chapterMediaIn) * 100}%`);
      chapter.style.setProperty('--outcome-media-scale', String(1.045 - (chapterMediaIn * 0.045)));
    });

    const outcomesClosingBounds = outcomesClosing.getBoundingClientRect();
    const outcomesClosingIn = clamp((viewportHeight * 0.92 - outcomesClosingBounds.top) / (viewportHeight * 0.68));

    sustainableOutcomes.style.setProperty('--outcomes-closing-opacity', String(outcomesClosingIn));
    sustainableOutcomes.style.setProperty('--outcomes-closing-y', `${(1 - outcomesClosingIn) * 4}rem`);
    sustainableOutcomes.style.setProperty('--outcomes-closing-clip', `${(1 - outcomesClosingIn) * 100}%`);

    outcomesClosingPrinciples.forEach((principle, index) => {
      const principleIn = range(outcomesClosingIn, 0.42 + (index * 0.12), 0.72 + (index * 0.12));
      principle.style.setProperty('--outcomes-principle-opacity', String(principleIn));
      principle.style.setProperty('--outcomes-principle-y', `${(1 - principleIn) * 1.25}rem`);
      principle.style.setProperty('--outcomes-principle-line', String(principleIn));
    });

    const contactBounds = contactCta.getBoundingClientRect();
    const contactIn = clamp((viewportHeight * 0.92 - contactBounds.top) / (viewportHeight * 0.74));
    const contactTitleIn = range(contactIn, 0.02, 0.62);
    const contactDetailsIn = range(contactIn, 0.28, 0.78);
    const contactActionIn = range(contactIn, 0.56, 0.96);

    contactCta.style.setProperty('--contact-title-opacity', String(contactTitleIn));
    contactCta.style.setProperty('--contact-title-y', `${(1 - contactTitleIn) * 4}rem`);
    contactCta.style.setProperty('--contact-title-clip', `${(1 - contactTitleIn) * 100}%`);
    contactCta.style.setProperty('--contact-details-opacity', String(contactDetailsIn));
    contactCta.style.setProperty('--contact-details-y', `${(1 - contactDetailsIn) * 2.5}rem`);
    contactCta.style.setProperty('--contact-action-opacity', String(contactActionIn));
    contactCta.style.setProperty('--contact-action-x', `${(1 - contactActionIn) * 2}rem`);

    const footerBounds = siteFooter.getBoundingClientRect();
    const footerIn = clamp((viewportHeight * 0.94 - footerBounds.top) / (viewportHeight * 0.5));
    siteFooter.style.setProperty('--site-footer-rule', String(range(footerIn, 0, 0.42)));

    [siteFooterBrand, ...siteFooterGroups].forEach((element) => {
      const elementBounds = element.getBoundingClientRect();
      const elementIn = clamp((viewportHeight * 0.94 - elementBounds.top) / (viewportHeight * 0.38));
      element.style.setProperty('--site-footer-opacity', String(elementIn));
      element.style.setProperty('--site-footer-y', `${(1 - elementIn) * 1.5}rem`);
    });

    siteFooterMeta.style.setProperty('--site-footer-opacity', '1');
    siteFooterMeta.style.setProperty('--site-footer-y', '0rem');
  }

  function requestRender() {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(renderScrollScene);
  }

  renderScrollScene();
  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', requestRender);
  wideScene.addEventListener('change', requestRender);
}
