<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select a generator"
        help="Select a generator with which to build your codebase"
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
