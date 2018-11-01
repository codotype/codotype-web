
<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- Step 1 - Select Datatype -->
      <DatatypeSelector v-model="model.datatype" v-if="formStep" />

      <template v-else>
        <b-tabs lazy pills>
          <b-tab title="Properties" active>
            <AttributePropertiesForm :model="model" />
          </b-tab>
          <b-tab title="Validations" >
            <AttributeValidationsForm :model="model" />
          </b-tab>
        </b-tabs>

      </template>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import DatatypeSelector from './DatatypeSelector'
import AttributePropertiesForm from './AttributePropertiesForm'
import AttributeValidationsForm from './AttributeValidationsForm'

export default {
  props: ['schema', 'model'],
  components: {
    DatatypeSelector,
    AttributePropertiesForm,
    AttributeValidationsForm
  },
  computed: {
    formStep () {
      return !this.model.datatype
    }
  }
}
</script>

<!-- TODO - abstract elsewhere, or scope to this component -->
<style lang="sass">
  @import '../../../sass/vendor.sass'

  .form-group
    label
      margin-bottom: 0
    small
      margin-bottom: .6rem
</style>
