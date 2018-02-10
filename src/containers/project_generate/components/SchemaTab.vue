
<template>
  <div class="row mt-4">

    <div class="col-lg-12">
      <TabHeader title="Schemas" />
    </div>

    <div class="col-lg-12" v-if="!selectedSchema">
      <SchemaList :collection="model.schemas" />
    </div>

    <div class="col-lg-12" v-if="selectedSchema">
      <!-- <p class="lead">EDIT THIS SCHEMA</p> -->
      <SchemaForm :schema="getSelectedSchema()" />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import TabHeader from '@/components/TabHeader'
import SchemaList from '@/containers/schema_list/components/layout'
import SchemaForm from '@/containers/schema_new/components/layout'

export default {
  props: ['model'],
  components: {
    TabHeader,
    SchemaList,
    SchemaForm
  },
  beforeDestroy () {
    this.$store.commit('schema/clearSelectedSchema')
  },
  computed: {
    selectedSchema () {
      return this.$store.getters['schema/selectedSchema']
    }
  },
  methods: {
    getSelectedSchema () {
      let schemaId = this.$store.getters['schema/selectedSchema']
      if (!schemaId) return false
      let allSchemas = this.$store.getters['schema/collection']
      let schema = _.find(allSchemas, { _id: schemaId })
      return _.cloneDeep(schema)
    }
  }
}
</script>


