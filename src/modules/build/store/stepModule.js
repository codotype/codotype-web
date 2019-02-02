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
    increment ({ state, commit }) {
      commit('current', Math.min(state.current + 1, 2))
    },
    decrement ({ state, commit }) {
      commit('current', Math.min(state.current - 1, 0))
    },
    jumpTo ({ state, commit }, step) {
      commit('current', step)
    }
  }

}
