import _ from 'lodash'
import router from '@/routers'
import { COLLECTION_MUTATIONS, SELECT_MODEL_MUTATIONS } from '@/store/lib/mixins'

// // // //

// Project Module mutations
const mutations = {
  ...COLLECTION_MUTATIONS,
  ...SELECT_MODEL_MUTATIONS,
  removeSchema (state, { schema }) {
    let schemas = []
    _.each(state.current.schemas, (s) => {
      if (s._id !== schema._id) {
        schemas.push(s)
      }
    })
    state.current.schemas = schemas
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
  remove (state, { record }) {
    state.collection = _.filter(state.collection, (s) => { return s._id !== record._id })
  },
  newModel (state, newModel) {
    state.newModel = newModel
  }
}

// // // //

export default mutations
