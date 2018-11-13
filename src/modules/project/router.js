// Project Containers
import ProjectList from './pages/list'
import ProjectShow from './pages/show'
import ProjectBuild from '@/modules/build/pages/new'

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
    name: 'BlueprintGenerate',
    component: ProjectBuild,
    props: true
  }
]
