import { GENERATORS } from './constants'
import { SELECT_MODEL_GETTERS } from '@/store/lib/mixins'

// Generator Module Getters
export default {
  ...SELECT_MODEL_GETTERS,
  collection: state => {
    return GENERATORS
  },
  fetching: state => {
    return state.fetching
  }
}
