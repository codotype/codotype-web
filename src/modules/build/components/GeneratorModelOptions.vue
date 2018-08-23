<template>
  <div>

    <EditorHeader
      title="Model Options"
      help="Configure model-specific options for this generator"
      url="https://codotype.github.io"
    />
    <ModelOptionForm v-for="model in schemas" :model="model" :key="model._id" />

  </div>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import ModelOptionForm from './ModelOptionForm'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorModelOptions',
  components: {
    EditorHeader,
    ModelOptionForm
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    schemas: 'schema/collection',
    generatorCollection: 'generator/collection'
  })
}
</script>
