
<template>
  <div class="container">

    <!-- Bootstrap Modal Component -->
    <b-modal id="new-project-modal"
      ref="newModal"
      :title="'New App'"
      hide-footer
    >
      <ProjectForm :submit="submitProjectForm" />
    </b-modal>

    <!-- TODO - abstract into PageHeader component -->
    <div class="row">
      <div class="col-lg-6">
        <h2>
          Apps
        </h2>
      </div>

      <div class="col-lg-6 text-right">
        <a class='btn btn-lg btn-outline-info' href="#/examples">
          <i class="fa fa-fw fa-folder-open-o mr-2"></i>
          Example Apps
        </a>
        <button class='btn btn-lg btn-primary ml-2' v-b-modal="'new-project-modal'">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New App
        </button>
      </div>

      <div class="col-lg-12">
        <hr>
      </div>
    </div>

    <!-- Project List -->
    <ListView :collection="collection"></ListView>

  </div>
</template>

<!-- // // // //  -->

<script>

import ListView from './components/list'
import ProjectForm from '@/components/ProjectForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProjectList',
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ListView,
    ProjectForm
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
    submitProjectForm () {
      this.$refs.newModal.hide()
      this.persist()
    }
  }
}
</script>
