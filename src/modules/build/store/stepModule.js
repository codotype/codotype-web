// Vuex module to manage build steps
export default {
  namespaced: true,
  state: {
    current: 0
  },
  mutations: {
    current (state, current) {
      state.current = current
    }
  },
  getters: {
    current (state) {
      return state.current
    }
  },
  actions: {
    incrementStep ({ state, commit }) {
      commit('current', state.current + 1)
    },
    decrementStep ({ state, commit }) {
      commit('current', state.current - 1)
    },
    jumpToStep ({ state, commit }, step) {
      commit('current', step)
    }
  }

}
