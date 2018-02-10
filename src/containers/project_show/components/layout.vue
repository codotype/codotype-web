
<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-body bg-blaze">

        <div class="row d-flex align-items-center">
          <div class="col-lg-6">
            <h2>{{ model.label }}</h2>
          </div>
          <div class="col-lg-6 text-right">

            <a class='btn btn-sm btn-outline-light' v-bind:href="'#/projects/' + model._id + '/preview'">
              <i class="fa fa-list-alt mr-1"></i>
              Preview
            </a>

            <a class='btn btn-sm btn-outline-warning' v-bind:href="'#/projects/' + model._id + '/edit'">
              <i class="fa fa-pencil mr-1"></i>
              Edit
            </a>

            <a class='btn btn-sm btn-outline-info' v-bind:href="'#/projects/' + model._id + '/schemas'">
              <i class="fa fa-database mr-1"></i>
              Schemas
            </a>

            <a class='btn btn-sm btn-outline-success' v-bind:href="'#/projects/' + model._id + '/generate'">
              <i class="fa fa-cog mr-1"></i>
              Generate
            </a>

            <!-- <button class='btn btn-sm btn-outline-info' @click="exportProject(project)"> -->
              <!-- <i class="fa fa-code mr-1"></i> -->
              <!-- Export -->
            <!-- </button> -->

            <!-- Destroy project Confirmation -->
            <button class="btn btn-sm btn-outline-danger" v-b-modal="'modal_' + model._id">
              <i class="fa mr-1 fa-trash"></i>
              Destroy
            </button>

            <!-- Bootstrap Modal Component -->
            <b-modal :id="'modal_' + model._id"
              :title="'Destroy ' + model.label + '?'"
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
              <p class="text-left">Are you sure you want to destroy the {{ model.label }} project?</p>
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
  props: ['model']
}
</script>


