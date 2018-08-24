import { NEW_MODEL_STATE } from '@/store/lib/mixins'
import { DEFAULT_BUILD } from './constants'

export default {
  ...NEW_MODEL_STATE,
  defaultNewModel: DEFAULT_BUILD
}
