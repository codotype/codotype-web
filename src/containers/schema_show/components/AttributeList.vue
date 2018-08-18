
<template>
  <div class="row">

    <!-- Bootstrap Modal Component -->
    <b-modal :id="'edit_attribute'"
      size="lg"
      :title="'Edit Attribute'"
      ref='editModal'
      @ok="updateAttr()"
      ok-title='Update'
      cancel-title='Cancel'
    >
      <AttributeForm :schema="schema" :model="editAttribute" />
    </b-modal>

     <div class="col-lg-12">
      <div class="card" id='attribute-detail'>
        <div class="card-header d-flex justify-content-between align-items-center">
          <strong style='font-weight: 600;'>Attributes</strong>
          <button class="btn btn-primary" id="add-attribute-button">
            <i class="fa fa-plus"></i>
            Add Attribute
          </button>
        </div>
        <draggable class='list-group list-group-flush' v-model='attributes' :options="sortableOptions" v-if="attributes.length">
          <AttributeItem v-for="each in attributes" :item="each" v-if="each.datatype !== 'RELATION'" :key="each._id" :schema="schema" :edit="selectEditAttribute" />
        </draggable>
        <!-- Empty Attribute view -->
        <li class="card card-body text-center bg-transparent border-warning text-warning" v-else>
          <i class="fa fa-lg fa-warning"></i>
          <!-- TODO - Click to add your first Attribute -->
          <p class="lead mb-0 mt-2">
          Please create at least one attribute
          </p>
        </li>
      </div>
      <div class="card" id='relation-detail'>
        <div class="card-header d-flex justify-content-between align-items-center">
          <!-- <p class='lead mb-0'>Relations</p> -->
          <strong style='font-weight: 600;'>Relations</strong>
          <button class="btn btn-primary" id="add-relation-button">
            <i class="fa fa-plus"></i>
            Add Relation
          </button>
        </div>
        <draggable class='list-group list-group-flush' v-model='attributes' :options="sortableOptions" v-if="attributes.length">
          <AttributeItem v-for="each in attributes" :item="each" v-if="each.datatype === 'RELATION'" :key="each._id" :schema="schema" :edit="selectEditAttribute" />
        </draggable>
        <!-- <ul class="list-group list-group-flush"> -->
          <!-- <li class="list-group-item list-group-item-info text-center"> -->
            <!-- <i class="fa fa-lg fa-warning"></i> -->
            <!-- TODO - Click to add your first Attribute -->
            <!-- <a href="#">Define relations</a> to stitch your models together -->
          <!-- </li> -->
        <!-- </ul> -->

      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import draggable from 'vuedraggable'
import AttributeItem from './AttributeItem'
import AttributeForm from './AttributeForm'

export default {
  components: {
    draggable,
    AttributeItem,
    AttributeForm
  },
  methods: {
    ...mapActions({
      updateAttr: 'attribute/update',
      selectEditAttr: 'attribute/selectEditModel'
    }),
    selectEditAttribute (attr) {
      this.selectEditAttr(attr)
      this.$refs.editModal.show()
    }
  },
  computed: {
    ...mapGetters({
      schema: 'schema/selectedModel',
      editAttribute: 'attribute/editModel'
    }),
    sortableOptions () {
      return {
        animation: 150,
        fallbackTolerance: 100
      }
    },
    // TODO - this should be moved into Vuex store, but how?
    attributes: {
      get () {
        this.schema.attributes = _.orderBy(this.schema.attributes, ['order'], ['asc'])
        return this.schema.attributes
      },
      set (value) {
        _.each(value, (s, i) => { s.order = i })
      }
    }
  }
}
</script>
