<template>
  <div class="row">
    <div class="col-lg-12">

      <p class="mb-3 form-text text-muted">
        <i class="fa fa-info-circle"></i>
        Define the core metadata that's used to create a valid option.
      </p>

      <!-- Step 1 - Define Option label / identifier -->
      <b-row v-if="!model.label || !model.identifier">
        <b-col lg="6">
          <FormInput label="Label" placeholder="Label" v-model="model.label" required="true" help="Example: 'Odd Job'" />
        </b-col>

        <b-col lg="6">
          <FormInput label="Identifier" placeholder="Identifier" v-model="model.identifier" required="true" help="Example: 'odd_job'" />
        </b-col>
        <b-col lg="12">
          <FormInput label="Help" placeholder="Help" v-model="model.help" required="true" help="Example: 'odd_job'" />
          <FormInput label="More Info URL" placeholder="More Info URL" v-model="model.more_info_url" help="A link to more information about this option" />
        </b-col>
      </b-row>

      <!-- Step 1 - Select Option datatype -->
      <OptionTypeSelector v-model='model.type' v-if="!model.type"/>

      <!-- Step 3 - Datatype Options -->
      <b-row v-if="model.type && model.identifier && model.label ">
        <b-col lg="12">



          <!-- Validations -->
          <FormInput label="Required" placeholder="Required" v-model="model.required" help="Whether or not a value for this option is required" type="BOOL"/>

          <!-- TODO - add the following: -->
          <!-- default_value: true, -->
          <!-- datatypeOptions: {} -->

        </b-col>
      </b-row>

      <!-- <b-row v-if="model.type"> -->
        <!-- </b-col> -->
          <!-- <p class="lead">MEH</p> -->
        <!-- </b-col> -->
      <!-- </b-row> -->

    </div>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput'
import OptionTypeSelector from './OptionTypeSelector'

export default {
  props: ['model'],
  components: {
    FormInput,
    OptionTypeSelector
  }
}
</script>
