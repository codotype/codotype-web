<template>
  <b-row>

    <b-col lg="12" class="d-flex flex-row w-100 justify-content-between">

      <b-button
        v-if="currentStep !== 0"
        variant="outline-primary"
        size="lg"
        @click="decrementStep()"
        :disabled="currentStep === 0"
      >
        <i class="fa fa-chevron-left"></i>
      </b-button>
      <span v-else></span>

      <span>
        <HelpButton v-if="currentStep === 1" />
        <TourButton tour="appEditorSteps" v-if="currentStep === 1" />
      </span>

      <b-button
        variant="outline-primary"
        size="lg"
        @click="incrementStep()"
        v-if="currentStep !== 2"
      >
        <i class="fa fa-chevron-right"></i>
      </b-button>

      <b-button
        variant="warning"
        size="lg"
        @click="incrementStep()"
        v-if="currentStep === 2"
      >
        <i class="fa fa-spin fa-cog"></i>
        Generate Code
      </b-button>

    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TourButton from '@codotype/ui/src/components/TourButton'
import HelpButton from '@codotype/ui/src/components/HelpButton'

export default {
  name: 'BuildStepsControls',
  components: {
    TourButton,
    HelpButton
  },
  computed: mapGetters({
    currentStep: 'build/steps/current'
  }),
  methods: mapActions({
    incrementStep: 'build/steps/increment',
    decrementStep: 'build/steps/decrement'
  })
}
</script>
