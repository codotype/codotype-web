<template>
  <b-row>
    <b-col lg=12>

      <!-- <b-button variant="outline-secondary" @click="decrementStep()">Prev</b-button> -->
      <!-- <b-button variant="outline-secondary" @click="incrementStep()">Next</b-button> -->

      <!-- <horizontal-stepper :steps="demoSteps" /> -->

      <b-tabs class='mt-3' v-model="currentStep" pills card>

        <b-tab
          button-id="build-start-nav"
          title="Start"
          active
          class='card-body bg-white border border-top-0'
        >

          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <img class='generator-icon' :src="model.icon"/>
                  <h2>{{model.label}}</h2>
                </div>
              </div>

              <div class="row py-2">

                <div class="col-lg-12 text-center">
                  <!-- <p class="lead">visual code scaffolding for the modern web</p> -->
                  <!-- <p class="lead"></p> -->
                  <p class="lead">{{model.description}}</p>
                  <!-- <p>Prototype new web applications amazingly fast</p> -->
                  <!-- <p>Define your models, attributes, and relations - Codotype does the rest</p> -->
                </div>

                <div class="col-lg-12 text-center d-flex align-items-center justify-content-center">
                  <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-lg-6 text-center">
                  <hr class='mt-2'>
                </div>
              </div>

              <div class="row mt-2 mb-4 justify-content-center">
                <div class="col-lg-4">
                  <b-button
                    size="lg"
                    variant="primary"
                    block
                    @click="incrementStep()"
                  >
                    <i class="fas fa-drafting-compass faa-wrench animated mr-2"></i>
                    Start Your Next Project
                  </b-button>
                </div>
              </div>

            </div>
          </div>

        </b-tab>

        <!-- <b-tab -->
          <!-- title="Global Options" -->
          <!-- v-if="model.global_options[0]" -->
          <!-- button-id="build-global-options-nav" -->
        <!-- > -->
          <!-- <br> -->

          <!-- <EditorHeader -->
            <!-- title="Global Options" -->
            <!-- help="Configure global options for this generator" -->
            <!-- url="https://codotype.github.io" -->
          <!-- /> -->

          <!-- <div class="card card-body mt-2" v-for="attr in model.global_options"> -->
            <!-- <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/> -->
          <!-- </div> -->

          <!-- <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!model.global_options[0]"> -->
            <!-- <p class="lead mb-0">No global options exposed by this generator</p> -->
          <!-- </div> -->

        <!-- </b-tab> -->

        <!-- <b-tab
          button-id="build-readme-nav"
          title="README.md"
          active
          class='card-body bg-white border border-top-0'
          v-html="compiledMarkdown"
        ></b-tab> -->

        <b-tab
          class='card-body bg-white border border-top-0 pt-0'
          :title="group.label"
          v-for="group in model.option_groups"
          v-if="group.options[0]"
          :key="group.identifier"
        >
          <br>

          <EditorHeader
            :title="group.label"
            help="Configure global options for this generator"
            url="https://codotype.github.io"
          />

          <div class="card card-body mt-2" v-for="attr in group.options">
            <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/>
          </div>

          <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!group.options[0]">
            <p class="lead mb-0">No options exposed by this generator</p>
          </div>

        </b-tab>

        <b-tab
          title='Data Models'
          class='card-body bg-white border border-top-0'
        >
          <BlueprintShow class="mt-2"/>
        </b-tab>

      </b-tabs>

    </b-col>
  </b-row>
</template>

<script>
import marked from 'marked'
import { mapGetters, mapActions } from 'vuex'
import BlueprintShow from '@/modules/blueprint/pages/show'
import OptionFormItem from '@/modules/option/components/OptionFormItem'
// import StepIndicator from 'vue-step-indicator'
import HorizontalStepper from 'vue-stepper'

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
    HorizontalStepper
    // StepIndicator
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
    demoSteps () {
      const steps = []

      steps.push({
        icon: 'mail',
        name: 'start',
        title: 'Start',
        completed: false
      })

      this.model.option_groups.forEach((g) => {
        steps.push({
          icon: 'mail',
          name: g.identifier,
          title: g.label,
          completed: false
        })
      })

      steps.push({
        icon: 'mail',
        name: 'data-models',
        title: 'Data Models',
        completed: false
      })

      return steps
    },
    ...mapGetters({
      model: 'generator/selectedModel'
    })
  }
}
</script>

<style type="text/css" scoped>
  .generator-icon {
    max-width: 4rem;
  }
</style>
