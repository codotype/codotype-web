
<template>
  <div class="container">
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
