import _ from 'lodash'
import { GENERATE_ROUTE, DEFAULT_PROJECT, DEFAULT_USER_SCHEMA } from './constants'
import { SELECT_MODEL_ACTIONS } from '@/store/lib/mixins'

const DownloadFile = require('downloadjs')
const underscored = require('underscore.string/underscored')
// TODO - use this instead?
// import { underscored } from 'underscore.string'

function generateProject (project) {
  return new Promise((resolve, reject) => {
    return fetch(GENERATE_ROUTE, {
      method: 'post',
      body: JSON.stringify(project),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then((response) => { return response.blob() })
    .then((blob) => { return resolve(blob) })
    .catch((err) => { return reject(err) })
  })
}

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  ...SELECT_MODEL_ACTIONS,
  selectModel: ({ commit, state }, model_id) => {
    let model = _.find(state.collection, { _id: model_id })
    commit('selectedModel', model)
    commit('schema/collection', model.schemas, { root: true })
  },
  fetchCollection: ({ commit }) => {
    commit('fetching', true)
    setTimeout(() => {
      commit('fetching', false)
    }, 500)
  },

  create: ({ dispatch, state }) => {
    dispatch('persist', { record: _.cloneDeep(state.newModel) })

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

  generate: ({ state, commit }) => {
    generateProject(state.selectedModel).then((blob) => {
      console.log('GENERATED')
      console.log(blob)
      DownloadFile(blob, 'app.zip', 'application/zip')
    })
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
    userSchema._id = _.uniqueId('SCHEMA_')
    console.log('SET USER SCHEMA ID')
    newModel.schemas.push(userSchema)
    commit('newModel', newModel)
  }
}

// // // //

export default actions
