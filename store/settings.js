export const state = () => ({
  mode: 0,
  charset: 'Hiragana',
  vocabularyMode: false,
});

export const mutations = {
  setMode(state, mode) {
    state.mode = mode;
  },

  setCharset(state, charset) {
    state.charset = charset;
  },

  setVocabularyMode(state, vocabularyMode) {
    state.vocabularyMode = vocabularyMode;
  },
};

export const getters = {
  getMode(state) {
    return state.mode;
  },

  getCharset(state) {
    return state.charset;
  },

  getVocabularyMode(state) {
    return state.vocabularyMode;
  },
};
