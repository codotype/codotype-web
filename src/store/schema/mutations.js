import _ from 'lodash'
import ObjectID from 'bson-objectid'
import { COLLECTION_MUTATIONS, SELECT_MODEL_MUTATIONS, NEW_MODEL_MUTATIONS } from '@/store/lib/mixins'

// Schema Module mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...SELECT_MODEL_MUTATIONS,
  ...NEW_MODEL_MUTATIONS,
  attributes (state, { schema_id, collection }) {
    if (schema_id) {
      let schema = _.find(state.collection, { _id: schema_id })
      schema.attributes = collection
    } else {
      state.selectedModel.attributes = collection
    }
  },
  // REMOVE BELOW THIS LINE
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
      schema._id = ObjectID().toString()
      state.collection.push(schema)
    }
    // Updates attributes order
    schema.attributes = _.orderBy(schema.attributes, ['order'], ['asc'])
  },
  selectAttribute (state, { attr }) {
    state.selectedAttribute = _.cloneDeep(attr)
  },
  selectSchema (state, { _id }) {
    state.selectedSchema = _.find(state.collection, { _id })
  },
  editSchema (state, { schema }) {
    state.selectedSchema = schema
  },
  clearSelectedSchema (state) {
    state.selectedSchema = null
  },
  clearSelectedAttribute (state) {
    state.selectedAttribute = null
  },
  removeAttribute (state, { schema, attr }) {
    schema.attributes = _.filter(schema.attributes, (s) => { return s._id !== attr._id })
  },
  persistSelected (state, { project }) {
    if (state.selectedSchema._id) {
      project.schemas = _.map(project.schemas, (s) => {
        if (s._id === state.selectedSchema._id) {
          return state.selectedSchema
        } else {
          return s
        }
      })
    } else {
      state.selectedSchema._id = 'schema_' + Math.floor((Math.random() * 100000000000000) + 1)
      project.schemas.push(_.cloneDeep(state.selectedSchema))
    }
    // Updates attributes order
    state.selectedSchema.attributes = _.orderBy(state.selectedSchema.attributes, ['order'], ['asc'])
    state.selectedSchema = null
  },
  // TODO - pending destruction
  persistSelectedAttribute (state, { schema, attr }) {
    if (attr._id) {
      schema.attributes = _.map(schema.attributes, (a) => { // QUESTION - just .map()
        if (a._id === attr._id) {
          return attr
        } else {
          return a
        }
      })
    } else {
      attr._id = ObjectID().toString()
      if (attr.datatype !== 'TEXT_SELECT' && attr.datatype !== 'NUMBER_SELECT') {
        delete attr.datatypeOptions.dropdownOptions
      }
      schema.attributes.push(_.cloneDeep(attr))
    }

    // QUESTION - add REVERSE RELATION?
    // if (attr.datatype === 'BELONGS_TO') {
    //   let relatedSchema = _.find(state.collection, { _id: attr.datatypeOptions.schema_id })
    //   let relatedAttr = _.filter(relatedSchema.attributes, (a) => { return a.datatype === 'HAS_MANY' && a.datatypeOptions.schema_id === schema._id })
    //   console.log(relatedAttr)
    // }

    // Clears the selectedAttribute
    state.selectedAttribute = null
  }
}
