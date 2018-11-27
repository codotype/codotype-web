<template>
  <div>
    <EditorHeader
      title="Global Options"
      help="Configure global options for this generator"
      url="https://codotype.github.io"
    />

    <div class="card card-body mt-2" v-for="attr in selectedGenerator.global_options">
      <OptionFormItem :model="attr" v-model="configurationObject[attr.identifier]"/>
    </div>

    <div class="card card-body text-center bg-transparent border-warning text-warning" v-if="!selectedGenerator.global_options[0]">
      <p class="lead mb-0">No global options exposed by this generator</p>
    </div>
  </div>
</template>

<script>
import OptionFormItem from '@/modules/option/components/OptionFormItem'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorGlobalOptions',
  components: {
    OptionFormItem
  },
  computed: {
    ...mapGetters({
      newBuildModel: 'build/newModel',
      selectedGenerator: 'generator/selectedModel'
    }),
    configurationObject () {
      const stage = this.newBuildModel.stages.find(s => s.generator_id === this.selectedGenerator.id)
      return stage.configuration.options
    }
  }
}
</script>
