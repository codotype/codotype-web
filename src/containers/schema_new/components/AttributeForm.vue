
<template>
  <div class="mt-4 bg-blaze">

    <!-- Attribute Form -->
    <div class="row" v-if="selectedAttr">
      <div class="col-lg-12">

        <div class="row">
          <div class="col-lg-8">
            <p class="lead mb-0">Attribute</p>
            <small class="form-text text-muted">Define the core parameters that are used to create a valid Attribute.</small>
          </div>
          <div class="col-lg-4 text-right">
            <button class="btn btn-sm btn-outline-secondary btn-block" @click="clearSelected()" v-if="selectedAttr">
              <i class="fa fa-fw mr-1 fa-angle-left"></i>
              Back
            </button>
          </div>
        </div>

        <!-- <button class="btn btn-sm btn-outline-success w-50" @click="updateSelected(selectedAttr)"> -->
          <!-- <i class="fa fa-fw mr-1 fa-check"></i> -->
          <!-- Submit -->
        <!-- </button> -->

        <hr>

        <!-- ABSTRACT ABSTRACT into DataTypeForm -->
        <div class="form-group">
          <label>DataType</label>
          <small class="form-text text-muted">The type of data represented by this attribute.</small>
          <select class="form-control" placeholder="Datatype" v-model="selectedAttr.datatype" >
            <option value=''></option>
            <option value='TEXT'>Text</option>
            <option value='NUMBER'>Number</option>
            <option value='BOOL'>Checkbox</option>
            <option value='DATE'>Date</option>
            <option value='TIME'>Time</option>
            <option value='COLOR'>Color</option>
            <option value='GEO'>Geolocation</option>
            <option value='RELATION'>Relation</option>
            <!-- <optgroup label="Basics"> -->
              <!-- <option value='RANGE'>Range</option> -->
              <!-- <option value='PASSWORD'>Password</option> -->
              <!-- <option value='URL'>URL</option> -->
            <!-- </optgroup> -->
            <!-- <optgroup label="Masked"> -->
              <!-- <option value='PHONE_NUMBER'>Phone Number</option> -->
              <!-- <option value='EMAIL'>Phone Number</option> -->
              <!-- <option value='CURRENCY_USD'>Currency (USD)</option> -->
            <!-- </optgroup> -->
            <!-- <optgroup label="Dropdowns"> -->
              <!-- <option value='TEXT_SELECT'>Text Dropdown</option> -->
              <!-- <option value='NUMBER_SELECT'>Number Dropdown</option> -->
              <!-- <option value='TEXT_SELECT_MULTI'>Text Multi Dropdown</option> -->
              <!-- <option value='NUMBER_SELECT_MULTI'>Number Multi Dropdown</option> -->
            <!-- </optgroup> -->
            <!-- <optgroup label="Relations"> -->
              <!-- <option value='HAS_ONE'>Has One</option> -->
              <!-- <option value='BELONGS_TO'>Belongs To</option> -->
              <!-- <option value='HAS_MANY'>Has Many</option> -->
              <!-- <option value='HAS_AND_BELONGS_TO_MANY'>Has And Belongs To Many</option> -->
            <!-- </optgroup> -->
          </select>
        </div>
        <!-- /// ABSTRACT ABSTRACT -->

        <hr>

        <div class="row" v-if="selectedAttr.datatype === 'RELATION'">

          <div class="col-lg-12">
            <p class="lead mb-0">Relation Options</p>
          </div>

        </div>

        <!-- ABSTRACT ABSTRACT into PropertiesForm -->
        <div class="row" v-if="selectedAttr.datatype !== 'RELATION'">

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
              <input type="text" class="form-control" placeholder="Label" v-model="selectedAttr.label" >
            </div>
          </div>

          <div class="col-lg-6 col-sm-12">
            <div class="form-group">
              <label>
                Field Name
                <span class='text-danger'>*</span>
              </label>
              <small class="form-text text-muted">Example: 'last_name'<br>Lowercase, no spaces.</small>
              <input type="text" class="form-control" placeholder="Identifier" v-model="selectedAttr.identifier" >
            </div>
          </div>

        </div>

        <!-- /// ABSTRACT ABSTRACT into AdvancedPropertiesForm -->
        <!-- TODO - scope under 'validations' -->
        <div class="row" v-if="selectedAttr.datatype !== 'RELATION'">

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
              <input type="checkbox" class="form-control" v-model="selectedAttr.required" >
            </div>
          </div>

          <div class="col-lg-6 col-sm-12">
            <div class="form-group">
              <label>Unique</label>
              <small class="form-text text-muted">Whether or not to enforce unique values for this attribute.</small>
              <input type="checkbox" class="form-control" v-model="selectedAttr.unique" >
            </div>
          </div>
        </div>
        <!-- end 'validations' -->

        <!-- <div class="form-group"> -->
          <!-- <label>Preferred Display Attribute</label> -->
          <!-- <small class="form-text text-muted">This attribute will be the user-facing label when entities belonging to this schema are referenced in a relation.</small> -->
          <!-- <input type="checkbox" class="form-control" v-model="selectedAttr.preferred" > -->
        <!-- </div> -->

        <hr>

        <!-- DROPDOWN BUILDER -->
        <!-- TODO - remove -->
        <div class="form-group" v-if="selectedAttr.datatype === 'TEXT_SELECT' || selectedAttr.datatype === 'NUMBER_SELECT'">
          <label>Dropdown Options</label>
          <small class="form-text text-muted">Available options for this dropdown menu.</small>
          <ArrayInput v-model="selectedAttr.datatypeOptions.dropdownOptions" :type="selectedAttr.datatype" />
        </div>

        <!-- SCHEMA Options -->
        <div class="form-group" v-if="selectedAttr.datatype === 'RELATION'">
          <label>Related Schema</label>
          <small class="form-text text-muted">The Schema with which this attribute maintains a relation.</small>
          <select class="form-control" v-model="selectedAttr.datatypeOptions.schema_id" >
            <option v-if="selectedAttr.datatype === 'BELONGS_TO'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>
            <option v-if="selectedAttr.datatype === 'HAS_ONE'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>
            <option v-if="selectedAttr.datatype === 'HAS_MANY'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label_plural}}</option>
          </select>
        </div>

        <div class="form-group" v-if="selectedAttr.datatype === 'RELATION'">
          <label>Related Schema Key</label>
          <small class="form-text text-muted">The name of the attribute on the related schema that is stored in this schema as a means of linking the two.</small>
          <select class="form-control" v-model="selectedAttr.datatypeOptions.schema_attribute_identifier" >
            <option v-for="a in schemaAttributes(selectedAttr.datatypeOptions.schema_id)" :key="a._id" :value="a.identifier">{{a.label}}</option>
          </select>
        </div>

        <div class="form-group" v-if="selectedAttr.datatype === 'RELATION'">
          <label>Related Schema Key</label>
          <small class="form-text text-muted">The name of the attribute on the related schema that is stored in this schema as a means of linking the two.</small>
          <select class="form-control" v-model="selectedAttr.datatypeOptions.schema_attribute_identifier" >
            <option v-for="a in schemaAttributes(selectedAttr.datatypeOptions.schema_id)" :key="a._id" :value="a.identifier">{{a.label}}</option>
          </select>
        </div>

        <!-- <div class="form-group" v-if="selectedAttr.datatype === 'NUMBER'"> -->
          <!-- <label>Default Value</label> -->
          <!-- <small class="form-text text-muted">The default value for this attribute when none is available.</small> -->
          <!-- <input type="number" class="form-control" placeholder="Default Value" v-model="selectedAttr.datatypeOptions.default" > -->
        <!-- </div> -->

        <!-- <div class="form-group" v-if="selectedAttr.datatype === 'TEXT'"> -->
          <!-- <label>Default Value</label> -->
          <!-- <small class="form-text text-muted">The default value for this attribute when none is available.</small> -->
          <!-- <input type="text" class="form-control" placeholder="Default Value" v-model="selectedAttr.datatypeOptions.default" > -->
        <!-- </div> -->

      </div>

    </div>

    <!-- TODO - move out of this AttributeForm component -->
    <!-- List of attributes -->
    <!-- NOTE - includes ADD ATTRIBUTE button -->
    <AttributeList :schema='schema' />


  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import ArrayInput from '@/components/ArrayInput'
