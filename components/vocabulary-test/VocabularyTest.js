export default {
  props: {
    testData: Array,
  },
  // watch: {
  //   userInput(data) {
  //     this.checkAnswer();
  //   },
  // },
  data() {
    return {
      // question: null,
      // answer: null,
      // userInput: '',
      // errorCount: 0,
      // success: 0,
      // skipped: 0,
      // modalStatus: false,
      // error: false,
      // checkClass: false,
    };
  },
  created() {
    // this.getNewTestData();
  },
  methods: {
    // toggleModal() {
    //   this.modalStatus = !this.modalStatus;
    // },

    // async checkIconTimer() {
    //   this.checkClass = true;
    //   setTimeout(() => {
    //     this.checkClass = false;
    //   }, 1000);
    // },

    // checkAnswer() {
    //   if (this.userInput.toLowerCase() === this.answer) {
    //     this.success += 1;
    //     this.getNewTestData();
    //     this.userInput = '';
    //     this.error = false;
    //     this.checkIconTimer();
    //     return;
    //   }

    //   if (this.userInput.length === this.answer.length) {
    //     this.errorCount += 1;
    //     this.error = true;
    //     return;
    //   }
    // },

    // getNewTestData() {
    //   const data = this.getRandomSelectedHiraganaCharacter();
    //   this.question = data[Object.keys(data)];
    //   this.answer = Object.keys(data)[0];
    //   this.error = false;
    //   this.checkClass = false;
    // },

    // getRandomSelectedHiraganaCharacter() {
    //   // eslint-disable-next-line max-len
    //   const randomInt = Math.floor(Math.random() * ((this.testData.length - 1) - 0 + 1)) + 0;
    //   return this.testData[randomInt];
    // },
  },
};
