
<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- <small class="form-text text-muted">Define the core parameters that are used to create a valid Attribute.</small> -->

      <!-- Step 1 - Select Datatype -->
      <DatatypeSelector v-model="model.datatype" />

      <hr>

      <!-- Step 2 - Datatype Properties -->
      <AttributePropertiesForm :model="model" v-if="model.datatype !== 'RELATION'"/>

      <!-- Step 3 - Datatype Validations -->
      <AttributeValidationsForm :model="model" v-if="model.datatype !== 'RELATION'"/>

      <!-- Step 2 - Relation Form -->
      <!-- TODO - put it here -->
      <RelationForm :schema="schema" :model="model" v-if="model.datatype === 'RELATION'" />

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ArrayInput from '@/components/ArrayInput'
import DatatypeSelector from './DatatypeSelector'
import AttributePropertiesForm from './AttributePropertiesForm'
import AttributeValidationsForm from './AttributeValidationsForm'
import RelationForm from './RelationForm'

export default {
  props: ['schema', 'model'],
  components: {
    ArrayInput,
    DatatypeSelector,
    AttributePropertiesForm,
    AttributeValidationsForm,
    RelationForm
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