import AttributeList from './AttributeList'

export default {
  props: ['schema'],
  components: {
    ArrayInput,
    AttributeList
  },
  methods: {
    addAttribute () {
      this.$store.commit('schema/addAttribute', { schema: this.schema })
    },
    removeAttribute (attr) {
      this.$store.commit('schema/removeAttribute', { schema: this.schema, attr: attr })
    },
    editAttribute (attr) {
      this.$store.commit('schema/selectAttribute', { attr })
    },
    clearSelected () {
      this.$store.commit('schema/clearSelectedAttribute')
    },
    updateSelected (attr) {
      this.$store.commit('schema/persistSelectedAttribute', { schema: this.schema, attr: attr })
    },
    schemaAttributes (schema_id) {
      if (!schema_id) return [{ label: 'Please Select A Schema' }]
      let allSchemas = this.$store.getters['schema/collection']
      let schema = _.find(allSchemas, { _id: schema_id })
      if (!schema) return [{ label: 'Please Select A Schema' }]
      return schema.attributes
    }
  },
  computed: {
    ...mapGetters({
      selectedAttr: 'schema/selectedAttribute'
    }),
    allSchemas () {
      let currentProject = this.$store.getters['project/current']
      // console.log('currentProject??')
      // console.log(currentProject)
      return currentProject.schemas
      // return this.$store.getters['schema/collection']
    }
  }
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
