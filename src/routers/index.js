import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from '@/modules/home/router'
import GeneratorRouter from '@codotype/ui/src/modules/generator/router'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    ...HomeRouter,
    ...GeneratorRouter
  ],
  scrollBehavior () {
    return { x: 0, y: 0 } // Top of page on change
  }
})
