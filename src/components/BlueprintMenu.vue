<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top" class='bg-white'>
    <b-navbar-brand to="/blueprints">
      <strong>codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item id="project-header">{{ project.label }} Blueprint</b-nav-item>

        <b-modal
          lazy
          id="edit-project"
          ref="editModal"
          :title="'Edit Blueprint'"
          @ok="submitProjectForm()"
          ok-title='Update'
          cancel-title='Cancel'
        >
          <!-- <ProjectForm :model= :submit="submitProjectForm" /> -->
          <p class="lead text-danger">TODO - add ProjectForm here</p>
        </b-modal>

        <button
          class="btn btn-link py-0"
          id="project-edit-button"
          v-b-tooltip.hover.right
          title='Edit Blueprint Name'
          v-b-modal="'edit-project'"
        >
          <i class="fa fa-pencil-alt"></i>
        </button>

      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <b-nav-item>
          <HelpButton :tour="tourSteps" />
        </b-nav-item>

        <b-nav-item>
          <b-button
            variant="outline-primary"
            @click="exportProject(project)"
            v-b-tooltip.hover.bottom :title='"Click here to export Blueprint"'
          >
            <i class="fa fa-fw fa-download"></i>
            Export
          </b-button>
        </b-nav-item>

        <b-nav-item>
          <b-button
            :to="'/blueprints/' + project._id + '/generate'"
            id="generate-button"
            variant="success"
            v-b-tooltip.hover.bottom :title='"Click here to configure your code generators"'
          >
            <i class="fa fa-fw fa-cog"></i>
            Generate Code
            <i class="fa fa-fw fa-chevron-right"></i>
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
    tourSteps: 'tour/appEditorSteps'
  }),
  methods: mapActions({
    exportProject: 'project/exportJson',
    selectBuildApp: 'build/selectApp'
  })
}
</script>
