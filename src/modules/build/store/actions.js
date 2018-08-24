import _ from 'lodash'
import { NEW_MODEL_ACTIONS } from '@/store/lib/mixins'
// import { DEFAULT_BUILD, DEFAULT_BUILD_STAGE } from './constants'

export default {
  ...NEW_MODEL_ACTIONS,
  selectApp ({ state, commit, dispatch }, app_id) {
    // Sets newModel.app_id
    const newModel = _.cloneDeep(state.newModel)
    newModel.app_id = app_id
    commit('newModel', newModel)

    // sets project.state.selectedModel
    dispatch('project/selectModel', app_id, { root: true })
  }
}
