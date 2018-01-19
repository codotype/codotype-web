
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
export default {
  name: 'application_edit',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Applications - Edit' // title is now "TITLE - Application - Edit"
  },
  props: ['id'],
  created () {
    return this.$store.commit('application/current', { app_id: this.id })
  },
  computed: {
    model () {
      return this.$store.getters['application/current']
    }
  }
}
</script>
