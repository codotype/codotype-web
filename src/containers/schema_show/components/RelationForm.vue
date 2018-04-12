
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

      <div class="row">
        <div class="col-lg-4">
          This schema
          <i class="fa fa-lg fa-cubes"></i>
        </div>

        <!-- RELATION TYPE -->
        <div class="col-lg-4">
          <div class="form-group">
            <label>Relation Type</label>
            <small class="form-text text-muted">The type of relation to define</small>
            <select class="form-control" v-model="model.datatypeOptions.relationType" >
              <option v-for="relation in relationTypes" :value="relation.id">{{relation.text}}</option>
            </select>
          </div>
        </div>

        <!-- RELATED SCHEMA -->
        <div class="col-lg-4">
          <div class="form-group">
            <label>Related Schema</label>
            <small class="form-text text-muted">The Schema with which this attribute maintains a relation.</small>
            <select class="form-control" v-model="model.datatypeOptions.schema_id" >
              <option v-if="model.datatypeOptions.relationType === 'BELONGS_TO'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>

              <!-- <option v-if="model.datatypeOptions.relationType === 'HAS_ONE'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option> -->

              <option v-if="model.datatypeOptions.relationType === 'HAS_MANY'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label_plural}}</option>
            </select>
          </div>
        </div>

        <!-- Description -->
        <div class="col-lg-12">
          <!-- <small> -->
            <!-- One <span class='text-info'>{{ schema.label }}</span> HAS MANY <span class='text-warning'>TODO</span> -->
          <!-- </small> -->
          <small class="text-warning">TODO - render description of relationship.</small>
        </div>

      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  props: ['schema', 'model'],
  created () {
    // TODO - this should be handled in Vuex store
    // this.model.datatypeOptions.relationType = 'MANY_TO_ONE'
    // this.model.datatypeOptions.schema_id = this.allSchemas[0]._id
  },
  computed: {
    ...mapGetters({
      relationTypes: 'schema/relationTypes'
    }),
    allSchemas () {
      return _.filter(this.$store.getters['schema/collection'], (s) => { return s._id !== this.schema._id })
    },
    selectedRelatedSchema () {
      _.find(this.allSchemas, { _id: this.model.datatypeOptions.schema_id })
    }
  }
}
</script>
