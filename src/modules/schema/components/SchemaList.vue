
<template>
  <div class="card">
    <!-- <div class="card-header d-flex justify-content-between align-items-center"> -->
      <!-- <span> -->
        <!-- <i class="fa fa-database mr-1"></i> -->
        <!-- Models -->
      <!-- </span> -->
    <!-- </div> -->

    <!-- TODO - make SchemaListItems sortable -->

    <!-- <ul class='list-group list-group-flush'> -->
    <!-- </ul> -->

    <draggable class='list-group list-group-flush'
      v-model='collection'
      :options="sortableOptions"
      v-if="collection.length"
    >

      <SchemaListItem v-for="schema in collection" :schema="schema" :key="schema._id" />
    </draggable>
  </div>
</template>

<!-- // // // //  -->

<script>
import orderBy from 'lodash/orderBy'
// import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import smoothReflow from 'vue-smooth-reflow'
import SchemaListItem from './SchemaListItem'

export default {
  mixins: [smoothReflow],
  components: {
    draggable,
    SchemaListItem
  },
  mounted () {
    this.$smoothReflow()
  },
  computed: {
    // ...mapGetters({
    //   collection: 'schema/collection'
    // }),
    sortableOptions () {
      return {
        animation: 150,
        fallbackTolerance: 100
      }
    },
    collection: {
      get () {
        return orderBy(this.$store.getters['schema/collection'], ['order'], ['asc'])
      },
      set (value) {
        value.forEach((s, i) => { s.order = i })
      }
    }
  }
}
</script>


