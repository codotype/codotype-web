<template>
  <b-row>
    <b-col lg=12>
      <h2>Generator Show</h2>
      <hr>
      <GeneratorReadme :model="model" />
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GeneratorReadme from '@/modules/generator/components/GeneratorReadme'

export default {
  name: 'GeneratorShow',
  props: ['id'],
  components: {
    GeneratorReadme
  },
  created () {
    this.selectModel(this.id)
  },
  methods: mapActions({
    selectModel: 'generator/selectModel'
  }),
  computed: mapGetters({
    model: 'generator/selectedModel'
  })
}
</script>
