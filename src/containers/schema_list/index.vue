
<template>
  <LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Schemas' // title is now "blazeplate.io - Schemas"
  },
  computed: {
    collection () {
      return this.$store.getters['schema/collection']
    }
  }
}
</script>


