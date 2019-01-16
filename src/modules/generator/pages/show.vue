<template>
  <b-row>
    <b-col lg=12>

      <!-- <b-button variant="outline-secondary" @click="decrementStep()">Prev</b-button> -->
      <!-- <b-button variant="outline-secondary" @click="incrementStep()">Next</b-button> -->

      <!-- <horizontal-stepper :steps="demoSteps" /> -->

      <b-tabs class='mt-3' v-model="currentStep" pills card>

        <!-- START TAB -->
        <b-tab
          lazy
          button-id="build-start-nav"
          title="Start"
          active
          class='card-body bg-white border border-top-0'
        >
          <GeneratorStart :model="model" :incrementStep="incrementStep"/>
        </b-tab>

        <!-- DATA MODELS -->
        <!-- <b-tab
          lazy
          title='Data Models'
          class='card-body bg-white border border-top-0'
        > -->
          <!-- <BlueprintShow class="mt-2"/> -->
        <!-- </b-tab> -->

        <!-- GLOBAL OPTIONS -->
        <!-- <b-tab
          lazy
          title="Global Options"
          v-if="model.global_options[0]"
          button-id="build-global-options-nav"
          class='card-body bg-white border border-top-0'
        > -->
          <!-- <br> -->

          <!-- <EditorHeader
            title="Global Options"
            help="Configure global options for this generator"
            url="https://codotype.github.io"
          /> -->

          <!-- <div class="card card-body mt-2" v-for="attr in model.global_options"> -->
            <!-- <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/> -->
          <!-- </div> -->

          <!-- <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!model.global_options[0]"> -->
            <!-- <p class="lead mb-0">No global options exposed by this generator</p> -->
          <!-- </div> -->

        <!-- </b-tab> -->
        <!-- GLOBAL OPTIONS -->

        <!-- <b-tab
          lazy
          button-id="build-readme-nav"
          title="README.md"
          class='card-body bg-white border border-top-0'
          v-html="compiledMarkdown"
        /> -->

        <!-- ModelOptions -->
        <!-- <b-tab
          lazy
          title="Model Options"
          v-if="model.model_options[0]"
          button-id="build-model-options-nav"
        > -->
          <!-- <br> -->
          <!-- <GeneratorModelOptions/> -->
        <!-- </b-tab> -->

        <!-- Generator Option Groups -->
        <b-tab
          lazy
          class='card-body bg-white border border-top-0 pt-0'
          :title="group.label"
          v-for="group in model.option_groups"
          v-if="group.options[0]"
          :key="group.identifier"
        >
          <br>

          <!-- <EditorHeader
            :title="group.label"
            help="Configure global options for this generator"
            url="https://codotype.github.io"
          /> -->

          <!-- <div class="card card-body mt-2" v-for="attr in group.options"> -->
          <div class="mt-2" v-for="attr in group.options">
            <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/>
          </div>

          <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!group.options[0]">
            <p class="lead mb-0">No options exposed by this generator</p>
          </div>

        </b-tab>

      </b-tabs>

    </b-col>
  </b-row>
</template>

<script>
import marked from 'marked'
import { mapGetters, mapActions } from 'vuex'
import BlueprintShow from '@/modules/blueprint/pages/show'
import GeneratorStart from '@/modules/generator/components/GeneratorStart'
import OptionFormItem from '@/modules/option/components/OptionFormItem'
import GeneratorModelOptions from '@/modules/build/components/GeneratorModelOptions'

export default {
  name: 'GeneratorShow',
  props: ['id'],
  data () {
    return {
      configurationObject: {},
      currentStep: 0
    }
  },
  components: {
    OptionFormItem,
    BlueprintShow,
    GeneratorStart,
    GeneratorModelOptions
  },
  created () {
    this.selectModel(this.id)
  },
  methods: {
    ...mapActions({
      selectModel: 'generator/selectModel'
    }),
    decrementStep () {
      this.currentStep = Math.max(this.currentStep - 1, 0)
    },
    incrementStep () {
      this.currentStep = Math.min(this.currentStep + 1, 2 + this.model.option_groups.length)
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.model.readme, { sanitize: true })
    },
    ...mapGetters({
      model: 'generator/selectedModel'
    })
  }
}
</script>
