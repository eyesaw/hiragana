import _ from 'lodash';

export default {
  props: {
    testData: Array,
  },
  data() {
    return {
      question: null,
      answer: null,
      choices: [],
      error: false,
      success: 0,
      errorCount: 0,
    };
  },
  created() {
    this.getNewTestData();
  },
  methods: {

    /**
     * @description validates the answer
     * @param {string} input
     * @return {void}
     */
    checkAnswert(input) {
      if (input === this.answer) {
        this.success += 1;
        this.getNewTestData();
        this.userInput = '';
        this.error = false;
      } else {
        this.errorCount += 1;
        this.error = true;
      }
    },

    /**
     * @description setup new test data
     * @return {void}
     */
    getNewTestData() {
      // get the correct question data
      const data = this.getRandomSelectedHiraganaCharacter();

      // create the mock array
      const falseData = [];

      // fill it with false values
      while (falseData.length < 4) {
        const falseChar = this.getRandomSelectedHiraganaCharacter();

        // check if it doesnt contain our correct data
        if (JSON.stringify(data) === JSON.stringify(falseChar)) continue;
        falseData.push(falseChar);
      }

      // add the correct data to the false ones
      falseData.push(data);

      // shuffle
      this.choices = _.shuffle(falseData);

      // split the data to the answer and question variables
      this.answer = this.question = Object.keys(data)[0];
      // this.answer = Object.values(data)[0];
    },

    /**
     * @description gets a random select char object from the test data set
     * @return {number}
     */
    getRandomSelectedHiraganaCharacter() {
      // eslint-disable-next-line max-len
      const randomInt = Math.floor(Math.random() * ((this.testData.length - 1) - 0 + 1)) + 0;
      return this.testData[randomInt];
    },
  },
};
