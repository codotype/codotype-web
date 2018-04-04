// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectNew from '@/containers/project_new'
import ProjectShow from '@/containers/project_show'
import ProjectGenerate from '@/containers/project_generate'
import ProjectSchemas from '@/containers/project_schemas'
import ProjectEdit from '@/containers/project_edit'

// TODO - move these into main.js
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
          path: '/projects/new',
          name: 'new',
          component: ProjectNew,
          meta: { bcLinkText: 'New' }
        },
        {
          path: '/projects/:id',
          component: RouterView,
          meta: { bcLinkText: 'Show' },
          children: [
            {
              path: '',
              name: 'root',
              component: ProjectShow,
              props: true
            },
            {
              path: '/projects/:id/schemas',
              name: 'schemas',
              component: ProjectSchemas,
              props: true,
              meta: { bcLinkText: 'Schemas' }
            },
            {
              path: '/projects/:id/edit',
              name: 'edit',
              component: ProjectEdit,
              props: true,
              meta: { bcLinkText: 'Edit' }
            },
            {
              path: '/projects/:id/generate',
              name: 'generate',
              component: ProjectGenerate,
              props: true,
              meta: { bcLinkText: 'Generate' }
            }
          ]
        }
      ]
    }
  ]
}
