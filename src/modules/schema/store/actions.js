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
  setLabel ({ state, commit }, { schema, label }) {
    const {
      label_plural,
      identifier,
      identifier_plural,
      class_name,
      class_name_plural
    } = inflateMeta(label)

    schema.label = label // TODO - titleize
    schema.label_plural = label_plural
    schema.identifier = identifier
    schema.identifier = identifier
    schema.identifier_plural = identifier_plural
    schema.identifier_plural = identifier_plural
    schema.class_name = class_name
    schema.class_name = class_name
    schema.class_name_plural = class_name_plural
  }
}
