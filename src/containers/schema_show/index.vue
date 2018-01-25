
<template>
  <LayoutView :project="data.project" :schema="data.schema" :records="data.records" />
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
    title: 'Schema - Records' // title is now "blazeplate.io - Schema - Records"
  },
  props: ['id', 'schema_id'],
  computed: {
    data () {
      let allProjects = this.$store.getters['project/collection']
      let project = _.find(allProjects, { _id: this.id })
      let schema = _.find(project.schemas, { _id: this.schema_id })
      let allRecords = this.$store.getters['record/collection']
      let records = _.filter(allRecords, (r) => { return r.schema_id === schema._id })
      return { project, schema, records }
    }
  }
}
</script>
