import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import schema from './schema'
import record from './record'
import notification from './notification'
import project from './project'

// Vuex Initialization
// TODO - should this be done elsewhere?
Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    auth,
    user,
    schema,
    record,
    notification,
    project
  },
  plugins: [createPersistedState()]
})
