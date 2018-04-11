
<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-body bg-dark text-light border-light">

        <!-- Opens Destroy Confirmation Modal -->
        <button class="btn btn-lg btn-success" v-b-modal="'generate-modal'">
          <i class="fa fa-fw fa-play"></i>
        </button>

        <!-- Bootstrap Modal Component -->
        <!-- TODO - move this outside the scope of the loop, and instead pass only the options into a single instance -->
        <!-- TODO -->
        <b-modal id="generate-modal"
          :title="'Generating...'"
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
          <p class="lead">
            Thank you for using blazeplate :)
          </p>
          <p class="text-left text-warning">TODO - add social media</p>
          <p class="text-left text-warning">TODO - add github</p>
          <p class="text-left text-warning">TODO - add contribute + donate</p>
          <!-- <pre class='text-left bg-light'>{{model}}</pre> -->
        </b-modal>

        <hr>

        <b-tabs pills vertical>

          <!-- TODO - decouple `model` (project model) from the generate module as much as possible -->
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
            <AbstractTab :model="model" stackId="client" :stackOpts="clientOpts.client_frameworks" title="Client Frameworks"/>
          </b-tab>

          <!-- CSS Frameworks -->
          <b-tab title="CSS Framework">
            <CssTab :model="model" />
          </b-tab>

          <b-tab title="Deployment">
            <AbstractTab :model="model" stackId="deployments" :stackOpts="deploymentOpts" title="Deployments"/>
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
import ProjectDetail from './components/ProjectDetail'
import AuthTab from './components/AuthTab' // TODO - AuthTab
import ServerTab from './components/ServerTab'
import ClientTab from './components/ClientTab'
import CssTab from './components/CssTab'
import DatabaseTab from './components/DatabaseTab'
import DeploymentTab from './components/DeploymentTab'
import AbstractTab from './components/AbstractTab'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ProjectDetail,
    AuthTab,
    ServerTab,
    ClientTab,
    CssTab,
    DatabaseTab,
    DeploymentTab,
    AbstractTab
  },
  created () {
    this.setActivated(true)
  },
  beforeDestroy () {
    this.setActivated(false)
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    deploymentOpts: 'generator/deploymentOpts',
    clientOpts: 'generator/clientOpts'
  }),
  methods: mapActions({
    setActivated: 'generator/setActivated',
    generateApplication: 'generator/generate'
  })
}
</script>
