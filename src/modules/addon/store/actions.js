import _ from 'lodash'
import { DEFAULT_ADDON } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'
const titleize = require('underscore.string/titleize')
const underscored = require('underscore.string/underscored')
const classify = require('underscore.string/classify')
const pluralize = require('pluralize')

// Schema module actions
export default {
  ...SELECT_MODEL_ACTIONS,
  selectModel: ({ commit, state }, model_id) => {
    let model = _.find(state.collection, { _id: model_id })
    commit('selectedModel', model)
    commit('attribute/collection', model.attributes, { root: true })
  },
  create ({ state, dispatch, commit }) {
    let model = _.cloneDeep(state.newModel)
    dispatch('resetNewModel')
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
    let newModel = _.cloneDeep(DEFAULT_ADDON)
    return commit('newModel', newModel)
  },
  setLabel ({ state }, { model, label }) {
    model.label = titleize(label)
    model.label_plural = pluralize(titleize(label))
    model.identifier = underscored(label)
    model.identifier_plural = underscored(pluralize(label))
    model.class_name = classify(titleize(label))
    model.class_name_plural = pluralize(classify(titleize(label)))
  }
}
