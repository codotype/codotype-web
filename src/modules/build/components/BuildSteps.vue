<template>
  <b-row>
    <b-col lg="12" class="d-flex flex-row w-100 align-items-center justify-content-between">

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
            <span class="d-flex flex-row mb-2 bg-primary text-white justify-content-center align-items-center" style="font-size: 1rem; width: 2rem; height: 2rem; border-radius: 25px;">{{index + 1}}</span>
            <span class="d-flex flex-row text-primary" style="font-weight: 700;">{{ step.label }}</span>
          </template>

          <template v-else-if="index < currentStep">
            <span
              class="d-flex flex-row mb-2 bg-success text-white justify-content-center align-items-center"
              style="font-size: 1rem; width: 2rem; height: 2rem; border-radius: 25px;"
            >
              <i class="fa fa-check text-white"></i>
            </span>
            <span class="d-flex flex-row text-success" style="font-weight: 700;">{{ step.label }}</span>
          </template>

          <template v-else>
            <span class="d-flex flex-row mb-2 bg-secondary text-light justify-content-center align-items-center" style="font-size: 1rem; width: 2rem; height: 2rem; border-radius: 25px;">
              {{index + 1}}
            </span>
            <span class="d-flex flex-row text-secondary" style="font-weight: 700;">{{ step.label }}</span>
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

    <b-col lg="12" class='h-100 align-items-center d-flex' style="min-height: 20rem;">
      <slot name="step-1" v-if="currentStep === 0" />
      <slot name="step-2" v-if="currentStep === 1" />
      <slot name="step-3" v-if="currentStep === 2" />
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
    })
  },
  methods: mapActions({
    resetSteps: 'build/steps/reset',
    jumpToStep: 'build/steps/jumpTo'
  })
}
</script>

<style lang="sass">

  span.divider
    transition: all 0.3s
    min-height: 4px
    max-height: 4px

</style>
