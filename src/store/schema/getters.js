import _ from 'lodash'

// Schema Module Getters
const getters = {
  new: state => {
    let schema = {
      _id: null,
      label: '',
      label_plural: '',
      identifier: '',
      identifier_plural: '',
      attributes: [],
      display: {
        icon: 'fa-square-o',
        navbar_link: true
      }
    }
    return _.cloneDeep(schema)
  },
  collection: state => {
    return state.collection
  },
  selectedSchema: state => {
    return state.selectedSchema
  },
  selectedAttribute: state => {
    return state.selectedAttribute
  }
}

export default getters
