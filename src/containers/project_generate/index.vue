
<template>
  <div class="container align-items-center justify-content-center d-flex">
    <LayoutView :model="model"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'project_generate',
  props: ['id'],
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Projects - Generate'
  },
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
