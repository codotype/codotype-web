// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectShow from '@/containers/project_show'
import ProjectShowLayout from '@/containers/project_show/components/layout'
import ProjectSchemas from '@/containers/project_show/components/SchemaEditor'
import ProjectGenerate from '@/containers/project_generate'

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
      meta: { bcLinkText: 'Projects' },
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
              component: ProjectSchemas
              // props: true
              // meta: { bcLinkText: 'Schemas' }
            }
          ]
        }
      ]
    }
  ]
}
