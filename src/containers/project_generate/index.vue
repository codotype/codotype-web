
<template>
  <div class="row mt-2">
    <div class="col-lg-12">
      <div class="card-body">

        <!-- Generate Modal Component -->
        <!-- TODO - prevent dismissal -->
        <b-modal ref="modal"
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
          <div class="row">
            <div class="col-sm-12 text-center">

              <p class="lead">
                Thank you for using blazeplate :)
              </p>

              <!-- <pre class='text-left bg-light'>{{model}}</pre> -->
              <!-- <p class="text-left text-warning">TODO - add social media</p> -->
              <!-- <p class="text-left text-warning">TODO - add github</p> -->
              <!-- <p class="text-left text-warning">TODO - add contribute + donate</p> -->

              Share
              <social-sharing class='mt-3' url="I just generated a full-stack app at https://blazeplate.io" inline-template>
                <div>
                  <network network="facebook">
                    <i class="fa fa-lg fa-facebook mx-1"></i>
                  </network>
                  <network network="googleplus">
                    <i class="fa fa-lg fa-google-plus mx-1"></i>
                  </network>
                  <network network="linkedin">
                    <i class="fa fa-lg fa-linkedin mx-1"></i>
                  </network>
                  <network network="pinterest">
                    <i class="fa fa-lg fa-pinterest mx-1"></i>
                  </network>
                  <network network="reddit">
                    <i class="fa fa-lg fa-reddit mx-1"></i>
                  </network>
                  <network network="twitter">
                    <i class="fa fa-lg fa-twitter mx-1"></i>
                  </network>
                  <!-- <network network="vk"> -->
                    <!-- <i class="fa fa-lg fa-vk"></i> -->
                  <!-- </network> -->
                  <!-- <network network="weibo"> -->
                    <!-- <i class="fa fa-lg fa-weibo"></i> -->
                  <!-- </network> -->
                  <!-- <network network="whatsapp"> -->
                    <!-- <i class="fa fa-lg fa-whatsapp"></i> -->
                  <!-- </network> -->
                </div>
              </social-sharing>

              <br>

              <i class="fa fa-2x fa-spinner fa-spin" v-if="fetching"></i>
              <p class="lead mb-0">Generating...</p>
            </div>
          </div>

        </b-modal>


        <!-- Pills nav -->
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
            <AbstractTab :model="model" stackId="auth" :stackOpts="opts.auth" title="Authorization" />
          </b-tab>

        </b-tabs>

        <hr>

        <!-- Opens Destroy Confirmation Modal -->
        <button class="btn btn-lg btn-success" @click="showGenerateModal()">
          <i class="fa fa-fw fa-play mr-2"></i>
          Generate App
        </button>

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
    fetching: 'generator/fetching',
    opts: 'generator/generatorFormOpts'
  }),
  methods: {
    showGenerateModal () {
      this.$refs.modal.show()
      console.log('generating?')
      console.log(this.generateApplication())
    },
    ...mapActions({
      setActivated: 'generator/setActivated',
      generateApplication: 'generator/generate'
    })
  }
}
</script>
