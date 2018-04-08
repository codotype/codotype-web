import Vue from 'vue'
import Router from 'vue-router'

// Module routes
import { ProjectListRoute } from './project'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    ProjectListRoute
  ]
})
