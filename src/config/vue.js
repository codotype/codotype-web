import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'
import VueGoodTable from 'vue-good-table'

// Bootstraps VueGoodTable component
Vue.use(VueGoodTable)

// bootstrap-vue
// Bootstrap components and directives
Vue.use(BootstrapVue)

// vue-meta
// supports `meta` object returned with `module.defaults`
Vue.use(Meta)

// vuex
// State management library
Vue.use(Vuex)
