
<template>
  <div id="app">
    <Navbar/>
    <Notifications/>
    <br/>
    <br/>
    <div class="container mt-4 pt-4">
      <router-view/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AppFooter from '@/components/Footer'
import Notifications from '@/modules/notification/components/Notifications'

export default {
  name: 'app',

  components: {
    Navbar,
    AppFooter,
    Notifications
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
