<template>
  <b-row>
    <b-col lg="12" class="d-flex flex-row w-100 justify-content-between">

      <div
        v-for="step, index in steps"
        :key="step.id"
        class="step-indicator d-flex flex-column justify-content-center align-items-center"
        style="width: 33.3%;"
        @click="jumpToStep(index)"
      >
        <template v-if="currentStep === index">
          <span class="d-flex flex-row mb-2 bg-info text-white justify-content-center align-items-center" style="font-size: 1rem; width: 2rem; height: 2rem; border-radius: 25px;">{{index + 1}}</span>
          <span class="d-flex flex-row text-dark" style="font-weight: 700;">{{ step.label }}</span>
        </template>

        <template v-else-if="index < currentStep">
          <span
            class="d-flex flex-row mb-2 bg-info text-white justify-content-center align-items-center"
            style="font-size: 1rem; width: 2rem; height: 2rem; border-radius: 25px;"
          >
            <i class="fa fa-check text-white"></i>
          </span>
          <span class="d-flex flex-row text-info" style="font-weight: 700;">{{ step.label }}</span>
        </template>

        <template v-else>
          <span class="d-flex flex-row mb-2 bg-dark text-light justify-content-center align-items-center" style="font-size: 1rem; width: 2rem; height: 2rem; border-radius: 25px;">
            {{index + 1}}
          </span>
          <span class="d-flex flex-row" style="font-weight: 700;">{{ step.label }}</span>
        </template>

      </div>

    </b-col>

    <b-col lg="12">
      <hr>
    </b-col>

    <b-col lg="12" class='h-100' style="min-height: 20rem; max-height: 20rem; overflow-y: scroll;">
      <slot name="step-1" v-if="currentStep === 0" />
      <slot name="step-2" v-if="currentStep === 1" />
      <slot name="step-3" v-if="currentStep === 2" />
    </b-col>

    <b-col lg="12">
      <hr>
    </b-col>

    <b-col lg="12" class="d-flex flex-row w-100 justify-content-between">

      <b-button
        variant="info"
        @click="decrementStep()"
        :disabled="currentStep === 0"
      >
        <i class="fa fa-chevron-left"></i>
      </b-button>

      <b-button
        variant="info"
        @click="incrementStep()"
        v-if="currentStep !== 2"
      >
        <i class="fa fa-chevron-right"></i>
      </b-button>

      <b-button
        variant="warning"
        @click="incrementStep()"
        v-if="currentStep === 2"
      >
        <i class="fa fa-chevron-right"></i>
        Generate
      </b-button>

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
    this.resetSteps()
  },
  computed: {
    ...mapGetters({
      currentStep: 'build/steps/current'
    })
  },
  methods: mapActions({
    resetSteps: 'build/steps/reset',
    incrementStep: 'build/steps/increment',
    decrementStep: 'build/steps/decrement',
    jumpToStep: 'build/steps/jumpTo'
  })
}
</script>
