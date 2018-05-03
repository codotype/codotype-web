<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- Header -->
      <EditorHeader :help="'Define pages for the ' + project.label + ' app.'" />

      <!-- Schema List -->
      <ul class='list-group'>
        <li class="list-group-item bg-dark test-light">Pages go here.</li>
      </ul>

    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    collection: 'page/collection',
    project: 'project/selectedModel'
  })
}
</script>
