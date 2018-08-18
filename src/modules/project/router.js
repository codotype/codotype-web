// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectShow from '@/containers/project_show'
// import ProjectSeeds from '@/containers/project_show/components/ProjectSeeds'
import ProjectExport from '@/containers/project_show/components/ProjectExport'
// import ProjectGenerate from '@/containers/project_generate'
import ProjectGenerate from '@/containers/project_generate/builder'
// import ProjectExamples from '@/containers/project_examples'

// Schema Containers
import SchemaList from '@/containers/schema_list'
import SchemaShow from '@/containers/schema_show'

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
