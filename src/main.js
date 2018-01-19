// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/config'
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from '@/store'

// QUESTION - ??
Vue.config.productionTip = false

window.store = store // TODO - remove - debug only

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  components: { App }
})
