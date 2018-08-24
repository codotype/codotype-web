import _ from 'lodash'
import { NEW_MODEL_ACTIONS } from '@/store/lib/mixins'
import { DEFAULT_BUILD_STAGE } from './constants'

export default {
  ...NEW_MODEL_ACTIONS,
  selectApp ({ state, commit, dispatch }, app_id) {
    // Sets newModel.app_id
    const newModel = _.cloneDeep(state.newModel)
    newModel.app_id = app_id
    commit('newModel', newModel)

    // sets project.state.selectedModel
    dispatch('project/selectModel', app_id, { root: true })
  },
  // TODO - stage management should be moved into the `stage` module
  addNewStage ({ state, commit, dispatch }, generator_id) {
    // Creates newStage, assigns generator_id
    const newStage = _.cloneDeep(DEFAULT_BUILD_STAGE)
    newStage.generator_id = generator_id

    // TODO - inflate newStage with the data structure build from a generator's configuration

    // Adds the newStage to state.newModel
    const newModel = _.cloneDeep(state.newModel)

    // TODO - should only be added to newModel.stages
    // once it's been created in the `stage` module
    newModel.stages.push(newStage)
    commit('newModel', newModel)

    // sets generator.state.selectedModel
    // dispatch('generator/selectModel', generator_id, { root: true })
  },
  selectStage ({ state, commit, dispatch }, stage_id) {
    console.log('SELECT STAGE')
  }
}
