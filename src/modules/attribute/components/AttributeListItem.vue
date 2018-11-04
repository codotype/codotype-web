<template>
  <li class="list-group-item">
    <div class="row d-flex align-items-center">

      <!-- Handle for re-ordering attributes -->
      <div class="col-lg-1 text-left d-flex align-items-center">
        <!-- <i class="fa fa-lg fa-fw fa-bars mr-3" v-if="!item.locked"></i> -->
        <i class="fa fa-lg fa-fw fa-bars mr-3" style='cursor: grab;' v-if="!item.locked"></i>
        <i class="fa fa-fw text-primary fa-eye mr-3" v-if="item.order === 0"  v-b-tooltip.hover.left title='Leading attribute'></i>
      </div>

      <!-- TODO - get rid of hardcoded icons -->
      <div class="col-lg-5">

        <AttributeLabel :item="item"/>

        <!-- BELONGS_TO -->
        <span class="badge" v-if="item.datatypeOptions.relationType === 'BELONGS_TO'">
          <i class="fa fa-link mr-2" v-b-tooltip.hover.left title='Relation'></i>
          {{item.label}}
          <span class="badge badge-light ml-2">Belongs To</span>
          <span class="badge badge-light ml-2">many {{ schema.label_plural }} to one {{ item.label }}</span>
        </span>

        <!-- HAS_MANY -->
        <span class="badge" v-if="item.datatypeOptions.relationType === 'HAS_MANY'">
          <i class="fa fa-link mr-2" v-b-tooltip.hover.left title='Relation'></i>
          {{item.label}}
          <span class="badge badge-light ml-2">Has Many</span>
        </span>

        <!-- OWNS_MANY -->
        <span class="badge" v-if="item.datatypeOptions.relationType === 'OWNS_MANY'">
          <i class="fa fa-link mr-2" v-b-tooltip.hover.left title='Relation'></i>
          {{item.label}}
          <span class="badge badge-light ml-2">one {{ schema.label }} to many {{ item.label }}</span>
        </span>

        <!-- JSON -->
        <span class="badge" v-if="item.datatype === 'JSON'">
          <i class="fa fa-code mr-2" v-b-tooltip.hover.left title='JSON'></i>
          {{ item.label }}
        </span>

      </div>

      <div class="col-lg-3">
        <!-- REQUIRED -->
        <!-- <span class="badge" v-if="item.required" v-b-tooltip.hover.top title="Required"> -->
          <!-- <i class="fa fa-asterisk text-danger"></i> -->
        <!-- </span> -->
        <span class="badge badge-light" v-if="item.unique" v-b-tooltip.hover.top title="Unique">
          <i class="fas fa-snowflake text-dark"></i>
          Unique
        </span>
      </div>

      <div class="col-lg-3 text-right controls" v-if="item.locked && item.datatype !== 'RELATION'">
        <b-badge
          variant="secondary"
          size="sm"
          v-b-tooltip.hover.left
          title="Locked attributes may not be edited or removed - they are required for correct baseline functionality."
        >
          <i class="fa fa-fw fa-lock"></i>
          Locked
        </b-badge>
      </div>

      <div class="col-lg-3 text-right controls" v-else>

        <button class="btn btn-sm btn-outline-secondary" v-if="item.locked" :disabled="item.locked">
          <i class="fa fa-fw fa-lock"></i>
          Locked
        </button>

        <button class="btn btn-sm btn-outline-secondary" v-else v-b-tooltip.hover.top title="Edit" @click="edit(item)">
          <i class="fas fa-fw fa-pencil-alt"></i>
        </button>

        <button class="btn btn-sm btn-outline-danger" v-b-tooltip.hover.top title="Remove" @click="confirmRemoval(item)">
          <i class="fa fa-fw fa-trash"></i>
        </button>

      </div>

    </div>
  </li>
</template>

<!-- // // // //  -->
<script>
import AttributeLabel from '@/modules/attribute/components/AttributeLabel'
import { mapActions } from 'vuex'

export default {
  props: ['item', 'schema', 'edit'],
  components: {
    AttributeLabel
  },
  methods: mapActions({
    confirmRemoval: 'attribute/confirmRemoval'
  })
}
</script>

<!-- TODO - move some of this into AttributeLabel component -->
<style lang='sass' scoped>
  .list-group-item
    // border-left: .25rem solid #666666

  .list-group-item:hover i.fa-bars
    opacity: 1

  .list-group-item:hover .controls
    opacity: 1

  i.fa-bars
    transition: opacity .25s ease-in
    opacity: 0

  .badge
    font-weight: 300
    padding: .3rem .3rem

    &.bordered
      border: 1px solid

  .controls
    transition: opacity .25s ease-in
    opacity: 0

</style>
