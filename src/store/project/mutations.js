// import _ from 'lodash'

// // Project Module mutations
// const mutations = {
//   fetching (state, isFetching) {
//     state.fetching = isFetching
//   },
//   sync (state, collection) {
//     state.collection = collection
//   },
//   current (state, { id }) {
//     state.current = id
//   },
//   remove (state, id) {
//     state.collection = _.filter(state.collection, (each) => { return each._id !== id })
//   }
// }

// export default mutations

import _ from 'lodash'
// import router from '@/routers'

// // // //

// Record Module mutations
const mutations = {
  sync (state, collection) {
    state.collection = collection
  },
  fetching (state, isFetching) {
    state.fetching = false
  },
  current (state, { id }) {
    state.current = id
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
