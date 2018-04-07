
// Project Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  current: state => {
    return state.current
  },
  fetching: state => {
    return state.fetching
  },
  newModel: state => {
    return state.newModel
  }
}

export default getters
