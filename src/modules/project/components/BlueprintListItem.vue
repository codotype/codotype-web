<template>
  <!-- Child -->
  <div class='col-lg-4 mb-4'>
    <div class="card card-body shadow-hover border-light">
      <div class="row align-items-center">

        <div class="col-lg-12 text-center">
          <!-- project URL -->
          <p class="lead mb-0">
            <a v-bind:href="'#/projects/' + project._id ">{{project.label}}</a>
          </p>
          <small class="text-muted">
            Last edited 9 / 2 / 18
          </small>
        </div>

        <div class="col-lg-12">
          <hr>
        </div>

        <!-- <div class="col-lg-12"> -->
          <!-- <i class="fa fa-database mr-1"></i> -->
          <!-- <template v-if="project.schemas.length"> -->
            <!-- {{ project.schemas.length + ' Schema' }} -->
            <!-- {{ schemaString(project) }} -->
          <!-- </template> -->
          <!-- <template v-else> -->
            <!-- No Schemas -->
          <!-- </template> -->
        <!-- </div> -->

        <!-- <br> -->

        <div class="col-lg-12 text-center">

          <!-- <a class='btn btn-sm btn-outline-light' :href="'#/projects/' + project._id + '/export'"> -->
            <!-- <i class="fa fa-code mr-1"></i> -->
            <!-- Export -->
          <!-- </a> -->

          <!-- <button class='btn btn-sm btn-outline-success' @click="goToBuild(project)"> -->
            <!-- <i class="fa fa-play"></i> -->
          <!-- </button> -->

          <!-- Destroy project Confirmation -->
          <!-- <button class="btn btn-sm btn-outline-danger" v-b-modal="'modal_' + project._id"> -->
            <!-- <i class="fa fa-trash"></i> -->
          <!-- </button> -->


          <span class="mx-1" v-b-tooltip.hover.left title='Export' @click="exportApp(project)">
            <i class="fa fa-download project-action project-action-primary fa-fw"></i>
          </span>

          <span class="mx-1" v-b-tooltip.hover.left title='Share'>
            <i class="fa fa-share-alt project-action project-action-secondary fa-fw"></i>
          </span>

          <span class="mx-1" v-b-tooltip.hover.left title='Duplicate Blueprint'>
            <i class="fa fa-copy project-action project-action-success fa-fw"></i>
          </span>

          <span class="mx-1 text-hover-danger" v-b-tooltip.hover.left title='Delete' v-b-modal="'modal_' + project._id">
            <i class="fa fa-trash project-action project-action-danger fa-fw"></i>
          </span>

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
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  props: ['project'],
  methods: {
    ...mapActions({
      destroyProject: 'project/destroy',
      selectBuildApp: 'build/selectApp',
      exportApp: 'project/exportJson'
    }),
    goToBuild (project) {
      this.selectBuildApp(project._id)
      window.location = '#/build/new' // TODO - use vue router
    },
    schemaString (project) {
      let schemas = []
      project.schemas.each(s => schemas.push(s.label))
      return schemas.join(', ') + ' Models'
    }
  }
}
</script>

<style lang='sass'>
@import '../../../sass/vendor.sass'

i.project-action
  color: $gray-300
  transition: color .25s ease-in

  &.project-action-danger
    &:hover
      color: $red

  &.project-action-success
    &:hover
      color: $green

  &.project-action-primary
    &:hover
      color: $blue

  &.project-action-secondary
    &:hover
      color: $gray-600

</style>
