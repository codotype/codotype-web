
<template>
  <div class="row">
    <div class="col-lg-8">
      <h4>
        {{schema.label}}
        <small class="text-muted">Seed Data</small>
      </h4>
    </div>

    <div class="col-lg-4">
      <a class='btn btn-primary float-right' :href="'#/projects/' + project_id + '/seeds/' + schema_id + '/new'" >
        <i class="fa fa-fw fa-plus mr-2"></i>
        New {{ schema.label }}
      </a>
    </div>

    <div class="col-lg-12">
      <small class="mb-2 form-text text-muted">Defines the attributes that can be assigned to a single {{ schema.label }}</small>
      <hr>
    </div>

    <!-- Record List -->
    <div class="col-lg-12">
      <RecordList :schema="schema" :projectId="project_id" />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
// import AttributeList from './components/AttributeList'
// import { mapGetters, mapActions } from 'vuex'
import RecordList from '@/components/record/RecordList'
import { mapGetters } from 'vuex'

export default {
  props: ['project_id', 'schema_id'],
  metaInfo: {
    title: 'Seed - List'
  },
  components: {
    RecordList
  },
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
