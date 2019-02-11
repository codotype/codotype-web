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
        <HelpButton class='mr-2' v-if="currentStep === 1" />
        <TourButton tour="appEditorSteps" v-if="currentStep === 1" />
        <!-- <span class='text-muted' v-if="currentStep === 1">
          <router-link to="/auth/signup" >Sign Up</router-link> or <router-link to="/auth/login">Log In</router-link> to Save Models<i class="ml-1 fa fa-info-circle" title="Codotype automatically saves your Blueprint in localstorage. Signing up is a great idea if you want to continue making changes on another device." v-b-tooltip.hover.top></i>
        </span> -->
      </span>

      <b-button
        variant="outline-primary"
        size="lg"
        @click="incrementStep()"
        v-if="currentStep !== 2"
      >
        <i class="fa fa-chevron-right"></i>
      </b-button>

      <!-- TODO - this button should be styled differently -->
      <!-- TODO - this button should likely be its own component -->
      <b-button
        variant="warning"
        size="lg"
        @click="generate()"
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
  methods: {
    ...mapActions({
      incrementStep: 'build/steps/increment',
      decrementStep: 'build/steps/decrement',
      generateCodebase: 'build/generate'
    }),
    generate () {
      this.increment()
      this.generateCodebase()
    }
  }
}
</script>
