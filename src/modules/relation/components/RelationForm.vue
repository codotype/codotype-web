
<template>
  <div class="row">
    <div class="col-lg-12">

      <!-- TODO - use FormInput in this component? -->
      <div class="row">
        <div class="col-lg-12">
          <p class="lead mb-0">Relation Options</p>
        </div>
      </div>

      <hr>

      <!-- <small class="text-warning">TODO - compute model.label, model.identifier in Vuex store</small> -->
      <!-- TODO - model.label should be RELATED_SCHEMA.label or RELATED_SCHEMA.label_plural -->
      <!-- <input type="text" v-model="model.label"> -->
      <!-- TODO - model.label should be RELATED_SCHEMA.identifier + '_id' or '_ids' -->
      <!-- <input type="text" v-model="model.identifier"> -->

      <div class="row">
        <div class="col-lg-4">
          <div class="form-group">
            <label>This Model</label>
            <small class="form-text text-muted">This Model</small>
            <input type="text" class='form-control' disabled :value="schema.label">
          </div>
        </div>

        <!-- RELATION TYPE -->
        <div class="col-lg-4">
          <div class="form-group">
            <label>Relation Type</label>
            <small class="form-text text-muted">The type of relation to define</small>
            <select class="form-control" v-model="model.type" >
              <option v-for="relation in relationTypes" :value="relation.id">{{relation.text}}</option>
            </select>
          </div>
        </div>

        <!-- RELATED SCHEMA -->
        <div class="col-lg-4">
          <div class="form-group">
            <label>Related Model</label>
            <small class="form-text text-muted">The related Model definition.</small>
            <select class="form-control" v-model="model.related_schema_id" >

              <!-- <option v-if="model.type === 'HAS_ONE'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option> -->
              <template v-if="model.type === 'HAS_MANY'">
                <option v-for="s in allSchemas" :key="s._id" :value="s._id">
                  {{s.label_plural}}
                </option>
              </template>

              <!-- <option v-if="model.type === 'BELONGS_TO'" v-for="s in allSchemas" :key="s._id" :value="s._id">{{s.label}}</option> -->
              <template v-else>
                <option v-for="s in allSchemas" :key="s._id" :value="s._id">
                  {{s.label}}
                </option>
              </template>

            </select>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="form-group">
            <label>Alias</label>
            <small class="form-text text-muted">Alias this relation under a different name.</small>
            <input type="text" class='form-control' v-model="model.as">
          </div>
        </div>

        <!-- Description -->
        <div class="col-lg-12">
          <pre class="bg-dark text-light">{{model}}</pre>
          <small>
            One <span class='text-info'>{{ schema.label }}</span> HAS MANY <span class='text-warning'>TODO</span>
          </small>
          <small class="text-warning">TODO - render description of relationship.</small>
        </div>

      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default {
  props: ['schema', 'model'],
  computed: {
    ...mapGetters({
      relationTypes: 'schema/relationTypes'
    }),
    allSchemas () {
      return _.filter(this.$store.getters['schema/collection'], (s) => { return s._id !== this.schema._id })
    },
    selectedRelatedSchema () {
      _.find(this.allSchemas, { _id: this.model.related_schema_id })
    }
  }
}
</script>
