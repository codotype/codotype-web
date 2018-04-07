// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectShow from '@/containers/project_show'
import ProjectGenerate from '@/containers/project_generate'

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
