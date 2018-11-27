import { COLLECTION_STATE, SELECT_MODEL_STATE, NEW_MODEL_STATE } from '@codotype/ui/src/store/lib/mixins'

// Schema Module State
export default {
  ...COLLECTION_STATE,
  ...SELECT_MODEL_STATE,
  ...NEW_MODEL_STATE,
  selectedAttribute: null,
  selectedRelation: null,
  editModel: {}
}
