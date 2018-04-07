
<template>
  <div class="container-fluid">
    <h2>Project</h2>
    <hr>
    <b-tabs pills vertical>

      <b-tab title="Project">
        <LayoutView :model="model"/>
      </b-tab>

      <b-tab title="Content Types">
        <SchemaList :collection="model.schemas" :schema="model"/>
      </b-tab>

    </b-tabs>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import SchemaList from '@/containers/schema_list/components/layout'

export default {
  name: 'project_show',
  components: {
    LayoutView,
    SchemaList
  },
  metaInfo: {
    title: 'Projects - Show'
  },
  props: ['id'],
  mounted () {
    return this.$store.commit('project/select', { _id: this.id })
  },
  computed: {
    model () {
      return this.$store.getters['project/current']
    }
  }
}
</script>
