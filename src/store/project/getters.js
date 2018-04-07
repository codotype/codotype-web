import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS } from '@/store/lib/mixins'

// Project Module Getters
const getters = {
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

export default getters
