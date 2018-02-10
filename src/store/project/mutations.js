import _ from 'lodash'
import router from '@/routers'
import { DEFAULT_USER_SCHEMA } from '@/store/schema/constants'

const underscored = require('underscore.string/underscored')

// TODO - abstract into ./constants
const DEFAULT_PROJECT = {
  label: 'DEFAULT_LABEL',
  identifier: '',
  schemas: [
    DEFAULT_USER_SCHEMA
  ],
  stack: {
    server: {
      id: 'expressjs'
    },
    client: {
      id: 'vuejs'
    },
    database: {
      id: 'mongodb'
    },
    features: [],
    deployments: []
  }
}

// // // //

// Record Module mutations
const mutations = {
  sync (state, collection) {
    state.collection = collection
  },
  fetching (state, isFetching) {
    state.fetching = false
  },
  removeSchema (state, { schema }) {
    let schemas = []
    _.each(state.current.schemas, (s) => {
      if (s._id !== schema._id) {
        schemas.push(s)
      }
    })
    state.current.schemas = schemas
  },
  new (state) {
    state.new = true
    state.current = _.cloneDeep(DEFAULT_PROJECT)
    state.current.schemas[0]._id = 'schema_' + Math.floor((Math.random() * 100000000000000) + 1)
    this.commit('project/set_identifier')
  },
  select (state, { _id }) { // TODO - DEPRECATE CURRENT
    state.current = _.find(state.collection, { _id })
  },
  edit (state, { _id }) { // TODO - DEPRECATE CURRENT
    state.edit = true
    state.current = _.cloneDeep(_.find(state.collection, { _id }))
  },
  select_clear (state) {
    if (state.new) {
      state.new = false
      window.location = '#/' // TODO - navigate with vue-router
    } else if (state.edit) {
      state.edit = false
      window.location = '#/projects'
      // router.go()
    } else {
      router.go(-1)
    }
    state.current = {}
  },
  set_identifier (state) {
    state.current.identifier = underscored(state.current.label)
  },
  persist (state, { record, redirect }) {
    let recordId = record._id
    if (record._id) {
      state.collection = _.map(state.collection, (s) => {
        if (s._id === record._id) {
          return record
        } else {
          return s
        }
      })
    } else {
      recordId = 'PR_' + Math.floor((Math.random() * 100000000000000) + 1)
      record._id = recordId
      state.collection.push(record)
    }

    // Redirects 'back' if necessary
    // TODO - phase out window.location replacement here
    setTimeout(() => {
      window.location = `#/projects/${recordId}`
    }, 10)
    // if (redirect) { router.replace({ path: '#/projects/' + record._id }) }
  },
  remove (state, { record }) {
    state.collection = _.filter(state.collection, (s) => { return s._id !== record._id })
  }
}

// // // //

export default mutations
