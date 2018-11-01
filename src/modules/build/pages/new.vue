<template>

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
    <b-col lg=3 class="border-right">

      <button
        v-if="choosingGenerator"
        class="btn btn-outline-secondary btn-lg btn-block mb-3 mt-2"
        @click="showChoosingGenerator(false)"
      >
        <i class="fa fa-reply"></i>
        Configure Build
      </button>

      <button
        v-else
        class="btn btn-primary btn-lg btn-block mb-3 mt-2"
        @click="showChoosingGenerator(true)"
      >
        <i class="fa fa-plus"></i>
        Add Build Stage
      </button>

      <!-- TODO - abstract into a separate component -->
      <div class="card border-light shadow-sm">
        <div class="card-body">
          <h4 class='mb-0'>
            <i class="fa fa-cog"></i>
            Build Stages
          </h4>
        </div>

        <ul class="list-group list-group-flush">
          <template v-if="newBuildModel.stages[0]" v-for="each in stageGenerators">
            <li class="list-group-item list-group-item-action list-group-item-primary" :key="each.id" v-if="each.id === selectedGenerator.id">
              {{ each.label }}
            </li>
            <li class="list-group-item list-group-item-action" :key="each.id" @click="selectGeneratorModel(each.id)" v-else>
              {{ each.label }}
            </li>
          </template>

          <!-- No Generators Selected view -->
          <li class="list-group-item list-group-item-warning text-center" v-if="!newBuildModel.stages[0]">
            <i class="fa fa-warning"></i>
            No generators selected
          </li>

        </ul>
      </div>

    </b-col>

    <!-- <div :class="showSidebar ? 'col-lg-9' : 'col-lg-12'"> -->
    <div class="col-lg-9">

      <AppShow v-if="showingApp"/>

      <!-- Select a generator -->
      <GeneratorSelector v-if="(newBuildModel.app_id && !newBuildModel.stages[0]) || choosingGenerator"/>

      <!-- TODO - abstract ALL of this into a separate component -->
      <!-- GeneratorConfigure component -->
      <div class="row" v-else-if='newBuildModel.stages[0] && newBuildModel.app_id'>
        <div class="col-lg-12">

          <EditorHeader
            :title="selectedGenerator.label"
            :help="selectedGenerator.description"
            :url="'http://github.com/'+selectedGenerator.github_url"
          />

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

          <b-row>
            <b-col>
              <span class='badge badge-primary mr-1' v-for="tag in selectedGenerator.type_tags" :key="tag">{{ tag }}</span>
              <span class='badge badge-info' v-if="selectedGenerator.self_configuring">Self-Configuring</span>
              <span class='badge badge-light mr-1' v-for="tag in selectedGenerator.tech_tags" :key="tag">{{ tag }}</span>
            </b-col>

            <b-col class='text-right'>
              <b-button variant='outline-danger' size='sm' v-b-modal="'remove-build-stage'" class="">
                <i class="fa fa-minus"></i>
                Remove Stage
              </b-button>
            </b-col>
          </b-row>

          <hr>

          <b-tabs>

            <!-- README.md -->
            <b-tab
              title="README.md"
              active
              class='card-body bg-white border border-top-0'
              v-html="compileMarkdown(selectedGenerator.readme)"
            />

            <!-- GlobalOptions -->
            <b-tab title="Global Options" v-if="selectedGenerator.global_options[0]" >
              <br>
              <GeneratorGlobalOptions/>
            </b-tab>

            <!-- ModelOptions -->
            <b-tab title="Model Options" v-if="selectedGenerator.model_options[0]" >
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
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import LoadingBuild from '@/modules/build/components/LoadingBuild'
import GeneratorModelOptions from '@/modules/build/components/GeneratorModelOptions'
import GeneratorGlobalOptions from '@/modules/build/components/GeneratorGlobalOptions'
import GeneratorAddonForm from '@/modules/build/components/GeneratorAddonForm'
import GeneratorSelector from '@/modules/build/components/GeneratorSelector'
import BuildHeader from '@/modules/build/components/BuildHeader'
import AppShow from '@/modules/project/pages/show'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import marked from 'marked'

export default {
  components: {
    LoadingBuild,
    GeneratorModelOptions,
    GeneratorGlobalOptions,
    GeneratorAddonForm,
    GeneratorSelector,
    BuildHeader,
    AppShow
  },
  data () {
    return { // TODO - move this into build vuex state
      showingApp: false
    }
  },
  props: ['project_id'],
  created () {
    console.log(this.project_id)
    this.resetNewBuildModel()
    this.setBuildFinished(false)
    this.setBuildDownloadUrl('')
    this.clearSelectedGenerator()
  },
  mounted () {
    this.selectApp(this.project_id)
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
      return this.generatorCollection.filter((g) => {
        return generatorIds.includes(g.id)
      })
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
