// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectNew from '@/containers/project_new'
import ProjectShow from '@/containers/project_show'
import ProjectGenerate from '@/containers/project_generate'
import ProjectSchemas from '@/containers/project_schemas'
import ProjectEdit from '@/containers/project_edit'

export const ProjectListRoute = {
  path: '/projects',
  component: ProjectList
}

export const ProjectNewRoute = {
  path: '/projects/new',
  component: ProjectNew
}

export const ProjectShowRoute = {
  path: '/projects/:id',
  component: ProjectShow,
  props: true
}

export const ProjectGenerateRoute = {
  path: '/projects/:id/generate',
  component: ProjectGenerate,
  props: true
}

export const ProjectSchemasRoute = {
  path: '/projects/:id/schemas',
  component: ProjectSchemas,
  props: true
}

export const ProjectEditRoute = {
  path: '/projects/:id/edit',
  component: ProjectEdit,
  props: true
}
