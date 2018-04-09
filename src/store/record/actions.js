import _ from 'lodash'
import { DEFAULT_RECORD } from './constants'
import { SELECT_MODEL_ACTIONS, EDIT_MODEL_ACTIONS } from '@/store/lib/mixins'

// Record module actions
export default {
  ...SELECT_MODEL_ACTIONS,
  ...EDIT_MODEL_ACTIONS,
  resetNewModel ({ state, commit }, schema_id) {
    let newModel = _.cloneDeep(DEFAULT_RECORD)
    newModel.schema_id = schema_id
    return commit('newModel', newModel)
  },
  create ({ state, commit, dispatch }) {
    let collection = state.collection
    let model = _.cloneDeep(state.newModel)
    model._id = 'RECORD_' + Math.floor((Math.random() * 100000000000000) + 1)
    collection.push(model)

    commit('collection', collection)
    dispatch('resetNewModel')
  },
  update ({ state, commit, dispatch }) {
    let model = _.cloneDeep(state.editModel)

    let collection = state.collection.map((m) => {
      if (m._id === model._id) {
        return model
      } else {
        return m
      }
    })

    commit('collection', collection)
    dispatch('clearEditModel')
  },
  destroy ({ state, commit }, model) {
    let collection = _.filter(state.collection, (m) => { return m._id !== model._id })
    commit('collection', collection)
  }
}
