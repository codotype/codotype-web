import _ from 'lodash'
import { DEFAULT_ATTRIBUTE } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'

// Attribute module actions
export default {
  ...SELECT_MODEL_ACTIONS,
  resetNewModel ({ state, commit }) {
    let newModel = _.cloneDeep(DEFAULT_ATTRIBUTE)
    newModel.order = state.collection.length
    return commit('newModel', newModel)
  },
  create ({ state, commit, dispatch }) {
    let collection = state.collection
    collection.push(_.cloneDeep(state.newModel))

    commit('collection', collection)
    commit('schema/attributes', collection, { root: true })
    dispatch('resetNewModel')
  },
  destroy ({ state, commit }, model) {
    let collection = _.filter(state.collection, (m) => { return m._id !== model._id })
    commit('collection', collection)
    commit('schema/attributes', collection, { root: true })
  }
}
