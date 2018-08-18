
<template>
  <EditorHeader :title="project.label" :halp="'Define data modeled by the ' + project.label + ' app.'">
    <div class="row">
      <div class="col-lg-12">

        <a class='mr-3' @click.stop="startTour()">
          <i class="fa fa-fw fa-lg fa-question-circle" v-b-tooltip.hover.left :title='"Tutorial"'></i>
        </a>

        <a class="btn btn-success btn-lg" id='create-post' href="#/generators">
          <i class="fa fa-fw fa-cogs"></i>
          Generate Code
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
import Driver from 'driver.js'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    project: 'project/selectedModel'
  }),
  created () {
    this.driver = new Driver()
  },
  methods: {
    startTour () {
      this.driver.defineSteps([
        {
          element: '#model-list',
          popover: {
            title: 'Models',
            description: 'Models define the data described by this application.',
            position: 'right'
          }
        },
        {
          element: '#new-model-button',
          popover: {
            title: 'Add Model',
            description: 'Click here to add a new Model',
            position: 'right'
          }
        },
        {
          element: '#model-detail',
          popover: {
            title: 'Model Detiail',
            description: 'Models encapsulate Attributes & Relations',
            position: 'left'
          }
        },
        {
          element: '#attribute-detail',
          popover: {
            title: 'Attributes',
            description: 'Attributes describe individual fields belongong to a single Model.',
            position: 'left'
          }
        },
        {
          element: '#add-attribute-button',
          popover: {
            title: 'Add Attribute',
            description: 'Attributes describe individual fields belongong to a single Model.',
            position: 'left'
          }
        },
        {
          element: '#relation-detail',
          popover: {
            title: 'Relations',
            description: 'Relations describe the association between two different models.',
            position: 'left'
          }
        },
        {
          element: '#add-relation-button',
          popover: {
            title: 'Add Relation',
            description: 'Relations describe the association between two different models.',
            position: 'left'
          }
        },
        {
          element: '#create-post',
          popover: {
            title: 'Generate',
            description: 'Click here to generate code with this app',
            position: 'left'
          }
        }
      ])
      return this.driver.start()
    }
  }
}
</script>
