
<template>
  <div class="container-fluid">
    <h2>Project</h2>
    <hr>

    <a :href="'#/projects/' + project_id">META</a>
    <a :href="'#/projects/' + project_id + '/schemas'">SCHEMAS</a>
    <a :href="'#/projects/' + project_id + '/generate'">GENERATE</a>

    <hr>

    <router-view/>

    <!-- <b-tabs pills vertical> -->

      <!-- <b-tab title="Project"> -->
        <!-- <LayoutView :model="model"/> -->
      <!-- </b-tab> -->

      <!-- <b-tab title="Content Types"> -->
        <!-- <SchemaList :collection="model.schemas" :schema="model"/> -->
        <!-- <SchemaEditor/> -->
      <!-- </b-tab> -->

    <!-- </b-tabs> -->

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'project_show',
  props: ['project_id'],
  metaInfo: {
    title: 'Projects - Show'
  },
  created () {
    return this.selectModel(this.project_id)
  },
  methods: mapActions({
    selectModel: 'project/selectModel'
  }),
  computed: mapGetters({
    model: 'project/selectedModel'
  })
}
</script>
