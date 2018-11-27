import cloneDeep from 'lodash/cloneDeep'
import uniqueId from 'lodash/uniqueId'
import ObjectID from 'bson-objectid'
import router from '@/routers'
import { DEFAULT_PROJECT, DEFAULT_USER_SCHEMA } from './constants'
import { SELECT_MODEL_ACTIONS } from '@codotype/ui/src/store/lib/mixins'

// TODO - use this instead?
// import { underscored } from 'underscore.string'

const underscored = require('underscore.string/underscored')
const DownloadFile = require('downloadjs')

export default {
  ...SELECT_MODEL_ACTIONS,
  selectModel: ({ commit, state }, model_id) => {
    if (!model_id) return
    let model = state.collection.find(m => m._id === model_id)

    // Selects the model - sets schema collection
    commit('schema/collection', model.schemas, { root: true })
    commit('schema/selectedModel', model.schemas[0], { root: true })
    commit('selectedModel', model)
  },
  fetchCollection: ({ rootGetters, commit }) => {
    commit('fetching', true)
    setTimeout(() => {
      commit('fetching', false)
    }, 500)
  },

  create: ({ state, dispatch, commit }) => {
    dispatch('persist', { record: cloneDeep(state.newModel) })

    // Displays encouraging notification
    // commit('notification/add', CREATE_SUCCESS_NOTIFICATION, { root: true })

    // Resets state.newModel
    dispatch('resetNewModel')
  },

  persist: ({ dispatch, commit, state }, { record }) => {
    let recordId = record._id
    let collection = state.collection
    let isNew = false
    if (record._id) {
      collection = state.collection.map((s) => {
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
    if (isNew) router.push(`/blueprints/${recordId}`)
  },

  removeSchema: ({ state, commit, dispatch }, { schemaId }) => {
    const selectedModel = state.selectedModel
    selectedModel.schemas = selectedModel.schemas.filter(s => s._id !== schemaId)
    dispatch('persist', { record: selectedModel })
    dispatch('selectModel', selectedModel._id)
  },

  // TODO - re-implement this
  update: ({ dispatch, state }) => {
    // dispatch('persist', { record: state.current })
  },

  // TODO - destroy any reverse relations to this model
  destroy: ({ commit, state }, model) => {
    let collection = state.collection.filter(s => s._id !== model._id)
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

  rename: ({ state, commit, dispatch }, { label }) => {
    const selectedModel = state.selectedModel
    selectedModel.label = label
    selectedModel.identifier = underscored(label)
    dispatch('persist', { record: selectedModel })
    dispatch('selectModel', selectedModel._id)
  },

  resetNewModel: ({ commit }) => {
    let newModel = cloneDeep(DEFAULT_PROJECT)
    let userSchema = cloneDeep(DEFAULT_USER_SCHEMA)
    userSchema._id = uniqueId('SCH_')
    newModel.schemas.push(userSchema)
    commit('newModel', newModel)
  },

  clone: ({ dispatch, commit }, example) => {
    // Resets project, schema, and attribute IDs
    let projectModel = cloneDeep(example)
    projectModel._id = null

    // Adds to the project collection
    dispatch('persist', { record: projectModel })
  }
}
