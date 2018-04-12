
<template>
  <table class="table table-striped table-hover">
    <thead>

      <!-- TODO - reintegrate relations & ignore attributes -->
      <th v-for="attr in schema.attributes" :key="attr._id" v-if="attr.datatype !=='RELATION'">
        {{attr.label}}
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom :title="attr.help" ></i>
      </th>

      <!-- (this is here for Edit / Destroy controls) -->
      <th></th>

    </thead>
    <tbody>

      <!-- Create one table row for each Record -->
      <tr v-for="record in records" :key="record._id">

        <!-- Record Data -->
        <td v-for="attr in schema.attributes" :key="attr._id" v-if="attr.datatype !== 'RELATION'">

          <span v-if="attr.datatype === 'BOOL'">
            <i class="fa fa-fw fa-check-square-o" v-if="record.attributes[attr.identifier]"></i>
            <i class="fa fa-fw fa-square-o" v-if="!record.attributes[attr.identifier]"></i>
          </span>

          <span v-else-if="attr.datatype === 'COLOR'">
            <i class="fa fa-fw fa-lg fa-square" :style="'color:' + record.attributes[attr.identifier]"></i>
          </span>

          <span v-else>
            {{ record.attributes[attr.identifier] || attr.datatypeOptions.default }}
          </span>
        </td>

        <!-- Record Controls -->
        <td class='text-right controls'>

          <!-- Show Record -->
          <a class="btn btn-sm btn-outline-light" :href=" '#/projects/' + projectId + '/seeds/' + schema._id + '/records/' + record._id ">
            <i class="fa fa-fw fa-eye"></i>
          </a>

          <!-- Edit Record -->
          <a class="btn btn-sm btn-outline-warning" :href=" '#/projects/' + projectId + '/seeds/' + schema._id + '/records/' + record._id + '/edit' ">
            <i class="fa fa-fw fa-pencil"></i>
          </a>

          <!-- Destroy Record Confirmation -->
          <button class="btn btn-sm btn-outline-danger">
            <i class="fa fa-fw fa-trash"></i>
          </button>

        </td>

      </tr>

      <!-- Empty View -->
      <!-- Displays link to `New Record` form -->
      <tr v-if="!records.length">
        <td v-for="attr, i in schema.attributes">
          <span v-if="i === 0">
            <span class="text-warning mr-2">No records found.</span>
            <span class="">Click</span>
            <a :href=" '#/projects/' + projectId + '/seeds/' + schema._id + '/new' "> here </a>
            to create {{ schema.label_plural.toLowerCase() }}.
          </span>
        </td>
        <td></td>
      </tr>

    </tbody>
  </table>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'

export default {
  props: ['projectId', 'schema'],
  methods: {
    onConfirmDestroy (record) {
      return this.$store.commit('record/destroy', { record })
    },
    getLinkedSchemaHref (attr, record_id) {
      let allRecords = this.$store.getters['record/collection']
      let allSchemas = this.$store.getters['schema/collection']
      let record = _.find(allRecords, { _id: record_id })
      if (!record) return
      let schema = _.find(allSchemas, { _id: record.schema_id })
      return '#/schemas/' + schema._id + '/records/' + record._id
    },
    getRelatedSchema (attr) {
      let allSchemas = this.$store.getters['schema/collection']
      let schema = _.find(allSchemas, { _id: attr.datatypeOptions.schema_id })
      return schema
    },
    getLinkedSchemaLabel (attr, record_id) {
      let allRecords = this.$store.getters['record/collection']
      let record = _.find(allRecords, { _id: record_id })
      if (!record) return

      let identifier = attr.datatypeOptions.schema_attribute_identifier
      return record.attributes[identifier]
    }
  },
  computed: {
    // TODO - move this into a getter, if possible
    records () {
      let records = this.$store.getters['record/collection']
      return records.filter((r) => { return r.schema_id === this.schema._id })
    }
  }
}
</script>

<style lang="sass">
  table.table
    tr
      td.controls
        opacity: 0
        transition: opacity 0.3s ease-in-out

      &:hover
        td.controls
          opacity: 1
</style>

