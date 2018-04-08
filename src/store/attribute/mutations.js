import _ from 'lodash'
import { COLLECTION_MUTATIONS, SELECT_MODEL_MUTATIONS, NEW_MODEL_MUTATIONS } from '@/store/lib/mixins'

// // // //

// Attribute Module mutations
const mutations = {
  ...COLLECTION_MUTATIONS,
  ...SELECT_MODEL_MUTATIONS,
  ...NEW_MODEL_MUTATIONS,
  persist (state, { schema }) {
    if (schema._id) {
      state.collection = _.map(state.collection, (s) => {
        if (s._id === schema._id) {
          return schema
        } else {
          return s
        }
      })
    } else {
      schema._id = 'schema_' + Math.floor((Math.random() * 100000000000000) + 1)
      state.collection.push(schema)
    }
    // Updates attributes order
    schema.attributes = _.orderBy(schema.attributes, ['order'], ['asc'])
  }
}

// // // //

export default mutations
