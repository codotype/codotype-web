<template>
  <b-row>
    <b-col lg="12">
      <p class="lead">{{ currentStep }}</p>

      <li
        v-for="step, index in steps"
        :key="step.id"
        :class="index === currentStep ? 'bg-info' : 'bg-light' "
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
      <p class="lead">{{ currentStep }}</p>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'

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
  }
}
</script>
