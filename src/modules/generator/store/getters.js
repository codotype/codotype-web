import { GENERATORS } from './constants'

// Generator Module Getters
export default {
  collection: state => {
    return GENERATORS
  },
  activated: state => {
    return state.activated
  },
  fetching: state => {
    return state.fetching
  }
}
