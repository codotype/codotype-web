import GeneratorList from '@/modules/generator/pages/list'
import GeneratorShow from '@/modules/generator/pages/show'

export default [
  {
    path: '/generators',
    component: GeneratorList
  },
  {
    path: '/generators/:id',
    component: GeneratorShow,
    name: 'GeneratorShow',
    props: true
  }
]
