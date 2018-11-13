<template>
  <b-navbar toggleable="md" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/blueprints">
      <strong>codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-text id="project-header">{{ project.label }} Blueprint</b-nav-text>

        <b-modal
          lazy
          id="edit-project"
          ref="editModal"
          :title="'Edit Blueprint'"
          @ok="renameBlueprint({ label: blueprintLabel })"
          ok-title='Update'
          cancel-title='Cancel'
        >
          <div class="form-group">
            <label class='mb-0'>
              Label
              <span class='text-danger'>*</span>
            </label>
            <small class="form-text text-muted mb-2">The name of your project</small>
            <input
              type="text"
              ref="labelInput"
              class="form-control"
              placeholder="Label"
              v-model="blueprintLabel"
            >
          </div>
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

        <b-nav-form>
          <HelpButton class='mr-2' size='lg' tour='appEditorSteps' />

          <b-button
            size="lg"
            class='mr-2'
            variant="outline-primary"
            @click="exportProject(project)"
            v-b-tooltip.hover.bottom :title='"Click here to export Blueprint"'
          >
            <i class="fa fa-fw fa-download"></i>
            Export
          </b-button>

          <b-button
            size="lg"
            class='mr-2'
            :to="'/blueprints/' + project._id + '/generate'"
            id="generate-button"
            variant="success"
            v-b-tooltip.hover.bottom :title='"Click here to configure your code generators"'
          >
            <i class="fa fa-fw fa-cog"></i>
            Build Codebase
            <i class="fa fa-fw fa-chevron-right"></i>
          </b-button>
        </b-nav-form>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import HelpButton from '@/components/HelpButton'
import FormInput from '@/components/FormInput'

export default {
  name: 'BlueprintMenu',
  components: {
    HelpButton,
    FormInput
  },
  data () {
    return {
      blueprintLabel: 'My Renamed App'
    }
  },
  mounted () {
    this.blueprintLabel = this.project.label
  },
  computed: mapGetters({
    project: 'project/selectedModel'
  }),
  methods: mapActions({
    exportProject: 'project/exportJson',
    renameBlueprint: 'project/rename',
    selectBuildApp: 'build/selectApp'
  })
}
</script>
