<template>
  <div class="row">
    <div class="col-lg-12">

      <EditorHeader :help="'Define authorization methods for the ' + model.label + ' app.'" />

      <div class="row d-flex align-items-center">
        <div class="col-lg-12">
          <p class="text-warning">TODO - Add option for Local</p>
          <p class="text-warning">TODO - Add option for Google</p>
          <p class="text-warning">TODO - Add option for GitHub</p>
          <p class="text-warning">TODO - Add option for Twitter</p>
          <p class="text-warning">TODO - Add option for Facebook</p>
        </div>
      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>


