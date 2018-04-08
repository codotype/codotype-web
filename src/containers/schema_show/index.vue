
<template>
  <div class="row">
    <div class="col-lg-8">
      <h2>
        {{model.label}}
        <small class="text-muted">Attributes</small>
      </h2>
    </div>

    <div class="col-lg-4 text-right">
      <a class='btn btn-primary' :href=" '#/projects/' + project_id + '/preview/' + schema_id + '/attributes' ">
        <i class="fa fa-fw fa-plus mr-2"></i>
        New Attribute
      </a>
    </div>

    <div class="col-lg-12">
      <small class="mb-2 form-text text-muted">Defines the attributes that can be assigned to a single {{ model.label }}</small>
      <hr>
    </div>

    <div class="col-lg-12">
      <AttributeList :schema='model' />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import AttributeList from './components/AttributeList'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['project_id', 'schema_id'],
  metaInfo: {
    title: 'Schema - Show'
  },
  components: {
    AttributeList
  },
  created () {
    this.selectModel(this.schema_id)
  },
  computed: mapGetters({
    model: 'schema/selectedModel'
  }),
  methods: mapActions({
    selectModel: 'schema/selectModel'
  })
}
</script>
