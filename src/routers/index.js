import Vue from 'vue'
import Router from 'vue-router'

// Module routes
import { MainHomeRoute, MainAboutRoute } from './main'
import { AuthLoginRoute, AuthRegisterRoute } from './auth'
import { UserListRoute, UserShowRoute } from './user'
import { SchemaListRoute, SchemaNewRoute, SchemaShowRoute, SchemaEditRoute, RecordNewRoute, RecordEditRoute, RecordShowRoute } from './schema'
import { ProjectListRoute, ProjectShowRoute, ProjectNewRoute, ProjectEditRoute, ProjectGenerateRoute, ProjectSchemasRoute } from './project'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    MainHomeRoute,
    MainAboutRoute,
    AuthLoginRoute,
    AuthRegisterRoute,
    UserListRoute,
    UserShowRoute,
    SchemaListRoute,
    SchemaNewRoute,
    SchemaShowRoute,
    SchemaEditRoute,
    RecordNewRoute,
    RecordEditRoute,
    RecordShowRoute,
    ProjectListRoute,
    ProjectNewRoute,
    ProjectShowRoute,
    ProjectEditRoute,
    ProjectGenerateRoute,
    ProjectSchemasRoute
  ]
})
