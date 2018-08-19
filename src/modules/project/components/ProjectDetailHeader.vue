
<template>

  <div class="row d-flex align-items-center">

    <div class="col-lg-7">
      <h4 class="mb-0">
        {{ project.label + ' App' }}
        <button class="btn btn-link py-0" v-b-tooltip.hover.right title='Edit App Name'>
          <i class="fa fa-pencil"></i>
        </button>
      </h4>
    </div>

    <!-- TODO - display app version somewhere -->

    <div class="col-lg-5 d-flex align-items-center justify-content-end">

      <HelpButton :tour="tourSteps"/>

      <a class="btn btn-success btn-lg" id='create-post' :href="'#/projects/' + project._id + '/generate'">
        <i class="fa fa-fw fa-cogs"></i>
        Generate Code
      </a>

    </div>

    <div class="col-lg-12 pb-1">
      <small class="text-muted">
        {{ 'Define data modeled by the ' + project.label + ' app.' }}
      </small>
    </div>

  </div>
</template>

<script>
import HelpButton from '@/components/HelpButton'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    project: 'project/selectedModel',
    tourSteps: 'tour/appEditorSteps'
  }),
  components: {
    HelpButton
  }
}
</script>
