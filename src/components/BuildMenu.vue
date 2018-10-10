<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top" class='bg-white'>
    <b-navbar-brand to="/blueprints">
      <strong>codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item id="project-header">{{ project.label }} Blueprint</b-nav-item>
      </b-navbar-nav>

      <router-link class="py-0" id="project-edit-button" v-b-tooltip.hover.right title='Edit Blueprint' :to="'/blueprints/' + project._id">
        <i class="fa fa-pencil-alt"></i>
      </router-link>

      <b-navbar-nav class="ml-auto">

        <!-- <b-nav-item> -->
          <!-- <HelpButton :tour="tourSteps" /> -->
        <!-- </b-nav-item> -->
        
        <b-nav-item>
          <b-button
            :to="'/blueprints/' + project._id"
            variant="outline-dark"
            v-b-tooltip.hover.bottom
            :title='"Click here to edit your Blueprint"'
          >
            <i class="fa fa-fw fa-reply"></i>
            Back to Editor
          </b-button>
        </b-nav-item>

        <b-nav-item>
          <b-button
            v-if="!choosingGenerator"
            id="generate-button"
            variant="success"
            @click="generateCodebase()"
            v-b-tooltip.hover.bottom :title='"Click here to generate code"'
          >
            <i class="fa fa-fw fa-code"></i>
            Generate
          </b-button>
        </b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HelpButton from '@/components/HelpButton'

export default {
  name: 'BlueprintMenu',
  components: {
    HelpButton
  },
  computed: mapGetters({
    project: 'project/selectedModel',
    tourSteps: 'tour/appEditorSteps',
    choosingGenerator: 'build/choosingGenerator'
  }),
  methods: mapActions({
    exportProject: 'project/exportJson',
    selectBuildApp: 'build/selectApp',
    generateCodebase: 'build/generate'
  })
}
</script>
