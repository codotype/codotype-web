import _ from 'lodash'
import { COLLECTION_MUTATIONS, SELECT_MODEL_MUTATIONS } from '@/store/lib/mixins'

// // // //

export default {
  ...COLLECTION_MUTATIONS,
  ...SELECT_MODEL_MUTATIONS,
  // TODO - move into schema module
  removeSchema (state, { schema }) {
    let schemas = []
    _.each(state.selectedModel.schemas, (s) => {
      if (s._id !== schema._id) {
        schemas.push(s)
      }
    })
    state.selectedModel.schemas = schemas
  },
  // TODO - abstract into editModel mixin
  edit (state, { _id }) { // TODO - DEPRECATE CURRENT
    state.edit = true
    state.selectedModel = _.cloneDeep(_.find(state.collection, { _id }))
  },
  remove (state, { record }) {
    state.collection = _.filter(state.collection, (s) => { return s._id !== record._id })
  },
  newModel (state, newModel) {
    state.newModel = newModel
  }
}
