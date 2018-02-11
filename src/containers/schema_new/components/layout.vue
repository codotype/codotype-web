
<template>
  <!-- <div class="container-fluid"> -->
    <!-- <h2 v-if="!schema._id">New Schema</h2> -->
    <!-- <h2 v-if="schema._id">Edit Schema</h2> -->
    <!-- <hr> -->
  <!-- </div> -->
  <div class="row">
    <div class="col-lg-12">
      <b-tabs pills vertical>

        <!-- Project Detail -->
        <!-- <b-tab title="Project" active> -->
          <!-- <ProjectDetail :model="model" /> -->
        <!-- </b-tab> -->

        <!-- Schema Frameworks -->
        <b-tab title="Properties" :disabled="ifSelectedAttribute">
          <div class="mt-4 bg-dark text-light">

            <!-- Schema Form -->
            <div class="row">
              <div class="col-lg-12">

                <p class="lead mb-0">Schema Properties</p>
                <small class="mb-2 form-text text-muted">Defines the core properties that are used to create a valid schema.</small>

                <hr>

                <div class="row">
                  <div class="col-lg-6">

                    <FormInput label="Label" placeholder="Label" example="Example: 'Odd Job'" v-model="schemaLabel" required="true" help="The human-readable name for a single entity of this schema." />

                  </div>
                  <div class="col-lg-6">
                    <FormInput label="Plural Label" placeholder="Plural Label" example="Example: 'Odd Jobs'" v-model="schema.label_plural" required="true" help="The plural version of the Label attribute." />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-6">

                    <FormInput label="Identifier" placeholder="Identifier" example="Example: 'odd_job'" v-model="schema.identifier" required="true" help="The lowercase-only version of the identifier with spaces instead of underscores." />

                  </div>

                  <div class="col-lg-6">
                    <FormInput label="Plural Identifier" placeholder="Plural Identifier" example="Example: 'odd_jobs'" v-model="schema.identifier_plural" required="true" help="The plural version Identifier attribute." />
                  </div>

                  <!-- <div class="col-lg-12"> -->
                    <!-- <FormInput label="Unique ID Prefix" placeholder="Unique ID Prefix" example="Example: 'OJ_'" v-model="schema.unqiue_id_prefix" required="true" help="A prefix used when generating unique IDs for this schema." /> -->
                  <!-- </div> -->

                </div>

                <!-- unqiue_id_prefix -->

                <!-- <div class="row"> -->
                  <!-- <div class="col-lg-6"> -->

                    <!-- <FormInput label="Icon" placeholder="Icon" example="Example: 'fa-globe'" v-model="schema.display.icon" help="The name of a FontAwesome icon element." /> -->

                  <!-- </div> -->
                  <!-- <div class="col-lg-6"> -->

                    <!-- <FormInput label="Navbar Link" type="BOOL" v-model="schema.display.navbar_link" help="Whether or not the schema has a header link." /> -->

                  <!-- </div> -->
                <!-- </div> -->



              </div>
            </div>

            <!-- <hr> -->
            <!-- <div class="row mt-2"> -->
              <!-- <div class="col-lg-12"> -->
                <!-- <button class="btn btn-outline-success btn-block" @click="onSubmit()"> -->
                  <!-- <i class="fa fa-fw mr-1 fa-check"></i> -->
                  <!-- Submit -->
                <!-- </button> -->
              <!-- </div> -->
            <!-- </div> -->

          </div>
        </b-tab>

        <b-tab title="Attributes" :disabled="ifSelectedAttribute">
          <AttributeForm :schema="schema"/>
        </b-tab>

        <!-- <b-tab title="Relations"></b-tab> -->
        <!-- <b-tab title="Validations"></b-tab> -->
        <!-- <b-tab title="Permissions"></b-tab> -->
        <!-- <b-tab title="Seed Data"></b-tab> -->
        <!-- <b-tab title="Test Data"></b-tab> -->

      </b-tabs>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import router from '@/routers'
import AttributeForm from './AttributeForm'
import FormInput from '@/components/FormInput'

export default {
  props: ['schema'],
  components: {
    AttributeForm,
    FormInput
  },
  beforeMount () {
    this.$store.commit('schema/clearSelectedAttribute')
  },
  methods: {
    onSubmit () {
      if (this.schema.label && this.schema.identifier && this.schema.label_plural) {
        this.$store.commit('schema/persist', { schema: this.schema })
        router.go(-1)
      }
    },
    clearSelected () {
      this.$store.commit('schema/clearSelectedAttribute')
    }
  },
  computed: {
    schemaLabel: {
      get () {
        return this.schema.label
      },
      set (value) {
        this.$store.commit('schema/onLabelChange', value)
      }
    },
    selectedAttr () {
      return this.$store.getters['schema/selectedAttribute']
    },
    ifSelectedAttribute () {
      return !!this.$store.getters['schema/selectedAttribute']
    }
  }
}
</script>

<style lang="sass">
  .form-group
    label
      margin-bottom: 0
    small
      margin-bottom: .6rem
</style>
