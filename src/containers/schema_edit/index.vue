
<template>
  <LayoutView :schema="schema"/>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import LayoutView from '../schema_new/components/layout.vue'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Schema - Edit' // title is now "blazeplate.io - Schema - Edit"
  },
  props: ['id'],
  created () {
    this.$store.commit('schema/selectSchema', { _id: this.id })
  },
  beforeDestroy () {
    this.$store.commit('schema/clearSelectedSchema')
  },
  data () {
    let allSchemas = this.$store.getters['schema/collection']
    let schema = _.cloneDeep(_.find(allSchemas, { _id: this.id }))
    return { schema }
  }
}
</script>


