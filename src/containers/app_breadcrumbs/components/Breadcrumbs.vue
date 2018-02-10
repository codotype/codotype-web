<template>
  <ol class="breadcrumb bg-dark text-light border-light">
    <!-- <li class="breadcrumb-item" v-for="(route, index) in $route.matched"> -->
    <li class="breadcrumb-item" v-for="route in crumbs">
      <!-- <span>{{route}}</span> -->
      <a :href="'#' + route.path">{{ route.text }}</a>
      <!-- <span v-else>{{ route.path }}</span> -->
      <!-- <span>{{route}}</span> -->
      <!-- <router-link v-if="!route.meta.bcDynamic" :to="{path: route.path}"> -->
        <!-- {{route.meta.bcLinkText}} -->
        <!-- {{ log(route) }} -->
      <!-- </router-link> -->
      <!-- <router-link v-if="route.meta.bcDynamic" :to= "{name: route.name, params: {id: $route.params.id}}"> -->
        <!-- <template v-if="value"> -->
          <!-- {{formattedValue}} -->
        <!-- </template> -->
        <!-- <template v-if="!value"> -->
          <!-- {{loadingText}} -->
        <!-- </template> -->
      <!-- </router-link> -->
    </li>
  </ol>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['route'],
  beforeCreate () {
    this.$options.computed.value = function () {
      if (this.route.meta.bcGetter) {
        return this.$store.getters[this.route.meta.bcGetter]
      } else {
        return null
      }
    }
  },
  methods: {
    log (arg) {
      console.log(arg)
    },
    className (crumb) {
      let css = 'breadcrumb-item'
      if (!crumb.href) css += ' active'
      return css
    }
  },
  computed: {
    crumbs () {
      let crumbs = []
      _.each(this.$route.matched, (r) => {
        if (r.meta.bcLinkText) {
          crumbs.push({ path: r.path || '/', text: r.meta.bcLinkText })
          console.log(r)
        }
      })
      return crumbs
    },
    formattedValue () {
      console.log(this.value)
      return this.route.meta.bcLinkText(this.value)
    },
    loadingText () {
      const loadingText = this.route.meta.bcLoadingText
      return loadingText || 'Loading...'
    }
  }
}
</script>

<style lang="sass">
  ol.breadcrumb
    border-radius: 0
    border-top: 1px solid
    border-bottom: 1px solid
</style>

