import { GENERATE_ROUTE } from './constants'
const DownloadFile = require('downloadjs')

export default {
  generate: ({ rootGetters, commit }) => {
    console.log(JSON.stringify(rootGetters['project/selectedModel'], null, 2))
    return new Promise((resolve, reject) => {
      return fetch(GENERATE_ROUTE, {
        method: 'post',
        body: JSON.stringify(rootGetters['project/selectedModel']),
        headers: new Headers({ 'Content-Type': 'application/json' })
      })
      .then((response) => { return response.blob() })
      .then((blob) => { return resolve(blob) })
      .catch((err) => { return reject(err) })
    })
    .then((blob) => {
      console.log('GENERATED')
      console.log(blob)
      DownloadFile(blob, 'app.zip', 'application/zip')
    })
  },

  setActivated: ({ commit }, activated) => {
    commit('activated', activated)
  },

  // NOTE - used to export a specific build configuration
  exportJson: ({ commit }, model) => {
    console.log('EXPORT APP:')
    console.log(JSON.stringify(model, null, 2))
    // TODO - use DownloadFile to download the .json export
  }

}
