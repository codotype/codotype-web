
<template>
  <div class="row">

    <div class="col-lg-12">
      <TabHeader title="CSS Framework" />
      <StackSelector type="radio" :options="css_frameworks" v-model="model.stack.client.id" />
    </div>

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
      css_frameworks: [
        { id: 'bootstrap', icon: 'devicon-bootstrap-plain', label: 'Bootstrap', selected: true },
        { id: 'foundation', icon: 'devicon-foundation-plain', label: 'Foundation', disabled: true },
        { id: 'onsen', icon: 'devicon-html5-plain', label: 'Onsen', disabled: true }
      ]
    }
  }
}
</script>
