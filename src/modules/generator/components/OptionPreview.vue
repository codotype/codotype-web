<template>
<!--     <OptionFormItem
      v-for="attr in group.attributes"
      :model="attr"
      :schema="selectedSchema"
      v-model="newAddon[attr.identifier]"
    />
  </b-modal> -->
  <span>
    <!-- <pre>{{schema}}</pre>
    <pre>{{model}}</pre>
    <pre>{{template}}</pre> -->
    <v-runtime-template :template="template"></v-runtime-template>
  </span>
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template'

export default {
  props: {
    model: { required: true },
    schema: { required: true },
    template: { required: true }
  },
  components: {
    VRuntimeTemplate
  }
}
</script>
