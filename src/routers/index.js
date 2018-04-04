import Vue from 'vue'
import Router from 'vue-router'

// Module routes
// import { MainHomeRoute, MainAboutRoute } from './main'
// import { SchemaListRoute, SchemaNewRoute, SchemaShowRoute, SchemaEditRoute, RecordNewRoute, RecordEditRoute, RecordShowRoute } from './schema'
import { SchemaListRoute, SchemaNewRoute, SchemaEditRoute } from './schema'
import { ProjectListRoute } from './project'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    // MainHomeRoute,
    // MainAboutRoute,
    SchemaListRoute,
    SchemaNewRoute,
    SchemaEditRoute,
    ProjectListRoute
  ]
})
