import store from '@/store'
import router from '@/routers'

// Project Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },

  set_token (state, jsonwebtoken) {
    state.token = jsonwebtoken
  },

  flush_token (state) {
    state.token = null
  },

  set_user (state, user) {
    state.user = user
  },

  googleAuthenticated (state, status) {
    state.googleAuthenticated = status
    store.dispatch('auth/getGoogleUser')
  },

  googleUser (state, user) {
    state.googleUser = user
    store.dispatch('google_sheet/loadSheetAPI')
    router.push('/')
  }
}

export default mutations
