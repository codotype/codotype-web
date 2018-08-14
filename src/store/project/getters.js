import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS } from '@/store/lib/mixins'

// Project Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
  exampleCollection: state => {
    return state.exampleCollection
  },
  selectedLabel: state => {
    return state.selectedModel.label || 'I AM ERROR'
  },
  // TODO - phase out current
  current: state => {
    return state.current
  },
  newModel: state => {
    return state.newModel
  }
}
