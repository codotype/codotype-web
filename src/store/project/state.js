import { DEFAULT_PROJECT } from './constants'
import { COLLECTION_STATE, SELECT_MODEL_STATE } from '@/store/lib/mixins'

// Project Module State
const state = {
  ...COLLECTION_STATE,
  ...SELECT_MODEL_STATE,
  // TODO - phase out current
  current: {},
  new: false,
  edit: false,
  newModel: DEFAULT_PROJECT
}

export default state
