import _ from 'lodash'
import router from '@/routers'
// import { TEXT_WORKFLOW_STEP, MACRO_WORKFLOW_STEP, DELAY_WORKFLOW_STEP, KEY_WORKFLOW_STEP, KEY_DN_POSITION, KEY_UP_POSITION, KEY_PR_POSITION } from './constants'

// // // //

// Application Module mutations
const mutations = {
  persist (state, { app }) {
    if (app._id) {
      state.collection = _.map(state.collection, (s) => {
        if (s._id === app._id) {
          return app
        } else {
          return s
        }
      })
    } else {
      app._id = 'app_' + Math.floor((Math.random() * 100000000000000) + 1)
      state.collection.push(app)
    }

    // TODO - redirect to app show / table page
    return router.go(-1)
  },
  destroy (state, { app }) {
    state.collection = _.filter(state.collection, (s) => { return s._id !== app._id })
  },
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  sync (state, collection) {
    state.collection = collection
  },
  current (state, { app_id }) {
    let app = _.find(state.collection, { _id: app_id })
    state.current = _.cloneDeep(app)
  }
}

export default mutations
