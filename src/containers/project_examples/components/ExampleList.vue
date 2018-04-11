
<template>
  <div class='row'>

    <!-- Child -->
    <div v-for="project in collection" v-bind:key="project._id" class='col-lg-12 mb-3'>
      <div class="card card-body bg-dark border-primary">
        <div class="row align-items-center">

          <div class="col-lg-3 text-primary">
            <!-- project URL -->
            <a class='text-primary' v-bind:href="'#/projects/' + project._id + '/schemas' ">{{project.label}}</a>
          </div>

          <div class="col-lg-3">
            <div class='text-primary'>
              <i class="fa fa-database mr-1"></i>
              {{ project.schemas.length + ' Schema(s)'}}
            </div>
          </div>

          <div class="col-lg-6 text-right">

            <!-- Clone example Confirmation -->
            <button class="btn btn-outline-primary" v-b-modal="'modal_' + project._id">
              <i class="fa mr-1 fa-copy"></i>
              Clone Example
            </button>

            <!-- Bootstrap Modal Component -->
            <b-modal :id="'modal_' + project._id"
              :title="'Clone ' + project.label + '?'"
              @ok="cloneExample(project)"
              header-bg-variant='dark'
              header-text-variant='light'
              body-bg-variant='dark'
              body-text-variant='light'
              footer-bg-variant='primary'
              footer-text-variant='light'
              ok-variant='primary'
              ok-title='Clone'
              cancel-title='Cancel'
              cancel-variant='dark'
            >
              <p class="text-left">Are you sure you want to clone the {{ project.label }} project?</p>
            </b-modal>

          </div>

        </div>
      </div>
    </div>

    <!-- Empty -->
    <div class="col-lg-12 mb-3" v-if="!collection[0]">
      <div class="card bg-dark border-warning text-warning card-body text-center">
        <p class="lead card-text">
          <i class="fa fa-fw fa-info-circle mr-2"></i>
          <br>
          No Example Apps found
        </p>
        <p class="card-text">
          Uh oh. Something must actually be wrong here.
          <a href="#/projects">My Projects</a>
        </p>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  props: ['collection'],
  methods: mapActions({
    cloneExample: 'project/cloneExample'
  })
}
</script>
