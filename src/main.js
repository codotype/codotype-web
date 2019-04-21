import config from '@codotype/ui/src/config'
import initTourMediator from '@codotype/ui/src/modules/build/store/tourMediator'
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from '@/store'
// import { sync } from 'vuex-router-sync'

// QUESTION - is this even used anymore?
// Configures vuex-router-sync
// sync(store, router)
// TODO - scope this under a module, like so:
// sync(store, router, { moduleName: 'RouteModule' } )

// bootstrap-vue
// Bootstrap components and directives
Vue.use(config.BootstrapVue)

// vue-meta
// supports `meta` object returned with `module.defaults`
Vue.use(config.Meta)

// vue-toggle-button
// http://vue-js-toggle-button.yev.io/
Vue.use(config.ToggleButton)

// vue-github-buttons
Vue.use(config.VueGitHubButtons)

// vue-clipboard2
Vue.use(config.VueClipboard)

// VRuntimeTemplate
Vue.component('v-runtime-template', config.VRuntimeTemplate)

// Configures top-level vuex mediators
initTourMediator(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  components: { App }
})
