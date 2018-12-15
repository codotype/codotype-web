<template>
  <span class="badge" v-if="item.datatype !== 'RELATION'">
    <i :class="'mr-2 ' + icon" v-b-tooltip.hover.left :title='tooltip'></i>
    {{item.label}}
    <span class='text-danger' v-if="item.required">*</span>
  </span>
</template>

<script>
// TODO - icon and tooltip should be encapsulated in the attribute data
// TODO - attribute data should be abstracted into codotype-util
// TODO - perhaps distribute a @codotype/meta package?
export default {
  props: ['item'],
  name: 'AttributeLabel',
  computed: {
    icon () {
      switch (this.item.datatype) {
        case 'TEXT':
          return 'fa fa-quote-left'
        case 'STRING_ARRAY':
          return 'fa fa-quote-left'
        case 'NUMBER':
          return 'fa fa-hashtag'
        case 'BOOL':
          return 'far fa-check-square'
        case 'DATE':
          return 'far fa-calendar'
        case 'TIME':
          return 'far fa-clock'
        case 'DATETIME':
          return 'far fa-calendar-plus'
      }
    },
    tooltip () {
      switch (this.item.datatype) {
        case 'TEXT':
          return 'Text'
        case 'STRING_ARRAY':
          return 'String Array'
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
