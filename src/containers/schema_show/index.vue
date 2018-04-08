
<template>
  <div class="row">
    <div class="col-lg-8">
      <h4>
        {{model.label}}
        <small class="text-muted">Attributes</small>
      </h4>
    </div>

    <div class="col-lg-4">
      <button class='btn btn-primary float-right' v-b-modal="'new-attribute'">
        <i class="fa fa-fw fa-plus mr-2"></i>
        New Attribute
      </button>

      <!-- Bootstrap Modal Component -->
      <b-modal id="new-attribute"
        :title="'New Attribute'"
        @ok="createAttribute()"
        header-bg-variant="dark"
        header-text-variant="light"
        body-bg-variant="dark"
        body-text-variant="light"
        footer-bg-variant="primary"
        footer-text-variant="light"
        ok-variant='primary'
        ok-title='Create'
        cancel-title='Cancel'
        cancel-variant='dark'
      >
        <AttributeForm :schema="model" :model="newAttribute" />
      </b-modal>

    </div>

    <div class="col-lg-12">
      <small class="mb-2 form-text text-muted">Defines the attributes that can be assigned to a single {{ model.label }}</small>
      <hr>
    </div>

    <!-- Attribute List -->
    <div class="col-lg-12">
      <AttributeList :schema='model' />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import AttributeList from './components/AttributeList'
import AttributeForm from './components/AttributeForm'
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['project_id', 'schema_id'],
  metaInfo: {
    title: 'Schema - Show'
  },
  components: {
    AttributeList,
    AttributeForm
  },
  created () {
    this.selectModel(this.schema_id)
    this.resetNewAttribute()
  },
  computed: mapGetters({
    model: 'schema/selectedModel',
    newAttribute: 'attribute/newModel'
  }),
  methods: mapActions({
    selectModel: 'schema/selectModel',
    createAttribute: 'attribute/create',
    resetNewAttribute: 'attribute/resetNewModel'
  })
}
</script>
