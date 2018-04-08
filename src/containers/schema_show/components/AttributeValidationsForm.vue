<template>
  <div class="row">

    <div class="col-lg-12">
      <p class="lead mb-0">Advanced Properties</p>
    </div>

    <div class="col-lg-6 col-sm-12">
      <FormInput label="Required" :required="true" v-model="model.required" help="Whether or not this attribute is required." type='BOOL' />
    </div>

    <div class="col-lg-6 col-sm-12">
      <FormInput label="Unique" :required="true" v-model="model.unique" help="Whether or not to enforce unique values for this attribute." type='BOOL' />
    </div>

    <div class="col-sm-12" v-if="model.datatype === 'NUMBER'">
      <FormInput label="Default Value" placeholder="Default Value" v-model="model.datatypeOptions.default" help="The default value for this attribute when none is available." type="NUMBER" />
    </div>

    <div class="col-sm-12" v-if="model.datatype === 'TEXT'">
      <FormInput label="Default Value" placeholder="Default Value" v-model="model.datatypeOptions.default" help="The default value for this attribute when none is available." />
    </div>

  </div>
</template>

<script>
import FormInput from '@/components/FormInput'

export default {
  props: ['model'],
  components: {
    FormInput
  }
}
</script>
