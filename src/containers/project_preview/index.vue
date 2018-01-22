
<template>
  <div class="container-fluid h-100">
    <LayoutView :model="model"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'project_preview',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Projects - Preview'
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
