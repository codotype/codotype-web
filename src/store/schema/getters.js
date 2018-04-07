import _ from 'lodash'
import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS } from '@/store/lib/mixins'

// Schema Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
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
  selectedSchema: state => {
    return state.selectedSchema
  },
  selectedAttribute: state => {
    return state.selectedAttribute
  },
  editModel: state => {
    return state.editModel
  }
}

export default getters
