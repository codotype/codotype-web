// Project Containers
import ProjectList from './pages/list'
import ProjectShow from './pages/show'
import ProjectGenerators from './pages/generators'
import ProjectExamples from './pages/examples'

export default [
  {
    path: '/projects',
    component: ProjectList
  },
  {
    path: '/projects/examples',
    component: ProjectExamples
  },
  {
    path: '/projects/:project_id',
    name: 'ProjectShow',
    component: ProjectShow,
    props: true
  },
  {
    path: '/projects/:project_id/generate',
    component: ProjectGenerators,
    props: true
  }
]
