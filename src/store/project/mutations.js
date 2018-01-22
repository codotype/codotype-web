import _ from 'lodash'
import router from '@/routers'
import { DEFAULT_USER_SCHEMA } from '@/store/schema/constants'

const underscored = require('underscore.string/underscored')
// const classify = require('underscore.string/classify')
// const pluralize = require('pluralize')

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
    authentications: [],
    features: [],
    databases: [],
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
  current (state, { id }) { // TODO - DEPRECATE CURRENT
    state.current = id
  },
  new (state) {
    state.new = true
    state.current = _.cloneDeep(DEFAULT_PROJECT)
  },
  select_clear (state) {
    if (state.new) {
      state.new = false
      window.location = '#/' // TODO - navigate with vue-router
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
