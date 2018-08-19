import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from '@/modules/home/router'
import ProjectRouter from '@/modules/project/router'
import GeneratorRouter from '@/modules/generator/router'

// Vue Router setup
Vue.use(Router)

const RouterView = {
  template: '<router-view/>'
}

// Exports new Router instance
export default new Router({
  routes: [
    {
      path: '/',
      component: RouterView,
      children: [
        ...HomeRouter,
        ...GeneratorRouter,
        ProjectRouter
      ]
    }
  ]
})
