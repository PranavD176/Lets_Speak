const quizData = {
  spanish: {
    beginner: [
      { type: 'translate', prompts: ['Good morning'], answers: ['Buenos días'], options: ['Buenos días', 'Buenas noches', 'Hola', 'Adiós'] },
      { type: 'translate', prompts: ['How are you?'], answers: ['¿Cómo estás?'], options: ['¿Cómo estás?', '¿Qué tal?', '¿Dónde estás?', '¿Quién eres?'] },
      { type: 'translate', prompts: ['What is your name?'], answers: ['¿Cómo te llamas?'], options: ['¿Cómo te llamas?', '¿Dónde vives?', '¿Cuántos años tienes?', '¿Qué haces?'] },
      { type: 'translate', prompts: ['Nice to meet you'], answers: ['Mucho gusto'], options: ['Mucho gusto', 'Hasta luego', 'Por favor', 'Gracias'] },
      { type: 'translate', prompts: ['See you tomorrow'], answers: ['Hasta mañana'], options: ['Hasta mañana', 'Hasta luego', 'Adiós', 'Buenas noches'] }
    ],
    intermediate: [
      { type: 'translate', prompts: ['I like to travel'], answers: ['Me gusta viajar'], options: ['Me gusta viajar', 'Quiero comer', 'Voy a casa', 'Estoy cansado'] },
      { type: 'translate', prompts: ['What time is it?'], answers: ['¿Qué hora es?'], options: ['¿Qué hora es?', '¿Cuándo sales?', '¿Dónde vas?', '¿Por qué?'] },
      { type: 'translate', prompts: ['I am studying Spanish'], answers: ['Estoy estudiando español'], options: ['Estoy estudiando español', 'Hablo inglés', 'No entiendo', 'Quiero aprender'] },
      { type: 'translate', prompts: ['Where is the restaurant?'], answers: ['¿Dónde está el restaurante?'], options: ['¿Dónde está el restaurante?', '¿Qué quieres comer?', '¿Tienes hambre?', '¿Te gusta la comida?'] },
      { type: 'translate', prompts: ['I need help'], answers: ['Necesito ayuda'], options: ['Necesito ayuda', 'Quiero salir', 'No puedo', 'Tengo una pregunta'] }
    ],
    advanced: [
      { type: 'translate', prompts: ['I would like to improve my Spanish'], answers: ['Me gustaría mejorar mi español'], options: ['Me gustaría mejorar mi español', 'Quiero hablar español', 'Necesito practicar más', 'Estoy aprendiendo español'] },
      { type: 'translate', prompts: ['What would you recommend?'], answers: ['¿Qué recomendarías?'], options: ['¿Qué recomendarías?', '¿Qué sugieres?', '¿Qué piensas?', '¿Cuál prefieres?'] },
      { type: 'translate', prompts: ['Could you explain that again?'], answers: ['¿Podrías explicarlo de nuevo?'], options: ['¿Podrías explicarlo de nuevo?', '¿Puedes repetir?', '¿Qué significa?', '¿Cómo se dice?'] },
      { type: 'translate', prompts: ['I have been living here for two years'], answers: ['He vivido aquí durante dos años'], options: ['He vivido aquí durante dos años', 'Vivo aquí hace dos años', 'Estoy aquí por dos años', 'Llevo dos años aquí'] },
      { type: 'translate', prompts: ['I would have done it differently'], answers: ['Lo habría hecho diferente'], options: ['Lo habría hecho diferente', 'Lo haría de otra manera', 'Debería haberlo hecho así', 'Podría hacerlo mejor'] }
    ]
  },
  
  french: {
    beginner: [
      { type: 'translate', prompts: ['Good morning'], answers: ['Bonjour'], options: ['Bonjour', 'Bonsoir', 'Salut', 'Au revoir'] },
      { type: 'translate', prompts: ['How are you?'], answers: ['Comment allez-vous?'], options: ['Comment allez-vous?', 'Où allez-vous?', 'Qui êtes-vous?', 'Que faites-vous?'] },
      { type: 'translate', prompts: ['My name is...'], answers: ['Je m\'appelle...'], options: ['Je m\'appelle...', 'J\'habite...', 'Je suis...', 'J\'ai...'] },
      { type: 'translate', prompts: ['Thank you'], answers: ['Merci'], options: ['Merci', 'S\'il vous plaît', 'De rien', 'Au revoir'] },
      { type: 'translate', prompts: ['Goodbye'], answers: ['Au revoir'], options: ['Au revoir', 'Bonsoir', 'À bientôt', 'Salut'] }
    ],
    intermediate: [
      { type: 'translate', prompts: ['I would like to order'], answers: ['Je voudrais commander'], options: ['Je voudrais commander', 'Je veux manger', 'J\'ai faim', 'Je prends'] },
      { type: 'translate', prompts: ['Where is the bathroom?'], answers: ['Où sont les toilettes?'], options: ['Où sont les toilettes?', 'Où est la gare?', 'Comment aller à?', 'C\'est loin?'] },
      { type: 'translate', prompts: ['I don\'t understand'], answers: ['Je ne comprends pas'], options: ['Je ne comprends pas', 'Je ne sais pas', 'Je ne peux pas', 'Je n\'ai pas'] },
      { type: 'translate', prompts: ['Can you help me?'], answers: ['Pouvez-vous m\'aider?'], options: ['Pouvez-vous m\'aider?', 'Où allez-vous?', 'Que faites-vous?', 'Comment allez-vous?'] },
      { type: 'translate', prompts: ['I like French cuisine'], answers: ['J\'aime la cuisine française'], options: ['J\'aime la cuisine française', 'Je mange bien', 'C\'est délicieux', 'J\'ai faim'] }
    ],
    advanced: [
      { type: 'translate', prompts: ['I would have preferred'], answers: ['J\'aurais préféré'], options: ['J\'aurais préféré', 'Je préfère', 'J\'aimerais', 'Je voudrais'] },
      { type: 'translate', prompts: ['I have been living in Paris'], answers: ['J\'habite à Paris'], options: ['J\'habite à Paris', 'Je vis à Paris', 'Je suis à Paris', 'Je reste à Paris'] },
      { type: 'translate', prompts: ['What would you suggest?'], answers: ['Que suggéreriez-vous?'], options: ['Que suggéreriez-vous?', 'Que pensez-vous?', 'Qu\'en dites-vous?', 'Quel est votre avis?'] }
    ]
  },

  german: {
    beginner: [
      { type: 'translate', prompts: ['Hello'], answers: ['Hallo'], options: ['Hallo', 'Tschüss', 'Danke', 'Bitte'] },
      { type: 'translate', prompts: ['Good morning'], answers: ['Guten Morgen'], options: ['Guten Morgen', 'Guten Abend', 'Gute Nacht', 'Auf Wiedersehen'] },
      { type: 'translate', prompts: ['How are you?'], answers: ['Wie geht es dir?'], options: ['Wie geht es dir?', 'Wer bist du?', 'Wo gehst du?', 'Was machst du?'] },
      { type: 'translate', prompts: ['Thank you'], answers: ['Danke'], options: ['Danke', 'Bitte', 'Tschüss', 'Ja'] }
    ],
    intermediate: [
      { type: 'translate', prompts: ['I would like to order'], answers: ['Ich möchte bestellen'], options: ['Ich möchte bestellen', 'Ich will essen', 'Ich habe Hunger', 'Ich nehme'] },
      { type: 'translate', prompts: ['Where is the train station?'], answers: ['Wo ist der Bahnhof?'], options: ['Wo ist der Bahnhof?', 'Wie komme ich zum?', 'Können Sie mir helfen?', 'Ist es weit?'] },
      { type: 'translate', prompts: ['I speak a little German'], answers: ['Ich spreche ein bisschen Deutsch'], options: ['Ich spreche ein bisschen Deutsch', 'Ich lerne Deutsch', 'Ich verstehe Deutsch', 'Ich kann Deutsch'] },
      { type: 'translate', prompts: ['Do you understand me?'], answers: ['Verstehen Sie mich?'], options: ['Verstehen Sie mich?', 'Sprechen Sie Deutsch?', 'Können Sie mir helfen?', 'Was bedeutet das?'] }
    ],
    advanced: [
      { type: 'translate', prompts: ['I would have liked to visit Berlin'], answers: ['Ich hätte gerne Berlin besucht'], options: ['Ich hätte gerne Berlin besucht', 'Ich möchte Berlin besuchen', 'Ich werde Berlin besuchen', 'Ich besuche Berlin'] },
      { type: 'translate', prompts: ['Could you please explain that again?'], answers: ['Könnten Sie das bitte noch einmal erklären?'], options: ['Könnten Sie das bitte noch einmal erklären?', 'Können Sie das wiederholen?', 'Was bedeutet das?', 'Ich verstehe nicht'] },
      { type: 'translate', prompts: ['I have been living in Germany for three years'], answers: ['Ich lebe seit drei Jahren in Deutschland'], options: ['Ich lebe seit drei Jahren in Deutschland', 'Ich wohne in Deutschland', 'Ich bin seit drei Jahren hier', 'Ich bleibe in Deutschland'] },
      { type: 'translate', prompts: ['I would have done it differently'], answers: ['Ich hätte es anders gemacht'], options: ['Ich hätte es anders gemacht', 'Ich würde es anders machen', 'Ich mache es anders', 'Das war nicht richtig'] }
    ]
  },

  italian: {
    beginner: [
      { type: 'translate', prompts: ['Good morning'], answers: ['Buongiorno'], options: ['Buongiorno', 'Buonasera', 'Ciao', 'Arrivederci'] },
      { type: 'translate', prompts: ['How are you?'], answers: ['Come stai?'], options: ['Come stai?', 'Chi sei?', 'Dove vai?', 'Cosa fai?'] },
      { type: 'translate', prompts: ['Please'], answers: ['Per favore'], options: ['Per favore', 'Grazie', 'Prego', 'Scusi'] },
      { type: 'translate', prompts: ['My name is...'], answers: ['Mi chiamo...'], options: ['Mi chiamo...', 'Come stai?', 'Chi sei?', 'Dove vai?'] }
    ],
    intermediate: [
      { type: 'translate', prompts: ['I would like a coffee'], answers: ['Vorrei un caffè'], options: ['Vorrei un caffè', 'Prendo un caffè', 'Ho bisogno di caffè', 'Mi piace il caffè'] },
      { type: 'translate', prompts: ['Where is the bathroom?'], answers: ['Dov\'è il bagno?'], options: ['Dov\'è il bagno?', 'Dov\'è la stazione?', 'Come si arriva?', 'È lontano?'] },
      { type: 'translate', prompts: ['I don\'t understand'], answers: ['Non capisco'], options: ['Non capisco', 'Non so', 'Non posso', 'Non ho'] },
      { type: 'translate', prompts: ['Can you help me?'], answers: ['Può aiutarmi?'], options: ['Può aiutarmi?', 'Dove va?', 'Cosa fa?', 'Come sta?'] }
    ],
    advanced: [
      { type: 'translate', prompts: ['I would have preferred to stay longer'], answers: ['Avrei preferito restare più a lungo'], options: ['Avrei preferito restare più a lungo', 'Vorrei restare di più', 'Mi piacerebbe rimanere', 'Devo restare qui'] },
      { type: 'translate', prompts: ['Could you explain that in detail?'], answers: ['Potresti spiegarlo in dettaglio?'], options: ['Potresti spiegarlo in dettaglio?', 'Puoi ripetere?', 'Non ho capito', 'Cosa significa?'] },
      { type: 'translate', prompts: ['I have been studying Italian for two years'], answers: ['Studio l\'italiano da due anni'], options: ['Studio l\'italiano da due anni', 'Sto studiando italiano', 'Voglio studiare italiano', 'Ho studiato italiano'] },
      { type: 'translate', prompts: ['I would recommend this restaurant'], answers: ['Consiglierei questo ristorante'], options: ['Consiglierei questo ristorante', 'Mi piace questo ristorante', 'È un buon ristorante', 'Dovresti provare questo ristorante'] }
    ]
  },

  portuguese: {
    beginner: [
      { type: 'translate', prompts: ['Good morning'], answers: ['Bom dia'], options: ['Bom dia', 'Boa noite', 'Olá', 'Tchau'] },
      { type: 'translate', prompts: ['How are you?'], answers: ['Como vai você?'], options: ['Como vai você?', 'Quem é você?', 'Onde vai?', 'O que faz?'] },
      { type: 'translate', prompts: ['Please'], answers: ['Por favor'], options: ['Por favor', 'Obrigado', 'De nada', 'Desculpe'] },
      { type: 'translate', prompts: ['My name is...'], answers: ['Meu nome é...'], options: ['Meu nome é...', 'Como vai?', 'Quem é?', 'Onde vai?'] }
    ],
    intermediate: [
      { type: 'translate', prompts: ['I would like water'], answers: ['Eu gostaria de água'], options: ['Eu gostaria de água', 'Quero água', 'Preciso de água', 'Tem água?'] },
      { type: 'translate', prompts: ['Where is the bathroom?'], answers: ['Onde fica o banheiro?'], options: ['Onde fica o banheiro?', 'Onde é a estação?', 'Como chego lá?', 'É longe?'] },
      { type: 'translate', prompts: ['I don\'t understand'], answers: ['Não entendo'], options: ['Não entendo', 'Não sei', 'Não posso', 'Não tenho'] },
      { type: 'translate', prompts: ['Can you help me?'], answers: ['Pode me ajudar?'], options: ['Pode me ajudar?', 'Onde vai?', 'O que faz?', 'Como vai?'] }
    ],
    advanced: [
      { type: 'translate', prompts: ['I would have gone if I had known'], answers: ['Eu teria ido se soubesse'], options: ['Eu teria ido se soubesse', 'Eu iria se soubesse', 'Eu vou se souber', 'Eu queria ir'] },
      { type: 'translate', prompts: ['Could you explain that more clearly?'], answers: ['Poderia explicar isso mais claramente?'], options: ['Poderia explicar isso mais claramente?', 'Pode repetir?', 'Não entendi', 'O que significa?'] },
      { type: 'translate', prompts: ['I have been working here for five years'], answers: ['Eu trabalho aqui há cinco anos'], options: ['Eu trabalho aqui há cinco anos', 'Estou trabalhando aqui', 'Trabalhei aqui', 'Vou trabalhar aqui'] },
      { type: 'translate', prompts: ['I would suggest trying the local food'], answers: ['Eu sugeriria experimentar a comida local'], options: ['Eu sugeriria experimentar a comida local', 'Deve provar a comida', 'A comida é boa', 'Experimenta isto'] }
    ]
  },

  japanese: {
    beginner: [
      { type: 'translate', prompts: ['Hello'], answers: ['こんにちは'], options: ['こんにちは', 'さようなら', 'おはよう', 'こんばんは'] },
      { type: 'translate', prompts: ['Thank you'], answers: ['ありがとう'], options: ['ありがとう', 'お願いします', 'すみません', 'ごめんなさい'] },
      { type: 'translate', prompts: ['Please'], answers: ['お願いします'], options: ['お願いします', 'ありがとう', 'すみません', 'ごめんなさい'] },
      { type: 'translate', prompts: ['My name is...'], answers: ['私の名前は...'], options: ['私の名前は...', 'お元気ですか', '誰ですか', 'どこへ行きますか'] }
    ],
    intermediate: [
      { type: 'translate', prompts: ['Where is the station?'], answers: ['駅はどこですか？'], options: ['駅はどこですか？', '何時ですか？', 'お名前は？', 'いくらですか？'] },
      { type: 'translate', prompts: ['I don\'t understand'], answers: ['分かりません'], options: ['分かりません', '知りません', 'できません', 'ありません'] },
      { type: 'translate', prompts: ['Can you help me?'], answers: ['手伝っていただけますか？'], options: ['手伝っていただけますか？', 'どちらへ？', '何をしていますか？', 'お元気ですか？'] }
    ],
    advanced: [
      { type: 'translate', prompts: ['I would like to improve my Japanese'], answers: ['日本語が上手になりたいです'], options: ['日本語が上手になりたいです', '日本語を勉強しています', '日本語が好きです', '日本語を話せます'] },
      { type: 'translate', prompts: ['Could you explain that in simpler terms?'], answers: ['もっと簡単に説明していただけませんか？'], options: ['もっと簡単に説明していただけませんか？', 'もう一度お願いします', '分かりません', 'どういう意味ですか？'] },
      { type: 'translate', prompts: ['I have been living in Japan for one year'], answers: ['日本に一年住んでいます'], options: ['日本に一年住んでいます', '日本に住んでいます', '日本に来ました', '日本が好きです'] },
      { type: 'translate', prompts: ['I would recommend visiting Kyoto'], answers: ['京都に行くことをお勧めします'], options: ['京都に行くことをお勧めします', '京都に行きましょう', '京都は素晴らしいです', '京都が好きです'] }
    ]
  }
};