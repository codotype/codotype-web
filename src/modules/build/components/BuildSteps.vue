<template>
  <b-row>
    <b-col lg="12">

      <li
        v-for="step, index in steps"
        :key="step.id"
        :class="index === currentStep ? 'bg-info' : 'bg-light' "
        @click="jumpToStep(index)"
      >
        {{ step.label }}
        {{ index }}
      </li>

    </b-col>

    <b-col lg="12">
      <slot name="step-1" />
      <slot name="step-2" />
      <slot name="step-3" />
    </b-col>

    <b-col lg="12">

      <b-button
        variant="info"
        @click="decrementStep()"
        :disabled="currentStep === 0"
        v-if="currentStep !== 0"
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
  computed: {
    ...mapGetters({
      currentStep: 'build/steps/current'
    })
  },
  methods: mapActions({
    incrementStep: 'build/steps/increment',
    decrementStep: 'build/steps/decrement',
    jumpToStep: 'build/steps/jumpTo'
  })
}
</script>
