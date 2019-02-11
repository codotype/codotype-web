import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

import notification from '@codotype/ui/src/modules/notification/store'
import generator from '@/modules/generator/store'
import tour from '@codotype/ui/src/modules/tour/store'
import build from '@codotype/ui/src/modules/build/store'
import editor from '@codotype/ui/src/components/BlueprintEditor/store'

export default new Vuex.Store({
  modules: {
    notification,
    editor,
    generator,
    tour,
    build
  },
  plugins: [createPersistedState()]
})
