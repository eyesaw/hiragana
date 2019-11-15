import SingleInput from '~/components/single-input/SingleInput.vue';
import MultipleChoice from '~/components/multiple-choice/MultipleChoice.vue';
import SettingsPanel from '~/components/settings-panel/SettingsPanel.vue';

export default {
  components: {
    SingleInput,
    SettingsPanel,
    MultipleChoice,
  },

  computed: {
    mode() {
      return this.$store.getters['settings/getMode'];
    },
  },
  data() {
    return {
      modalStatus: false,
      testData: null,
    };
  },
  created() {
    this.$store.dispatch('hiragana/addHiragana');
    this.$store.dispatch('hiragana/addKatakana');
    this.testData = this.$store.getters['hiragana/getSelectedHiragana'];

    // eslint-disable-next-line max-len
    this.$store.watch(() => this.$store.getters['settings/getCharset'], (data) => this.allocateCharset(data));
  },
  methods: {
    allocateCharset(charsetData) {
      this.testData = [];
      charsetData.map((name) => {
        const charset = this.$store.getters['hiragana/getSelected' + name];
        charset.map((item) => {
          this.testData.push(item);
        });
      });
    },

    toggleModal() {
      this.modalStatus = !this.modalStatus;
    },
  },
};
