
<template>
  <div class="row">
    <div class="col-lg-6">
      <p class="lead mb-0">Attributes</p>
    </div>

    <!-- Attribute Editor Controls -->
    <div class="col-lg-6 text-right">
      <div class="btn-group mt-3" v-if="!selectedAttr && attributes.length">
        <button class="btn btn-primary w-100" @click="addAttribute()">
          <i class="fa fa-fw fa-plus mr-2"></i>
          Add Attribute
        </button>
      </div>
    </div>

    <div class="col-lg-12">
      <small class="mb-2 form-text text-muted">Defines the attributes that can be assigned to an entity of this schema.</small>
      <hr>
    </div>

     <div class="col-lg-12">
      <draggable class='list-group' v-model='attributes' :options="sortableOptions">
        <AttributeItem v-for="each in attributes" :item="each" :key="each._id" :remove="removeAttribute" :edit="editAttribute" />

        <!-- TODO - abstract into EmptyView -->
        <li class="px-2 py-4 text-center list-group-item list-group-item-info" @click="addAttribute()" v-if="!attributes.length">
          <i class="fa fa-fw fa-plus mr-2"></i>
          <br>
          Click to add your first Attribute.
        </li>
        <!-- END TODO -->

      </draggable>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'
import AttributeItem from './AttributeItem'

export default {
  props: ['schema'],
  components: {
    draggable,
    AttributeItem
  },
  methods: {
    addAttribute () {
      this.$store.commit('schema/addAttribute', { schema: this.schema })
    },
    removeAttribute (attr) {
      this.$store.commit('schema/removeAttribute', { schema: this.schema, attr: attr })
    },
    editAttribute (attr) {
      this.$store.commit('schema/selectAttribute', { attr })
    },
    clearSelected () {
      this.$store.commit('schema/clearSelectedAttribute')
    }
  },
  computed: {
    ...mapGetters({
      selectedAttr: 'schema/selectedAttribute'
    }),
    sortableOptions () {
      return {
        draggable: '.draggable',
        animation: 150,
        fallbackTolerance: 100
      }
    },
    attributes: {
      get () {
        // TODO - this should be moved into Vuex store
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
