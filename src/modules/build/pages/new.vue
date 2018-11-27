<template>

  <!-- TODO - SPLIT THIS COMPONENT UP INTO SMALLER COMPONENTS -->

  <!-- Shows LoadingBuild component -->
  <div class="app" v-if="buildLoading || buildFinished">
    <div class="row">
      <div class="col-lg-12">
        <LoadingBuild />
      </div>
    </div>
  </div>

  <!-- Step 3 - Configure the generator -->
  <!-- Show ONLY when a generator and app are selected -->
  <div class="row" v-else>

    <!-- Abstract this column into one or more components -->
    <b-col lg=4 class="border-right">

      <!-- Model header -->
      <b-row class='mb-1'>
        <b-col lg='12' id="build-stage-header">
          <h4 class="mb-0">Build</h4>
          <small class="text-muted">Use your Blueprint with multiple generators</small>
        </b-col>
      </b-row>

      <button
        id="add-build-stage"
        :disabled="choosingGenerator"
        class="btn btn-primary btn-lg btn-block mb-3"
        @click="showChoosingGenerator(true)"
      >
        <i class="fa fa-plus"></i>
        Add Generator
      </button>

      <!-- TODO - abstract into a separate component -->
      <div class="card border-light shadow-sm" id="build-stage-list">

        <transition-group
          tag="ul"
          name="stage-list"
          class="list-group list-group-flush"
          v-if="newBuildModel.stages[0]"
        >
          <li
            button
            :class=" each.id === selectedGenerator.id ? 'cursor-pointer list-group-item list-group-item-action list-group-item-primary' : 'cursor-pointer list-group-item'"
            :key="each.id"
            v-for="each in stageGenerators"
            @click="selectGeneratorModel(each.id)"
          >
            <span>
              <img style='max-width: 1rem;' class='mr-2' :src="each.icon"/>
              {{ each.label }}
            </span>
          </li>
        </transition-group>

        <!-- No Generators Selected view -->
        <ul class="list-group" v-if="!newBuildModel.stages[0]">
          <li class="list-group-item list-group-item-warning text-center">
            <i class="fa fa-warning"></i>
            No generators selected
          </li>
        </ul>
      </div>

    </b-col>

    <!-- <div :class="showSidebar ? 'col-lg-9' : 'col-lg-12'"> -->
    <b-col lg=8>

      <!-- Select a generator -->
      <GeneratorSelector v-if="(newBuildModel.app_id && !newBuildModel.stages[0]) || choosingGenerator"/>

      <!-- TODO - abstract ALL of this into a separate component -->
      <!-- GeneratorConfigure component -->
      <div class="row" v-else-if='newBuildModel.stages[0] && newBuildModel.app_id'>
        <div class="col-lg-12">

          <b-row>

            <b-col lg=12 class='d-flex justify-content-between'>
              <span class='d-flex align-items-center'>
                <img style='max-width: 2rem;' class='d-flex mr-2' :src="selectedGenerator.icon"/>
                <p class="lead mb-0 mr-3">{{ selectedGenerator.label }}</p>
                <MoreInfoLink :url="'http://github.com/'+selectedGenerator.github_url"/>
              </span>

              <span class='d-flex'>
                <b-button
                  id="build-remove-stage-btn"
                  variant='link'
                  class="text-danger"
                  size='sm'
                  v-b-modal="'remove-build-stage'"
                >
                  <i class="fa fa-trash"></i>
                  Remove
                </b-button>
              </span>
            </b-col>

            <b-col lg=12>
              <small class="text-muted">{{ selectedGenerator.description }}</small>
            </b-col>

            <b-col lg=12>
              <span class='badge badge-primary mr-1' v-for="tag in selectedGenerator.type_tags" :key="tag">{{ tag }}</span>
              <span class='badge badge-info' v-if="selectedGenerator.self_configuring">Self-Configuring</span>
              <!-- <span class='badge badge-warning' v-if="selectedGenerator.official">Codotype API</span> -->
              <span class='badge badge-light mr-1' v-for="tag in selectedGenerator.tech_tags" :key="tag">{{ tag }}</span>
            </b-col>

          </b-row>

          <!-- New Option Modal -->
          <b-modal
            id="remove-build-stage"
            :title="'Remove Build Stage'"
            @ok="removeBuildStage(selectedGenerator.id)"
            ok-title='Remove Build Stage'
            ok-variant='danger'
          >
            Are you sure you want to remove this build stage?
          </b-modal>

          <hr>

          <b-tabs>

            <!-- README.md -->
            <b-tab
              button-id="build-readme-nav"
              title="README.md"
              active
              class='card-body bg-white border border-top-0'
              v-html="compileMarkdown(selectedGenerator.readme)"
            />

            <!-- GlobalOptions -->
            <b-tab
              title="Global Options"
              v-if="selectedGenerator.global_options[0]"
              button-id="build-global-options-nav"
            >
              <br>
              <GeneratorGlobalOptions/>
            </b-tab>

            <!-- ModelOptions -->
            <b-tab
              title="Model Options"
              v-if="selectedGenerator.model_options[0]"
              button-id="build-model-options-nav"
            >
              <br>
              <GeneratorModelOptions/>
            </b-tab>

            <!-- GlobalAddons -->
            <b-tab title="Addons" v-if="selectedGenerator.addons[0]" >
              <br>
              <GeneratorAddonForm/>
            </b-tab>

          </b-tabs>

        </div>
      </div>
    </b-col>

  </div>
