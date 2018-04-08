
<template>
  <SchemaForm :schema="model"/>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import SchemaForm from '@/components/schema/SchemaForm'

export default {
  components: {
    SchemaForm
  },
  metaInfo: {
    title: 'Schemas - New' // title is now "blazeplate.io - Schemas - New"
  },
  created () {
    this.resetNewModel()
  },
  computed: mapGetters({
    model: 'schema/newModel'
  }),
  methods: mapActions({
    resetNewModel: 'schema/resetNewModel'
  })
}
</script>


