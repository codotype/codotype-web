<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/blueprints">
      <strong>codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item id="project-header">{{ project.label }} Blueprint</b-nav-item>
      </b-navbar-nav>

      <!-- <router-link class="py-0" id="project-edit-button" v-b-tooltip.hover.right title='Edit Blueprint' :to="'/blueprints/' + project._id"> -->
        <!-- <i class="fa fa-pencil-alt"></i> -->
      <!-- </router-link> -->

      <b-navbar-nav class="ml-auto" v-if="!buildLoading && !buildFinished">

        <b-nav-form>
          <b-button
            size='lg'
            class='mr-2'
            :to="'/blueprints/' + project._id"
            variant="outline-dark"
            v-b-tooltip.hover.bottom
            :title='"Click here to edit your Blueprint"'
          >
            <i class="fa fa-fw fa-reply"></i>
            Back to Editor
          </b-button>

          <HelpButton class='mr-2' size='lg' tooltipPlacement="bottom" tour='buildSteps' />

          <b-button
            size='lg'
            :disabled="disableGenerateButton"
            id="generate-button"
            variant="success"
            @click="generateCodebase()"
            v-b-tooltip.hover.bottom :title='"Click here to generate code"'
          >
            <i class="fa fa-fw fa-code"></i>
            Generate Code
          </b-button>
        </b-nav-form>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import HelpButton from '@/components/HelpButton'

export default {
  name: 'BlueprintMenu',
  components: {
    HelpButton
  },
  computed: {
    ...mapGetters({
      project: 'project/selectedModel',
      choosingGenerator: 'build/choosingGenerator',
      buildLoading: 'build/fetching',
      buildFinished: 'build/buildFinished',
      newBuildModel: 'build/newModel'
    }),
    disableGenerateButton () {
      return !this.newBuildModel.stages[0]
    }
  },
  methods: {
    ...mapActions({
      exportProject: 'project/exportJson',
      selectBuildApp: 'build/selectApp',
      generateCodebase: 'build/generate'
    }),
    ...mapMutations({
      showChoosingGenerator: 'build/choosingGenerator'
    })
  }
}
</script>
