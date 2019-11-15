export const state = () => ({
  mode: 0,
  charset: "Hiragana"
})
  
export const mutations = {
  setMode (state, mode) {
    state.mode = mode
  },
  
  setCharset (state, charset) {
    state.charset = charset
  }
}

export const getters = {
  getMode(state) {
    return state.mode
  },
  
  getCharset(state) {
    return state.charset
  },
}