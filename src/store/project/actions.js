
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
    generateProject(model).then((blob) => {
      console.log('GENERATED')
      console.log(blob)
      DownloadFile(blob, 'app.zip', 'application/zip')
    })
  },

  exportJson: ({ commit }, model) => {
    console.log('EXPORT APP:')
    console.log(JSON.stringify(model, null, 2))
    // TODO - use DownloadFile to download the .json export
  }
}

// // // //

export default actions
