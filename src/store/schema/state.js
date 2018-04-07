import { COLLECTION_STATE, SELECT_MODEL_STATE } from '@/store/lib/mixins'

// Schema Module State
const state = {
  ...COLLECTION_STATE,
  ...SELECT_MODEL_STATE,
  selectedAttribute: null,
  editModel: {}
}

export default state
