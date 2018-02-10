// Workflow Containers
import SchemaList from '@/containers/schema_list'
import SchemaNew from '@/containers/schema_new'
import SchemaShow from '@/containers/schema_show'
import SchemaEdit from '@/containers/schema_edit'
// import RecordNew from '@/containers/record_new'
// import RecordEdit from '@/containers/record_edit'
// import RecordShow from '@/containers/record_show'

export const SchemaListRoute = {
  path: '/schemas',
  component: SchemaList,
  props: true
}

export const SchemaNewRoute = {
  path: '/schemas/new',
  component: SchemaNew
}

export const SchemaShowRoute = {
  path: '/schemas/:id',
  component: SchemaShow,
  props: true
}

export const SchemaEditRoute = {
  path: '/schemas/:id/edit',
  component: SchemaEdit,
  props: true
}

// export const RecordNewRoute = {
//   path: '/schemas/:id/records/new',
//   component: RecordNew,
//   props: true
// }

// export const RecordShowRoute = {
//   path: '/schemas/:id/records/:record_id',
//   component: RecordShow,
//   props: true
// }

// export const RecordEditRoute = {
//   path: '/schemas/:id/records/:record_id/edit',
//   component: RecordEdit,
//   props: true
// }
