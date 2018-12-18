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
import { DATATYPES } from '@/modules/schema/store/constants'

export default {
  props: ['item'],
  name: 'AttributeLabel',
  computed: {
    icon () {
      return DATATYPES.find((v) => v.value === this.item.datatype).icon
    },
    tooltip () {
      return DATATYPES.find((v) => v.value === this.item.datatype).text
    }
  }
}
</script>
