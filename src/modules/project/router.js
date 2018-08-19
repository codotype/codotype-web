// Project Containers
import ProjectList from './pages/list'
import ProjectShow from './pages/show'
import ProjectGenerate from './pages/generate'
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
    component: ProjectShow,
    props: true
  },
  {
    path: '/projects/:project_id/generate',
    component: ProjectGenerate,
    props: true
  }
]
