<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <ProjectDetailHeader/>
      </div>

      <div class="col-lg-12">
        <hr>
      </div>

      <div class="col-lg-4" id="model-list">

        <!-- New Schema -->
        <b-modal id="new-schema" :title="'New Model'" @ok="submit()" ok-title='Create' cancel-title='Cancel' >
          <SchemaForm :schema="newModel" />
        </b-modal>

        <button id="new-model-button" class="btn btn-primary btn-block btn-lg" v-b-modal="'new-schema'">
          <i class="fa fa-fw fa-plus"></i>
          Add Model
        </button>

        <SchemaList/>

      </div>

      <div class="col-lg-8" id="model-detail">
        <SchemaDetail />
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions, mapGetters } from 'vuex'
import ProjectDetailHeader from '@/modules/project/components/ProjectDetailHeader'
import SchemaList from '@/modules/schema/components/SchemaList'
import SchemaForm from '@/modules/schema/components/SchemaForm'
import SchemaDetail from '@/modules/schema/components/SchemaDetail'

export default {
  name: 'project_show',
  props: ['project_id'],
  metaInfo: {
    title: 'Apps - Show'
  },
  components: {
    ProjectDetailHeader,
    SchemaList,
    SchemaForm,
    SchemaDetail
  },
  created () {
    this.resetNewModel()
    return this.selectModel(this.project_id)
  },
  methods: mapActions({
    submit: 'schema/create',
    selectModel: 'project/selectModel',
    resetNewModel: 'schema/resetNewModel'
  }),
  computed: mapGetters({
    model: 'project/selectedModel',
    newModel: 'schema/newModel',
    project: 'project/selectedModel'
  })
}
</script>
