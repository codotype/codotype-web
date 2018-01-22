// import Factory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
// const actions = {
//   fetchCollection: ({ commit }) => Factory.fetchCollection({ commit }),

//   create: ({ commit }, attributes) => Factory.create({ commit }, attributes),

//   update: ({ commit }, attributes) => Factory.update({ commit }, attributes),

//   destroy: ({ commit }, id) => Factory.destroy({ commit }, id)
// }

// // // //
// import _ from 'lodash'
// import store from '@/store'

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }) => {
    commit('fetching', true)
    setTimeout(() => {
      commit('fetching', false)
    }, 500)
  },

  create: ({ commit }, model) => {
    commit('persist', { record: model, redirect: true })
  },

  update: ({ commit }, model) => {
    commit('persist', { record: model, redirect: true })
  },

  destroy: ({ commit }, model) => {
    commit('remove', { record: model })
  },

  generate: ({ commit }, model) => {
    console.log('GENERATE PROJECT')
  }
}

// // // //

export default actions
