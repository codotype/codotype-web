
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

      </b-tabs>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import router from '@/routers'
// import AttributeForm from './AttributeForm'
import FormInput from '@/components/FormInput'

export default {
  props: ['schema'],
  components: {
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
