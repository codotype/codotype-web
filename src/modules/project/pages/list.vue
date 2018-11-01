
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
      <ProjectForm :submit="submitProjectForm" />
    </b-modal>

    <!-- TODO - abstract into PageHeader component -->
    <b-col lg=12>
      <div class="row">

        <div class="col-lg-7">
          <h4 class='text-muted'>
            <span id="blueprint-header">
              <i class="fas fa-drafting-compass"></i>
              Blueprints
            </span>
          </h4>
          <small class="text-muted">Blueprints encapsulate metadata about models, attributes, and associations that describe your project</small>
        </div>

        <div class="col-lg-5 text-right">
          <HelpButton :tour="tourSteps" size="lg" />
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

import ListView from '@/modules/project/components/ProjectList'
import ProjectForm from '@/modules/project/components/ProjectForm'
import HelpButton from '@/components/HelpButton'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProjectList',
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ListView,
    ProjectForm,
    HelpButton
  },
  mounted () {
    this.fetch()
  },
  computed: mapGetters({
    collection: 'project/collection',
    tourSteps: 'tour/appListSteps'
  }),
  methods: {
    ...mapActions({
      fetch: 'project/fetchCollection',
      persist: 'project/create'
    }),
    submitProjectForm () {
      this.$refs.newModal.hide()
      this.persist()
    }
  }
}
</script>
