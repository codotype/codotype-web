import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

import project from './project'
import schema from './schema'
import attribute from './attribute'
import record from './record'
import notification from '@/modules/notification/store'
import generator from './generator'
import addon from './addon'

// Vuex Initialization
// TODO - should this be done elsewhere?
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification,
    project,
    schema,
    attribute,
    record,
    generator,
    addon
  },
  plugins: [createPersistedState()]
})
