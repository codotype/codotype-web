<template>
  <b-navbar toggleable="md" type="light" variant="primary" fixed="top">
    <b-navbar-brand to="/blueprints">
      <strong>Codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-text id="project-header">{{ project.label }} Blueprint</b-nav-text>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <b-nav-form>

          <b-dropdown
            right
            no-caret
            variant="light"
            class='mr-2'
            toggle-class='rounded'
            size="lg"
          >
            <template slot="button-content">
              <i class="fa fa-fw fa-ellipsis-h"></i>
            </template>
            <b-dropdown-item-button @click="exportProject(project)">
              <i class="fa fa-fw fa-download"></i>
              Download Blueprint JSON
            </b-dropdown-item-button>
          </b-dropdown>

          <TourButton class='mr-2' size='lg' tour='appEditorSteps' />

          <b-button
            size="lg"
            class='mr-2'
            :to="'/blueprints/' + project._id + '/generate'"
            id="generate-button"
            variant="success"
            v-b-tooltip.hover.bottom :title='"Click here to configure your code generators"'
          >
            <i class="fa fa-fw fa-spin fa-cog"></i>
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
import TourButton from '@codotype/ui/src/components/TourButton'
import FormInput from '@codotype/ui/src/components/FormInput'

export default {
  name: 'BlueprintMenu',
  components: {
    TourButton,
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
    project: 'blueprint/selectedModel'
  }),
  methods: mapActions({
    exportProject: 'blueprint/exportJson',
    renameBlueprint: 'blueprint/rename',
    selectBuildApp: 'build/selectApp'
  })
}
</script>
