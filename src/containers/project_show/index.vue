
<template>
  <div class="container">
    <LayoutView :model="model"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'project_show',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Projects - Show'
  },
  props: ['id'],
  mounted () {
    return this.$store.commit('project/select', { _id: this.id })
  },
  computed: {
    model () {
      return this.$store.getters['project/current']
    }
  }
}
</script>
