
<template>

  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-12">
        <div class="card card-body bg-dark text-light border-light">

          <div class="row">
            <div class="col-lg-8">
              <h2>{{ model.label }}</h2>
            </div>
            <div class="col-lg-4 text-right">

              <!-- Edit Link -->
              <a class="btn btn-outline-warning btn-sm" :href="'#/projects/' + model._id + '/edit'">
                <i class="fa fa-fw fa-pencil"></i>
              </a>

              <!-- Opens Destroy Confirmation Modal -->
              <button class="btn btn-outline-danger btn-sm" v-b-modal.confirm-modal>
                <i class="fa fa-fw fa-trash"></i>
              </button>

              <!-- Bootstrap Modal Component -->
              <b-modal id="confirm-modal" title="Destroy Project?" @ok="onConfirm">
                <p class="my-4">Are you sure you want to destroy this Project?</p>
              </b-modal>

            </div>
          </div>

          <b-tabs>

            <!-- Project Detail -->
            <b-tab class="mt-4" title="Project" active>
              <p class="lead">Project Details</p>
              <hr>
              <ProjectDetail :model="model" />
            </b-tab>

            <!-- Project Schemas -->
            <b-tab class="mt-4" title="Schemas" >
              <br>Schemas
            </b-tab>

            <b-tab class='mt-4' title="Client Frameworks">
              <br>Client Frameworks
            </b-tab>

            <b-tab class='mt-4' title="CSS Frameworks">
              <br>CSS Frameworks
            </b-tab>

            <b-tab class='mt-4' title="Build Tool">
              <br>Build Tool
            </b-tab>

            <b-tab class='mt-4' title="Server Frameworks">
              <br>Server Frameworks
            </b-tab>

            <b-tab class='mt-4' title="Authentication">
              <br>Authentication
            </b-tab>

            <b-tab class='mt-4' title="Databases">
              <br>Databases
            </b-tab>

          </b-tabs>

        </div>
      </div>
    </div>

  </div>

</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import ProjectDetail from './ProjectDetail'

export default {
  props: ['model'],
  components: {
    ProjectDetail
  },
  methods: {
    onConfirm () {
      return store.dispatch('project/destroy', this.model)
    }
  }
}
</script>


