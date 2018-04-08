
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
      <RecordForm :record="record" :onSubmit="createRecord" />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import RecordForm from '@/components/record/RecordForm'

export default {
  props: ['project_id', 'schema_id'],
  metaInfo: {
    title: 'Seed - New'
  },
  components: {
    RecordForm
  },
  // created () {
  //   this.selectModel(this.schema_id)
  //   this.resetNewAttribute()
  // },
  computed: mapGetters({
    record: 'schema/newModel',
    schema: 'schema/selectedModel'
  }),
  methods: mapActions({
    createRecord: 'record/create',
    resetNewRecord: 'record/resetNewModel'
  })
}
</script>
