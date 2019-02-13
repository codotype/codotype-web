<template>
  <div id="app">
    <Navbar/>
    <Notifications/>
    <Overlay/>
    <div class="container router-container">
      <router-view/>
    </div>
    <AppFooter v-if="!$store.getters['editor/about/showing']"/>
  </div>
</template>

<script>
import Navbar from '@codotype/ui/src/components/Navbar'
import Overlay from '@codotype/ui/src/components/Overlay'
import AppFooter from '@codotype/ui/src/components/Footer'
import Notifications from '@codotype/ui/src/modules/notification/components/Notifications'

export default {
  components: {
    Navbar,
    Overlay,
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
    padding-top: 3.5rem
    padding-bottom: 4rem
    height: 100%

  #app
    height: 100%
    width: 100%

</style>
