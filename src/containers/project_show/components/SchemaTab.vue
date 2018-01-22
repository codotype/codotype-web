
<template>
  <div class="row mt-4">

    <div class="col-lg-12">
      <TabHeader title="Schemas" />
    </div>

    <div class="col-lg-12">
      <SchemaList :collection="projectSchemas"/>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import TabHeader from '@/components/TabHeader'
import SchemaList from '@/containers/schema_list/components/layout'

export default {
  props: ['model'],
  components: {
    TabHeader,
    SchemaList
  },
  computed: {
    projectSchemas () { // TODO -scope this getter to the Project's ID
      return this.$store.getters['schema/collection']
    }
  }
}
</script>


