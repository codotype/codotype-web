// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/config'
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from '@/store'
import EditorHeader from '@/components/EditorHeader'
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'
import 'driver.js/dist/driver.min.css'
const SocialSharing = require('vue-social-sharing')

// TODO - this is dev-only and should be removed in production
window.store = store

// QUESTION - ??
Vue.config.productionTip = false

// External libraries
Vue.use(SocialSharing)
Vue.use(VueGitHubButtons)
Vue.component('EditorHeader', EditorHeader)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  components: { App }
})
