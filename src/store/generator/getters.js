import { DEPLOYMENT_OPTS, CLIENT_OPTS } from './constants'

// Generator Module Getters
export default {
  deploymentOpts: state => {
    return DEPLOYMENT_OPTS
  },
  clientOpts: state => {
    return CLIENT_OPTS
  },
  activated: state => {
    return state.activated
  }
}
