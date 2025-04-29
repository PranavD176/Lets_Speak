const words = [
    { word: "Hola", translation: "Hello" },
    { word: "Adiós", translation: "Goodbye" },
    { word: "Gracias", translation: "Thank you" },
    { word: "Por favor", translation: "Please" },
    { word: "Sí", translation: "Yes" },
    { word: "No", translation: "No" },
    { word: "¿Cómo estás?", translation: "How are you?"},
    { word: "Bien", translation: "Good" },
    { word: "Mal", translation: "Bad" },
    { word: "¿Qué tal?", translation: "What's up?" },
    { word: "Amigo", translation: "Friend" },
    { word: "Familia", translation: "Family" },
    { word: "Casa", translation: "House" },
    { word: "Libro", translation: "Book" },
    { word: "Comida", translation: "Food" }
  ];
  
  const grid = document.getElementById('card-grid');
  words.forEach(item => {
    const card = document.createElement('div');
    card.className = 'learning-card';
    card.innerHTML = `
      <div class="word">${item.word}</div>
      <div class="translation">${item.translation}</div>
      <button onclick="speak('${item.word}')">🔊 Play</button>
    `;
    grid.appendChild(card);
  });
  
  function speak(text) {
    const utter = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utter);
  }
