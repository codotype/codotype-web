<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- <p class="lead mb-0">Schema Properties</p> -->
      <p class="mb-2 form-text text-muted">Define the core metadata that's used to create a valid schema.</p>

      <div class="row">
        <div class="col-lg-12">

          <!-- <FormInput label="Label" placeholder="Label" example="Example: 'Odd Job'" v-model="schemaLabel" required="true" help="The human-readable name for a single entity of this schema." /> -->
          <FormInput label="Label" placeholder="Label" v-model="schemaLabel" required="true" help="Example: 'Odd Job'" />

        </div>

        <div class="col-lg-12">
          <hr>
        </div>

        <div class="col-lg-12">
          <p class="mb-2 form-text text-muted">Validate the results below before submission</p>

          Label: {{ schema.label }}
          <br>
          Plural Label: {{ schema.label_plural }}
          <br>
          Identifier: {{ schema.identifier }}
          <br>
          Identifier Plural: {{ schema.identifier_plural }}
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput'

export default {
  props: ['schema'],
  components: {
    FormInput
  },
  computed: {
    schemaLabel: {
      get () {
        return this.schema.label
      },
      set (label) {
        this.$store.dispatch('schema/setLabel', { schema: this.schema, label: label })
      }
    }
  }
}
</script>
