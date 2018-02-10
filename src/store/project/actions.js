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

// TODO - export to ./constants
const GENERATE_ROUTE = '/api/generate'
const DownloadFile = require('downloadjs')

function generateProject (project) {
  return new Promise((resolve, reject) => {
    return fetch(GENERATE_ROUTE, {
      method: 'post',
      body: JSON.stringify(project),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then((response) => { return response.blob() })
    .then((blob) => { return resolve(blob) })
    .catch((err) => { return reject(err) })
  })
}

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
    // TODO - commit('generating', true)
    // TODO - commit('generating', true)
    generateProject(model).then((blob) => {
      console.log('GENERATED')
      console.log(blob)
      DownloadFile(blob, 'app.zip', 'application/zip')
    })
  }
}

// // // //

export default actions
