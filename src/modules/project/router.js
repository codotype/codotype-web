// Project Containers
import ProjectList from './pages/list'
import ProjectShow from './pages/show'
// import ProjectExport from '@/containers/project_show/components/ProjectExport'
import ProjectDetail from '@/modules/project/components/ProjectDetail'
import ProjectGenerate from '@/containers/project_generate/builder'
// import ProjectGenerate from '@/containers/project_generate'
// import ProjectSeeds from '@/containers/project_show/components/ProjectSeeds'
import ProjectExamples from '@/containers/project_examples'

const RouterView = {
  template: '<router-view/>'
}

export default {
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
      path: '/projects/examples',
      name: 'list',
      component: ProjectExamples
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
          component: ProjectDetail
        },
        {
          path: '/projects/:project_id/generate',
          component: ProjectGenerate,
          meta: { bcLinkText: 'Generate' }
        }
      ]
    }
  ]
}
