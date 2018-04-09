import _ from 'lodash'
import { DEFAULT_SCHEMA } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'
const titleize = require('underscore.string/titleize')
const underscored = require('underscore.string/underscored')
const pluralize = require('pluralize')

// Schema module actions
export default {
  ...SELECT_MODEL_ACTIONS,
  selectModel: ({ commit, state }, model_id) => {
    let model = _.find(state.collection, { _id: model_id })
    commit('selectedModel', model)
    commit('attribute/collection', model.attributes, { root: true })
  },
  create ({ state, commit }) {
    commit('persist', { schema: state.newModel })
  },
  edit ({ state, commit }, schema) {
    commit('editModel', schema)
  },
  destroy ({ state, commit }) {
  },
  resetNewModel ({ commit }) {
    let newModel = _.cloneDeep(DEFAULT_SCHEMA)
    return commit('newModel', newModel)
  },
  setLabel ({ state }, { schema, label }) {
    schema.label = titleize(label)
    schema.label_plural = pluralize(titleize(label))
    schema.identifier = underscored(label)
    schema.identifier_plural = underscored(pluralize(label))
  }
}
