
<template>
  <!-- <div class="card h-100 bg-secondary mt-3"> -->
  <div class="card mt-3">
    <!-- <div class="card-header d-flex justify-content-between align-items-center"> -->
      <!-- <strong>Models</strong> -->

      <!-- <button id="new-model-button" class="btn btn-sm btn-primary"> -->
        <!-- <i class="fa fa-fw fa-plus"></i> -->
        <!-- Add Model -->
      <!-- </button> -->

    <!-- </div> -->
    <ul class='list-group list-group-flush'>
      <SchemaListItem v-for="schema in collection" :schema="schema" :key="schema._id" />
    </ul>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import SchemaListItem from './SchemaListItem'

export default {
  components: {
    SchemaListItem
  },
  computed: mapGetters({
    collection: 'schema/collection'
  })
}
</script>


