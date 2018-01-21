import store from '@/store'
import AuthFactory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {

  authenticate: ({ commit }, data) => {
    // State.fetching = true
    commit('fetching', true)

    // Authenticates User
    AuthFactory.authenticate(data).then((response) => {
      // Sets state.token
      commit('set_token', response.token)

      // State.fetching = false
      // TODO - should this be a global state attribute, perhaps part of a store/main module?
      commit('fetching', false)

      // Shows CREATE_SUCCESS message
      store.commit('notification/add', { message: 'Successfully authenticated', context: 'info', dismissible: true })

      // Redirects to REDIRECT_SUCCESS
      // TODO - What is the best way to manage redirection in VueJS?
      window.location = '#/'
    })
  },

  register: ({ commit }, data) => {
    // State.fetching = true
    commit('fetching', true)

    // Fetches Collection from the server
    AuthFactory.register({ commit }, data)
    .then((response) => {
      // State.fetching = false
      commit('fetching', false)

      // Shows CREATE_SUCCESS message
      store.commit('notification/add', { message: 'Successfully registered new user.', context: 'info', dismissible: true })

      // Redirects to REDIRECT_SUCCESS
      // TODO - What is the best way to manage redirection in VueJS?
      window.location = '#/auth/login'
    })
    .catch((obj) => {
      // State.fetching = false
      commit('fetching', false)
      console.log(obj)
      // Shows CREATE_SUCCESS message
      store.commit('notification/add', { message: 'Error registering new user.', context: 'danger', dismissible: true })
    })
  },

  logout: ({ commit }, data) => {
    commit('flush_token')
    store.commit('notification/add', { message: 'Successfully logged out.', context: 'info', dismissible: true })
    window.location = '#/auth/login'
  },

  is_authenticated: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      AuthFactory.getSession(store.getters['auth/token'])
      .then((session) => {
        commit('set_user', session)
      })
      .catch(() => {
        console.log('Error fetching session')
      })
    })
  },

  // TODO - constantize `authorize` parameters
  googleAuthenticate: ({ commit }) => {
    window.gapi.auth.authorize({
      'client_id': '540231188701-t4pjco404n921r9k347jo2dpp0pgell9.apps.googleusercontent.com',
      'scope': ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/userinfo.email'],
      'immediate': false
    }, (result) => {
      console.log(result)
      if (result.status.signed_in) {
        commit('googleAuthenticated', true)
      } else {
        commit('googleAuthenticated', false)
      }
    })
  },

  // getGoogleUser
  getGoogleUser: ({ commit }) => {
    window.gapi.client.load('plus', 'v1', () => {
      window.gapi.client.plus.people.get({
        'userId': 'me'
      }).execute((response) => {
        if (response) {
          console.info('Got user info')
          console.log(response)
          commit('googleUser', response)
        }
      })
    })
  }

}

// // // //

export default actions
