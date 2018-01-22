
<template>
  <div class="row">

    <div class="col-lg-12">
      <TabHeader title="Client Framework" />
      <StackSelector type="radio" :options="client_frameworks" v-model="model.stack.client.id" />
    </div>

    <!-- <div class="col-lg-12 mt-3"> -->
      <!-- <TabHeader title="Build Tool" /> -->
      <!-- <StackSelector type="radio" :options="build_tools" v-model="model.stack.client.id" /> -->
    <!-- </div> -->

    <!-- <div class="col-lg-12 mt-3"> -->
      <!-- <TabHeader title="CSS Framework" /> -->
      <!-- <StackSelector type="radio" :options="css_frameworks" v-model="model.stack.client.id" /> -->
    <!-- </div> -->

  </div>
</template>

<!-- // // // //  -->

<script>
import TabHeader from '@/components/TabHeader'
import StackSelector from '@/components/StackSelector'

export default {
  props: ['model'],
  components: {
    TabHeader,
    StackSelector
  },
  data () {
    return {
      client_frameworks: [
        // { id: 'none', icon: 'fa fa-times', label: 'None' },
        { id: 'vuejs', icon: 'devicon-vuejs-plain', label: 'Vue.js', selected: true },
        { id: 'react', icon: 'devicon-react-plain', label: 'React', disabled: true }
      ],
      build_tools: [
        { id: 'webpack', icon: 'devicon-webpack-plain', label: 'Webpack', selected: true },
        { id: 'gulp', icon: 'devicon-gulp-plain', label: 'Gulp + Browserify', disabled: true }
      ],
      css_frameworks: [
        { id: 'bootstrap', icon: 'devicon-bootstrap-plain', label: 'Bootstrap', selected: true },
        { id: 'foundation', icon: 'devicon-foundation-plain', label: 'Foundation', disabled: true }
      ]
    }
  }
}
</script>
