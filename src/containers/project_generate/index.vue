
<template>
  <div class="row mt-2">
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

          <!-- Server Frameworks -->
          <b-tab title="Server">
            <AbstractTab :model="model" stackId="server" :stackOpts="opts.server" title="Server"/>
          </b-tab>

          <!-- Databases -->
          <b-tab title="Database">
            <AbstractTab :model="model" stackId="database" :stackOpts="opts.database" title="Database"/>
          </b-tab>

          <!-- Client Frameworks -->
          <!-- Build Tools -->
          <b-tab title="Client">
            <AbstractTab :model="model" stackId="client" :stackOpts="opts.client.client_frameworks" title="Client Frameworks"/>
          </b-tab>

          <!-- CSS Frameworks -->
          <b-tab title="CSS Framework">
            <AbstractTab :model="model" stackId="client" :stackOpts="opts.client.css_frameworks" title="CSS Frameworks"/>
          </b-tab>

          <b-tab title="Deployment">
            <AbstractTab :model="model" stackId="deployments" :stackOpts="opts.deployment" title="Deployments"/>
          </b-tab>

          <b-tab title="Authorization">
            <AbstractTab :model="model" stackId="auth" :stackOpts="opts.auth" title="Authrozation" />
          </b-tab>

        </b-tabs>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import AbstractTab from './components/AbstractTab'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
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
    opts: 'generator/generatorFormOpts'
  }),
  methods: mapActions({
    setActivated: 'generator/setActivated',
    generateApplication: 'generator/generate'
  })
}
</script>
