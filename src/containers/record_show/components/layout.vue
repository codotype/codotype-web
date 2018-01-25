
<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <div class="card card-body bg-dark color-light border-light">

          <div class="row">
            <div class="col-lg-8">
              <h2>
                <i :class="'fa fa-fw ' + schema.display.icon" v-if="schema.display.icon"></i>
                {{schema.label}} Detail
              </h2>
            </div>
            <div class="col-lg-4 text-right">
              <a class="btn btn-outline-warning btn-sm" :href="'#/projects/' + project._id + '/preview/' + schema._id + '/records/' + record._id + '/edit'">
                <i class="fa fa-fw fa-pencil mr-1"></i>
                Edit
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <table class="table table-striped table-hover">
                <tbody>
                  <tr v-for="attr in schema.attributes" :key="attr._id" v-if="attr.datatype !== 'HAS_MANY' && attr.datatype !== 'HAS_ONE'">
                    <td class='text-left'>
                      <strong>
                        {{attr.label}}
                      </strong>
                    </td>
                    <td>
                      <a v-if="attr.datatype === 'BELONGS_TO'" :href="getLinkedSchemaHref(attr, record.attributes[attr.identifier])">
                        {{ getLinkedSchemaLabel(attr, record.attributes[attr.identifier]) }}
                      </a>
                      <span v-else-if="attr.datatype === 'BOOL'">
                        <i class="fa fa-fw fa-check-square-o" v-if="record.attributes[attr.identifier]"></i>
                        <i class="fa fa-fw fa-square-o" v-if="!record.attributes[attr.identifier]"></i>
                      </span>
                      <span v-else>{{record.attributes[attr.identifier]}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row">
      <!-- Relation Viewer -->
      <div :class="'mt-4 col-lg-' + attr.col_span" v-for="attr in schema.attributes" :key="attr._id" v-if="attr.datatype === 'HAS_MANY' || attr.datatype === 'HAS_ONE'">

        <!-- HAS_MANY Relation  -->
        <div class="card card-body bg-dark color-light border-light" v-if="attr.datatype === 'HAS_MANY'">
          <div class="row">
            <div class="col-lg-8">
              <p class="lead mb">
                <i :class="'fa fa-fw ' + relatedSchema(attr).display.icon" v-if="relatedSchema(attr).display.icon"></i>
                {{ relatedSchemaName(attr) }}
              </p>
            </div>
            <div class="col-lg-4 text-right">
              <a class="btn btn-outline-success btn-sm" :href="'#/schemas/' + relatedSchema(attr)._id + '/records/new'">
                <i class="fa fa-fw fa-plus mr-1"></i>
                Add
              </a>
            </div>
          </div>

          <RecordTable :schema="relatedSchema(attr)" :records="getRelatedRecords(attr)" :ignoreAttribute="schema.identifier + '_id'"/>
        </div>

        <!-- HAS_ONE Relation -->
        <div class="card card-body bg-dark color-light border-light" v-if="attr.datatype === 'HAS_ONE'">
          <div class="row">
            <div class="col-lg-8">
              <p class="lead mb">
                <i :class="'fa fa-fw ' + relatedSchema(attr).display.icon" v-if="relatedSchema(attr).display.icon"></i>
                {{ relatedSchemaName(attr) }}
              </p>
            </div>
            <div class="col-lg-4 text-right">

              <button class="btn btn-outline-danger btn-sm" v-b-modal="'modal_' + attr._id" v-if="getRelatedRecords(attr) && editingHasOne !== attr.identifier">
                <i class="fa fa-fw fa-trash mr-1"></i>
                Destroy
              </button>

              <button class="btn btn-outline-warning btn-sm" @click="editingHasOne = attr.identifier" v-if="getRelatedRecords(attr) && editingHasOne !== attr.identifier">
                <i class="fa fa-fw fa-pencil mr-1"></i>
                Edit
              </button>

              <!-- Bootstrap Modal Component -->
              <!-- TODO - move this outside the scope of the loop, and instead pass only the options into a single instance -->
              <b-modal :id="'modal_' + attr._id"
                :title="'Destroy ' + attr.label + '?'"
                @ok="deleteRelated(attr)"
                header-bg-variant="dark"
                header-text-variant="light"
                body-bg-variant="dark"
                body-text-variant="light"
                footer-bg-variant="danger"
                footer-text-variant="light"
                ok-variant='danger'
                ok-title='DESTROY'
                cancel-title='Cancel'
                cancel-variant='dark'
              >
                <p class="text-left">Are you sure you want to destroy this {{ attr.label }}?</p>
              </b-modal>

            </div>
          </div>

          <!-- Displays HAS_ONE record -->
          <RecordTable :schema="relatedSchema(attr)" :records="[getRelatedRecords(attr)]" :disableControls="true" v-if="getRelatedRecords(attr) && editingHasOne !== attr.identifier"/>

          <!-- Edit existing HAS_ONE record -->
          <RecordForm :schema="relatedSchema(attr)" :relatedAttr="attr" :record="getRelatedRecords(attr)" :persistRecord="persistRecord" :cancelForm="cancelForm" v-if="getRelatedRecords(attr) && editingHasOne === attr.identifier"/>

          <!-- New HAS_ONE record -->
          <div class="row" v-if="!getRelatedRecords(attr)">

            <div class="col-lg-12 text-center" v-if="!getRelatedRecords(attr) && editingHasOne !== attr.identifier">
              <p class="lead">
                No {{ relatedSchemaName(attr) }} defined.
              </p>

              <button class="btn btn-outline-success" @click="editingHasOne = attr.identifier">
                <i class="fa fa-fw fa-plus mr-1"></i>
                Add {{ relatedSchemaName(attr) }}
              </button>
            </div>

            <div class="col-lg-12" v-if="!getRelatedRecords(attr) && editingHasOne === attr.identifier">
              <RecordForm :schema="relatedSchema(attr)" :relatedAttr="attr" :record="getNewRelatedRecord(attr)" :persistRecord="persistRecord" :cancelForm="cancelForm"/>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import RecordTable from '@/components/RecordTable'
import RecordForm from '@/containers/record_new/components/record_form'

export default {
  props: ['project', 'schema', 'record'],
  components: {
    RecordTable,
    RecordForm
  },
  data () {
    return {
      editingHasOne: null
    }
  },
  methods: {
    deleteRelated (attr) {
      // Removes the association from the current record
      this.record.attributes[attr.identifier] = null
      this.$store.commit('schema/persist', { schema: this.schema })

      // Deletes the associated record
      let relatedRecord = this.getRelatedRecords(attr)
      this.$store.commit('record/destroy', { record: relatedRecord })
    },
    persistRecord (schema, record, relatedAttr) {
      if (record._id) {
        this.$store.commit('record/persist', { schema: schema, record: record, redirect: false })
      } else {
        this.$store.commit('record/persist', { schema: schema, record: record, redirect: false })
        this.record.attributes[relatedAttr.identifier] = record._id
        this.$store.commit('schema/persist', { schema: this.schema })
      }
      this.editingHasOne = false
    },
    cancelForm () {
      this.editingHasOne = false
    },
    getLinkedSchemaHref (attr, record_id) { // TODO - abstract to component
      let allRecords = this.$store.getters['record/collection']
      let allSchemas = this.project.schemas
      let record = _.find(allRecords, { _id: record_id })
      if (!record) return
      let schema = _.find(allSchemas, { _id: record.schema_id })
      return '#/schemas/' + schema._id + '/records/' + record._id
    },
    getLinkedSchemaLabel (attr, record_id) { // TODO - abstract to component
      let allRecords = this.$store.getters['record/collection']
      let record = _.find(allRecords, { _id: record_id })
      if (!record) return

      let identifier = attr.datatypeOptions.schema_attribute_identifier
      return record.attributes[identifier]
    },
    relatedSchema (attr) { // TODO - this should be moved into a getter
      let allSchemas = this.project.schemas
      let relatedSchema = _.find(allSchemas, { _id: attr.datatypeOptions.schema_id })
      return relatedSchema
    },
    relatedSchemaName (attr) { // TODO - this should be moved into a getter
      let allSchemas = this.project.schemas
      let relatedSchema = _.find(allSchemas, { _id: attr.datatypeOptions.schema_id })
      if (attr.datatype === 'HAS_MANY') {
        return relatedSchema.label_plural
      } else {
        return relatedSchema.label
      }
    },
    getRelatedRecords (attr) { // TODO - this should be moved into a getter
      let allSchemas = this.project.schemas
      let allRecords = this.$store.getters['record/collection']
      let relatedSchema = _.find(allSchemas, { _id: attr.datatypeOptions.schema_id })

      // TODO - handle other attr types
      if (attr.datatype === 'HAS_MANY') {
        let relatedRecords = _.filter(allRecords, (r) => {
          return r.schema_id === relatedSchema._id && r.attributes[`${this.schema.identifier}_id`] === this.record._id
        })
        return relatedRecords
      } else if (attr.datatype === 'HAS_ONE') {
        let relatedRecord = _.find(allRecords, { _id: this.record.attributes[attr.identifier] })
        return relatedRecord
      }
    },
    getNewRelatedRecord (attr) { // TODO - this should be moved into a getter
      let allSchemas = this.project.schemas
      let relatedSchema = _.find(allSchemas, { _id: attr.datatypeOptions.schema_id })
      return { schema_id: relatedSchema._id, _id: null, attributes: {} }
    }
  }
}
</script>


