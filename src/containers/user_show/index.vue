
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Users - Show' // title is now "RCOS - Loading..."
  },
  props: ['id'],
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      return this.$store.dispatch('user/fetchModel', this.id)
    }
  },
  computed: {
    model () {
      return this.$store.getters['user/current']
    }
  }
}
</script>


