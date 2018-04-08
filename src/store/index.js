import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

import project from './project'
import schema from './schema'
import attribute from './attribute'
import notification from './notification'
import generator from './generator'

// Vuex Initialization
// TODO - should this be done elsewhere?
Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    notification,
    project,
    schema,
    attribute,
    generator
  },
  plugins: [createPersistedState()]
})
