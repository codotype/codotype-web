
<template>
  <div class="container h-100">
    <LayoutView/>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'

export default {
  name: 'main_about',
  components: {
    LayoutView
  },
  metaInfo: {
    title: 'About'
  }
}
</script>
