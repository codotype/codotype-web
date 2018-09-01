import axios from 'axios'
import { GENERATE_ROUTE } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'
const DownloadFile = require('downloadjs')

export default {
  ...SELECT_MODEL_ACTIONS,
  fetchCollection: async ({ commit, state }, model_id) => {
    const { data } = await axios.get('/api/generators')
    console.log(data)
    commit('collection', data)
    return true
  },
  selectModel: ({ commit, state }, model_id) => {
    let model = state.collection.find(m => m.id === model_id) // NOTE - this is only here b.c. generators use `id` instead of `_id`
    commit('selectedModel', model)
    commit('option/collection', model.global_options, { root: true }) // TODO - move into mediator pattern
    commit('addon/collection', model.addons, { root: true }) // TODO - move into mediator pattern
  },
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
