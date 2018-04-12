<template>
  <div class="row mt-2">

    <div class="col-lg-12">
      <p class="lead mb-0">Attribute Properties</p>
    </div>

    <div class="col-lg-6 col-sm-12">
      <FormInput label="Label" :required="true" placeholder="Label" v-model="model.label" required="true" example=">Example: 'Last Name'" help="The human-readable name for this attribute." />
    </div>

    <div class="col-lg-6 col-sm-12">
      <FormInput label="Field Name" :required="true" placeholder="Field Name" v-model="model.identifier" required="true" example="Example: 'last_name'" help="Lowercase, no spaces." />
    </div>

    <!-- TODO - keep this? -->
    <!-- <div class="form-group"> -->
      <!-- <label>Preferred Display Attribute</label> -->
      <!-- <small class="form-text text-muted">This attribute will be the user-facing label when entities belonging to this schema are referenced in a relation.</small> -->
      <!-- <input type="checkbox" class="form-control" v-model="model.preferred" > -->
    <!-- </div> -->

  </div>
</template>

<script>
import _ from 'lodash'
import FormInput from '@/components/FormInput'

export default {
  props: ['model'],
  components: {
    FormInput
  },
  computed: {
    datatypeLabel () {
      let datatypes = this.$store.getters['schema/datatypes']
      let datatype = _.find(datatypes, { value: this.model.datatype })
      return datatype.text
    }
  }
}
</script>
