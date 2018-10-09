<template>
  <div class='col-lg-4 mb-4'>
    <div class="card card-body bg-transparent border-primary shadow-hover">

      <!-- Bootstrap Modal Component -->
      <b-modal :id="'modal_' + project._id"
        :title="'Clone ' + project.label + '?'"
        @ok="cloneExample(project)"
        ok-variant='info'
        ok-title='Clone'
        cancel-title='Cancel'
        >
        <p class="text-left">Are you sure you want to clone the {{ project.label }} Blueprint?</p>
      </b-modal>

      <div class="row align-items-center text-primary">

        <div class="col-lg-12 text-center">
          <p class="lead mb-0">
            <b-link link v-b-modal="'modal_' + project._id">{{project.label}}</b-link>
          </p>
          <!-- <small class="text-muted"> -->
          <small>
            <!-- Last edited 9 / 2 / 18 -->
            {{ project.schemas.length }} {{ project.schemas.length === 1 ? 'Model' : 'Models' }}
          </small>
        </div>

        <div class="col-lg-12">
          <hr class='border-primary'>
        </div>

        <div class="col-lg-12 text-center">

          <span class="mx-1" v-b-tooltip.hover.left title='Export' @click="exportApp(project)">
            <i class="fa fa-download text-primary fa-fw"></i>
          </span>

          <span class="mx-1" v-b-tooltip.hover.left title='Duplicate' v-b-modal="'modal_' + project._id">
            <i class="fa fa-copy text-primary fa-fw"></i>
          </span>


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
  methods: mapActions({
    exportApp: 'project/exportJson'
  })
}
</script>
