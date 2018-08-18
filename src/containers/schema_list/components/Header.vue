
<template>
  <EditorHeader :title="project.label" :halp="'Define data modeled by the ' + project.label + ' app.'">
    <div class="row">
      <div class="col-lg-12">

        <!-- <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div> -->
        <!-- <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div> -->
        <!-- <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div> -->

        <v-tour name="myTour" :steps="steps"></v-tour>

        <!-- TODO - this button should trigger a vue-tour routine -->
        <a class='mr-3' @click="$tours['myTour'].start()">
          <i class="fa fa-fw fa-lg fa-question-circle" v-b-tooltip.hover.left :title='"Tutorial"'></i>
        </a>

        <a class="btn btn-success btn-lg" id="new-schema-button" href="#/generators">
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
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    project: 'project/selectedModel'
  }),
  // TODO - move tour data into Vuex store
  data () {
    return {
      steps: [
        {
          target: '#new-schema-button',  // We're using document.querySelector() under the hood
          content: `Click here to generate this application`
        }
        // {
        //   target: '.v-step-1',
        //   content: 'An awesome plugin made with Vue.js!'
        // },
        // {
        //   target: '[data-v-step="2"]',
        //   content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
        //   params: {
        //     placement: 'top'
        //   }
        // }
      ]
    }
  },
  methods: {
    startTour () {
      return this.$tours['myTour'].start()
    }
  }
}
</script>
