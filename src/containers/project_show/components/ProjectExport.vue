<template>
  <div class="row">
    <div class="col-lg-12">

      <EditorHeader :help="'Export the ' + model.label + ' project definition.'" />

      <div class="row d-flex align-items-center">
        <div class="col-lg-12">
          <p class="lead text-warning">
            TODO - wire up export download
            <br>
            TODO - display 'Thanks' message
            <br>
            TODO - display follow us! message
            <br>
            TODO - display REASON for export
          </p>
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


