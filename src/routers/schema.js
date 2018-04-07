// Workflow Containers
import SchemaList from '@/containers/schema_list'
import SchemaNew from '@/containers/schema_new'
import SchemaEdit from '@/containers/schema_edit'

export const SchemaListRoute = {
  path: '/schemas',
  component: SchemaList,
  props: true
}

export const SchemaNewRoute = {
  path: '/schemas/new',
  component: SchemaNew
}

export const SchemaEditRoute = {
  path: '/schemas/:id/edit',
  component: SchemaEdit,
  props: true
}
