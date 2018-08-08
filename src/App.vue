
<template>
  <div id="app">
    <AppNavbar/>
    <Notification/>
    <!-- <AppBreadcrumbs/> -->
    <br>
    <router-view/>
    <!-- <AppFooter/> -->
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppBreadcrumbs from '@/containers/app_breadcrumbs'
import AppFooter from '@/components/AppFooter'
import Notification from '@/containers/app_notification'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    AppNavbar,
    AppBreadcrumbs,
    AppFooter,
    Notification
  },

  created () {
    // NOTE- this is a temporary fix until the project/show container
    // is restructured into project/generate && project/edit
    this.$store.dispatch('generator/setActivated', false)
  },

  // Top-Level page Meta
  metaInfo: {
    title: 'Loading...',
    titleTemplate: 'codotype.io - %s',
    htmlAttrs: {
      lang: 'en'
    }
  }

}
</script>

<style lang="sass">
  @import "./sass/vendor.sass"

  html
    height: 100%

  body
    height: 100%

  // .container, .container-fluid
  //   padding-top: 4.5rem

  #app
    height: 100%
    width: 100%

</style>
