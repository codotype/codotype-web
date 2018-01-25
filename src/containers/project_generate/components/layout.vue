
<template>
  <div class="row d-flex w-100">
    <div class="col-lg-12">
      <div class="card card-body bg-dark text-light border-light">

        <div class="row d-flex align-items-center">
          <div class="col-lg-6">
            <h2 class="mb-0">{{ model.label }}</h2>
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
              <p class="text-left">Please confirm application details:</p>
              <!-- <pre class='text-left bg-light'>{{model}}</pre> -->
            </b-modal>

          </div>
        </div>

        <hr>

        <b-tabs pills vertical>

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
import store from '@/store'
import ProjectDetail from './ProjectDetail'
import SchemaTab from './SchemaTab'
import AuthTab from './AuthTab' // TODO - AuthTab
import ServerTab from './ServerTab'
import ClientTab from './ClientTab'
import CssTab from './CssTab'
import DatabaseTab from './DatabaseTab'
import DeploymentTab from './DeploymentTab'
import AbstractTab from './AbstractTab'

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
    DeploymentTab,
    AbstractTab
  },
  computed: {
    deploymentOpts () {
      return [
        { id: 'docker_compose', icon: 'devicon-docker-plain', label: 'Docker', selected: true },
        // { id: 'ansible', icon: 'devicon-amazonwebservices-plain', label: 'Ansible', disabled: true },
        // { id: 'digital_ocean', icon: 'devicon-amazonwebservices-plain', label: 'DigitalOcean', disabled: true },
        { id: 'heroku', icon: 'devicon-heroku-plain', label: 'Heroku', disabled: true },
        { id: 'azure', icon: 'devicon-windows8-plain', label: 'Microsoft Azure', disabled: true },
        { id: 'aws', icon: 'devicon-amazonwebservices-plain', label: 'AWS', disabled: true }
      ]
    },
    clientOpts () {
      return {
        client_frameworks: [
          // { id: 'none', icon: 'fa fa-times', label: 'None' },
          { id: 'vuejs', icon: 'devicon-vuejs-plain', label: 'Vue.js', selected: true, text: 'VueJS is a client-side javascript framework for building reactive user interfaces.', href: 'https://github.com/vuejs' },
          { id: 'react', icon: 'devicon-react-plain', label: 'React', disabled: true }
        ],
        build_tools: [
          { id: 'webpack', icon: 'devicon-webpack-plain', label: 'Webpack', selected: true },
          { id: 'gulp', icon: 'devicon-gulp-plain', label: 'Gulp + Browserify', disabled: true }
        ],
        css_frameworks: [
          { id: 'bootstrap', icon: 'devicon-bootstrap-plain', label: 'Bootstrap', selected: true },
          { id: 'foundation', icon: 'devicon-foundation-plain', label: 'Foundation', disabled: true }
        ]
      }
    }
  },
  methods: {
    generateApplication () {
      store.dispatch('project/generate', this.model)
    },
    onConfirm () {
      return store.dispatch('project/destroy', this.model)
    }
  }
}
</script>


