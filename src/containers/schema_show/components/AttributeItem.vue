
<template>
  <li class="list-group-item bg-dark text-light">
    <div class="row d-flex align-items-center">

      <div class="col-lg-1 text-left d-flex align-items-center">
        <i class="fa fa-lg fa-fw fa-bars mr-3"></i>
      </div>

      <!-- TODO - get rid of hardcoded icons -->
      <div class="col-lg-5">

        <!-- TEXT -->
        <span class="badge" v-if="item.datatype === 'TEXT'">
          <i class="fa fa-quote-left mr-2"></i>
          {{item.label}}
        </span>

        <!-- TEXT_SELECT -->
        <span class="badge" v-if="item.datatype === 'TEXT_SELECT'">
          <i class="fa fa-list mr-2"></i>
          {{item.label}}
        </span>

        <!-- NUMBER -->
        <span class="badge" v-if="item.datatype === 'NUMBER'">
          <i class="fa fa-hashtag mr-2"></i>
          {{item.label}}
        </span>

        <!-- NUMBER_SELECT -->
        <span class="badge" v-if="item.datatype === 'NUMBER_SELECT'">
          <i class="fa fa-list-ol mr-2"></i>
          {{item.label}}
        </span>

        <!-- BELONGS_TO -->
        <span class="badge" v-if="item.datatypeOptions.relationType === 'BELONGS_TO'">
          <i class="fa fa-link mr-2"></i>
          {{item.label}}
          <span class="badge badge-light ml-2">Belongs To</span>
        </span>

        <!-- HAS_ONE -->
        <span class="badge" v-if="item.datatypeOptions.relationType === 'HAS_ONE'">
          <i class="fa fa-link mr-2"></i>
          {{item.label}}
        </span>

        <!-- HAS_MANY -->
        <span class="badge" v-if="item.datatypeOptions.relationType === 'HAS_MANY'">
          <i class="fa fa-link mr-2"></i>
          {{item.label}}
          <span class="badge badge-light ml-2">Has Many</span>
        </span>

        <!-- DATE -->
        <span class="badge" v-if="item.datatype === 'DATE'">
          <i class="fa fa-calendar-o mr-2"></i>
          {{item.label}}
        </span>

        <!-- COLOR -->
        <span class="badge" v-if="item.datatype === 'COLOR'">
          <i class="fa fa-eyedropper mr-2"></i>
          {{item.label}}
        </span>

        <!-- TIME -->
        <span class="badge" v-if="item.datatype === 'TIME'">
          <i class="fa fa-clock-o mr-2"></i>
          {{item.label}}
        </span>

        <!-- PHONE_NUMBER -->
        <span class="badge" v-if="item.datatype === 'PHONE_NUMBER'">
          <i class="fa fa-phone mr-2"></i>
          {{item.label}}
        </span>

        <!-- BOOL -->
        <span class="badge" v-if="item.datatype === 'BOOL'">
          <i class="fa fa-check-square-o mr-2"></i>
          {{item.label}}
        </span>

      </div>

      <div class="col-lg-3">
        <!-- REQUIRED -->
        <span class="badge" v-if="item.required" v-b-tooltip.hover.top title="Required">
          <i class="fa fa-asterisk text-danger"></i>
        </span>
        <!-- UNIQUE -->
        <span class="badge" v-if="item.unique" v-b-tooltip.hover.top title="Unique">
          <i class="fa fa-snowflake-o text-info"></i>
        </span>
      </div>

      <div class="col-lg-3 text-right controls" v-if="item.locked">
        <button class="btn btn-sm btn-outline-secondary" disabled="true">
          <i class="fa fa-fw fa-lock mr-2"></i>
          Locked
        </button>
      </div>

      <div class="col-lg-3 text-right controls" v-else>

        <button class="btn btn-sm btn-outline-secondary" :disabled="item.locked" v-b-tooltip.hover.top title="Edit" @click="edit(item)">
          <i class="fa fa-fw fa-pencil"></i>
        </button>

        <button class="btn btn-sm btn-outline-danger" :disabled="item.locked" v-b-tooltip.hover.top v-b-modal="'modal_' + item._id" title="Remove">
          <i class="fa fa-fw fa-trash"></i>
        </button>

        <!-- Bootstrap Modal Component -->
        <b-modal :id="'modal_' + item._id"
          :title="'Remove Attribute'"
          @ok="remove(item)"
          header-bg-variant='dark'
          header-text-variant='light'
          body-bg-variant='dark'
          body-text-variant='light'
          footer-bg-variant='danger'
          footer-text-variant='light'
          ok-variant='danger'
          ok-title='DESTROY'
          cancel-title='Cancel'
          cancel-variant='dark'
        >
          <p class="text-left">Are you sure you want to destroy the {{ item.label }} attribute?</p>
        </b-modal>
      </div>

    </div>
  </li>
</template>

<!-- // // // //  -->
<script>
import { mapActions } from 'vuex'

export default {
  props: ['item', 'edit'],
  methods: mapActions({
    remove: 'attribute/destroy'
  })
}
</script>

<style lang='sass' scoped>

  .list-group-item
    border-left: .25rem solid #666666

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
