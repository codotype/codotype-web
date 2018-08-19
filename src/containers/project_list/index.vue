
<template>
  <div class="container">

    <!-- Bootstrap Modal Component -->
    <b-modal id="new-project-modal" ref="newModal" :title="'New App'" hide-footer>
      <ProjectForm :submit="submitProjectForm" />
    </b-modal>

    <!-- TODO - abstract into PageHeader component -->
    <div class="row">
      <div class="col-lg-6">
        <h2 id="app-list">Apps</h2>
      </div>

      <div class="col-lg-6 text-right">

        <HelpButton :tour="tourSteps"/>

        <a class='btn btn-lg btn-outline-info' href="#/examples">
          <i class="fa fa-fw fa-folder-open-o mr-2"></i>
          Example Apps
        </a>
        <button class='btn btn-lg btn-primary ml-2' id="app-new-button" v-b-modal="'new-project-modal'">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New App
        </button>
      </div>

      <div class="col-lg-12">
        <hr>
      </div>
    </div>

    <!-- Project List -->
    <ListView :collection="collection" />

  </div>
</template>

<!-- // // // //  -->

<script>

import ListView from './components/list'
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
