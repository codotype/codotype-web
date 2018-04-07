
<template>
  	<LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>

import LayoutView from './components/layout.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'project_list',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Projects' // title is now "NAME - Projects"
  },
  mounted () {
    this.fetch()
  },
  computed: mapGetters({
    collection: 'project/collection'
  }),
  methods: mapActions({
    fetch: 'project/fetchCollection'
  })
}
</script>


