
<template>
  <div class="container h-100">
    <div class="row">
      <div class="col-lg-12">
        <h2>Project Schemas</h2>
        <hr>
      </div>
    </div>

    <SchemaList :collection="model.schemas" v-if="!selectedSchema" />

    <div class="col-lg-12" v-if="selectedSchema">
      <p class="lead">EDIT THIS SCHEMA</p>
      <SchemaForm :schema="selectedSchema" />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import SchemaList from '@/containers/schema_list/components/layout'
import SchemaForm from '@/containers/schema_new/components/layout'

export default {
  name: 'project_edit',
  props: ['id'],
  components: {
    SchemaList,
    SchemaForm
  },
  metaInfo: {
    title: 'Project - Edit'
  },
  created () {
    this.$store.commit('schema/clearSelectedSchema')
  },
  mounted () {
    return this.$store.commit('project/select', { _id: this.id })
  },
  computed: {
    model () {
      return this.$store.getters['project/current']
    },
    selectedSchema () {
      return this.$store.getters['schema/selectedSchema']
    }
  }
}
</script>
