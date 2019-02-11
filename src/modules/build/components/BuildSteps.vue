<template>
  <b-row>
    <b-col lg="12" class="step-wrapper d-flex flex-row w-100 align-items-center justify-content-between">

      <template
        v-for="step, index in steps"
      >
        <div
          :key="step.id"
          class="step-indicator d-flex flex-column justify-content-center align-items-center"
          style="width: 33.3%;"
          @click="jumpToStep(index)"
        >
          <template v-if="currentStep === index">
            <span class="d-flex flex-row mb-2 bg-primary text-white justify-content-center align-items-center step-badge">
              {{index + 1}}
            </span>
            <span class="d-flex flex-row text-primary step-text">{{ step.label }}</span>
          </template>

          <template v-else-if="index < currentStep">
            <span class="d-flex flex-row mb-2 bg-success text-white justify-content-center align-items-center step-badge">
              <i class="fa fa-check text-white"></i>
            </span>
            <span class="d-flex flex-row text-success step-text">{{ step.label }}</span>
          </template>

          <template v-else>
            <span class="d-flex flex-row mb-2 bg-secondary text-light justify-content-center align-items-center step-badge">
              {{index + 1}}
            </span>
            <span class="d-flex flex-row text-secondary step-text">{{ step.label }}</span>
          </template>

        </div>
        <!-- Lines between steps -->
        <span class="divider done w-50 bg-success d-flex" v-if="currentStep > index && index < 2"></span>
        <span class="divider w-50 bg-transparent d-flex" v-else-if="index < 2"></span>
      </template>

    </b-col>

    <b-col lg="12">
      <hr>
    </b-col>

    <!-- <b-col lg="12" class='h-100 align-items-center d-flex' style="min-height: 20rem;"> -->
    <b-col lg="12" :class='colClassName' style="padding-bottom: 5rem;">
      <slot name="step-1" v-if="currentStep === 0" />
      <slot name="step-2" v-if="currentStep === 1" />
      <slot name="step-3" v-if="currentStep === 2" />
      <slot name="step-4" v-if="currentStep === 3" />
    </b-col>

  </b-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BuildSteps',
  data () {
    return {
      steps: [
        {
          id: 'getting_started',
          label: 'Getting Started'
        },
        {
          id: 'define_models',
          label: 'Define Models'
        },
        {
          id: 'configure_generator',
          label: 'Configure Generator'
        }
      ]
    }
  },
  created () {
    // this.resetSteps()
  },
  computed: {
    ...mapGetters({
      currentStep: 'build/steps/current'
    }),
    colClassName () {
      let css = 'h-100 align-items-center d-flex'
      if (this.currentStep === 0) css += ' min-height-20'
      return css
    }
  },
  methods: mapActions({
    resetSteps: 'build/steps/reset',
    jumpToStep: 'build/steps/jumpTo'
  })
}
</script>

<style lang="sass">

  div.step-wrapper
    padding-top: 1.25rem
    background: #f5f6f9

  .step-badge
    font-size: 1rem
    width: 1.5rem
    height: 1.5rem
    border-radius: 25px
    font-weight: 700

  .step-text
    font-weight: 700

  span.divider
    transition: all 0.3s
    min-height: 4px
    max-height: 4px

  div.min-height-20
    min-height: 20rem

</style>
