document.addEventListener('DOMContentLoaded', () => {
  const languageManager = new LanguageManager();
  const progressManager = new ProgressManager();
  const translationService = new TranslationService();
  const ui = new UI();
  let currentQuiz = null;

  // Setup translation interface
  const translateBtn = document.getElementById('translate-btn');
  const speakBtn = document.getElementById('speak-btn');
  const translateText = document.getElementById('translate-text');
  const translateLanguage = document.getElementById('translate-language');
  const translatedText = document.getElementById('translated-text');

  // Add loading state for buttons
  const setLoading = (button, isLoading) => {
    button.disabled = isLoading;
    button.style.opacity = isLoading ? '0.7' : '1';
    button.style.cursor = isLoading ? 'wait' : 'pointer';
  };

  translateText.addEventListener('input', () => {
    const isEmpty = !translateText.value.trim();
    translateBtn.disabled = isEmpty;
    translateBtn.style.opacity = isEmpty ? '0.7' : '1';
  });

  translateBtn.addEventListener('click', async () => {
    const text = translateText.value.trim();
    const targetLang = translateLanguage.value;

    if (text) {
      try {
        setLoading(translateBtn, true);
        translatedText.textContent = 'Translating...';
        
        const translation = await translationService.translate(text, targetLang);
        translatedText.textContent = translation;
        speakBtn.disabled = false;
      } catch (error) {
        translatedText.textContent = 'Translation failed. Please try again.';
        speakBtn.disabled = true;
      } finally {
        setLoading(translateBtn, false);
      }
    }
  });

  speakBtn.addEventListener('click', async () => {
    const text = translatedText.textContent;
    const lang = translateLanguage.value;

    if (text && text !== 'Translating...' && text !== 'Translation failed. Please try again.') {
      try {
        setLoading(speakBtn, true);
        await translationService.speak(text, lang);
      } catch (error) {
        console.error('Speech generation failed:', error);
      } finally {
        setLoading(speakBtn, false);
      }
    }
  });

  // Setup level selection
  document.querySelectorAll('.level-btn').forEach(button => {
    button.addEventListener('click', () => {
      const level = button.dataset.level;
      startQuiz(level);
    });
  });

  // Setup next question button
  document.getElementById('next-question-btn').addEventListener('click', () => {
    if (currentQuiz.hasNextQuestion()) {
      loadNextQuestion();
    } else {
      showResults();
    }
  });

  // Setup review and home buttons
  document.getElementById('review-btn').addEventListener('click', () => {
    ui.showView('dashboard');
  });

  document.getElementById('home-btn').addEventListener('click', () => {
    ui.showView('dashboard');
  });

  function startQuiz(level) {
    currentQuiz = new Quiz(level, languageManager);
    ui.showView('quiz');
    ui.setOptionClickHandler((selectedAnswer) => checkAnswer(selectedAnswer));
    loadNextQuestion();
  }

  function loadNextQuestion() {
    ui.hideFeedback();
    const currentQuestion = currentQuiz.getCurrentQuestion();
    ui.displayQuestion(currentQuestion);
    ui.updateQuizProgress(currentQuiz.getProgress());
  }

  function checkAnswer(selectedAnswer) {
    const result = currentQuiz.checkAnswer(selectedAnswer);
    ui.showFeedback(result.isCorrect, result.correctAnswer);
    
    // Update progress
    progressManager.updateAccuracy(result.isCorrect);
    progressManager.updateStreak(result.isCorrect);
    if (result.isCorrect) {
      progressManager.updateScore(10);
    }
  }

  function showResults() {
    const progress = currentQuiz.getProgress();
    ui.updateResults(progress);
    
    // Update mastered words based on performance
    const newMasteredWords = Math.floor(progress.score / 2);
    for (let i = 0; i < newMasteredWords; i++) {
      progressManager.addMasteredWord();
    }
    
    ui.showView('results');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const languageManager = new LanguageManager();
  const progressManager = new ProgressManager();
  const translationService = new TranslationService();
  const ui = new UI();
  let currentQuiz = null;

  // Setup translation interface
  const translateBtn = document.getElementById('translate-btn');
  const speakBtn = document.getElementById('speak-btn');
  const translateText = document.getElementById('translate-text');
  const translateLanguage = document.getElementById('translate-language');
  const translatedText = document.getElementById('translated-text');

  // Add loading state for buttons
  const setLoading = (button, isLoading) => {
      button.disabled = isLoading;
      button.style.opacity = isLoading ? '0.7' : '1';
      button.style.cursor = isLoading ? 'wait' : 'pointer';
  };

  translateText.addEventListener('input', () => {
      const isEmpty = !translateText.value.trim();
      translateBtn.disabled = isEmpty;
      translateBtn.style.opacity = isEmpty ? '0.7' : '1';
  });

  translateBtn.addEventListener('click', async () => {
      const text = translateText.value.trim();
      const targetLang = translateLanguage.value;

      if (text) {
          try {
              setLoading(translateBtn, true);
              translatedText.textContent = 'Translating...';

              const translation = await translationService.translate(text, targetLang);
              translatedText.textContent = translation;
              speakBtn.disabled = false;
          } catch (error) {
              translatedText.textContent = 'Translation failed. Please try again.';
              speakBtn.disabled = true;
          } finally {
              setLoading(translateBtn, false);
          }
      }
  });

  speakBtn.addEventListener('click', async () => {
      const text = translatedText.textContent;
      const lang = translateLanguage.value;

      if (text && text !== 'Translating...' && text !== 'Translation failed. Please try again.') {
          try {
              setLoading(speakBtn, true);
              await translationService.speak(text, lang);
          } catch (error) {
              console.error('Speech generation failed:', error);
          } finally {
              setLoading(speakBtn, false);
          }
      }
  });

  // Setup level selection
  document.querySelectorAll('.level-btn').forEach(button => {
      button.addEventListener('click', () => {
          const level = button.dataset.level;
          startQuiz(level);
      });
  });

  // Setup next question button
  document.getElementById('next-question-btn').addEventListener('click', () => {
      if (currentQuiz.nextQuestion()) {
          loadNextQuestion();  // Load next question
      } else {
          showResults();  // Show results if no more questions
      }
  });

  // Setup review and home buttons
  document.getElementById('review-btn').addEventListener('click', () => {
      ui.showView('dashboard');
  });

  document.getElementById('home-btn').addEventListener('click', () => {
      ui.showView('dashboard');
  });

  function startQuiz(level) {
      currentQuiz = new Quiz(level, languageManager);
      ui.showView('quiz');
      ui.setOptionClickHandler((selectedAnswer) => checkAnswer(selectedAnswer));
      loadNextQuestion();
  }

  function loadNextQuestion() {
      ui.hideFeedback();  // Hide previous feedback
      const currentQuestion = currentQuiz.getCurrentQuestion();
      if (currentQuestion) {
          ui.displayQuestion(currentQuestion);  // Display new question
          ui.updateQuizProgress(currentQuiz.getProgress());  // Update quiz progress
      }
  }

  function checkAnswer(selectedAnswer) {
      const result = currentQuiz.checkAnswer(selectedAnswer);
      ui.showFeedback(result.isCorrect, result.correctAnswer);

      // Update progress
      progressManager.updateAccuracy(result.isCorrect);
      progressManager.updateStreak(result.isCorrect);
      if (result.isCorrect) {
          progressManager.updateScore(10);  // Add score for correct answer
      }
  }

  function showResults() {
      const progress = currentQuiz.getProgress();
      ui.updateResults(progress);

      // Update mastered words based on performance
      const newMasteredWords = Math.floor(progress.score / 2);
      for (let i = 0; i < newMasteredWords; i++) {
          progressManager.addMasteredWord();
      }

      ui.showView('results');
  }
});
// Add any additional event listeners or initialization code here