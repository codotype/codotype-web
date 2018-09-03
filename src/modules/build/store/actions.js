import cloneDeep from 'lodash/cloneDeep'
import { NEW_MODEL_ACTIONS } from '@/store/lib/mixins'
import { DEFAULT_BUILD_STAGE } from './constants'
const GENERATE_ROUTE = '/api/generate'
const DownloadFile = require('downloadjs')

export default {
  ...NEW_MODEL_ACTIONS,
  selectApp ({ state, commit, dispatch }, app_id) {
    // Sets newModel.app_id
    const newModel = cloneDeep(state.newModel)
    newModel.app_id = app_id
    commit('newModel', newModel)

    // sets project.state.selectedModel
    dispatch('project/selectModel', app_id, { root: true })
  },
  // TODO - stage management should be moved into the `stage` module
  addNewStage ({ state, commit, dispatch }, generator_id) {
    // Checks to ensure this generator isn't already in the build
    if (state.newModel.stages.map(stage => stage.generator_id).includes(generator_id)) return

    // Creates newStage, assigns generator_id
    const newStage = cloneDeep(DEFAULT_BUILD_STAGE)
    newStage.generator_id = generator_id

    // TODO - inflate newStage with the data structure build from a generator's configuration

    // Adds the newStage to state.newModel
    const newModel = cloneDeep(state.newModel)

    // TODO - should only be added to newModel.stages
    // once it's been created in the `stage` module
    newModel.stages.push(newStage)
    commit('newModel', newModel)
    commit('choosingGenerator', false)

    // sets generator.state.selectedModel
    // TODO - should be moved into the `stage` store
    // TODO - should be part of `stage/selectModel` action
    dispatch('generator/selectModel', generator_id, { root: true })
  },
  selectStage ({ state, commit, dispatch }, stage_id) {
    console.log('SELECT STAGE')
  },

  // generate
  // Builds the application on the server
  // TODO - this needs error handling!
  generate: ({ rootGetters, state, commit }) => {
    // console.log(JSON.stringify(rootGetters['project/selectedModel'], null, 2))

    // Pulls requisite data from state
    const { stages } = state.newModel
    const app = rootGetters['project/selectedModel']

    // Defines build object to send to the server
    let build = { app, stages }

    // console.log(build)

    commit('fetching', true)
    return fetch(GENERATE_ROUTE, {
      method: 'post',
      body: JSON.stringify({ build }),
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
  }

}
