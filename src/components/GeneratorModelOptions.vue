<template>
  <div>
    <span class='d-flex flex-row align-items-center'>
      <p class="lead mb-0 mr-3">Model Options</p>
      <MoreInfoLink url="https://codotype.github.io" />
    </span>
    <small>Define additional model-specific options for this generator</small>

    <!-- TODO - abstract this block into its own component -->
    <ModelOptionForm v-for="model in schemas" :model="model" :key="model._id" />

  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'
import ModelOptionForm from '@/components/ModelOptionForm'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorModelOptions',
  components: {
    MoreInfoLink,
    ModelOptionForm
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    schemas: 'schema/collection',
    opts: 'generator/generatorFormOpts'
  })
}
</script>
