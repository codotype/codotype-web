
<template>
  	<LayoutView :collection="collection"/>
</template>

<!-- // // // //  -->

<script>

import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: 'application_list',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Applications' // title is now "NAME - Applications"
  },
  computed: {
    collection () {
      return store.getters['application/collection']
    }
  }
}
</script>


