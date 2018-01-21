import _ from 'lodash'

// Project Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  current: state => {
    return _.find(state.collection, { _id: state.current })
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
