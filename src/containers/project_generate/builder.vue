
<template>
  <div class="row mt-2">
    <div class="col-lg-12">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-3">
            <div class="card border-light">
              <div class="card-body">
                <p class="lead mb-0">Generators</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="each in opts.client">
                  {{ each.label }}
                </li>
                <li class="list-group-item" v-for="each in opts.server">
                  {{ each.label }}
                </li>
              </ul>
            </div>
          </div>


          <div class="col-lg-6">
            <div class="card card-body border-light">
              <p class="lead mb-0">Vue.js</p>
              <p class="card-text mb-0">A generator for Vue.js, Vue Router, Vuex, &amp; Bootstrap</p>
              <hr>
              <div class="row">
                <div class="col-lg-12">
                  <!-- {{opts.client[1].global_options}} -->

                  <!-- GLOBAL OPTIONS GO HERE -->
                  <p class="lead">Global Options</p>
                  <div class="form-group" v-for="attr in opts.client[1].global_options">
                    <label>{{attr.label}}</label>
                    <br>
                    <small>{{attr.help}}</small>
                    <input class='form-control' type="checkbox" name="" v-if="attr.type === 'BOOLEAN'">
                    <MoreInfoLink :url="attr.more_info_url" />
                    <!-- {{attr}} -->
                  </div>

                  <hr>

                  <!-- MODEL OPTIONS GO HERE -->
                  <p class="lead mb-0">Model Options</p>
                  <small>Define additional model-specific options for this generator</small>
                  <MoreInfoLink url="https://codotype.github.io" />
                  <hr>

                  <div class="card" v-for="model in schemas">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      {{ model.label }} Model Options
                      <button class="btn btn-sm btn-outline-light">
                        <i class="fa fa-chevron-down"></i>
                      </button>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item" v-for="attr in opts.client[1].model_options">
                        <div class="row">
                          <div class="col-lg-9">
                            <label>{{attr.label}}</label>
                            <br>
                            <small>{{attr.help}}</small>
                            <MoreInfoLink :url="attr.more_info_url" />
                          </div>
                          <div class="col-lg-3">
                            <input class='form-control' type="checkbox" name="" v-if="attr.type === 'BOOLEAN'">
                          </div>
                        </div>
                        <br>
                        <!-- {{attr}} -->
                      </li>
                    </ul>
                  </div>

                </div>
                <div class="col-lg-12">
                  <hr>
                </div>
                <div class="col-lg-12 text-right">
                  <button class="btn btn-outline-success">Add to build</button>
                  <button class="btn btn-outline-light">Clear</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card card-body border-light text-light">
              <p class='lead'>Build</p>

              <ul class="list-group">
                <li class="list-group-item border-light" v-for="each in opts.client">
                  {{ each.label }}
                </li>
              </ul>

              <hr>

              <button class="btn btn-lg btn-success btn-block py-4" @click="showGenerateModal()">
                <i class="fa fa-fw fa-play mr-2"></i>
                Generate Application
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import AbstractTab from './components/AbstractTab'
import MoreInfoLink from '@/components/MoreInfoLink'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AbstractTab,
    MoreInfoLink
  },
  created () {
    this.setActivated(true)
  },
  beforeDestroy () {
    this.setActivated(false)
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    schemas: 'schema/collection',
    fetching: 'generator/fetching',
    opts: 'generator/generatorFormOpts'
  }),
  methods: {
    showGenerateModal () {
      this.$refs.modal.show()
      console.log('generating?')
      // TODO - add a timeout here of a few seconds to allow the user to read the modal's message
      console.log(this.generateApplication())
    },
    ...mapActions({
      setActivated: 'generator/setActivated',
      generateApplication: 'generator/generate'
    })
  }
}
</script>
