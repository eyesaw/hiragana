export default {
  data() {
    return {
      testData: [
        {
          japanese: {
            romaji: 'watashi',
            kanji: '私',
            hiragana: 'わたし',
          },
          translation: 'ich',
          describtion: '(formell für Männer; üblich für Frauen)',
        },
        {
          japanese: {
            romaji: 'boku',
            kanji: '僕',
            hiragana: 'ぼく',
          },
          translation: 'ich',
          describtion: '(üblich für Männer)',
        },
        {
          japanese: {
            romaji: 'kare',
            kanji: '彼',
            hiragana: 'かれ',
          },
          translation: 'er',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'kanojo',
            kanji: '彼女',
            hiragana: 'かのじょ',
          },
          translation: 'sie',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'anata',
            kanji: 'あなた',
            hiragana: '',
          },
          translation: 'Sie',
          describtion: '(singular/üblich)',
        },
        {
          japanese: {
            romaji: 'kore',
            kanji: 'これ',
            hiragana: '',
          },
          translation: 'das',
          describtion: '(Objekt, d.h. Akkusativobjekt)',
        },
        {
          japanese: {
            romaji: 'kare',
            kanji: '彼',
            hiragana: 'かれ',
          },
          translation: 'er',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'koko',
            kanji: 'ここ',
            hiragana: '',
          },
          translation: 'hier',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'kono',
            kanji: 'この',
            hiragana: '',
          },
          translation: 'dies',
          describtion: '(z.B. diese Füllfeder)',
        },
        {
          japanese: {
            romaji: 'sore',
            kanji: 'それ',
            hiragana: '',
          },
          translation: 'das',
          describtion: '(Objekt)',
        },
        {
          japanese: {
            romaji: 'soko',
            kanji: 'そこ',
            hiragana: '',
          },
          translation: 'da',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'sono',
            kanji: 'その',
            hiragana: '',
          },
          translation: 'jene',
          describtion: '(z.B. jene Füllfeder)',
        },
        {
          japanese: {
            romaji: 'hito',
            kanji: '人',
            hiragana: 'ひと',
          },
          translation: 'Person',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'inu',
            kanji: '犬',
            hiragana: 'いぬ',
          },
          translation: 'Hund',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'neko',
            kanji: '猫',
            hiragana: 'ねこ',
          },
          translation: 'Katze',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'ie',
            kanji: '家',
            hiragana: 'いえ',
          },
          translation: 'Haus',
          describtion: '',
        },
        {
          japanese: {
            romaji: 'arigatou',
            kanji: 'ありがとう',
            hiragana: '',
          },
          translation: 'Danke',
          describtion: '(üblich)',
        },
        {
          japanese: {
            romaji: 'arigatou gozaimasu',
            kanji: 'ありがとうございます',
            hiragana: '',
          },
          translation: 'Danke',
          describtion: '(formell)',
        },
        {
          japanese: {
            romaji: 'douitashimashite',
            kanji: 'どういたしまして',
            hiragana: '',
          },
          translation: 'nichts zu danken',
          describtion: '(üblich)',
        },
        {
          japanese: {
            romaji: 'ohayou',
            kanji: 'おはよう',
            hiragana: '',
          },
          translation: 'Guten Morgen',
          describtion: '(informell)',
        },
        {
          japanese: {
            romaji: 'ohayou gozaimasu',
            kanji: 'おはようございます',
            hiragana: '',
          },
          translation: 'Guten Morgen',
          describtion: '(üblich u. formell)',
        },
        {
          japanese: {
            romaji: 'konnichi wa',
            kanji: 'こんにちは',
            hiragana: '',
          },
          translation: 'Guten Tag',
          describtion: '(üblich)',
        },
        {
          japanese: {
            romaji: 'konban wa',
            kanji: 'こんばんは',
            hiragana: '',
          },
          translation: 'Guten Abend',
          describtion: '(üblich)',
        },
        {
          japanese: {
            romaji: 'sayonara',
            kanji: 'さよなら',
            hiragana: '',
          },
          translation: 'Auf wiedersehen',
          describtion: '(üblich)',
        },
      ],
      userInput: '',
      question: '',
      answer: '',
      describtion: '',
      success: 0,
      skipped: 0,
      modalStatus: false,
      checkClass: false,
      errorCount: 0,
      error: false,
    };
  },
  created() {
    this.getNewTestData();
  },
  methods: {
    toggleModal() {
      this.modalStatus = !this.modalStatus;
    },

    async checkIconTimer() {
      this.checkClass = true;
      setTimeout(() => {
        this.checkClass = false;
      }, 1000);
    },

    checkAnswer() {
      if (this.userInput.toLowerCase() === this.answer.toLowerCase()) {
        this.success += 1;
        this.getNewTestData();
        this.userInput = '';
        this.error = false;
        return;
      }

      this.errorCount += 1;
      this.error = true;
      return;
    },

    getNewTestData() {
      const data = this.getRandomFromTestSet();
      this.question = data.japanese;
      this.answer = data.translation;
      this.describtion = data.describtion + ' - ' + data.japanese.romaji;
      this.error = false;
    },

    getRandomFromTestSet() {
      // eslint-disable-next-line max-len
      const randomInt = Math.floor(Math.random() * ((this.testData.length - 1) - 0 + 1)) + 0;
      return this.testData[randomInt];
    },
  },
};
