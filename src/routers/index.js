import Vue from 'vue'
import Router from 'vue-router'

import HomeRouter from '@/modules/home/router'

// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectShow from '@/containers/project_show'
// import ProjectSeeds from '@/containers/project_show/components/ProjectSeeds'
import ProjectExport from '@/containers/project_show/components/ProjectExport'
// import ProjectGenerate from '@/containers/project_generate'
import ProjectGenerate from '@/containers/project_generate/builder'
import ProjectExamples from '@/containers/project_examples'

// Schema Containers
import SchemaList from '@/containers/schema_list'
import SchemaShow from '@/containers/schema_show'

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
        {
          path: '/examples',
          name: 'project_examples',
          component: ProjectExamples
        },
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
        {
          path: 'projects',
          component: RouterView,
          // meta: { bcLinkText: 'Apps' },
          children: [
            {
              path: '',
              name: 'list',
              component: ProjectList
            },
            {
              path: '/projects/:project_id',
              name: 'show',
              component: ProjectShow,
              props: true,
              meta: {
                bcGetter: 'project/selectedLabel'
              },
              children: [
                {
                  path: '',
                  component: SchemaList
                },
                {
                  path: '/projects/:project_id/generate',
                  component: ProjectGenerate,
                  meta: { bcLinkText: 'Generate' }
                },
                {
                  path: '/projects/:project_id/export',
                  component: ProjectExport,
                  meta: { bcLinkText: 'Export' }
                },
                {
                  path: '/projects/:project_id/schemas',
                  component: SchemaList,
                  meta: { bcLinkText: 'Models' },
                  children: [
                    // {
                    //   path: '',
                    //   component: SchemaList
                    // },
                    {
                      path: '/projects/:project_id/schemas/:schema_id',
                      props: true,
                      component: SchemaShow,
                      meta: { bcGetter: 'schema/selectedLabel' }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
