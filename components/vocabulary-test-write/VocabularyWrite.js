import wordlist from '../vocabulary-test/vocabulary';
import _ from 'lodash';

export default {
  data() {
    return {
      testData: null,
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
    this.getTestData();
  },
  methods: {
    check() {
      if (
        this.answer.toLowerCase() == this.testData.japanese.romaji.toLowerCase() ||
        this.answer == this.testData.japanese.hiragana ||
        this.answer == this.testData.japanese.kanji
      ) {
        this.success ++;
        this.getTestData();
        this.answer = '';
        this.error = false;
      } else {
        this.errorCount += 1;
        this.error = true;
      }
    },

    getTestData() {
      // eslint-disable-next-line max-len
      this.testData = wordlist['wordlist'][Math.floor(Math.random() * (wordlist['wordlist'].length - 1))];
    },

    toggleModal() {
      this.modalStatus = !this.modalStatus;
    },
  },
};
