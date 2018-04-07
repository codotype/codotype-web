<!-- NOTE - this was taken from 'project_schemas' -->
<template>
  <div class="container h-100">

    <!-- TODO - abstract into PageHeader component? -->
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-8">
        <h2>Models</h2>
      </div>
      <div class="col-xs-12 col-md-6 col-lg-4 text-sm-right">
        <button class="btn btn-outline-success btn-block" v-if="!selectedSchema" @click="addNewSchema()">
          <i class="fa fa-fw fa-plus mr-2"></i>
          Add Model
        </button>
      </div>
    </div>

    <!-- TODO - integrate User Card (above) into this component -->
    <SchemaList :collection="model.schemas" v-if="!selectedSchema" />

    <!-- TODO - what is this here for? -->
    <div class="row mt-4" v-if="!selectedSchema">
      <div class="col-lg-12"></div>
    </div>


    <div class="row">
      <div class="col-lg-6" v-if="selectedSchema">
        <p class="lead">Edit {{selectedSchema.label}} Schema</p>
      </div>
      <div class="col-lg-6 text-right" v-if="selectedSchema">
        <button class="btn btn-outline-light" @click='onCancel'>
          <i class="fa fa-fw fa-times mr-2"></i>
          Cancel
        </button>
        <button class="btn btn-outline-success" @click='onSubmit'>
          <i class="fa fa-fw fa-check-circle-o mr-2"></i>
          Save Changes
        </button>
      </div>
      <div class="col-lg-12" v-if="selectedSchema">
        <hr>
        <SchemaForm :schema="selectedSchema" />
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import SchemaList from '@/containers/schema_list/components/layout'
import SchemaForm from '@/containers/schema_new/components/layout'
import { mapGetters } from 'vuex'
export default {
  name: 'project_edit',
  props: ['id'],
  components: {
    SchemaList,
    SchemaForm
  },
  metaInfo: {
    title: 'Project - Edit'
  },
  created () {
    this.$store.commit('schema/clearSelectedSchema')
  },
  mounted () {
    return this.$store.commit('project/select', { _id: this.id })
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    selectedSchema: 'schema/selectedSchema' // TODO - use selectedModel mixins in schema
  }),
  methods: {
    onCancel () {
      return this.$store.commit('schema/clearSelectedSchema', { _id: this.id })
    },
    onSubmit () {
      return this.$store.commit('schema/persistSelected', { project: this.$store.getters['project/current'] })
    },
    addNewSchema () {
      let schema = this.$store.getters['schema/new']
      return this.$store.commit('schema/editSchema', { schema })
    }
  }
}
</script>
