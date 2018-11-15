<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-12 text-center">
          <!-- <img src="@/assets/logo_dark.png"> -->
          <h1 class='display-3' style="font-family: monospace;">codotype</h1>
        </div>
      </div>

      <div class="row py-2">

        <div class="col-lg-12 text-center">
          <p class="lead">Visual code scaffolding for the modern web</p>
          <p>Prototype new software amazingly fast. Define your models, attributes, and relations - Codotype does the rest</p>
        </div>

        <div class="col-lg-12 text-center d-flex align-items-center justify-content-center">
          <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <hr class='mt-2'>
        </div>
      </div>

      <div class="row mt-2 mb-4 justify-content-center">
        <div class="col-lg-4">
          <router-link to="/blueprints" class="btn btn-primary btn-block btn-lg">
            <i class="fas fa-drafting-compass mr-2"></i>
            Let's get started
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import GeneratorCard from '@/modules/generator/components/GeneratorCard'
import GeneratorListItem from '@/modules/generator/components/GeneratorListItem'

export default {
  name: 'Home',
  components: {
    GeneratorCard,
    GeneratorListItem
  },
  metaInfo: {
    title: 'Visual code scaffolding for the modern web'
  },
  computed: mapGetters({
    generatorCollection: 'generator/collection',
    tourSteps: 'tour/generatorListSteps'
  })
}
</script>

<style lang="sass">
  img.welcome-logo
    height: 4rem
    width: 4rem

  .welcome-text
    letter-spacing: .6rem
    font-weight: 300
    font-size: 2rem

  .gh-button-container
    float: none !important
</style>
