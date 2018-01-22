
<template>
  <div class="container h-100">
    <div class="row">
      <div class="col-lg-6">
        <h2>Project Schemas</h2>
      </div>
      <div class="col-lg-6 text-right">
        <button class="btn btn-outline-success" v-if="!selectedSchema" @click="addNewSchema()">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New Schema
        </button>
      </div>
      <div class="col-lg-12">
        <hr>
      </div>
    </div>

    <SchemaList :collection="model.schemas" v-if="!selectedSchema" />

    <div class="row mt-4" v-if="!selectedSchema">
      <div class="col-lg-12">

      </div>
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
  computed: {
    model () {
      return this.$store.getters['project/current']
    },
    selectedSchema () {
      return this.$store.getters['schema/selectedSchema']
    }
  },
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
