import _ from 'lodash'
// import { TEXT_WORKFLOW_STEP, MACRO_WORKFLOW_STEP, DELAY_WORKFLOW_STEP, KEY_WORKFLOW_STEP, KEY_DN_POSITION, KEY_UP_POSITION, KEY_PR_POSITION } from './constants'

const underscored = require('underscore.string/underscored')
const pluralize = require('pluralize')

// // // //

// Project Module mutations
const mutations = {
  sync (state, collection) {
    state.collection = _.sortBy(collection, (s) => { return s.order })
  },
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
    state.selectedSchema = null
  },
  destroy (state, { schema }) {
    state.collection = _.filter(state.collection, (s) => { return s._id !== schema._id })
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
      attr._id = 'attr_' + Math.floor((Math.random() * 100000000000000) + 1)
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
  },
  addAttribute (state, { schema }) {
    let new_attribute = {
      order: schema.attributes.length + 1,
      label: '',
      help: '',
      required: false,
      unique: false,
      col_span: 6,
      datatype: 'TEXT',
      datatypeOptions: {}
    }

    state.selectedAttribute = new_attribute
  },
  onLabelChange (state, label) {
    state.selectedSchema.label = label
    state.selectedSchema.label_plural = pluralize(label)
    state.selectedSchema.identifier = underscored(label)
    state.selectedSchema.identifier_plural = underscored(pluralize(label))
  }
}

// // // //

export default mutations
