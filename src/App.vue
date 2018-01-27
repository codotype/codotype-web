
<template>
  <div id="app">
    <AppNavbar/>
    <AppBreadcrumbs/>
    <router-view/>
    <Notification/>
    <!-- <AppFooter/> -->
  </div>
</template>

<script>
import AppNavbar from '@/containers/app_navbar'
import AppBreadcrumbs from '@/containers/app_breadcrumbs'
import AppFooter from '@/containers/app_footer'
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

  // Top-Level page Meta
  metaInfo: {
    title: 'Loading...', // set a title
    titleTemplate: 'blazeplate.io - %s', // title is now "blazeplate.io - Loading..."
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
