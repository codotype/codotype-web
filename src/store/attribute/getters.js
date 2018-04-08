import { COLLECTION_GETTERS, SELECT_MODEL_GETTERS, NEW_MODEL_GETTERS } from '@/store/lib/mixins'

// Attribute Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...SELECT_MODEL_GETTERS,
  ...NEW_MODEL_GETTERS
}

export default getters
