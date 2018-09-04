import cloneDeep from 'lodash/cloneDeep'
import { DEFAULT_SCHEMA } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'
import { inflateMeta } from '@codotype/util/lib/inflateMeta'

// Schema module actions
export default {
  ...SELECT_MODEL_ACTIONS,
  selectModel: ({ commit, state }, model_id) => {
    let model = state.collection.find(m => m._id === model_id)
    commit('selectedModel', model)
    commit('attribute/collection', model.attributes, { root: true })
    commit('relation/collection', model.relations, { root: true })
  },
  create ({ state, dispatch, commit }) {
    let model = cloneDeep(state.newModel)
    dispatch('resetNewModel')
    model = { ...model, ...inflateMeta(model.label) }
    commit('persist', { schema: model })
  },
  edit ({ state, commit }, schema) {
    commit('editModel', schema)
  },
  remove ({ state, commit }, schema) {
    let collection = state.collection.filter((s) => { return s._id !== schema._id })
    return commit('collection', collection)
  },
  resetNewModel ({ commit }) {
    let newModel = cloneDeep(DEFAULT_SCHEMA)
    return commit('newModel', newModel)
  },
  setLabel ({ state }, { schema, label }) {
    schema = { ...schema, ...inflateMeta(schema.label) }
  }
}
