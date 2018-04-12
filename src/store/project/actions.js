import _ from 'lodash'
import { DEFAULT_PROJECT, DEFAULT_USER_SCHEMA, CREATE_SUCCESS_NOTIFICATION } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'
import router from '@/routers'

const underscored = require('underscore.string/underscored')
// TODO - use this instead?
// import { underscored } from 'underscore.string'

export default {
  ...SELECT_MODEL_ACTIONS,
  selectModel: ({ commit, state }, model_id) => {
    let model = _.find(state.collection, { _id: model_id })
    commit('selectedModel', model)
    commit('schema/collection', model.schemas, { root: true })
    // TODO - integrate with record Vuex store
    // commit('record/collection', model.seeds, { root: true })
  },
  fetchCollection: ({ rootGetters, commit }) => {
    commit('fetching', true)
    setTimeout(() => {
      commit('fetching', false)
    }, 500)
  },

  create: ({ state, dispatch, commit }) => {
    dispatch('persist', { record: _.cloneDeep(state.newModel) })

    // Displays encouraging notification
    commit('notification/add', CREATE_SUCCESS_NOTIFICATION, { root: true })

    // Resets state.newModel
    dispatch('resetNewModel')
  },

  persist: ({ dispatch, commit, state }, { record }) => {
    let recordId = record._id
    let collection = state.collection

    if (record._id) {
      collection = _.map(state.collection, (s) => {
        if (s._id === record._id) {
          return record
        } else {
          return s
        }
      })
    } else {
      recordId = 'PR_' + Math.floor((Math.random() * 100000000000000) + 1)
      record._id = recordId
      collection.push(record)
    }

    // Updates state.collection
    commit('collection', collection)
  },

  update: ({ dispatch, state }) => {
    dispatch('persist', { record: state.current })
  },

  destroy: ({ commit, state }, model) => {
    let collection = _.filter(state.collection, (s) => { return s._id !== model._id })
    commit('collection', collection)
  },

  exportJson: ({ commit }, model) => {
    console.log('EXPORT APP:')
    console.log(JSON.stringify(model, null, 2))
    // TODO - use DownloadFile to download the .json export
  },

  setIdentifier: ({ state, commit }) => {
    let { newModel } = state
    newModel.identifier = underscored(newModel.label)
    commit('newModel', newModel)
  },

  resetNewModel: ({ commit }) => {
    let newModel = _.cloneDeep(DEFAULT_PROJECT)
    let userSchema = _.cloneDeep(DEFAULT_USER_SCHEMA)
    userSchema._id = _.uniqueId('SCH_')
    newModel.schemas.push(userSchema)
    commit('newModel', newModel)
  },

  cloneExample: ({ dispatch, commit }, example) => {
    // Resets project, schema, and attribute IDs
    // TODO - handle seed data as well
    let projectModel = _.cloneDeep(example)
    projectModel._id = null
    projectModel.schemas = _.map(projectModel.schemas, (s) => {
      s._id = 'SCH_' + Math.floor((Math.random() * 100000000000000) + 1)
      s.attributes = _.map(s.attributes, (a) => {
        a._id = 'ATTR_' + Math.floor((Math.random() * 100000000000000) + 1)
        return a
      })
      return s
    })

    // Adds to the project collection
    dispatch('persist', { record: projectModel })

    // Navigates to /projects/id
    router.push('/projects/' + projectModel._id)
  }
}
