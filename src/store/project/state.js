import { COLLECTION_STATE, SELECT_MODEL_STATE } from '@/store/lib/mixins'
import { EXAMPLE_COLLECTION } from './examples'

// Project Module State
const state = {
  ...COLLECTION_STATE,
  ...SELECT_MODEL_STATE,
  exampleCollection: EXAMPLE_COLLECTION,
  new: false,
  edit: false,
  newModel: {}
}

export default state
