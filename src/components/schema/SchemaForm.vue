<template>
  <div class="row">
    <div class="col-lg-12">

      <p class="lead mb-0">Schema Properties</p>
      <small class="mb-2 form-text text-muted">Defines the core properties that are used to create a valid schema.</small>

      <hr>

      <div class="row">
        <div class="col-lg-12">

          <FormInput label="Label" placeholder="Label" example="Example: 'Odd Job'" v-model="schemaLabel" required="true" help="The human-readable name for a single entity of this schema." />

        </div>

        <small>TODO - improve the UI below</small>
        <div class="col-lg-12">
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
