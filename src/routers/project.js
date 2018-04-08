// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectShow from '@/containers/project_show'
import ProjectShowLayout from '@/containers/project_show/components/layout'
import ProjectGenerate from '@/containers/project_generate'

// Schema Containers
import SchemaList from '@/containers/schema_list'
import SchemaShow from '@/containers/schema_show'
import SchemaEdit from '@/containers/schema_edit'

// TODO - move these into main.js (???)
import MainHome from '@/containers/main_home'
import MainAbout from '@/containers/main_about'

const RouterView = {
  template: '<router-view/>'
}

export const ProjectListRoute = {
  path: '/',
  component: RouterView,
  meta: { bcLinkText: 'Home' },
  children: [
    {
      path: '',
      name: 'main_home',
      component: MainHome
    },
    {
      path: '/about',
      name: 'main_about',
      component: MainAbout,
      meta: { bcLinkText: 'About' }
    },
    {
      path: 'projects',
      component: RouterView,
      meta: { bcLinkText: 'Apps' },
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
          meta: { bcLinkText: 'Show' },
          children: [
            {
              path: '',
              component: ProjectShowLayout
            },
            {
              path: '/projects/:project_id/generate',
              component: ProjectGenerate
              // props: true
              // meta: { bcLinkText: 'Generate' }
            },
            {
              path: '/projects/:project_id/schemas',
              component: RouterView,
              children: [
                {
                  path: '',
                  component: SchemaList
                },
                {
                  // TODO - not sure we need SchemaShow??
                  path: '/projects/:project_id/schemas/:schema_id',
                  component: SchemaShow
                },
                {
                  path: '/projects/:project_id/schemas/:schema_id/edit',
                  component: SchemaEdit
                }
              ]
              // props: true
              // meta: { bcLinkText: 'Schemas' }
            }
          ]
        }
      ]
    }
  ]
}
