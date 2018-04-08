
<template>
  <div class="row">
    <div class="col-lg-12">

      <div class="row">
        <div class="col-lg-12">
          <p class="lead mb-0">Attribute</p>
          <small class="form-text text-muted">Define the core parameters that are used to create a valid Attribute.</small>
        </div>
      </div>

      <hr>

      <!-- Step 1 - Select Datatype -->
      <DatatypeSelector v-model="model.datatype" />

      <hr>

      <!-- ABSTRACT ABSTRACT into PropertiesForm -->
      <div class="row" v-if="model.datatype !== 'RELATION'">

        <div class="col-lg-12">
          <p class="lead mb-0">Properties</p>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div class="form-group">
            <label>
              Label
              <span class='text-danger'>*</span>
            </label>
            <small class="form-text text-muted">Example: 'Last Name'<br>The human-readable name for this attribute.</small>
            <input type="text" class="form-control" placeholder="Label" v-model="model.label" >
          </div>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div class="form-group">
            <label>
              Field Name
              <span class='text-danger'>*</span>
            </label>
            <small class="form-text text-muted">Example: 'last_name'<br>Lowercase, no spaces.</small>
            <input type="text" class="form-control" placeholder="Identifier" v-model="model.identifier" >
          </div>
        </div>

      </div>


      <!-- /// ABSTRACT ABSTRACT into AdvancedPropertiesForm -->
      <!-- TODO - scope under 'validations' -->
      <div class="row" v-if="model.datatype !== 'RELATION'">

        <div class="col-lg-12">
          <p class="lead mb-0">Advanced Properties</p>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div class="form-group">
            <label>
              Required
              <span class='text-danger'>*</span>
            </label>
            <small class="form-text text-muted">Whether or not this attribute is required.</small>
            <input type="checkbox" class="form-control" v-model="model.required" >
          </div>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div class="form-group">
            <label>Unique</label>
            <small class="form-text text-muted">Whether or not to enforce unique values for this attribute.</small>
            <input type="checkbox" class="form-control" v-model="model.unique" >
          </div>
        </div>
      </div>
      <!-- end 'validations' -->

      <!-- TODO - keep this? -->
      <!-- <div class="form-group"> -->
        <!-- <label>Preferred Display Attribute</label> -->
        <!-- <small class="form-text text-muted">This attribute will be the user-facing label when entities belonging to this schema are referenced in a relation.</small> -->
        <!-- <input type="checkbox" class="form-control" v-model="model.preferred" > -->
      <!-- </div> -->

      <!-- TODO - MOVE INTO RELATION FORM -->
      <div class="row" v-if="model.datatype === 'RELATION'">
        <div class="col-lg-12">
          <p class="lead mb-0">Relation Options</p>
        </div>
      </div>

      <hr>

      <!-- DROPDOWN BUILDER -->
      <!-- TODO - keep, remove this? -->
      <!-- <div class="form-group" v-if="model.datatype === 'TEXT_SELECT' || model.datatype === 'NUMBER_SELECT'"> -->
        <!-- <label>Dropdown Options</label> -->
        <!-- <small class="form-text text-muted">Available options for this dropdown menu.</small> -->
        <!-- <ArrayInput v-model="model.datatypeOptions.dropdownOptions" :type="model.datatype" /> -->
      <!-- </div> -->

      <!-- RELATION TYPE -->
      <div class="form-group" v-if="model.datatype === 'RELATION'">
        <label>Relation Type</label>
        <small class="form-text text-muted">The type of relation to define</small>
        <select class="form-control" v-model="model.datatypeOptions.relationType" >
          <option v-for="relation in relationTypes" :value="relation.id">{{relation.text}}</option>
        </select>
      </div>

      <!-- SCHEMA Options -->
      <div class="form-group" v-if="model.datatype === 'RELATION'">
        <label>Related Schema</label>
        <small class="form-text text-muted">The Schema with which this attribute maintains a relation.</small>
        <select class="form-control" v-model="model.datatypeOptions.schema_id" >
          <option v-if="model.datatypeOptions.relationType === 'BELONGS_TO'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>
          <option v-if="model.datatypeOptions.relationType === 'HAS_ONE'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>
          <option v-if="model.datatypeOptions.relationType === 'HAS_MANY'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label_plural}}</option>
        </select>
      </div>

      <!-- TODO - refactor this into a separate Relation form element -->
      <div class="form-group" v-if="model.datatype === 'RELATION'">
        <label>Related Schema Key</label>
        <small class="form-text text-muted">The name of the attribute on the related schema that is stored in this schema as a means of linking the two.</small>
        <select class="form-control" v-model="model.datatypeOptions.schema_attribute_identifier" >
          <option v-for="a in schemaAttributes(model.datatypeOptions.schema_id)" :key="a._id" :value="a.identifier">{{a.label}}</option>
        </select>
      </div>

      <!-- <div class="form-group" v-if="model.datatype === 'NUMBER'"> -->
        <!-- <label>Default Value</label> -->
        <!-- <small class="form-text text-muted">The default value for this attribute when none is available.</small> -->
        <!-- <input type="number" class="form-control" placeholder="Default Value" v-model="model.datatypeOptions.default" > -->
      <!-- </div> -->

      <!-- <div class="form-group" v-if="model.datatype === 'TEXT'"> -->
        <!-- <label>Default Value</label> -->
        <!-- <small class="form-text text-muted">The default value for this attribute when none is available.</small> -->
        <!-- <input type="text" class="form-control" placeholder="Default Value" v-model="model.datatypeOptions.default" > -->
      <!-- </div> -->

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import ArrayInput from '@/components/ArrayInput'
import DatatypeSelector from './DatatypeSelector'

export default {
  props: ['schema', 'model'],
  components: {
    ArrayInput,
    DatatypeSelector
  },
  methods: {
    schemaAttributes (schema_id) {
      if (!schema_id) return [{ label: 'Please Select A Schema' }]
      let allSchemas = this.$store.getters['schema/collection']
      let schema = _.find(allSchemas, { _id: schema_id })
      if (!schema) return [{ label: 'Please Select A Schema' }]
      return schema.attributes
    }
  },
  computed: mapGetters({
    allSchemas: 'schema/collection',
    relationTypes: 'schema/relationTypes'
  })
}
</script>

<style lang="sass">
  @import '../../../sass/vendor.sass'

  .form-group
    label
      margin-bottom: 0
    small
      margin-bottom: .6rem
</style>
