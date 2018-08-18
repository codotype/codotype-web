// Record Containers
import List from './pages/List'
import New from './pages/New'
import Edit from './pages/Edit'

// TODO - this isn't wired up, just here to be moved around a bit
export default {
  path: '/projects/:project_id/seeds',
  component: RouterView,
  meta: { bcLinkText: 'Seed Data' },
  children: [
    {
      path: '',
      component: ProjectSeeds
    },
    {
      path: '/projects/:project_id/seeds/:schema_id',
      component: RouterView,
      meta: { bcGetter: 'schema/selectedLabel' },
      children: [
        {
          path: '',
          props: true,
          component: RecordList
        },
        {
          path: '/projects/:project_id/seeds/:schema_id/new',
          component: RecordNew,
          props: true,
          meta: { bcText: 'New' }
        },
        {
          path: '/projects/:project_id/seeds/:schema_id/records/:record_id',
          component: RecordNew, // TODO - Record SHOW
          props: true,
          meta: { bcText: 'Show' }
        },
        {
          path: '/projects/:project_id/seeds/:schema_id/records/:record_id/edit',
          component: RecordEdit,
          props: true,
          meta: { bcText: 'Edit' }
        }
      ]
    }
  ]
}
