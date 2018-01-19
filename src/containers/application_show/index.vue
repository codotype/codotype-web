
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'application_show',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Applications - Show'
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
