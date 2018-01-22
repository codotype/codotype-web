
<template>
  <div class="container h-100">
    <LayoutView :model="model"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'project_show',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Projects - Show'
  },
  props: ['id'],
  created () {
    // store.dispatch('project/fetchCollection')
    store.commit('project/current', { id: this.id })
  },
  computed: {
    model () {
      return store.getters['project/current']
    }
  }
}
</script>
