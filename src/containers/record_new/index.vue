
<template>
  <LayoutView :project="data.project" :schema="data.schema" :record="data.record" />
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import LayoutView from './components/layout.vue'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Schema - New Record' // title is now "blazeplate.io - Schema - New Record"
  },
  props: ['id', 'schema_id'],
  computed: {
    data () {
      let allProjects = this.$store.getters['project/collection']
      let project = _.find(allProjects, { _id: this.id })
      let schema = _.find(project.schemas, { _id: this.schema_id })

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

      return { project, schema, record }
    }
  }
}
</script>
