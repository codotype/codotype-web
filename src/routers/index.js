import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from '@/modules/home/router'
import ProjectRouter from '@/modules/project/router'

// Generator Containers
import GeneratorList from '@/containers/generator_list'
import GeneratorShow from '@/containers/generator_show'
import GeneratorForm from '@/containers/generator_new'

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
        // {
        //   path: '/examples',
        //   name: 'project_examples',
        //   component: ProjectExamples
        // },
        {
          path: '/generator_new',
          component: GeneratorForm
        },
        {
          path: '/generators',
          component: GeneratorList
        },
        {
          path: '/generators/:id',
          props: true,
          component: GeneratorShow
        },
        ProjectRouter
      ]
    }
  ]
})
