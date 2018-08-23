<template>
  <div>
    <EditorHeader
      title="Global Options"
      help="Configure global options for this generator"
      url="https://codotype.github.io"
    />

    <div class="card card-body" v-for="attr in generatorCollection[3].global_options">
      <OptionFormItem :model="attr" />
    </div>
  </div>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import OptionFormItem from '@/modules/option/components/OptionFormItem'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorGlobalOptions',
  components: {
    EditorHeader,
    OptionFormItem
  },
  computed: mapGetters({
    generatorCollection: 'generator/collection'
  })
}
</script>
