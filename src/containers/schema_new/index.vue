
<template>
  <LayoutView :schema="schema"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Schemas - New' // title is now "blazeplate.io - Schemas - New"
  },
  data () {
    let schema = this.$store.getters['schema/new']
    return { schema }
  }
}
</script>


