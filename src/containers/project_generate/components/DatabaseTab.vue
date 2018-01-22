
<template>
  <div class="row mt-4">

    <div class="col-lg-12">
      <TabHeader title="Database" />
    </div>

    <div class="col-lg-12">
      <StackSelector type="radio" :options="databases" v-model="model.stack.client.id" />
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
      databases: [
        { id: 'mongo', icon: 'devicon-mongodb-plain', label: 'MongoDB', selected: true },
        { id: 'postgres', icon: 'devicon-postgresql-plain', label: 'PostgreSQL', disabled: true }
        // { id: 'sqlite', icon: 'devicon-mysql-plain', label: 'SQLite', disabled: true }
      ]
    }
  }
}
</script>
