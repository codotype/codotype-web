import { GENERATE_ROUTE } from './constants'
const DownloadFile = require('downloadjs')

export default {
  // TODO - this needs error handling!
  generate: ({ rootGetters, commit }) => {
    console.log(JSON.stringify(rootGetters['project/selectedModel'], null, 2))
    commit('fetching', true)
    return fetch(GENERATE_ROUTE, {
      method: 'post',
      body: JSON.stringify(rootGetters['project/selectedModel']),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then((response) => { return response.blob() })
    .catch((err) => {
      commit('fetching', false)
      console.log('ERR ERR')
      throw err
      // return reject(err)
    })
    .then((blob) => {
      commit('fetching', false)
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
