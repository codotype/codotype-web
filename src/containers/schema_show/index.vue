
<template>
  <LayoutView :schema="data.schema" :records="data.records" />
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import store from '@/store'
import LayoutView from './components/layout.vue'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Schema - Records' // title is now "blazeplate.io - Schema - Records"
  },
  props: ['id'],
  computed: {
    data () {
      let schemas = store.getters['schema/collection']
      let schema = _.find(schemas, { _id: this.id })
      let allRecords = store.getters['record/collection']
      let records = _.filter(allRecords, (r) => { return r.schema_id === schema._id })
      return { schema, records }
    }
  }
}
</script>
