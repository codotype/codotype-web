
<template>
  <div class="row mt-4">

    <div class="col-lg-12">
      <TabHeader title="Authentication" />
    </div>

    <div class="col-lg-12">
      <StackSelector type="radio" :options="auth_methods" v-model="model.stack.client.id" />
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
      auth_methods: [
        { id: 'none', icon: 'fa fa-times', label: 'None', disabled: true },
        { id: 'email', icon: 'fa fa-envelope-o', label: 'E-Mail', selected: true },
        { id: 'google', icon: 'devicon-google-plain', label: 'Google', disabled: true },
        { id: 'facebook', icon: 'devicon-facebook-plain', label: 'Facebook', disabled: true },
        { id: 'github', icon: 'devicon-github-plain', label: 'GitHub', disabled: true }
      ]
    }
  }
}
</script>
