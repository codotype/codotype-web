import _ from 'lodash'
import router from '@/routers'

// // // //

// Record Module mutations
const mutations = {
  sync (state, collection) {
    state.collection = _.sortBy(collection, (s) => { return s.order })
  },
  persist (state, { schema, record, redirect }) {
    if (record._id) {
      state.collection = _.map(state.collection, (s) => {
        if (s._id === record._id) {
          return record
        } else {
          return s
        }
      })
    } else {
      record._id = schema.unqiue_id_prefix + Math.floor((Math.random() * 100000000000000) + 1)
      state.collection.push(record)
    }

    // Redirects 'back' if necessary
    if (redirect) { router.go(-1) }
  },
  destroy (state, { record }) {
    state.collection = _.filter(state.collection, (s) => { return s._id !== record._id })
  }
}

// // // //

export default mutations
