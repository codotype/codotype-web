
<template>
  <div class="container-fluid">
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
    title: 'Projects - Generate'
  },
  props: ['id'],
  mounted () {
    // store.dispatch('project/fetchCollection')
    return this.$store.commit('project/select', { _id: this.id })
  },
  computed: {
    model () {
      return this.$store.getters['project/current']
    }
  }
}
</script>
