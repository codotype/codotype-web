<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/">
      <strong>Codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item id="project-header">{{ model.label }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="!buildLoading && !buildFinished">
        <b-nav-form>

          <HelpButton class='mr-2' size='lg' tooltipPlacement="bottom" tour='buildSteps' />

          <b-button
            size='lg'
            :disabled="disableGenerateButton"
            id="generate-button"
            variant="success"
            @click="generateCodebase()"
            v-b-tooltip.hover.bottom :title='"Click here to generate code"'
          >
            <!-- <i class="fa fa-fw fa-code"></i> -->
            <i class="fa fa-fw fa-spin fa-cog"></i>
            Generate Code
          </b-button>
        </b-nav-form>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HelpButton from '@codotype/ui/src/components/HelpButton'

export default {
  name: 'BlueprintMenu',
  components: {
    HelpButton
  },
  computed: mapGetters({
    model: 'generator/selectedModel'
  }),
  methods: mapActions({
    generateCodebase: 'build/generate'
  })
}
</script>
