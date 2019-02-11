<template>
  <img class="generator-icon" :src="model.icon.value" v-if="model.icon && model.icon.type === 'ICON_TYPE_URL'">
  <i :class="'fa-2x ' + model.icon.value" v-else-if="model.icon && model.icon.type === 'ICON_TYPE_FONT_AWESOME'"></i>
</template>

<script>
export default {
  name: 'OptionFormItemIcon',
  props: ['model']
}
</script>
