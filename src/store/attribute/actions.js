import _ from 'lodash'
import { DEFAULT_ATTRIBUTE } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'

// Attribute module actions
export default {
  ...SELECT_MODEL_ACTIONS,
  create ({ state, commit }) {
    commit('persist', { schema: state.newModel })
  },
  resetNewModel ({ state, commit }) {
    let newModel = _.cloneDeep(DEFAULT_ATTRIBUTE)
    newModel.order = state.collection.length
    return commit('newModel', newModel)
  }
}