</template>

<!-- // // // //  -->

<script>
import LoadingBuild from '@/modules/build/components/LoadingBuild'
import MoreInfoLink from '@codotype/ui/src/components/MoreInfoLink'
import GeneratorModelOptions from '@/modules/build/components/GeneratorModelOptions'
import GeneratorGlobalOptions from '@/modules/build/components/GeneratorGlobalOptions'
import GeneratorAddonForm from '@/modules/build/components/GeneratorAddonForm'
import GeneratorSelector from '@/modules/build/components/GeneratorSelector'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import marked from 'marked'

export default {
  components: {
    LoadingBuild,
    MoreInfoLink,
    GeneratorModelOptions,
    GeneratorGlobalOptions,
    GeneratorAddonForm,
    GeneratorSelector
  },
  data () {
    return { // TODO - move this into build vuex state
      showingApp: false
    }
  },
  props: ['blueprint_id'],
  created () {
    console.log(this.blueprint_id)
    this.resetNewBuildModel()
    this.setBuildFinished(false)
    this.setBuildDownloadUrl('')
    this.clearSelectedGenerator()
  },
  mounted () {
    this.selectApp(this.blueprint_id)
  },
  computed: {
    ...mapGetters({
      newBuildModel: 'build/newModel',
      schemas: 'schema/collection',
      fetching: 'generator/fetching',
      generatorCollection: 'generator/collection',
      selectedGenerator: 'generator/selectedModel',
      showSidebar: 'build/showSidebar',
      choosingGenerator: 'build/choosingGenerator',
      buildLoading: 'build/fetching',
      buildFinished: 'build/buildFinished'
    }),
    stageGenerators () {
      let generatorIds = this.newBuildModel.stages.map(s => s.generator_id)
      return this.generatorCollection.filter(g => generatorIds.includes(g.id))
    }
  },
  methods: {
    ...mapActions({
      resetNewBuildModel: 'build/resetNewModel',
      selectGeneratorModel: 'generator/selectModel',
      generateCodebase: 'build/generate',
      selectApp: 'build/selectApp',
      removeBuildStage: 'build/removeStage',
      clearSelectedGenerator: 'generator/clearSelected'
    }),
    ...mapMutations({
      showChoosingGenerator: 'build/choosingGenerator',
      setBuildFinished: 'build/buildFinished',
      setBuildDownloadUrl: 'build/downloadUrl'
    }),
    compileMarkdown (markdown) {
      return marked(markdown, { sanitize: true })
    }
  }
}
</script>

<style type="text/css">

  .stage-list-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }

  .stage-list-enter, .stage-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .stage-list-leave-active {
    position: absolute;
  }
  .cursor-pointer {
    cursor: pointer;
  }

</style>
