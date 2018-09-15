<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- <p class="lead mb-0">Schema Properties</p> -->
      <p class="mb-2 form-text text-muted">Define the core metadata that's used to create a valid model.</p>

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

          <table class="table table-sm">
            <tbody>
              <tr>
                <td>Label</td>
                <td>{{ schema.label || '...' }}</td>
              </tr>
              <tr>
                <td>Label Plural</td>
                <td>{{ schema.label_plural || '...' }}</td>
              </tr>
              <tr>
                <td>Identifier</td>
                <td>{{ schema.identifier || '...' }}</td>
              </tr>
              <tr>
                <td>Identifier Plural</td>
                <td>{{ schema.identifier_plural || '...' }}</td>
              </tr>
              <tr>
                <td>Class Name</td>
                <td>{{ schema.class_name || '...' }}</td>
              </tr>
              <tr>
                <td>Class Name Plural</td>
                <td>{{ schema.class_name_plural || '...' }}</td>
              </tr>
            </tbody>
          </table>
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
        console.log('getter: ', this.schema.label)
        return this.schema.label
      },
      set (label) {
        console.log('SET SET')
        console.log(label)
        this.$store.dispatch('schema/setLabel', { schema: this.schema, label: label })
      }
    }
  }
}
</script>
