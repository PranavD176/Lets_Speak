class LanguageManager {
  constructor() {
    this.currentLanguage = 'spanish';
    this.setupLanguageSelector();
  }

  setupLanguageSelector() {
    const languageSelectorBtn = document.getElementById('language-selector-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageList = document.querySelector('.language-list');

    languageSelectorBtn.addEventListener('click', () => {
      languageDropdown.classList.toggle('hidden');
    });

    languageList.addEventListener('click', (e) => {
      const selectedLang = e.target.dataset.lang;
      if (selectedLang) {
        this.setLanguage(selectedLang);
        document.querySelector('.current-language').textContent = 
          e.target.textContent;
        languageDropdown.classList.add('hidden');
        
        // Update selected state
        document.querySelectorAll('.language-list li').forEach(li => {
          li.classList.remove('selected');
        });
        e.target.classList.add('selected');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#language-selector-btn') && 
          !e.target.closest('#language-dropdown')) {
        languageDropdown.classList.add('hidden');
      }
    });
  }

  setLanguage(language) {
    this.currentLanguage = language;
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }
}