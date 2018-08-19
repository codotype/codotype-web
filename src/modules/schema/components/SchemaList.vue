
<template>
  <ul class='list-group mt-3'>
    <SchemaListItem v-for="schema in collection" :schema="schema" :key="schema._id" />
  </ul>
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


