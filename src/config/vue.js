import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import ToggleButton from 'vue-js-toggle-button'
import VueGitHubButtons from 'vue-github-buttons'
import 'vue-github-buttons/dist/vue-github-buttons.css'
import 'driver.js/dist/driver.min.css'

// bootstrap-vue
// Bootstrap components and directives
Vue.use(BootstrapVue)

// vue-meta
// supports `meta` object returned with `module.defaults`
Vue.use(Meta)

// vue-toggle-button
// http://vue-js-toggle-button.yev.io/
Vue.use(ToggleButton)

// vuex
// State management library
Vue.use(Vuex)

// vue-github-buttons
Vue.use(VueGitHubButtons)
