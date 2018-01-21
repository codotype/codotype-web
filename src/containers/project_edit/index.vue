<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'project_edit',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Projects - Edit' // title is now "TITLE - Project - Edit"
  },
  props: ['id'],
  created () {
    store.commit('project/current', { id: this.id })
  },
  computed: {
    model () {
      return store.getters['project/current']
    }
  }
}
</script>
