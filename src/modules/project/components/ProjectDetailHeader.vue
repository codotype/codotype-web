
<template>
  <div class="row d-flex align-items-center">

    <b-modal
      id="edit-project"
      ref="editModal"
      :title="'Edit App'"
      @ok="submitProjectForm()"
      ok-title='Update'
      cancel-title='Cancel'
    >
      <!-- <ProjectForm :model= :submit="submitProjectForm" /> -->
      <p class="lead text-danger">TODO - add ProjectForm here</p>
    </b-modal>

    <div class="col-lg-7">
      <h4 class="mb-0">
        <span id="project-header">
          {{ project.label + ' App' }}
        </span>
        <button class="btn btn-link py-0" id="project-edit-button" v-b-tooltip.hover.right title='Edit App Name' v-b-modal="'edit-project'">
          <i class="fa fa-pencil"></i>
        </button>
      </h4>
      <small class="text-muted">
        {{ 'Define data modeled by the ' + project.label + ' app.' }}
      </small>
    </div>

    <!-- TODO - display app version somewhere -->

    <div class="col-lg-5 d-flex align-items-center justify-content-end">

      <HelpButton :tour="tourSteps"/>

      <a class='mr-3' role="button" @click.stop="exportProject(project)">
        <i class="fa fa-fw fa-lg fa-download" v-b-tooltip.hover.left :title='"Export"'></i>
      </a>

      <a class="btn btn-success btn-lg" id='generate-project-button' :href="'#/projects/' + project._id + '/generate'">
        <i class="fa fa-fw fa-cogs"></i>
        Generate Code
      </a>

    </div>

  </div>
</template>

<script>
import HelpButton from '@/components/HelpButton'
import ProjectForm from '@/modules/project/components/ProjectForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    HelpButton,
    ProjectForm
  },
  computed: mapGetters({
    project: 'project/selectedModel',
    tourSteps: 'tour/appEditorSteps'
  }),
  methods: {
    ...mapActions({
      exportProject: 'project/exportJson',
      updateProject: 'project/update'
    }),
    submitProjectForm () {
      this.$refs.editModal.hide()
      this.updateProject()
    }
  }
}
</script>
