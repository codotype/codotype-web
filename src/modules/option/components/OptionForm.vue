<template>
  <div class="row">
    <div class="col-lg-12">

      <p class="mb-2 form-text text-muted">Define the core metadata that's used to create a valid option.</p>

      <div class="row">
        <div class="col-lg-12">

          <FormInput label="Label" placeholder="Label" v-model="model.label" required="true" help="Example: 'Odd Job'" />

          <FormInput label="Identifier" placeholder="Identifier" v-model="model.identifier" required="true" help="Example: 'odd_job'" />

          <FormInput label="Help" placeholder="Help" v-model="model.help" required="true" help="Example: 'odd_job'" />

          <FormInput label="More Info URL" placeholder="More Info URL" v-model="model.more_info_url" help="A link to more information about this option" />

          <FormInput label="Required" placeholder="Required" v-model="model.required" help="Whether or not a value for this option is required" />

          <FormInput label="type" placeholder="type" v-model="model.type" help="The datatype of this option" />

          <!-- default_value: true, -->
          <!-- datatypeOptions: {} -->

        </div>

      </div>

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
