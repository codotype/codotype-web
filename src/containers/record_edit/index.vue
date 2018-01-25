
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
  props: ['id', 'schema_id', 'record_id'],
  computed: {
    data () {
      let allProjects = this.$store.getters['project/collection']
      let project = _.find(allProjects, { _id: this.id })
      let schema = _.find(project.schemas, { _id: this.schema_id })

      let allRecords = this.$store.getters['record/collection']
      let record = _.find(allRecords, { _id: this.record_id })

      return { project: project, schema: schema, record: _.cloneDeep(record) }
    }
  }
}
</script>
