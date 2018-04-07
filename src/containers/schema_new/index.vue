
<template>
  <!-- <LayoutView :schema="schema"/> -->
  <p class="lead">NEW SCHEMA</p>
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


