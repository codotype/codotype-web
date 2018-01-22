
<template>

  <div class="container-fluid">

    <div class="row">
      <div class="col-lg-12">
        <div class="card card-body bg-dark text-light border-light">

          <div class="row mb-2">
            <div class="col-lg-10">
              <h2>{{ model.label }}</h2>
            </div>
            <div class="col-lg-2 text-right">

              <!-- Opens Destroy Confirmation Modal -->
              <button class="btn btn-sm btn-outline-success" v-b-modal="'generate-modal'">
                <i class="fa fa-fw fa-play mr-2"></i>
                Generate Application
              </button>

              <!-- Bootstrap Modal Component -->
              <!-- TODO - move this outside the scope of the loop, and instead pass only the options into a single instance -->
              <b-modal id="generate-modal"
                :title="'Generate Application'"
                @ok="generateApplication()"
                header-bg-variant="dark"
                header-text-variant="light"
                body-bg-variant="dark"
                body-text-variant="light"
                footer-bg-variant="success"
                footer-text-variant="light"
                ok-variant='success'
                ok-title='GENERATE'
                cancel-title='Cancel'
                cancel-variant='dark'
              >
                <p class="text-left">Are you sure you want to generate the {{ model.label }} project?</p>
              </b-modal>

            </div>
          </div>

          <b-tabs>

            <!-- Project Detail -->
            <b-tab title="Project" active>
              <ProjectDetail :model="model" />
            </b-tab>

            <!-- Schemas -->
            <b-tab title="Schemas" >
              <SchemaTab :model="model" />
            </b-tab>

            <!-- Authentication -->
            <b-tab title="Authentication">
              <AuthTab :model="model" />
            </b-tab>

            <!-- Server Frameworks -->
            <b-tab title="Server">
              <ServerTab :model="model" />
            </b-tab>

            <!-- Databases -->
            <b-tab title="Database">
              <DatabaseTab :model="model" />
            </b-tab>

            <!-- Client Frameworks -->
            <!-- Build Tools -->
            <!-- CSS Frameworks -->
            <b-tab title="Client">
              <ClientTab :model="model" />
            </b-tab>

            <!-- Build -->
            <!-- <b-tab title="Build"> -->
              <!-- <br> -->
              <!-- Build / Generate Codebase -->
              <!-- <br> -->
              <!-- Build Configuration / Options -->
            <!-- </b-tab> -->

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
import SchemaTab from './SchemaTab'
import AuthTab from './AuthTab'
import ServerTab from './ServerTab'
import ClientTab from './ClientTab'
import DatabaseTab from './DatabaseTab'

export default {
  props: ['model'],
  components: {
    ProjectDetail,
    SchemaTab,
    AuthTab,
    ServerTab,
    ClientTab,
    DatabaseTab
  },
  methods: {
    generateApplication () {
      console.log('generateApplication')
    },
    onConfirm () {
      return store.dispatch('project/destroy', this.model)
    }
  }
}
</script>


