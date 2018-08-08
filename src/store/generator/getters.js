import { SERVER_OPTS, CLIENT_OPTS } from './constants'

// Generator Module Getters
export default {
  generatorFormOpts: state => {
    return {
      client: CLIENT_OPTS,
      server: SERVER_OPTS
    }
  },
  activated: state => {
    return state.activated
  },
  fetching: state => {
    return state.fetching
  }
}
