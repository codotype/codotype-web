import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

import blueprint from '@/modules/blueprint/store'
import notification from '@codotype/ui/src/modules/notification/store'
import generator from '@/modules/generator/store'
import addon from '@/modules/addon/store'
import tour from '@codotype/ui/src/modules/tour/store'
import option from '@/modules/option/store'
import build from '@/modules/build/store'
import editor from '@codotype/ui/src/components/BlueprintEditor/store'

export default new Vuex.Store({
  modules: {
    notification,
    blueprint,
    editor,
    generator,
    addon,
    tour,
    option,
    build
  },
  plugins: [createPersistedState()]
})
