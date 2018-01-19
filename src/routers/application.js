// Application Containers
import ApplicationList from '@/containers/application_list'
import ApplicationNew from '@/containers/application_new'
import ApplicationShow from '@/containers/application_show'
import ApplicationEdit from '@/containers/application_edit'

export const ApplicationListRoute = {
  path: '/applications',
  component: ApplicationList
}

export const ApplicationNewRoute = {
  path: '/applications/new',
  component: ApplicationNew
}

export const ApplicationShowRoute = {
  path: '/applications/:id',
  component: ApplicationShow,
  props: true
}

export const ApplicationEditRoute = {
  path: '/applications/:id/edit',
  component: ApplicationEdit,
  props: true
}

// Add to src/routers/index.js:
// import { ApplicationListRoute, ApplicationShowRoute, ApplicationNewRoute, ApplicationEditRoute } from './application'
// ApplicationListRoute,
// ApplicationNewRoute,
// ApplicationShowRoute,
// ApplicationEditRoute
