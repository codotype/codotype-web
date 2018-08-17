
<template>
  <div class="row">
    <div class="col-lg-12">
      <Header/>
    </div>

    <div class="col-lg-4">

      <!-- New Schema -->
      <b-modal id="new-schema" :title="'New Model'" @ok="submit()" ok-title='Create' cancel-title='Cancel' >
        <SchemaForm :schema="newModel" />
      </b-modal>

      <button class="btn btn-primary btn-block" v-b-modal="'new-schema'">
        <i class="fa fa-fw fa-plus mr-2"></i>
        New Model
      </button>

      <!-- Schema List -->
      <ul class='list-group mt-3'>
        <SchemaChild v-for="schema in collection" :schema="schema" :key="schema._id" />
      </ul>
    </div>

    <div class="col-lg-8">
      <router-view/>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from './components/Header'
import SchemaChild from './components/SchemaChild'
import SchemaForm from '@/components/schema/SchemaForm'

export default {
  metaInfo: {
    title: 'Schemas'
  },
  components: {
    Header,
    SchemaChild,
    SchemaForm
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


