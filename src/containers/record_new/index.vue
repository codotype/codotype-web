
<template>
  <div class="row">
    <div class="col-lg-12">
      <h2>
        New {{schema.label}}
        <!-- <small class="text-muted">Seed Data</small> -->
      </h2>
    </div>

    <div class="col-lg-12">
      <small class="mb-2 form-text text-muted">Defines the attributes that can be assigned to a single {{ schema.label }}</small>
      <hr>
    </div>

    <!-- Record Form -->
    <div class="col-lg-12">
      <small>RECORD FORM GOES HERE</small>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
// import AttributeList from './components/AttributeList'
// import AttributeForm from './components/AttributeForm'
// import { mapGetters, mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  props: ['project_id', 'schema_id'],
  metaInfo: {
    title: 'Seed - New'
  },
  // components: {
  //   AttributeList,
  //   AttributeForm
  // },
  // created () {
  //   this.selectModel(this.schema_id)
  //   this.resetNewAttribute()
  // },
  computed: mapGetters({
    schema: 'schema/selectedModel'
  })
  // methods: mapActions({
  //   selectModel: 'schema/selectModel',
  //   createAttribute: 'attribute/create',
  //   resetNewAttribute: 'attribute/resetNewModel'
  // })
}
</script>
