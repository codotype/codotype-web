import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS } from '@/store/lib/mixins'

// Build Module Getters
export default {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
  // TODO - phase out current
  current: state => {
    return state.current
  },
  newModel: state => {
    return state.newModel
  }
}
