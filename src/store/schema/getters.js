import { DATATYPES, RELATION_TYPES } from './constants'
import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS, NEW_MODEL_GETTERS } from '@/store/lib/mixins'

// Schema Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
  ...NEW_MODEL_GETTERS,
  selectedLabel: state => {
    return state.selectedModel.label || 'I AM ERROR'
  },
  datatypes: state => {
    return DATATYPES
  },
  relationTypes: state => {
    return RELATION_TYPES
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
