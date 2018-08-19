import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

import project from '@/modules/project/store'
import schema from '@/modules/schema/store'
import attribute from '@/modules/attribute/store'
import relation from '@/modules/relation/store'
import record from '@/modules/record/store'
import notification from '@/modules/notification/store'
import generator from '@/modules/generator/store'
import addon from '@/modules/addon/store'
import tour from '@/modules/tour/store'

// Vuex Initialization
// TODO - should this be done elsewhere?
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification,
    project,
    schema,
    attribute,
    relation,
    record,
    generator,
    addon,
    tour
  },
  plugins: [createPersistedState()]
})
