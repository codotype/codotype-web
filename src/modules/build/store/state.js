import { NEW_MODEL_STATE } from '@codotype/ui/src/store/lib/mixins'
import { DEFAULT_BUILD } from './constants'

export default {
  ...NEW_MODEL_STATE,
  fetching: false,
  buildFinished: false,
  downloadUrl: '',
  newModel: DEFAULT_BUILD,
  defaultNewModel: DEFAULT_BUILD,
  choosingGenerator: true
}
