// Project Containers
import ProjectList from './pages/list'
import ProjectShow from './pages/show'
import ProjectGenerators from './pages/generators'

export default [
  {
    path: '/blueprints',
    component: ProjectList
  },
  {
    path: '/blueprints/:project_id',
    name: 'ProjectShow',
    component: ProjectShow,
    props: true
  },
  {
    path: '/blueprints/:project_id/generate',
    component: ProjectGenerators,
    props: true
  }
]
