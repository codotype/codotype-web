import { SERVER_OPTS, DATABASE_OPTS, DEPLOYMENT_OPTS, CLIENT_OPTS, AUTH_OPTS } from './constants'

// Generator Module Getters
export default {
  generatorFormOpts: state => {
    return {
      auth: AUTH_OPTS,
      deployment: DEPLOYMENT_OPTS,
      client: CLIENT_OPTS,
      server: SERVER_OPTS,
      database: DATABASE_OPTS
    }
  },
  activated: state => {
    return state.activated
  },
  fetching: state => {
    return state.fetching
  }
}
