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
    reset ({ state, commit }) {
      commit('current', 0)
    },
    increment ({ state, commit }) {
      commit('current', Math.min(state.current + 1, 3))
    },
    decrement ({ state, commit }) {
      commit('current', Math.max(state.current - 1, 0))
    },
    jumpTo ({ state, commit }, step) {
      commit('current', step)
    }
  }

}
