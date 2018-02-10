
<template>
  <div class='row'>
    <router-view/>

    <div v-for="project in collection" v-bind:key="project._id" class='col-lg-12 mb-3'>
      <div class="card card-body bg-dark border-light">
        <div class="row">

          <div class="col-lg-6">
            <!-- project URL -->
            <a v-bind:href="'#/projects/' + project._id">{{project.label}}</a>
          </div>

          <div class="col-lg-6 text-right">

            <a class='btn btn-sm btn-outline-light' v-bind:href="'#/projects/' + project._id + '/preview'">
              <i class="fa fa-list-alt mr-1"></i>
              Preview
            </a>

            <a class='btn btn-sm btn-outline-warning' v-bind:href="'#/projects/' + project._id + '/edit'">
              <i class="fa fa-pencil mr-1"></i>
              Edit
            </a>

            <a class='btn btn-sm btn-outline-info' v-bind:href="'#/projects/' + project._id + '/schemas'">
              <i class="fa fa-database mr-1"></i>
              Schemas
            </a>

            <a class='btn btn-sm btn-outline-success' v-bind:href="'#/projects/' + project._id + '/generate'">
              <i class="fa fa-cog mr-1"></i>
              Generate
            </a>

            <!-- <button class='btn btn-sm btn-outline-info' @click="exportProject(project)"> -->
              <!-- <i class="fa fa-code mr-1"></i> -->
              <!-- Export -->
            <!-- </button> -->

            <!-- Destroy project Confirmation -->
            <button class="btn btn-sm btn-outline-danger" v-b-modal="'modal_' + project._id">
              <i class="fa mr-1 fa-trash"></i>
              Destroy
            </button>

            <!-- Bootstrap Modal Component -->
            <b-modal :id="'modal_' + project._id"
              :title="'Destroy ' + project.label + '?'"
              @ok="destroyProject(project)"
              header-bg-variant='dark'
              header-text-variant='light'
              body-bg-variant='dark'
              body-text-variant='light'
              footer-bg-variant='danger'
              footer-text-variant='light'
              ok-variant='danger'
              ok-title='DESTROY'
              cancel-title='Cancel'
              cancel-variant='dark'
            >
              <p class="text-left">Are you sure you want to destroy the {{ project.label }} project?</p>
            </b-modal>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  props: ['collection'],
  methods: {
    exportProject (project) {
      console.log('EXPORT APP:')
      console.log(JSON.stringify(project, null, 2))
    },
    destroyProject (model) {
      return this.$store.dispatch('project/destroy', model)
    }
  }
}
</script>
