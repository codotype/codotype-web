
<template>
  	<LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'application_list',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Applications' // title is now "NAME - Applications"
  },
  computed: {
    collection () {
      return this.$store.getters['application/collection']
    }
  }
}
</script>


