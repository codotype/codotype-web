<template>
  <div>
    <span class='d-flex flex-row align-items-center'>
      <p class="lead mb-0 mr-3">Global Options</p>
      <MoreInfoLink url="https://codotype.github.io" />
    </span>
    <small>Configure global options for this generator</small>

    <div class="card card-body" v-for="attr in opts.client[3].global_options">
      <OptionFormItem :model="attr" />
    </div>
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'
import OptionFormItem from '@/modules/option/components/OptionFormItem'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorGlobalOptions',
  components: {
    MoreInfoLink,
    OptionFormItem
  },
  computed: mapGetters({
    opts: 'generator/generatorFormOpts'
  })
}
</script>
