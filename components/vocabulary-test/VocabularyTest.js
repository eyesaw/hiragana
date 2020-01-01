import wordlist from './vocabulary';
import _ from 'lodash';

export default {
  data() {
    return {
      testData: [],
      question: '',
      answer: '',
      description: '',
      success: 0,
      modalStatus: false,
      errorCount: 0,
      error: false,
      choices: [],
    };
  },
  created() {
    this.testData = wordlist['wordlist'];

    this.getNewTestData();
  },
  methods: {
    toggleModal() {
      this.modalStatus = !this.modalStatus;
    },

    checkAnswer(userInput) {
      if (userInput.toLowerCase() === this.answer.toLowerCase()) {
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
      const falseData = [];
      while (falseData.length < 2) {
        const falseChar = this.getRandomFromTestSet();

        // check if it doesnt contain our correct data
        if (JSON.stringify(data) === JSON.stringify(falseChar)) continue;
        falseData.push(falseChar);
      }

      falseData.push(data);
      this.choices = _.shuffle(falseData);
      this.question = data.japanese;
      // this.answer = this.question = Object.keys(data)[0];
      this.answer = data.translation;
      this.description = data.description + ' - ' + data.japanese.romaji;
      this.error = false;
    },

    getRandomFromTestSet() {
      // eslint-disable-next-line max-len
      const randomInt = Math.floor(Math.random() * ((this.testData.length - 1) - 0 + 1)) + 0;
      return this.testData[randomInt];
    },
  },
};
