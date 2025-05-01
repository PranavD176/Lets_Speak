const languageWords = {
    spanish: [
        { word: "Hola", translation: "Hello" },
        { word: "Adiós", translation: "Goodbye" },
        { word: "Gracias", translation: "Thank you" },
        { word: "Por favor", translation: "Please" },
        { word: "Sí", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "¿Cómo estás?", translation: "How are you?" },
        { word: "Bien", translation: "Good" },
        { word: "Mal", translation: "Bad" },
        { word: "¿Qué tal?", translation: "What's up?" },
        { word: "Amigo", translation: "Friend" },
        { word: "Familia", translation: "Family" },
        { word: "Casa", translation: "House" },
        { word: "Libro", translation: "Book" },
        { word: "Comida", translation: "Food" }
    ],
    french: [
        { word: "Bonjour", translation: "Hello" },
        { word: "Au revoir", translation: "Goodbye" },
        { word: "Merci", translation: "Thank you" },
        { word: "S'il vous plaît", translation: "Please" },
        { word: "Oui", translation: "Yes" },
        { word: "Non", translation: "No" },
        { word: "Comment allez-vous?", translation: "How are you?" },
        { word: "Bien", translation: "Good" },
        { word: "Mal", translation: "Bad" },
        { word: "Quoi de neuf?", translation: "What's up?" }
    ],
    german: [
        { word: "Hallo", translation: "Hello" },
        { word: "Auf Wiedersehen", translation: "Goodbye" },
        { word: "Danke", translation: "Thank you" },
        { word: "Bitte", translation: "Please" },
        { word: "Ja", translation: "Yes" },
        { word: "Nein", translation: "No" },
        { word: "Wie geht es dir?", translation: "How are you?" },
        { word: "Gut", translation: "Good" },
        { word: "Schlecht", translation: "Bad" },
        { word: "Was geht?", translation: "What's up?" }
    ],
    italian: [
        { word: "Ciao", translation: "Hello" },
        { word: "Arrivederci", translation: "Goodbye" },
        { word: "Grazie", translation: "Thank you" },
        { word: "Per favore", translation: "Please" },
        { word: "Sì", translation: "Yes" },
        { word: "No", translation: "No" },
        { word: "Come stai?", translation: "How are you?" },
        { word: "Bene", translation: "Good" },
        { word: "Male", translation: "Bad" },
        { word: "Che succede?", translation: "What's up?" }
    ],
    portuguese: [
        { word: "Olá", translation: "Hello" },
        { word: "Adeus", translation: "Goodbye" },
        { word: "Obrigado/a", translation: "Thank you" },
        { word: "Por favor", translation: "Please" },
        { word: "Sim", translation: "Yes" },
        { word: "Não", translation: "No" },
        { word: "Como está?", translation: "How are you?" },
        { word: "Bem", translation: "Good" },
        { word: "Mal", translation: "Bad" },
        { word: "E aí?", translation: "What's up?" },
        { word: "Amigo", translation: "Friend" },
        { word: "Família", translation: "Family" },
        { word: "Casa", translation: "House" },
        { word: "Livro", translation: "Book" },
        { word: "Comida", translation: "Food" }
    ],
    japanese: [
        { word: "こんにちは", translation: "Hello" },
        { word: "さようなら", translation: "Goodbye" },
        { word: "ありがとう", translation: "Thank you" },
        { word: "お願いします", translation: "Please" },
        { word: "はい", translation: "Yes" },
        { word: "いいえ", translation: "No" },
        { word: "お元気ですか", translation: "How are you?" },
        { word: "元気です", translation: "Good" },
        { word: "良くないです", translation: "Bad" },
        { word: "調子はどう?", translation: "What's up?" },
        { word: "友達", translation: "Friend" },
        { word: "家族", translation: "Family" },
        { word: "家", translation: "House" },
        { word: "本", translation: "Book" },
        { word: "食べ物", translation: "Food" }
    ]
};

const languageDisplayNames = {
    spanish: 'Spanish',
    french: 'French',
    german: 'German',
    italian: 'Italian',
    portuguese: 'Portuguese',
    japanese: 'Japanese'
};

let currentLanguage = 'spanish';

function createCards(language) {
    const grid = document.getElementById('card-grid');
    grid.innerHTML = ''; // Clear existing cards
    
    const words = languageWords[language];
    words.forEach(item => {
        const card = document.createElement('div');
        card.className = 'learning-card';
        card.innerHTML = `
            <div class="word">${item.word}</div>
            <div class="translation">${item.translation}</div>
            <button onclick="speak('${item.word}', '${language}')">🔊 Play</button>
        `;
        grid.appendChild(card);
    });

    // Update header
    const languageHeader = document.querySelector('.learning-container h1');
    languageHeader.innerHTML = `<i class="fas fa-language"></i> Learn ${language.charAt(0).toUpperCase() + language.slice(1)}`;
}

function speak(text, language) {
    const utter = new SpeechSynthesisUtterance(text);
    const langCodes = {
        spanish: 'es-ES',
        french: 'fr-FR',
        german: 'de-DE',
        italian: 'it-IT',
        portuguese: 'pt-PT',
        japanese: 'ja-JP'
    };
    utter.lang = langCodes[language] || 'en-US';
    speechSynthesis.speak(utter);
}

// Language selector functionality
document.addEventListener('DOMContentLoaded', () => {
    const languageBtn = document.getElementById('language-selector-btn');
    const languageSelection = document.querySelector('.language-selection');
    const languageList = document.querySelector('.language-list');

    // Toggle dropdown on button click
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
            
            // Update selected state
            document.querySelectorAll('.language-list li').forEach(li => {
                li.classList.remove('selected');
            });
            e.target.classList.add('selected');
            
            // Update displayed language
            currentLangSpan.textContent = e.target.textContent;
            
            // Update page content
            currentLanguage = selectedLang;
            createCards(selectedLang);
            
            // Close dropdown
            languageBtn.classList.remove('active');
            languageSelection.classList.remove('active');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        languageBtn.classList.remove('active');
        languageSelection.classList.remove('active');
    });
});

// Initial card creation
createCards(currentLanguage);
