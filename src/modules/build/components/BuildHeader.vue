
<template>
  <div class="row d-flex align-items-center">

    <div class="col-lg-7">
      <h4 class="mb-0">
        <span id="project-header">
          Codebase Builder
        </span>
        <!-- <button class="btn btn-link py-0" id="project-edit-button" v-b-tooltip.hover.right title='Edit App Name' v-b-modal="'edit-project'"> -->
          <!-- <i class="fas fa-pencil-alt"></i> -->
        <!-- </button> -->
      </h4>
      <small class="text-muted">
        Configure a build using a single App and multiple generators
      </small>
    </div>

    <div class="col-lg-5 d-flex align-items-center justify-content-end">

      <HelpButton tour='appEditorSteps'/>

      <!-- TODO -- enable / disable this button based on build -->
      <button class="btn btn-success btn-lg" id='generate-project-button'>
        <i class="fa fa-check"></i>
        GENERATE
      </button>

    </div>

  </div>
</template>

<script>
import HelpButton from '@/components/HelpButton'

export default {
  components: {
    HelpButton
  }
}
</script>
