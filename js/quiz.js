class Quiz {
  constructor(level, languageManager) {
    this.level = level;
    this.languageManager = languageManager;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.questions = this.getQuestions();
    this.totalQuestions = this.questions.length;
    this.usedPrompts = new Set();
  }

  getQuestions() {
    const language = this.languageManager.getCurrentLanguage();
    return quizData[language]?.[this.level] || [];
  }

  getCurrentQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    if (!question) return null;

    // Get a random prompt that hasn't been used yet
    let availablePrompts = question.prompts.filter(prompt => !this.usedPrompts.has(prompt));
    if (availablePrompts.length === 0) {
      this.usedPrompts.clear();
      availablePrompts = question.prompts;
    }

    const randomPrompt = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
    this.usedPrompts.add(randomPrompt);

    return {
      word: randomPrompt,
      translation: question.answers[0],
      options: this.shuffleArray([...question.options])
    };
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  checkAnswer(selectedAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const isCorrect = currentQuestion.answers.includes(selectedAnswer);
    
    if (isCorrect) {
      this.score++;
    }

    return {
      isCorrect,
      correctAnswer: currentQuestion.answers[0]
    };
  }

  hasNextQuestion() {
    return this.currentQuestionIndex < this.totalQuestions - 1;
  }

  nextQuestion() {
    if (this.hasNextQuestion()) {
      this.currentQuestionIndex++;
      return true;
    }
    return false;
  }

  getProgress() {
    return {
      current: this.currentQuestionIndex + 1,
      total: this.totalQuestions,
      score: this.score,
      percentage: Math.round((this.score / this.totalQuestions) * 100)
    };
  }
}