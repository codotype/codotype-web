
<template>
    <Breadcrumbs :collection="collection"/>
</template>

<!-- // // // //  -->

<script>
import Breadcrumbs from './components/Breadcrumbs'

// TODO - integrate Vuex Store
export default {
  components: {
    Breadcrumbs
  },
  computed: {
    collection () {
      return [
        { text: 'Home', href: '#/' },
        { text: 'Projects', href: '#/projects' },
        { text: 'Project Name' }
      ]
    }
  }
}
</script>


