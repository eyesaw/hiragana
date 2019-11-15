export default {
  components: {
  },
  watch: {
    mode(mode) {
      this.$store.commit('settings/setMode', mode);
    },

    charset(charset) {
      this.$store.commit('settings/setCharset', charset);
    },
  },
  computed: {
    charsetHiragana() {
      return this.charset.includes('Hiragana');
    },

    charsetKatakana() {
      return this.charset.includes('Katakana');
    },
    computedCharset: {
      get: function() {
        return this.charset;
      },

      set: function(value) {
        if (value.length < 1) return;
        this.charset = value;
      },
    },
  },
  data() {
    return {
      mode: 0,
      charset: ['Hiragana'],
    };
  },
  methods: {
  },
};
