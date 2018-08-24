<template>
  <div class="container">

    <!-- TODO - use PageHeader component here, similar to App Editor page -->
    <EditorHeader
      title="Build"
      help="Configure a build using a single App and multiple generators"
      url="https://codotype.github.io"
    />

    <hr>

    <!-- STEP 1 - Select an App -->
    <AppSelector v-if="!newBuildModel.app_id"/>

    <!-- STEP 2 - Select a generator -->
    <GeneratorSelector v-if="newBuildModel.app_id && !newBuildModel.stages[0]"/>

    <!-- Step 3 - Configure the generator -->
    <!-- Show ONLY when a generator and app are selected -->
    <div class="row" v-if='newBuildModel.stages[0]'>

      <div class="col-lg-9">

          <!-- <div class="card-header d-flex justify-content-between align-items-center"> -->
            <!-- <p class="lead mb-0">Vue.js Generator</p> -->
            <!-- <div> -->
              <!-- <button class="btn btn-sm btn-outline-dark"> -->
                <!-- <i class="fa fa-times"></i> -->
                <!-- Clear -->
              <!-- </button> -->
              <!-- <button class="btn btn-sm btn-outline-success"> -->
                <!-- <i class="fa fa-plus"></i> -->
                <!-- Add To Build -->
              <!-- </button> -->
            <!-- </div> -->
          <!-- </div> -->

        <!-- TODO - abstract ALL of this into a separate component -->
        <!-- GeneratorConfigure component -->
        <div class="row">
          <div class="col-lg-12">

            <b-tabs>

              <!-- TODO - move overview into its own component -->
              <b-tab title="Overview" active>
                <p class="lead mt-3">A generator for Vue.js, Vue Router, Vuex, &amp; Bootstrap</p>
                <p class='lead text-danger'>TODO - include link to GitHub repository</p>
                <p class='lead text-danger'>TODO - include longer description (in markdown?)</p>
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
                <GeneratorAddonForm />
              </b-tab>

            </b-tabs>

          </div>
        </div>

      </div>

      <div class="col-lg-3">

        <!-- TODO - abstract this card into a separate component -->
        <!-- TODO - abstract this card into a separate component -->
        <div class="card card-body">
          <!-- Call it something like, `BuildManifest` -->
          <p class='lead mb-0'>Build Manifest</p>
          <hr>

          <p class='lead mb-0'>App</p>
          <ul class="list-group">
            <li class="list-group-item list-group-item-action">
              {{ newBuildModel.app_id }}
            </li>
          </ul>

          <br>

          <p class='lead mb-0'>Generators</p>
          <ul class="list-group">
            <li class="list-group-item list-group-item-action" v-for="each in newBuildModel.stages">
              {{ each.generator_id }}
            </li>
          </ul>

          <hr>

          <button class="btn btn-lg btn-success btn-block py-4" @click="showGenerateModal()">
            <i class="fa fa-fw fa-play mr-2"></i>
            Generate
          </button>
        </div>
        <!-- TODO - abstract this card into a separate component -->
        <!-- TODO - abstract this card into a separate component -->

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import GeneratorModelOptions from '@/modules/build/components/GeneratorModelOptions'
import GeneratorGlobalOptions from '@/modules/build/components/GeneratorGlobalOptions'
import GeneratorAddonForm from '@/modules/build/components/GeneratorAddonForm'
import GeneratorSelector from '@/modules/build/components/GeneratorSelector'
import AppSelector from '@/modules/build/components/AppSelector'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    GeneratorModelOptions,
    GeneratorGlobalOptions,
    GeneratorAddonForm,
    GeneratorSelector,
    AppSelector
  },
  created () {
    this.resetNewBuildModel()
  },
  computed: mapGetters({
    newBuildModel: 'build/newModel',
    model: 'project/selectedModel',
    schemas: 'schema/collection',
    fetching: 'generator/fetching',
    generatorCollection: 'generator/collection'
  }),
  methods: mapActions({
    resetNewBuildModel: 'build/resetNewModel'
  })
}
</script>
