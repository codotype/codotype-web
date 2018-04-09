import _ from 'lodash'
import { COLLECTION_MUTATIONS, SELECT_MODEL_MUTATIONS } from '@/store/lib/mixins'

// // // //

// Project Module mutations
const mutations = {
  ...COLLECTION_MUTATIONS,
  ...SELECT_MODEL_MUTATIONS,
  // TODO - move into schema module
  removeSchema (state, { schema }) {
    let schemas = []
    _.each(state.current.schemas, (s) => {
      if (s._id !== schema._id) {
        schemas.push(s)
      }
    })
    state.current.schemas = schemas
  },
  // TODO - abstract into editModel mixin
  edit (state, { _id }) { // TODO - DEPRECATE CURRENT
    state.edit = true
    state.current = _.cloneDeep(_.find(state.collection, { _id }))
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
