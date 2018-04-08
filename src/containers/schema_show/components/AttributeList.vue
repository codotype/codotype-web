
<template>
  <div class="row">

    <!-- Bootstrap Modal Component -->
    <b-modal :id="'edit_attribute'"
      :title="'Edit Attribute'"
      ref='editModal'
      @ok="update()"
      header-bg-variant='dark'
      header-text-variant='light'
      body-bg-variant='dark'
      body-text-variant='light'
      footer-bg-variant='primary'
      footer-text-variant='light'
      ok-variant='primary'
      ok-title='Update'
      cancel-title='Cancel'
      cancel-variant='dark'
    >
      <AttributeForm :schema="schema" :model="editAttribute" />
    </b-modal>

     <div class="col-lg-12">
      <draggable class='list-group' v-model='attributes' :options="sortableOptions" v-if="attributes.length">
        <AttributeItem v-for="each in attributes" :item="each" :key="each._id" :edit="selectEditAttribute" />
      </draggable>

      <!-- Empty Attribute view -->
      <li class="card card-body text-center bg-dark border-warning text-warning" v-else>
        <i class="fa fa-lg fa-exclamation"></i>
        <!-- TODO - Click to add your first Attribute -->
        <p class="lead mb-0 mt-2">
        Please create at least one attribute
        </p>
      </li>

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
