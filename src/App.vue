<template>
  <div id="app">
    <Navbar/>
    <Notifications/>
    <div class="container router-container">
      <router-view/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import AppFooter from '@/components/Footer'
import Notifications from '@codotype/ui/src/modules/notification/components/Notifications'

export default {
  components: {
    Navbar,
    AppFooter,
    Notifications
  },
  created () {
    this.$store.dispatch('generator/fetchCollection')
  },
  metaInfo: {
    title: 'Loading...',
    titleTemplate: 'Codotype - %s',
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

  .container.router-container
    padding-top: 6rem
    margin-bottom: 4rem

  #app
    height: 100%
    width: 100%

</style>
