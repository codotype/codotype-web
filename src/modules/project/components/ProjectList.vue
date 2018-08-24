<template>
  <div class='row'>

    <!-- Child -->
    <div v-for="project in collection" v-bind:key="project._id" class='col-lg-12 mb-3'>
      <div class="card card-body">
        <div class="row align-items-center">

          <div class="col-lg-3">
            <!-- project URL -->
            <p class="lead mb-0">
              <a v-bind:href="'#/projects/' + project._id ">{{project.label}}</a>
            </p>
          </div>

          <div class="col-lg-5">
            <i class="fa fa-database mr-1"></i>
            <template v-if="project.schemas.length">
              <!-- {{ project.schemas.length + ' Schema' }} -->
              {{ schemaString(project) }}
            </template>
            <template v-else>
              No Schemas
            </template>
          </div>

          <div class="col-lg-4 text-right">

            <!-- <a class='btn btn-sm btn-outline-light' :href="'#/projects/' + project._id + '/export'"> -->
              <!-- <i class="fa fa-code mr-1"></i> -->
              <!-- Export -->
            <!-- </a> -->

            <button class='btn btn-sm btn-outline-success' @click="goToBuild(project)">
              <i class="fa fa-play mr-1"></i>
              Generate
            </button>

            <!-- Destroy project Confirmation -->
            <button class="btn btn-sm btn-outline-danger" v-b-modal="'modal_' + project._id">
              <i class="fa fa-trash"></i>
            </button>

            <!-- Bootstrap Modal Component -->
            <b-modal :id="'modal_' + project._id"
              :title="'Destroy ' + project.label + '?'"
              @ok="destroyProject(project)"
              ok-variant='danger'
              ok-title='DESTROY'
              cancel-title='Cancel'
            >
              <p class="text-left">Are you sure you want to destroy the {{ project.label }} project?</p>
            </b-modal>

          </div>

        </div>
      </div>
    </div>

    <!-- Empty -->
    <div class="col-lg-12 mb-3" v-if="!collection[0]">
      <div class="card bg-transparent border-warning text-warning card-body text-center">
        <p class="lead card-text">
          <i class="fa fa-fw fa-info-circle mr-2"></i>
          <br>
          No Apps found
        </p>
        <p class="card-text">
          See some <a href="#/examples">examples</a> or start a <a href="#/examples">new project</a>
        </p>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions({
      destroyProject: 'project/destroy',
      selectBuildApp: 'build/selectApp'
    }),
    goToBuild (project) {
      this.selectBuildApp(project._id)
      window.location = '#/build/new' // TODO - use vue router
    },
    schemaString (project) {
      let schemas = []
      _.each(project.schemas, (s) => { schemas.push(s.label) })
      return schemas.join(', ') + ' Models'
    }
  },
  computed: mapGetters({
    collection: 'project/collection'
  })
}
</script>
