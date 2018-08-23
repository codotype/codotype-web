import { COLLECTION_STATE, SELECT_MODEL_STATE } from '@/store/lib/mixins'

export default {
  ...COLLECTION_STATE,
  ...SELECT_MODEL_STATE,
  new: false,
  edit: false,
  newModel: {}
}
