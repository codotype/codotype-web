
<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- TODO - use FormInput in this component? -->
      <div class="row">
        <div class="col-lg-12">
          <p class="lead mb-0">Relation Options</p>
        </div>
      </div>

      <hr>

      <!-- <small class="text-warning">TODO - compute model.label, model.identifier in Vuex store</small> -->
      <!-- TODO - model.label should be RELATED_SCHEMA.label or RELATED_SCHEMA.label_plural -->
      <!-- <input type="text" v-model="model.label"> -->
      <!-- TODO - model.label should be RELATED_SCHEMA.identifier + '_id' or '_ids' -->
      <!-- <input type="text" v-model="model.identifier"> -->


      <!-- RELATION TYPE -->
      <div class="form-group">
        <label>Relation Type</label>
        <small class="form-text text-muted">The type of relation to define</small>
        <select class="form-control" v-model="model.datatypeOptions.relationType" >
          <option v-for="relation in relationTypes" :value="relation.id">{{relation.text}}</option>
        </select>
      </div>

      <!-- SCHEMA Options -->
      <div class="form-group">
        <label>Related Schema</label>
        <small class="form-text text-muted">The Schema with which this attribute maintains a relation.</small>
        <select class="form-control" v-model="model.datatypeOptions.schema_id" >
          <option v-if="model.datatypeOptions.relationType === 'BELONGS_TO'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>

          <option v-if="model.datatypeOptions.relationType === 'HAS_ONE'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>

          <option v-if="model.datatypeOptions.relationType === 'HAS_MANY'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label_plural}}</option>
        </select>
      </div>

      <!-- TODO - this should be RELATED_SCHEMA.attributes[0].identifier -->
      <!-- <input type="text" v-model="model.datatypeOptions.schema_attribute_identifier"> -->

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  props: ['schema', 'model'],
  computed: {
    ...mapGetters({
      allSchemas: 'schema/collection',
      relationTypes: 'schema/relationTypes'
    }),
    // TODO - is this needed?
    schemaAttributes () {
      let schemaId = this.model.datatypeOptions.schema_id
      if (!schemaId) return [{ label: 'Please Select A Schema' }]
      let allSchemas = this.$store.getters['schema/collection']
      let schema = _.find(allSchemas, { _id: schemaId })
      if (!schema) return [{ label: 'Please Select A Schema' }]
      return schema.attributes
    }
  }
}
</script>
