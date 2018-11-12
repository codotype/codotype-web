// Project Containers
import ProjectList from './pages/list'
import ProjectShow from './pages/show'
// import ProjectGenerators from './pages/generators'
import ProjectGenerators from '@/modules/build/pages/new'

export default [
  {
    path: '',
    component: ProjectList
  },
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
    name: 'BlueprintGenerate',
    component: ProjectGenerators,
    props: true
  }
]
