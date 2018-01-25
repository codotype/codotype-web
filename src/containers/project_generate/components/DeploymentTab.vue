
<template>
  <div class="row">

    <div class="col-lg-12">
      <TabHeader :title="title" />
    </div>

    <div class="col-lg-12">
      <StackSelector type="radio" :options="deployments" v-model="model.stack.client.id" />
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
      title: 'Deployment',
      deployments: [
        { id: 'docker_compose', icon: 'devicon-docker-plain', label: 'Docker', selected: true },
        // { id: 'ansible', icon: 'devicon-amazonwebservices-plain', label: 'Ansible', disabled: true },
        // { id: 'digital_ocean', icon: 'devicon-amazonwebservices-plain', label: 'DigitalOcean', disabled: true },
        { id: 'heroku', icon: 'devicon-heroku-plain', label: 'Heroku', disabled: true },
        { id: 'azure', icon: 'devicon-windows8-plain', label: 'Microsoft Azure', disabled: true },
        { id: 'aws', icon: 'devicon-amazonwebservices-plain', label: 'AWS', disabled: true }
      ]
    }
  }
}
</script>
