// Auth Containers
import AuthLogin from '@/containers/auth_login'
import AuthRegister from '@/containers/auth_register'

export const AuthLoginRoute = {
  path: '/auth/login',
  component: AuthLogin
}

export const AuthRegisterRoute = {
  path: '/auth/register',
  component: AuthRegister
}
