
<template>
  <div class="row">

     <div class="col-lg-12">
      <draggable class='list-group' v-model='attributes' :options="sortableOptions" v-if="attributes.length">
        <AttributeItem v-for="each in attributes" :item="each" :key="each._id" />
      </draggable>

      <!-- Empty Attribute view -->
      <li class="card card-body text-center bg-dark border-warning text-warning" v-else>
        <!-- <i class="fa fa-fw fa-plus"></i> -->
        TODO - Click to add your first Attribute
      </li>

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
  components: {
    draggable,
    AttributeItem
  },
  computed: {
    ...mapGetters({
      schema: 'schema/selectedModel'
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
