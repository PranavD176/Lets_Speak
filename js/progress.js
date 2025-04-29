class ProgressManager {
  constructor() {
    this.streak = 0;
    this.masteredWords = 0;
    this.totalScore = 0;
    this.totalAttempts = 0;
    this.correctAttempts = 0;
    
    this.loadProgress();
    this.updateUI();
  }

  loadProgress() {
    const savedProgress = localStorage.getItem('quizProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.streak = progress.streak;
      this.masteredWords = progress.masteredWords;
      this.totalScore = progress.totalScore;
      this.totalAttempts = progress.totalAttempts;
      this.correctAttempts = progress.correctAttempts;
    }
  }

  saveProgress() {
    const progress = {
      streak: this.streak,
      masteredWords: this.masteredWords,
      totalScore: this.totalScore,
      totalAttempts: this.totalAttempts,
      correctAttempts: this.correctAttempts
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }

  updateStreak(correct) {
    if (correct) {
      this.streak++;
    } else {
      this.streak = 0;
    }
    this.saveProgress();
    this.updateUI();
  }

  updateScore(score) {
    this.totalScore += score;
    this.saveProgress();
    this.updateUI();
  }

  updateAccuracy(correct) {
    this.totalAttempts++;
    if (correct) {
      this.correctAttempts++;
    }
    this.saveProgress();
    this.updateUI();
  }

  addMasteredWord() {
    this.masteredWords++;
    this.saveProgress();
    this.updateUI();
  }

  getAccuracy() {
    if (this.totalAttempts === 0) return 0;
    return Math.round((this.correctAttempts / this.totalAttempts) * 100);
  }

  updateUI() {
    document.getElementById('streak-count').textContent = this.streak;
    document.getElementById('mastered-words').textContent = this.masteredWords;
    document.getElementById('total-score').textContent = this.totalScore;
    document.getElementById('quiz-accuracy').textContent = this.getAccuracy() + '%';
  }
}