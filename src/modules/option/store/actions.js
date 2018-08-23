import _ from 'lodash'
import ObjectID from 'bson-objectid'
import { DEFAULT_OPTION } from './constants'
import { SELECT_MODEL_ACTIONS, EDIT_MODEL_ACTIONS } from '@/store/lib/mixins'

// Option module actions
export default {
  ...SELECT_MODEL_ACTIONS,
  ...EDIT_MODEL_ACTIONS,
  resetNewModel ({ state, commit }) {
    let newModel = _.cloneDeep(DEFAULT_OPTION)
    newModel.order = state.collection.length
    console.log(newModel)
    return commit('newModel', newModel)
  },
  create ({ state, commit, dispatch, rootGetters }) {
    // Isolates current Attribute model and the schema to which the attribute belongs
    let model = _.cloneDeep(state.newModel)

    // Assigns uniaue ID to attribute model
    model._id = ObjectID().toString()

    // Updates the collection belonging to the currently selected schema
    let collection = state.collection
    collection.push(model)
    commit('collection', collection)
    // commit('schema/attributes', { collection }, { root: true })
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
    // commit('schema/attributes', { collection }, { root: true })
    dispatch('clearEditModel')
  },
  destroy ({ state, commit, rootGetters }, model) {
    let collection = _.filter(state.collection, (m) => { return m._id !== model._id })
    commit('collection', collection)
    // commit('schema/attributes', { collection }, { root: true })
  }
}
