<template>
  <ol class="breadcrumb mb-0 pl-0">
    <!-- <li class="breadcrumb-item" v-for="(route, index) in $route.matched"> -->
    <li :class="route.path ? 'breadcrumb-item' : 'breadcrumb-item active'" v-for="route in crumbs">
      <!-- <span>{{route}}</span> -->

      <template v-if="route.path">
        <!-- <a :href="'#' + route.path" v-if="route.path"> -->
          <!-- {{ route.text }} -->
        <!-- </a> -->
        {{ route.text }}
      </template>

      <template v-else>
        {{ route.text }}
      </template>
      <!-- <a :href="'#' + route.path" v-if=""> -->

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
        console.log('bcGetter!!!')
        console.log(this.route.meta.bcGetter)
        return this.$store.getters[this.route.meta.bcGetter]
      } else {
        return null
      }
    }
  },
  methods: {
    log (arg) {
      // console.log(arg)
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
        // console.log(r)
        // console.log(this.$route)
        if (r.meta.bcLinkText) {
          crumbs.push({ path: r.path || '/', text: r.meta.bcLinkText })
        } else if (r.meta.bcText) {
          crumbs.push({ path: r.path, text: r.meta.bcText })
        } else if (r.meta.bcGetter) {
          crumbs.push({ path: r.path, text: this.$store.getters[r.meta.bcGetter] })
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
    font-size: 125%
    // border-top: 1px solid
    // border-bottom: 1px solid
</style>

