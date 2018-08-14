
<template>
  <div class="row mt-2">
    <div class="col-lg-12">
      <div class="card-body">
        <div class="row">

          <!-- <div class="col-lg-3"> -->
            <!-- <div class="card"> -->
              <!-- <div class="card-body"> -->
                <!-- <p class="lead mb-0">Generators</p> -->
              <!-- </div> -->
              <!-- <ul class="list-group list-group-flush"> -->
                <!-- <li class="list-group-item" v-for="each in opts.client"> -->
                  <!-- {{ each.label }} -->
                <!-- </li> -->
                <!-- <li class="list-group-item" v-for="each in opts.server"> -->
                  <!-- {{ each.label }} -->
                <!-- </li> -->
              <!-- </ul> -->
            <!-- </div> -->
          <!-- </div> -->

          <div class="col-lg-9">

            <!-- TODO - abstract this card into a separate component -->
            <!-- Call it something like, "GeneratorForm" -->
            <div class="card card-body">
              <p class="lead mb-0">Vue.js Generator</p>
              <hr>
              <div class="row">
                <div class="col-lg-12">

                  <b-tabs>
                    <!-- TODO - move overview into its own component -->
                    <b-tab title="Overview" active>
                      <p class="card-text mb-0">A generator for Vue.js, Vue Router, Vuex, &amp; Bootstrap</p>
                      <p>TODO - include link to GitHub repository</p>
                      <p>TODO - include longer description (in markdown?)</p>
                    </b-tab>

                    <b-tab title="Global Options">
                      <br>
                      <GeneratorGlobalOptions />
                    </b-tab>
                    <b-tab title="Model Options" >
                      <br>
                      <GeneratorModelOptions />
                    </b-tab>

                    <b-tab title="Addons" >
                      <br>
                      <div class="row">
                        <div class="col-lg-3">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item list-group-item-action" v-for="m in opts.client[1].generator_models" :title="m.label_plural">
                              {{ m.label_plural }}
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-9">
                          <span class='d-flex flex-row align-items-center'>
                            <p class="lead mb-0 mr-3">{{opts.client[1].generator_models[0].label_plural}}</p>
                            <MoreInfoLink url="https://codotype.github.io" />
                          </span>
                          <small>{{opts.client[1].generator_models[0].description}}</small>
                          <ul class="list-group list-group-group-flush">
                            <!-- <li class="list-group-item" v-for="a in m.attributes"> -->
                              <!-- {{ a.label }} || {{ a.datatype }} -->
                            <!-- </li> -->

                            <li class="list-group-item list-group-item-action list-group-item-primary">
                              <i class="fa fa-plus"></i>
                              New {{ opts.client[1].generator_models[0].label }}
                            </li>

                            <li class="list-group-item" v-for="x in opts.client[1].generator_model_data[opts.client[1].generator_models[0].identifier_plural]">
                              <strong>{{opts.client[1].generator_models[0].attributes[0].label}}:</strong> {{x[opts.client[1].generator_models[0].attributes[0].identifier]}}
                              <div class="btn-group pull-right">
                                <button class="btn btn-sm btn-outline-danger">
                                  <i class="fa fa-trash"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-warning">
                                  <i class="fa fa-pencil"></i>
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <!-- TODO - abstract this tab's content into a separate component -->
                      <b-tab v-for="m in opts.client[1].generator_models" :title="m.label_plural">
                        <br>
                      </b-tab>

                    </b-tab>

                  </b-tabs>

                  <!-- TODO - abstract into separate component -->
                  <!-- <div> -->
                    <!-- <span class='d-flex flex-row align-items-center'> -->
                      <!-- <p class="lead mb-0 mr-3">Generator Models</p> -->
                      <!-- <MoreInfoLink url="https://codotype.github.io" /> -->
                    <!-- </span> -->
                    <!-- <small>Define values for generator-specific models</small> -->

                    <!-- <div class="card" v-for="m in opts.client[1].generator_models"> -->
                      <!-- <div class="card-header">{{m.label_plural}}</div> -->
                    <!-- </div> -->
                  <!-- </div> -->

                </div>
                <div class="col-lg-12">
                  <hr>
                </div>
                <div class="col-lg-12 text-right">
                  <button class="btn btn-outline-dark">Clear</button>
                  <button class="btn btn-outline-success">Add To Build</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3">

            <!-- TODO - abstract this card into a separate component -->
            <!-- Call it something like, `BuildManifest` -->
            <div class="card card-body">
              <p class='lead'>Build</p>

              <ul class="list-group">
                <li class="list-group-item" v-for="each in opts.client">
                  {{ each.label }}
                </li>
              </ul>

              <hr>

              <button class="btn btn-lg btn-success btn-block py-4" @click="showGenerateModal()">
                <i class="fa fa-fw fa-play mr-2"></i>
                Generate
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
import GeneratorModelOptions from '@/components/GeneratorModelOptions'
import GeneratorGlobalOptions from '@/components/GeneratorGlobalOptions'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    AbstractTab,
    MoreInfoLink,
    GeneratorModelOptions,
    GeneratorGlobalOptions
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
