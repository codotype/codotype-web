// Boot Containers
import BootList from '@/containers/boot_list'
import BootNew from '@/containers/boot_new'
import BootShow from '@/containers/boot_show'
import BootEdit from '@/containers/boot_edit'

export const BootListRoute = {
  path: '/boots',
  component: BootList
}

export const BootNewRoute = {
  path: '/boots/new',
  component: BootNew
}

export const BootShowRoute = {
  path: '/boots/:id',
  component: BootShow,
  props: true
}

export const BootEditRoute = {
  path: '/boots/:id/edit',
  component: BootEdit,
  props: true
}
