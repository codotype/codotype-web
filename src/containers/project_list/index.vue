
<template>
  <div class="container">

    <!-- Bootstrap Modal Component -->
    <b-modal id="new-project-modal"
      ref="newModal"
      :title="'New App'"
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="dark"
      body-text-variant="light"
      hide-footer
    >

      <!-- TODO - abstract into dedicated ProjectForm component -->
      <div class="row">
        <div class="col-sm-12">

          <div class="form-group">
            <label class='mb-0'>
              Label
              <span class='text-danger'>*</span>
            </label>
            <small class="form-text text-muted mb-2">The name of your project</small>
            <input type="text" class="form-control" placeholder="Label" v-model="newModel.label" @input="setIdentifier()">
          </div>

        </div>

        <div class="col-sm-12">
          <button class="btn btn-primary btn-block" @click="submitProjectForm()">
            <i class="fa fa-fw fa-check"></i>
            Create App
          </button>
        </div>
      </div>

    </b-modal>

    <!-- TODO - abstract into PageHeader component -->
    <div class="row">
      <div class="col-lg-8">
        <h2>
          Apps
        </h2>
      </div>

      <div class="col-lg-4 text-right">
        <button class='btn btn-lg btn-primary' v-b-modal="'new-project-modal'">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New App
        </button>
      </div>

      <div class="col-lg-12">

        <p class="text-warning">TODO - abstract header into separate component</p>
        <p class="text-warning">TODO - refine the UI on this page a bit..</p>
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

import ListView from './components/list.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'project_list',
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ListView
  },
  mounted () {
    this.fetch()
  },
  computed: mapGetters({
    collection: 'project/collection',
    newModel: 'project/newModel'
  }),
  methods: {
    ...mapActions({
      fetch: 'project/fetchCollection',
      persist: 'project/create',
      setIdentifier: 'project/setIdentifier'
    }),
    submitProjectForm () {
      this.$refs.newModal.hide()
      this.persist()
    }
  }
}
</script>
