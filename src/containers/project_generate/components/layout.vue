
<template>
  <div class="row d-flex w-100">
    <div class="col-lg-12">
      <div class="card card-body bg-dark text-light border-light">

        <div class="row mb-2">
          <div class="col-lg-6">
            <h2>{{ model.label }}</h2>
          </div>
          <div class="col-lg-6 text-right">

            <!-- Opens Destroy Confirmation Modal -->
            <button class="btn btn-lg btn-success" v-b-modal="'generate-modal'">
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
          <!-- <b-tab title="Project" active> -->
            <!-- <ProjectDetail :model="model" /> -->
          <!-- </b-tab> -->

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
          <b-tab title="Client">
            <ClientTab :model="model" />
          </b-tab>

          <!-- CSS Frameworks -->
          <b-tab title="CSS Framework">
            <CssTab :model="model" />
          </b-tab>

          <b-tab title="Deployment">
            <DeploymentTab :model="model" />
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
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import ProjectDetail from './ProjectDetail'
import SchemaTab from './SchemaTab'
import AuthTab from './AuthTab' // TODO - AuthTab
import ServerTab from './ServerTab'
import ClientTab from './ClientTab'
import CssTab from './CssTab'
import DatabaseTab from './DatabaseTab'
import DeploymentTab from './DeploymentTab'

export default {
  props: ['model'],
  components: {
    ProjectDetail,
    SchemaTab,
    AuthTab,
    ServerTab,
    ClientTab,
    CssTab,
    DatabaseTab,
    DeploymentTab
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


