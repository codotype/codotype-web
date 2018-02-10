
<template>
  <div class="row">

    <div class="col-lg-12">
      <TabHeader title="Server" />
    </div>

    <div class="col-lg-12">
      <StackSelector type="radio" :options="server_frameworks" v-model="model.stack.server.id" />
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
      server_frameworks: [
        // { id: 'none', icon: 'fa fa-times', label: 'None' },
        { id: 'expressjs', icon: 'devicon-express-original', label: 'Express.JS', selected: true },
        { id: 'flask', icon: 'devicon-python-plain', label: 'Flask', disabled: true },
        { id: 'rails', icon: 'devicon-rails-plain', label: 'Ruby on Rails', disabled: true },
        { id: 'revel', icon: 'devicon-go-plain', label: 'Revel', disabled: true },
        { id: 'phoenix', icon: 'devicon-erlang-plain', label: 'Phoenix', disabled: true }
      ]
    }
  }
}
</script>
