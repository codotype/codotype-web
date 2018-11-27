// Blueprint Containers
import BlueprintList from './pages/list'
import BlueprintShow from './pages/show'
import BlueprintBuild from '@/modules/build/pages/new'

export default [
  {
    path: '/blueprints',
    name: 'BlueprintList',
    component: BlueprintList
  },
  {
    path: '/blueprints/:project_id',
    name: 'BlueprintShow',
    component: BlueprintShow,
    props: true
  },
  {
    path: '/blueprints/:project_id/generate',
    name: 'BlueprintGenerate',
    component: BlueprintBuild,
    props: true
  }
]
