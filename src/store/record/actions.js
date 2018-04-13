import _ from 'lodash'
import ObjectID from 'bson-objectid'
import router from '@/routers'
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
    model._id = ObjectID().toString()
    collection.push(model)

    commit('collection', collection)
    router.go(-1)
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
    router.go(-1)
    dispatch('clearEditModel')
  },
  destroy ({ state, commit }, model) {
    console.log('DESTROY')
    console.log('DESTROY')
    console.log(model._id)
    let collection = _.filter(state.collection, (m) => { return m._id !== model._id })
    commit('collection', collection)
  }
}
