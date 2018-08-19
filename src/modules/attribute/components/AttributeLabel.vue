<template>
  <span class="badge" v-if="item.datatype !== 'RELATION'">
    <i :class="'mr-2 fa ' + icon" v-b-tooltip.hover.left :title='tooltip'></i>
    {{item.label}}
    <span class='text-danger' v-if="item.required">*</span>
  </span>
</template>

<script>
export default {
  props: ['item'],
  name: 'AttributeLabel',
  computed: {
    icon () {
      switch (this.item.datatype) {
        case 'TEXT':
          return 'fa-quote-left'
        case 'NUMBER':
          return 'fa-hashtag'
        case 'BOOL':
          return 'fa-check-square-o'
        case 'DATE':
          return 'fa-calendar-o'
        case 'TIME':
          return 'fa-clock-o'
        case 'DATETIME':
          return 'fa-calendar-plus-o'
      }
    },
    tooltip () {
      switch (this.item.datatype) {
        case 'TEXT':
          return 'Text'
        case 'NUMBER':
          return 'Number'
        case 'BOOL':
          return 'Boolean'
        case 'DATE':
          return 'Date'
        case 'TIME':
          return 'Time'
        case 'DATETIME':
          return 'Datetime'
      }
    }
  }
}
</script>
