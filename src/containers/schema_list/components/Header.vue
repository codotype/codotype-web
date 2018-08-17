
<template>
  <EditorHeader :title="project.label" :help="'Define data modeled by the ' + project.label + ' app.'">
    <div class="row">
      <div class="col-lg-12">

        <!-- TODO - this button should trigger a vue-tour routine -->
        <button class="btn btn-link btn-lg">
          <i class="fa fa-fw fa-question-circle"></i>
        </button>

        <a class="btn btn-success btn-lg" href="#/generators">
          <i class="fa fa-fw fa-play"></i>
          Generate App
        </a>

        <!-- <b-dropdown size="lg" right variant="outline-dark" > -->
          <!-- <template slot="button-content"> -->
            <!-- <i class="fa fa-fw fa-cog"></i> -->
            <!-- Options -->
          <!-- </template> -->
          <!-- <b-dropdown-item>Export App</b-dropdown-item> -->
          <!-- <b-dropdown-item>Second Action</b-dropdown-item> -->
          <!-- <b-dropdown-item>Third Action</b-dropdown-item> -->
          <!-- <b-dropdown-divider></b-dropdown-divider> -->
          <!-- <b-dropdown-item>Something else here...</b-dropdown-item> -->
          <!-- <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
        <!-- </b-dropdown> -->

      </div>
    </div>
  </EditorHeader>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    project: 'project/selectedModel'
  })
}
</script>
