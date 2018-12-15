import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep'
import { NEW_MODEL_ACTIONS } from '@codotype/ui/src/store/lib/mixins'
import { DEFAULT_BUILD_STAGE } from './constants'
import buildConfiguration from '@codotype/util/lib/buildConfiguration'
const GENERATE_ROUTE = '/api/generate'
// const DownloadFile = require('downloadjs')

export default {
  ...NEW_MODEL_ACTIONS,
  selectApp ({ state, commit, dispatch }, app_id) {
    // Sets newModel.app_id
    const newModel = cloneDeep(state.newModel)
    newModel.app_id = app_id
    commit('newModel', newModel)

    // sets project.state.selectedModel
    // TODO - move into store mediator
    dispatch('project/selectModel', app_id, { root: true })
  },
  // TODO - stage management should be moved into the `stage` module
  addNewStage ({ state, rootGetters, commit, dispatch }, generator_id) {
    // Checks to ensure this generator isn't already in the build
    if (state.newModel.stages.map(stage => stage.generator_id).includes(generator_id)) return

    // Creates newStage, assigns generator_id
    const newStage = cloneDeep(DEFAULT_BUILD_STAGE)
    newStage.generator_id = generator_id

    // // // //
    // Generates stage configuration object
    // TODO - abstract into @codotype/util

    const generatorMeta = rootGetters['generator/collection'].find(g => g.id === generator_id)

    // Pulls the blueprint to define the build configuration
    const blueprint = rootGetters['project/selectedModel']

    // Generates the stage's configuration from the selected generator
    newStage.configuration = buildConfiguration({ blueprint: blueprint, generator: generatorMeta })

    // Adds the newStage to state.newModel
    const newModel = cloneDeep(state.newModel)

    // TODO - should only be added to newModel.stages
    // once it's been created in the `stage` module
    newModel.stages.push(newStage)
    commit('newModel', newModel)
    // commit('choosingGenerator', false)

    // sets generator.state.selectedModel
    // TODO - should be moved into the `stage` store
    // TODO - should be part of `stage/selectModel` action
    // dispatch('generator/selectModel', generator_id, { root: true })
  },
  selectStage ({ state, commit, dispatch }, stage_id) {
    console.log('SELECT STAGE')
  },

  // removeStage
  // Removes an individual stage from the build
  removeStage ({ state, commit, dispatch }, selectedGeneratorId) {
    const newModel = state.newModel
    newModel.stages = newModel.stages.filter(s => s.generator_id !== selectedGeneratorId)
    commit('newModel', newModel)
    if (newModel.stages[0]) {
      dispatch('generator/selectModel', newModel.stages[0].generator_id, { root: true })
    }
  },

  // generate
  // Builds the application on the server
  // TODO - this needs error handling!
  generate: ({ rootGetters, state, commit }) => {
    // Pulls requisite data from state
    const { stages } = state.newModel
    const blueprint = rootGetters['project/selectedModel']

    // Defines build object to send to the server
    let build = { blueprint, stages }

    // Sets `state.fetching` to `true`
    commit('fetching', true)
    commit('buildFinished', false)

    // Generates the code and downloads the response
    return axios.post(GENERATE_ROUTE, { build })
    .then(({ data }) => {
      console.log(data)
      commit('downloadUrl', data.download_url)
      commit('fetching', false)
      commit('buildFinished', true)
      // console.log(data.download_url)
      window.open(data.download_url)
    })
    .catch((error) => {
      commit('fetching', false)
      commit('buildFinished', false)
      console.log(error)
      // TODO - handle error here
    })
    // DownloadFile(blob, `${blueprint.identifier}_codotype.zip`, 'application/zip')
  }

}
