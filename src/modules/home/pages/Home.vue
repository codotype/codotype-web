<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h1 class='display-3' style="letter-spacing: .25rem !important;">Codotype</h1>
        </div>
      </div>

      <div class="row py-2">

        <div class="col-lg-12 text-center">
          <p class="lead">visual code scaffolding for the modern web</p>
          <p>Prototype new web applications amazingly fast</p>
          <p>Define your models, attributes, and relations - Codotype does the rest</p>
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

      <!-- Bootstrap Modal Component -->
      <b-modal
        lazy
        hide-footer
        id="new-project-modal"
        ref="newModal"
        :title="'New Blueprint'"
      >
        <BlueprintForm :submit="submitBlueprintForm" />
      </b-modal>

      <div class="row mt-2 mb-4 justify-content-center">
        <div class="col-lg-4">
          <b-button
            v-b-modal="'new-project-modal'"
            size="lg"
            variant="primary"
            block
          >
            <i class="fas fa-drafting-compass faa-wrench animated mr-2"></i>
            Start Your Next Project
          </b-button>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
import BlueprintForm from '@/modules/blueprint/components/BlueprintForm'

export default {
  components: {
    BlueprintForm
  },
  metaInfo: {
    title: 'Visual code scaffolding for the modern web'
  },
  methods: {
    ...mapActions({
      persist: 'project/create'
    }),
    submitBlueprintForm () {
      this.$refs.newModal.hide()
      this.persist()
    }
  }
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
