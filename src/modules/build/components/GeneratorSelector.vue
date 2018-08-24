<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select a generator"
        help="Configure a build using a single App and multiple generators"
      />
      <hr>
      <GeneratorListItem v-for="m in generatorCollection" :model="m" :key="m.id" :selectMethod="selectGenerator" />
    </b-col>
  </b-row>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import GeneratorListItem from '@/modules/generator/components/GeneratorListItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    EditorHeader,
    GeneratorListItem
  },
  computed: mapGetters({
    generatorCollection: 'generator/collection'
  }),
  methods: mapActions({
    selectGenerator: 'build/addNewStage'
  })
}
</script>
