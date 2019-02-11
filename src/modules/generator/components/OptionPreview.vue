<template>
  <span>
    <span class="text-muted">Preview:</span>
    <br>
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
