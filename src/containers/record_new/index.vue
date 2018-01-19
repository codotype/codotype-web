
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
  props: ['id'],
  computed: {
    data () {
      let schemas = store.getters['schema/collection']
      let schema = _.find(schemas, { _id: this.id })

      // TODO - abstract into Vuex store
      let record = {
        _id: null,
        schema_id: schema._id,
        attributes: {}
      }

      _.each(schema.attributes, (attr) => {
        record.attributes[attr.identifier] = null // Adds attribute to record object
        if (attr.datatypeOptions.default) {
          record.attributes[attr.identifier] = attr.datatypeOptions.default
        }
      })

      return { schema, record }
    }
  }
}
</script>
