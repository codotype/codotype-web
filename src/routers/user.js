// User Containers
import UserList from '@/containers/user_list'
import UserShow from '@/containers/user_show'

export const UserListRoute = {
  path: '/users',
  component: UserList
}

export const UserShowRoute = {
  path: '/users/:id',
  component: UserShow,
  props: true
}
