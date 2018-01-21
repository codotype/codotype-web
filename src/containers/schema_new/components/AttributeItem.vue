
<template>
  <li :class="className">
    <div class="row d-flex align-items-center">

      <div class="col-lg-1 text-left d-flex align-items-center">
        <i class="fa fa-lg fa-fw fa-bars mr-3"></i>
      </div>

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
        <span class="badge" v-if="item.datatype === 'BELONGS_TO'">
          <i class="fa fa-link mr-2"></i>
          {{item.label}}
        </span>

        <!-- HAS_ONE -->
        <span class="badge" v-if="item.datatype === 'HAS_ONE'">
          <i class="fa fa-link mr-2"></i>
          {{item.label}}
        </span>

        <!-- HAS_MANY -->
        <span class="badge" v-if="item.datatype === 'HAS_MANY'">
          <i class="fa fa-link mr-2"></i>
          {{item.label}}
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

        <!-- CURRENCY_USD -->
        <!-- <span class="badge" v-if="item.datatype === 'CURRENCY_USD'"> -->
          <!-- <i class="fa fa-usd mr-2"></i> -->
          <!-- {{item.label}} -->
        <!-- </span> -->

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
        <!-- PREFERRED -->
        <!-- <span class="badge" v-if="item.preferred" v-b-tooltip.hover.top title="Preferred"> -->
          <!-- <i class="fa fa-star-o text-warning"></i> -->
        <!-- </span> -->
      </div>

      <div class="col-lg-3 text-right controls"
      >
        <button class="btn btn-sm btn-outline-secondary" v-b-tooltip.hover.top title="Edit" @click="edit(item)">
          <i class="fa fa-fw fa-pencil"></i>
        </button>

        <button class="btn btn-sm btn-outline-danger" v-b-tooltip.hover.top title="Remove" @click="remove(item)">
          <i class="fa fa-fw fa-trash"></i>
        </button>
      </div>

    </div>
  </li>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['item', 'remove', 'edit'],
  computed: {
    className () {
      let css = ['list-group-item']

      if (this.item.type === 'KEY_DOWN') {
        // css.push('list-group-item-primary')
        css.push('list-group-item-success')
        // css.push('list-group-item-dark')
      } else if (this.item.type === 'KEY_UP') {
        // css.push('list-group-item-success')
        css.push('list-group-item-warning')
        css.push('draggable')
      } else if (this.item.type === 'FINISH') {
        css.push('list-group-item-dark')
      } else {
        css.push('bg-dark text-light')
        css.push('draggable')
      }

      return css.join(' ')
    },
    removable () {
      return true
    }
  }
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
