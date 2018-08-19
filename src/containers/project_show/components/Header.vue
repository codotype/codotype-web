
<template>
  <EditorHeader :title="project.label" :halp="'Define data modeled by the ' + project.label + ' app.'">
    <div class="row">
      <div class="col-lg-12">

        <HelpButton :tour="tourSteps"/>

        <a class="btn btn-success btn-lg" id='create-post' href="#/generators">
          <i class="fa fa-fw fa-cogs"></i>
          Generate Code
        </a>

      </div>
    </div>
  </EditorHeader>
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
