
<template>
  <!-- <div class="card h-100 bg-secondary mt-3"> -->
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <span>
        <i class="fa fa-database mr-1"></i>
        Models
      </span>

      <!-- <button id="new-model-button" class="btn btn-primary btn-block btn-lg" v-b-modal="'new-schema'"> -->
        <!-- <i class="fa fa-fw fa-plus"></i> -->
        <!-- Add Model -->
      <!-- </button> -->

      <button id="new-model-button" class="btn btn-sm btn-primary" v-b-modal="'new-schema'">
        <i class="fa fa-fw fa-plus"></i>
        Add Model
      </button>

    </div>
    <!-- New Schema Form -->
    <b-modal id="new-schema" :title="'New Model'" @ok="submit()" ok-title='Create' cancel-title='Cancel' >
      <SchemaForm :schema="newModel" />
    </b-modal>
    <ul class='list-group list-group-flush'>
      <SchemaListItem v-for="schema in collection" :schema="schema" :key="schema._id" />
    </ul>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import SchemaListItem from './SchemaListItem'
import SchemaForm from '@/modules/schema/components/SchemaForm'

export default {
  components: {
    SchemaForm,
    SchemaListItem
  },
  created () {
    this.resetNewModel()
  },
  methods: mapActions({
    submit: 'schema/create',
    resetNewModel: 'schema/resetNewModel'
  }),
  computed: mapGetters({
    newModel: 'schema/newModel',
    collection: 'schema/collection'
  })
}
</script>


