export const state = () => ({
  mode: 0
})
  
export const mutations = {
  setMode (state, mode) {
    state.mode = mode
  }
}

export const getters = {
  getMode(state) {
    return state.mode
  },
}