class UI {
  constructor() {
    this.views = {
      dashboard: document.getElementById('dashboard-view'),
      quiz: document.getElementById('quiz-view'),
      results: document.getElementById('results-view')
    };
    
    this.quizElements = {
      progressFill: document.getElementById('quiz-progress-fill'),
      currentQuestion: document.getElementById('current-question'),
      totalQuestions: document.getElementById('total-questions'),
      currentScore: document.getElementById('current-score'),
      questionText: document.getElementById('question-text'),
      optionsContainer: document.getElementById('options-container'),
      feedbackContainer: document.getElementById('feedback-container'),
      feedbackIcon: document.getElementById('feedback-icon'),
      feedbackText: document.getElementById('feedback-text')
    };

    this.setupThemeToggle();
  }

  showView(viewName) {
    Object.values(this.views).forEach(view => {
      view.classList.remove('active-view');
    });
    this.views[viewName].classList.add('active-view');
  }

  updateQuizProgress(progress) {
    const { current, total, score } = progress;
    this.quizElements.progressFill.style.width = `${(current / total) * 100}%`;
    this.quizElements.currentQuestion.textContent = current;
    this.quizElements.totalQuestions.textContent = total;
    this.quizElements.currentScore.textContent = score;
  }

  displayQuestion(question) {
    this.quizElements.questionText.textContent = question.word;
    this.quizElements.optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'option-button';
      button.textContent = option;
      button.addEventListener('click', () => this.handleOptionClick(option));
      this.quizElements.optionsContainer.appendChild(button);
    });
  }

  showFeedback(isCorrect, correctAnswer) {
    this.quizElements.feedbackContainer.classList.remove('hidden');
    this.quizElements.feedbackIcon.textContent = isCorrect ? '✓' : '✗';
    this.quizElements.feedbackText.textContent = isCorrect ? 'Correct!' : 'Incorrect';
    this.quizElements.feedbackIcon.style.color = isCorrect ? '#4CAF50' : '#F44336';
    
    if (!isCorrect) {
      this.quizElements.feedbackText.textContent += ` The correct answer was: ${correctAnswer}`;
    }
  }

  hideFeedback() {
    this.quizElements.feedbackContainer.classList.add('hidden');
  }

  updateResults(results) {
    document.getElementById('final-score-percent').textContent = `${results.percentage}%`;
    document.getElementById('correct-answers').textContent = results.score;
    document.getElementById('completed-questions').textContent = results.total;
    document.getElementById('new-words').textContent = Math.floor(results.score / 2);
  }

  setupThemeToggle() {
    const themeBtn = document.getElementById('toggle-theme-btn');
    const icon = themeBtn.querySelector('.icon');
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';

    themeBtn.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      icon.textContent = newTheme === 'light' ? '🌙' : '☀️';
      localStorage.setItem('theme', newTheme);
    });
  }

  setOptionClickHandler(handler) {
    this.handleOptionClick = handler;
  }
}

document.addEventListener('DOMContentLoaded', () => {
    // Language selector logic
    const languageBtn = document.getElementById('language-selector-btn');
    const languageSelection = document.querySelector('.language-selection');
    const languageList = document.querySelector('.language-list');
    const dashboardView = document.getElementById('dashboard-view');
    const translationView = document.getElementById('translation-view');

    // Toggle language dropdown
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageBtn.classList.toggle('active');
        languageSelection.classList.toggle('active');
    });

    // Handle language selection
    languageList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const selectedLang = e.target.dataset.lang;
            const currentLangSpan = languageBtn.querySelector('.current-language');
            
            document.querySelectorAll('.language-list li').forEach(li => {
                li.classList.remove('selected');
            });
            e.target.classList.add('selected');
            currentLangSpan.textContent = e.target.textContent;
            
            // Close dropdown
            languageBtn.classList.remove('active');
            languageSelection.classList.remove('active');

            // Update translation language
            if (document.getElementById('translate-language')) {
                document.getElementById('translate-language').value = selectedLang;
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        languageBtn.classList.remove('active');
        languageSelection.classList.remove('active');
    });

    // Level selection handling
    const levelButtons = document.querySelectorAll('.level-btn');
    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            levelButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});