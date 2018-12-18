<template>
  <div class="row mt-2">

    <div class="col-lg-4 border-right">

      <!-- New Schema Modal -->
      <b-modal
        lazy
        id="new-schema"
        :title="'New Model'"
        @ok="submit()"
        ok-title='Create'
        cancel-title='Cancel'
        :ok-disabled="!newModel.label"
      >
        <SchemaForm :schema="newModel" />
      </b-modal>

      <!-- Model header -->
      <b-row class='mb-1'>
        <b-col lg='12'>
          <h4 class="mb-0">Models</h4>
          <small class="text-muted">Models encapsulate attributes and relations</small>
        </b-col>
      </b-row>

      <button
        id="new-model-button"
        class="btn btn-primary btn-block btn-lg mb-3"
        v-b-modal="'new-schema'"
      >
        <i class="fa fa-fw fa-plus"></i>
        Add Model
      </button>

      <SchemaList id="model-list" />

    </div>

    <div class="col-lg-8">
      <SchemaDetail id="model-detail" />
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions, mapGetters } from 'vuex'
import SchemaList from '@/modules/schema/components/SchemaList'
import SchemaForm from '@/modules/schema/components/SchemaForm'
import SchemaDetail from '@/modules/schema/components/SchemaDetail'

export default {
  props: ['blueprint_id'],
  metaInfo: {
    title: 'Blueprint'
  },
  components: {
    SchemaList,
    SchemaForm,
    SchemaDetail
  },
  created () {
    this.resetNewSchemaModel()
    return this.selectModel(this.blueprint_id)
  },
  destroyed () {
    return this.clearSelectedProject()
  },
  methods: mapActions({
    submit: 'schema/create',
    selectModel: 'project/selectModel',
    resetNewSchemaModel: 'schema/resetNewModel',
    clearSelectedProject: 'project/clearSelected'
  }),
  computed: mapGetters({
    newModel: 'schema/newModel'
  })
}
</script>

<style scoped>
  div.fixed-bottom.text-right {
    z-index: 2000;
  }
</style>
