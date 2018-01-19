
<template>
  <LayoutView :schema="data.schema" :record="data.record" />
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
    title: 'Schema - New Record' // title is now "blazeplate.io - Schema - New Record"
  },
  props: ['id', 'record_id'],
  computed: {
    data () {
      let allSchemas = store.getters['schema/collection']
      let schema = _.find(allSchemas, { _id: this.id })

      let allRecords = store.getters['record/collection']
      let record = _.find(allRecords, { _id: this.record_id })

      return { schema: schema, record: _.cloneDeep(record) }
    }
  }
}
</script>
