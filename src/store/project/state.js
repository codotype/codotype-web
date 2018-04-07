import { COLLECTION_STATE, SELECT_MODEL_STATE } from '@/store/lib/mixins'

// Project Module State
const state = {
  ...COLLECTION_STATE,
  ...SELECT_MODEL_STATE,
  new: false,
  edit: false,
  newModel: {}
}

export default state
