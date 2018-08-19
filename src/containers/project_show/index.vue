<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <router-view/>
      </div>
    </div>
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
    model: 'project/selectedModel',
    generatorActivated: 'generator/activated'
  })
}
</script>
