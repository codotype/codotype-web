<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/generators">
      <strong>Codotype</strong>
    </b-navbar-brand>

    <a @click="$store.commit('editor/about/showing', false)" class="navbar-text">
      <!-- <img src="/docs/4.2/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""> -->
      <img class='generator-icon' style="width: 1rem;" :src="model.icon"/>
      {{ model.label }}
    </a>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item class='ml-3' @click="$store.commit('editor/about/showing', true)">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <b-nav-item target="_blank" href="https://twitter.com/codotype">
          <i class="fab fa-lg fa-fw fa-twitter text-primary mr-1"></i>
        </b-nav-item>

        <b-nav-item target="_blank" href="https://github.com/codotype">
          <i class="fab fa-lg fa-fw fa-github text-dark mr-1"></i>
        </b-nav-item>

        <!-- <b-nav-form> -->

          <!-- <b-button
            size='lg'
            id="generate-button"
            variant="success"
            @click="generateCodebase()"
            v-b-tooltip.hover.bottom
            :title='"Click here to generate code"'
          > -->
            <!-- <i class="fa fa-fw fa-spin fa-cog"></i> -->
            <!-- Generate Code -->
          <!-- </b-button> -->
        <!-- </b-nav-form> -->

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TourButton from '@codotype/ui/src/components/TourButton'

export default {
  name: 'BlueprintMenu',
  components: {
    TourButton
  },
  computed: mapGetters({
    model: 'generator/selectedModel'
  }),
  methods: mapActions({
    generateCodebase: 'build/generate'
  })
}
</script>
