
<template>
  <div class="container h-100">
    <LayoutView :model="model"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'project_new',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'Project - New' // title is now "TITLE - Project - New"
  },
  data () {
    return {
      model: {}
    }
  }
}
</script>
