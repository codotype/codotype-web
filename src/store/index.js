import Vue from 'vue'
import Vuex from 'vuex'

import notification from '@codotype/ui/src/modules/notification/store'
import generator from '@codotype/ui/src/modules/generator/store'
import tour from '@codotype/ui/src/modules/tour/store'
import build from '@codotype/ui/src/modules/build/store'
import editor from '@codotype/ui/src/components/BlueprintEditor/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification,
    editor,
    generator,
    tour,
    build
  }
})
