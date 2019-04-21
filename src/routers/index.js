import Vue from 'vue'
import Router from 'vue-router'

import GeneratorBuild from '@codotype/ui/src/modules/generator/pages/build'
import PageNotFound from '@codotype/ui/src/components/PageNotFound'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    {
      path: '/generators/:id/build',
      name: 'GeneratorBuild',
      props: true,
      component: GeneratorBuild
    },
    { path: '*', component: PageNotFound }
  ],
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 } // Top of page on change
  }
})
