// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectShow from '@/containers/project_show'
import ProjectExport from '@/containers/project_show/components/ProjectExport'
import ProjectSchemas from '@/containers/project_show/components/ProjectSchemas'
import ProjectGenerate from '@/containers/project_generate/builder'
// import ProjectGenerate from '@/containers/project_generate'
// import ProjectSeeds from '@/containers/project_show/components/ProjectSeeds'
// import ProjectExamples from '@/containers/project_examples'

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
          component: ProjectSchemas
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
        }
      ]
    }
  ]
}
