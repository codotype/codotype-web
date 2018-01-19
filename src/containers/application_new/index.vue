
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'application_new',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Application - New' // title is now "TITLE - Application - New"
  },
  data () {
    return {
      model: {}
    }
  }
}
</script>
