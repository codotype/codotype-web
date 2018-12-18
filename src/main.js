// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/config'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './routers'
import store from '@/store'
import EditorHeader from '@codotype/ui/src/components/EditorHeader'
import configureModerator from '@/store/mediator'

// Configures vuex-router-sync
sync(store, router)
// sync(store, router, { moduleName: 'RouteModule' } )

// Configures top-level vuex mediator
configureModerator(store, router)

// TODO - this is dev-only and should be removed in production
window.store = store

// QUESTION - ??
Vue.config.productionTip = false

// Global Components
Vue.component('EditorHeader', EditorHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  components: { App }
})
