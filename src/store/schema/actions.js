import _ from 'lodash'
import { DEFAULT_SCHEMA } from './constants'
const titleize = require('underscore.string/titleize')
const underscored = require('underscore.string/underscored')
const pluralize = require('pluralize')

// Schema module actions
export default {
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
