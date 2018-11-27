
<template>
  <div class="row">

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

    <!-- TODO - abstract into PageHeader component -->
    <b-col lg=12>
      <div class="row">

        <div class="col-lg-12">
          <h4 class='text-muted'>
            <span id="blueprint-header">
              <i class="fas fa-drafting-compass"></i>
              Blueprints
            </span>
          </h4>
          <small class="text-muted">Blueprints encapsulate metadata about models, attributes, and associations that describe your project</small>
        </div>

      </div>
    </b-col>

    <!-- Project List -->
    <b-col lg=12 class='mt-3'>
      <ListView :collection="collection" />
    </b-col>

  </div>
</template>

<!-- // // // //  -->

<script>

import ListView from '@/modules/blueprint/components/BlueprintList'
import BlueprintForm from '@/modules/blueprint/components/BlueprintForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  metaInfo: {
    title: 'Blueprints'
  },
  components: {
    ListView,
    BlueprintForm
  },
  mounted () {
    this.fetch()
  },
  computed: mapGetters({
    collection: 'project/collection'
  }),
  methods: {
    ...mapActions({
      fetch: 'project/fetchCollection',
      persist: 'project/create'
    }),
    submitBlueprintForm () {
      this.$refs.newModal.hide()
      this.persist()
    }
  }
}
</script>
