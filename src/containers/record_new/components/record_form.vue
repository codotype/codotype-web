
<template>
<div class="row">
  <div v-for="attr in schema.attributes" :key="attr._id" :class="getColspanCss(attr)" v-if="attr.datatype !== 'HAS_MANY' && attr.datatype !== 'HAS_ONE'">
    <div class="form-group">
      <label>
        {{ attr.label }}
        <span class='text-danger' v-if="attr.required">*</span>
      </label>
      <small class="form-text text-danger" v-if="errors[attr.identifier]">{{errors[attr.identifier]}}</small>
      <small class="form-text text-muted" v-else>{{attr.help}}</small>

      <!-- TEXT -->
      <input type="text" class="form-control" :placeholder="attr.label" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'TEXT'">

      <!-- DATE -->
      <input type="date" class="form-control" :placeholder="attr.label" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'DATE'">

      <!-- TIME -->
      <input type="time" class="form-control" :placeholder="attr.label" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'TIME'">

      <!-- BOOL -->
      <input type="checkbox" class="form-control" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'BOOL'">

      <!-- NUMBER -->
      <input type="number" class="form-control" :placeholder="attr.label" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'NUMBER'">

      <!-- COLOR -->
      <input type="color" class="form-control" :placeholder="attr.label" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'COLOR'">

      <!-- PHONE_NUMBER -->
      <masked-input type="tel" class="form-control" :placeholder="attr.label" v-model="record.attributes[attr.identifier]" mask="\+\1 (111) 111-1111" v-if="attr.datatype === 'PHONE_NUMBER'"/>

      <!-- BELONGS_TO (OLD) -->
      <select class="form-control" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'BELONGS_TO'">
        <option v-for="rec in schemaDropdown(attr.datatypeOptions.schema_id)" :key="rec._id" :value="rec._id">{{ rec.attributes[attr.datatypeOptions.schema_attribute_identifier] }}</option>
      </select>

      <!-- BELONGS TO (SELECT2) -->
      <!-- TODO - this is pending the following fix: -->
      <!-- https://github.com/sagalbot/vue-select/issues/122 -->
      <!-- <v-select class="bg-light text-dark" v-model="record.attributes[attr.identifier]" :options="schemaDropdownVselect(attr.datatypeOptions.schema_id, attr.datatypeOptions.schema_attribute_identifier)" v-if="attr.datatype === 'BELONGS_TO'" /> -->

      <!-- TEXT_SELECT & NUMBER_SELECT (OLD) -->
      <!-- <select class="form-control" v-model="record.attributes[attr.identifier]" v-if="attr.datatype === 'TEXT_SELECT' || attr.datatype === 'NUMBER_SELECT'"> -->
        <!-- <option v-for="opt in attr.datatypeOptions.dropdownOptions" :key="opt" :value="opt">{{ opt }}</option> -->
      <!-- </select> -->

      <!-- TEXT_SELECT & NUMBER_SELECT (SELECT2) -->
      <v-select class="bg-light text-dark" v-model="record.attributes[attr.identifier]" :options="attr.datatypeOptions.dropdownOptions" v-if="attr.datatype === 'TEXT_SELECT' || attr.datatype === 'NUMBER_SELECT'" />

    </div>
  </div>

  <div class="col-lg-12 text-right">
    <button class="btn btn-outline-light mr-2" @click="cancelForm">
      <i class="fa fa-fw fa-times mr-1"></i>
      Cancel
    </button>

    <button class="btn btn-outline-success" @click="validateAttributes()" v-if="record._id">
      <i class="fa fa-fw fa-plus mr-1"></i>
      Update {{ schema.label }}
    </button>

    <button class="btn btn-outline-success" @click="validateAttributes()" v-if="!record._id">
      <i class="fa fa-fw fa-plus mr-1"></i>
      Create {{ schema.label }}
    </button>

  </div>
</div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
// TODO - fix masked input errors
// import MaskedInput from 'vue-masked-input'
// import vSelect from 'vue-select'

export default {
  props: ['project', 'schema', 'record', 'relatedAttr', 'persistRecord', 'cancelForm'],
  components: {
    // MaskedInput,
    // vSelect
  },
  data () {
    let errors = {}

    _.each(this.schema.attributes, (attr) => {
      errors[attr.identifier] = null
    })

    return { errors }
  },
  methods: {
    // TODO - most of validateAttributes should be moved into Vuex store
    validateAttributes () {
      let submit = true
      _.each(this.schema.attributes, (attr) => {
        if (attr.required && !this.record.attributes[attr.identifier]) {
          submit = false
          this.errors[attr.identifier] = `${attr.label} is required.`
        } else {
          this.errors[attr.identifier] = null
        }
      })

      // Persists the record if validations pass
      if (submit) {
        this.persistRecord(this.schema, this.record, this.relatedAttr)
      }
    },
    getColspanCss (attr) {
      if (!attr.col_span) {
        return 'col-lg-12'
      } else {
        return `col-lg-${attr.col_span}`
      }
    },
    schemaDropdown (schema_id) {
      let allRecords = this.$store.getters['record/collection']
      let dropdownRecords = _.filter(allRecords, (r) => { return r.schema_id === schema_id })
      return dropdownRecords
    },
    // NOTE - this function is currently unused
    schemaDropdownVselect (schema_id, label_identifier) {
      let allRecords = this.$store.getters['record/collection']
      let dropdownRecords = _.filter(allRecords, (r) => { return r.schema_id === schema_id })

      // Builds { value: 'user_123b3asd...', label: 'Username' } for Select2 dropdown
      return _.map(dropdownRecords, (r) => {
        return { value: r._id, label: r.attributes[label_identifier] }
      })
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

  // Select2 Styles
  .v-select
    border-radius: $border-radius
    ul.dropdown-menu
      border-radius: $border-radius
      li
        color: #000 !important

</style>


