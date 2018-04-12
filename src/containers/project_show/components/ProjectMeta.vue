<!-- TODO - rename this to META (?) -->
<!-- TODO - add overview container -->
<template>
  <div class="row">
    <div class="col-lg-12">

      <EditorHeader :help="'Define metadata pertaining to the ' + model.label + ' app.'" />

      <div class="row d-flex align-items-center">
        <div class="col-lg-12">
          <p class="text-warning">TODO - add form to edit basic app metadata</p>
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


