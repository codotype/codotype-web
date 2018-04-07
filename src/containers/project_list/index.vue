
<template>
  <div class="container">

    <!-- TODO - abstract into PageHeader component -->
    <div class="row">
      <div class="col-lg-8">
        <h2>
          Projects
        </h2>
      </div>


      <div class="col-lg-4 text-right">
        <button class='btn btn-primary' v-b-modal="'new-project-modal'">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New Project
        </button>
      </div>

      <div class="col-lg-12">
        <hr>
      </div>
    </div>

    <!-- Bootstrap Modal Component -->
    <!-- TODO - move this outside the scope of the loop, and instead pass only the options into a single instance -->
    <b-modal id="new-project-modal"
      :title="'New App'"
      @ok="persist()"
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="dark"
      body-text-variant="light"
      footer-bg-variant="success"
      footer-text-variant="light"
      ok-variant='success'
      ok-title='Create'
      cancel-title='Cancel'
      cancel-variant='dark'
    >

      <div class="form-group">
        <label class='mb-0'>
          Label
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-2">The name of your project</small>
        <input type="text" class="form-control" placeholder="Label" v-model="newModel.label" @input="setIdentifier()">
      </div>

      <!-- <pre class='text-left bg-light'>{{model}}</pre> -->
    </b-modal>

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
  components: {
    ListView
  },
  metaInfo: {
    title: 'Projects' // title is now "NAME - Projects"
  },
  mounted () {
    this.fetch()
  },
  computed: mapGetters({
    collection: 'project/collection',
    newModel: 'project/newModel'
  }),
  methods: mapActions({
    fetch: 'project/fetchCollection',
    persist: 'project/create',
    setIdentifier: 'project/setIdentifier'
  })
}
</script>


