<template>
  <div class="container">

    <div class="row">

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

      <!-- TODO - are we even going to keep this component? -->
      <div class="col-lg-3">

        <!-- TODO - abstract this card into a separate component -->
        <!-- TODO - abstract this card into a separate component -->
        <div class="card card-body">
          <!-- Call it something like, `BuildManifest` -->
          <p class='lead'>Build</p>

          <ul class="list-group">
            <li class="list-group-item" v-for="each in generatorCollection">
              {{ each.label }}
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
import MoreInfoLink from '@/components/MoreInfoLink'
import GeneratorModelOptions from '@/modules/build/components/GeneratorModelOptions'
import GeneratorGlobalOptions from '@/modules/build/components/GeneratorGlobalOptions'
import GeneratorAddonForm from '@/modules/build/components/GeneratorAddonForm'
import { mapGetters } from 'vuex'

export default {
  components: {
    MoreInfoLink,
    GeneratorModelOptions,
    GeneratorGlobalOptions,
    GeneratorAddonForm
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    schemas: 'schema/collection',
    fetching: 'generator/fetching',
    generatorCollection: 'generator/collection'
  })
}
</script>
