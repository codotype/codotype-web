import _ from 'lodash'
import ObjectID from 'bson-objectid'
import router from '@/routers'
import { DEFAULT_PROJECT, DEFAULT_USER_SCHEMA, CREATE_SUCCESS_NOTIFICATION } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'

// TODO - use this instead?
// import { underscored } from 'underscore.string'

const underscored = require('underscore.string/underscored')
const DownloadFile = require('downloadjs')

export default {
  ...SELECT_MODEL_ACTIONS,
  selectModel: ({ commit, state }, model_id) => {
    let model = _.find(state.collection, { _id: model_id })
    commit('selectedModel', model)
    commit('schema/collection', model.schemas, { root: true })
    commit('schema/selectedModel', model.schemas[0], { root: true })
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
    let isNew = false
    if (record._id) {
      collection = _.map(state.collection, (s) => {
        if (s._id === record._id) {
          return record
        } else {
          return s
        }
      })
    } else {
      isNew = true
      recordId = ObjectID().toString()
      record._id = recordId
      collection.push(record)
    }

    // Updates state.collection
    commit('collection', collection)
    if (isNew) router.push(`/projects/${recordId}`)
  },

  // TODO - re-implement this
  update: ({ dispatch, state }) => {
    // dispatch('persist', { record: state.current })
  },

  // TODO - destroy any reverse relations to this model
  destroy: ({ commit, state }, model) => {
    let collection = _.filter(state.collection, (s) => { return s._id !== model._id })
    commit('collection', collection)
  },

  exportJson: ({ commit }, model) => {
    DownloadFile(JSON.stringify(model, null, 2), `${model.identifier}_codotype.json`, 'application/json')
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
    // projectModel.schemas = _.map(projectModel.schemas, (s) => {
    //   s._id = ObjectID().toString()
    //   s.attributes = _.map(s.attributes, (a) => {
    //     a._id = ObjectID().toString()
    //     return a
    //   })
    //   return s
    // })

    // Adds to the project collection
    dispatch('persist', { record: projectModel })

    // Navigates to /projects/id
    router.push(`/projects/${projectModel._id}`)
  }
}
