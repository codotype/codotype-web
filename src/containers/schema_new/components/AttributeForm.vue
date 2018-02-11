
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
            <div class="btn-group w-100" v-if="selectedAttr">

              <button class="btn btn-sm btn-outline-secondary w-50" @click="clearSelected()">
                <i class="fa fa-fw mr-1 fa-angle-left"></i>
                Back
              </button>

              <button class="btn btn-sm btn-outline-success w-50" @click="updateSelected(selectedAttr)">
                <i class="fa fa-fw mr-1 fa-check"></i>
                Submit
              </button>

            </div>
          </div>
        </div>

        <hr>

        <div class="row">

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
                Identifier
                <span class='text-danger'>*</span>
              </label>
              <small class="form-text text-muted">Example: 'last_name'<br>Lowercase, no spaces.</small>
              <input type="text" class="form-control" placeholder="Identifier" v-model="selectedAttr.identifier" >
            </div>
          </div>

        </div>

        <div class="form-group">
          <label>
            Help Text
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted">The text provided to an end-user to aid in their understanding of this attribute (this text here).</small>
          <input type="text" class="form-control" placeholder="Help" v-model="selectedAttr.help" >
        </div>

        <!-- TODO - scope under 'validations' -->
        <div class="row">

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
        <p class="lead mb-0">DataType</p>

        <div class="form-group">
          <label>Type</label>
          <small class="form-text text-muted">The type of data represented by this attribute.</small>
          <select class="form-control" placeholder="Datatype" v-model="selectedAttr.datatype" >
            <optgroup label="Basics">
              <option value='TEXT'>Text</option>
              <option value='NUMBER'>Number</option>
              <option value='BOOL'>Checkbox</option>
              <option value='DATE'>Date</option>
              <option value='TIME'>Time</option>
              <option value='COLOR'>Color</option>
              <!-- <option value='RANGE'>Range</option> -->
              <!-- <option value='PASSWORD'>Password</option> -->
              <!-- <option value='URL'>URL</option> -->
            </optgroup>
            <optgroup label="Masked">
              <option value='PHONE_NUMBER'>Phone Number</option>
              <!-- <option value='EMAIL'>Phone Number</option> -->
              <!-- <option value='CURRENCY_USD'>Currency (USD)</option> -->
            </optgroup>
            <optgroup label="Dropdowns">
              <option value='TEXT_SELECT'>Text Dropdown</option>
              <option value='NUMBER_SELECT'>Number Dropdown</option>
              <!-- <option value='TEXT_SELECT_MULTI'>Text Multi Dropdown</option> -->
              <!-- <option value='NUMBER_SELECT_MULTI'>Number Multi Dropdown</option> -->
            </optgroup>
            <optgroup label="Relations">
              <option value='HAS_ONE'>Has One</option>
              <option value='BELONGS_TO'>Belongs To</option>
              <option value='HAS_MANY'>Has Many</option>
              <!-- <option value='HAS_AND_BELONGS_TO_MANY'>Has And Belongs To Many</option> -->
            </optgroup>
          </select>
        </div>

        <!-- DROPDOWN BUILDER -->
        <div class="form-group" v-if="selectedAttr.datatype === 'TEXT_SELECT' || selectedAttr.datatype === 'NUMBER_SELECT'">
          <label>Dropdown Options</label>
          <small class="form-text text-muted">Available options for this dropdown menu.</small>
          <ArrayInput v-model="selectedAttr.datatypeOptions.dropdownOptions" :type="selectedAttr.datatype" />
        </div>

        <!-- SCHEMA Options -->
        <div class="form-group" v-if="selectedAttr.datatype === 'BELONGS_TO' || selectedAttr.datatype === 'HAS_ONE' || selectedAttr.datatype === 'HAS_MANY'">
          <label>Related Schema</label>
          <small class="form-text text-muted">The Schema with which this attribute maintains a relation.</small>
          <select class="form-control" v-model="selectedAttr.datatypeOptions.schema_id" >
            <option v-if="selectedAttr.datatype === 'BELONGS_TO'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>
            <option v-if="selectedAttr.datatype === 'HAS_ONE'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option>
            <option v-if="selectedAttr.datatype === 'HAS_MANY'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label_plural}}</option>
          </select>
        </div>

        <div class="form-group" v-if="selectedAttr.datatype === 'BELONGS_TO'">
          <label>Related Schema Key</label>
          <small class="form-text text-muted">The name of the attribute on the related schema that is stored in this schema as a means of linking the two.</small>
          <select class="form-control" v-model="selectedAttr.datatypeOptions.schema_attribute_identifier" >
            <option v-for="a in schemaAttributes(selectedAttr.datatypeOptions.schema_id)" :key="a._id" :value="a.identifier">{{a.label}}</option>
          </select>
        </div>

        <div class="form-group" v-if="selectedAttr.datatype === 'HAS_ONE'">
          <label>Related Schema Key</label>
          <small class="form-text text-muted">The name of the attribute on the related schema that is stored in this schema as a means of linking the two.</small>
          <select class="form-control" v-model="selectedAttr.datatypeOptions.schema_attribute_identifier" >
            <option v-for="a in schemaAttributes(selectedAttr.datatypeOptions.schema_id)" :key="a._id" :value="a.identifier">{{a.label}}</option>
          </select>
        </div>

        <div class="form-group" v-if="selectedAttr.datatype === 'NUMBER'">
          <label>Default Value</label>
          <small class="form-text text-muted">The default value for this attribute when none is available.</small>
          <input type="number" class="form-control" placeholder="Default Value" v-model="selectedAttr.datatypeOptions.default" >
        </div>

        <div class="form-group" v-if="selectedAttr.datatype === 'TEXT'">
          <label>Default Value</label>
          <small class="form-text text-muted">The default value for this attribute when none is available.</small>
          <input type="text" class="form-control" placeholder="Default Value" v-model="selectedAttr.datatypeOptions.default" >
        </div>

      </div>

      <div class="col-lg-12">
        <hr>
        <p class="lead mb-0">Display Options</p>

        <div class="form-group">
          <label>
            Input Column Span
          </label>
          <small class="form-text text-muted">The column span of the input field when it appears in a form (2-12).</small>
          <select type="number" class="form-control" v-model="selectedAttr.col_span" >
            <option value="6">Column Span (6 Default)</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>

      </div>
    </div>

    <div class="row" v-if="!selectedAttr">
      <div class="col-lg-6">
        <p class="lead mb-0">Attributes</p>
      </div>

      <!-- Attribute Editor Controls -->
      <div class="col-lg-6 text-right">
        <div class="btn-group mt-3" v-if="!selectedAttr && attributes.length">
          <button class="btn btn-primary w-100" @click="addAttribute()">
            <i class="fa fa-fw fa-plus mr-2"></i>
            Add Attribute
          </button>
        </div>
      </div>

      <div class="col-lg-12">
        <small class="mb-2 form-text text-muted">Defines the attributes that can be assigned to an entity of this schema.</small>
        <hr>
      </div>

       <div class="col-lg-12">
        <draggable class='list-group' v-model='attributes' :options="sortableOptions">
          <AttributeItem v-for="each in attributes" :item="each" :key="each._id" :remove="removeAttribute" :edit="editAttribute" />
          <li class="px-2 py-4 text-center list-group-item list-group-item-info" @click="addAttribute()" v-if="!attributes.length">
            <i class="fa fa-fw fa-plus mr-2"></i>
            <br>
            Click to add your first Attribute.
          </li>
        </draggable>
      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import draggable from 'vuedraggable'
import AttributeItem from './AttributeItem'
import ArrayInput from '@/components/ArrayInput'

export default {
  props: ['schema'],
  components: {
    draggable,
    AttributeItem,
    ArrayInput
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
    allSchemas () {
      let currentProject = this.$store.getters['project/current']
      // console.log('currentProject??')
      // console.log(currentProject)
      return currentProject.schemas
      // return this.$store.getters['schema/collection']
    },
    selectedAttr () {
      return this.$store.getters['schema/selectedAttribute']
    },
    sortableOptions () {
      return {
        draggable: '.draggable',
        animation: 150,
        fallbackTolerance: 100
      }
    },
    attributes: {
      get () {
        // TODO - this should be moved into Vuex store
        this.schema.attributes = _.orderBy(this.schema.attributes, ['order'], ['asc'])
        return this.schema.attributes
      },
      set (value) {
        _.each(value, (s, i) => { s.order = i })
      }
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
