<template>
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
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import ProjectDetailHeader from './ProjectDetailHeader'
import SchemaList from '@/modules/schema/components/SchemaList'
import SchemaForm from '@/modules/schema/components/SchemaForm'
import SchemaDetail from '@/modules/schema/components/SchemaDetail'

export default {
  metaInfo: {
    title: 'Schemas'
  },
  components: {
    ProjectDetailHeader,
    SchemaList,
    SchemaForm,
    SchemaDetail
  },
  created () {
    this.resetNewModel()
  },
  computed: mapGetters({
    newModel: 'schema/newModel',
    project: 'project/selectedModel',
    collection: 'schema/collection'
  }),
  methods: mapActions({
    submit: 'schema/create',
    resetNewModel: 'schema/resetNewModel'
  })
}
</script>
