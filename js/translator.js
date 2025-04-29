class TranslationService {
  constructor() {
    this.supportedLanguages = {
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'it': 'Italian',
      'pt': 'Portuguese',
      'ja': 'Japanese'
    };
    
    this.baseUrl = 'https://libretranslate.com';
  }

  async translate(text, targetLang, sourceLang = 'en') {
    try {
      this.validateText(text);
      this.validateLanguage(targetLang);

      const response = await fetch(`${this.baseUrl}/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: "text"
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Translation error:', response.status, errorData);
        throw new Error('Translation failed');
      }

      const data = await response.json();
      if (!data.translatedText) {
        throw new Error('Invalid translation response');
      }

      return data.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      throw new Error(`Translation failed: ${error.message}`);
    }
  }

  async speak(text, lang) {
    try {
      this.validateText(text);
      this.validateLanguage(lang);

      const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${this.apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: lang },
          audioConfig: { audioEncoding: 'MP3' }
        })
      });

      if (!response.ok) {
        throw new Error('Text-to-speech request failed');
      }

      const { audioContent } = await response.json();
      const audioBlob = new Blob(
        [Uint8Array.from(atob(audioContent), c => c.charCodeAt(0))], 
        { type: 'audio/mp3' }
      );
      
      return this.playAudio(audioBlob);
    } catch (error) {
      console.error('Text-to-speech error:', error);
      throw new Error(`Speech generation failed: ${error.message}`);
    }
  }

  playAudio(audioBlob) {
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    return new Promise((resolve, reject) => {
      audio.addEventListener('ended', () => {
        URL.revokeObjectURL(audioUrl);
        resolve();
      });

      audio.addEventListener('error', () => {
        URL.revokeObjectURL(audioUrl);
        reject(new Error('Audio playback failed'));
      });

      audio.play().catch(error => {
        URL.revokeObjectURL(audioUrl);
        reject(error);
      });
    });
  }

  validateLanguage(lang) {
    if (!this.supportedLanguages[lang]) {
      throw new Error(`Unsupported language code: ${lang}`);
    }
  }

  validateText(text) {
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      throw new Error('Invalid text input');
    }
  }

  getSupportedLanguages() {
    return { ...this.supportedLanguages };
  }
}