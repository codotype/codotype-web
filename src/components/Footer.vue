<template>
  <div class='footer-bottom py-2' v-if="$route.name === 'GeneratorShow'"">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <BuildStepsControls />
      </div>
    </div>
  </div>
  <HomeFooter v-else />
</template>

<script>
import HomeFooter from './HomeFooter'
import BuildStepsControls from '@codotype/ui/src/modules/build/components/BuildStepsControls'

export default {
  name: 'Footer',
  components: {
    HomeFooter,
    BuildStepsControls
  }
}
</script>

<style lang="sass" scoped>

  .footer-bottom
    position: fixed
    width: 100%
    bottom: 0
    z-index: 100
    background: #f3f3f3
    border-top: 1px solid #999999

  nav.navbar
    padding-top: .25rem
    padding-bottom: .25rem
    border-top: 1px solid #d3d3d3
    font-size: .8rem

    .navbar-brand
      letter-spacing: .25rem !important
      font-family: sans-serif
      font-weight: 100
      letter-spacing: 0.1rem
      // text-transform: uppercase
      // font-size: 1.5rem

      strong
        font-weight: 400

      img.logo
        float: left
        margin-right: 0.4rem
        height: 2rem
        display: flex

    // .nav-item
      // font-size: 1.1rem
</style>
