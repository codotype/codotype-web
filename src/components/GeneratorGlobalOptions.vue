<template>
  <div>
    <span class='d-flex flex-row align-items-center'>
      <p class="lead mb-0 mr-3">Global Options</p>
      <MoreInfoLink url="https://codotype.github.io" />
    </span>
    <small>Define additional global options for this generator</small>

    <div class="card card-body" v-for="attr in opts.client[1].global_options">
      <label>{{attr.label}}</label>
      <br>
      <small>{{attr.help}}</small>
      <input class='form-control' type="checkbox" name="" v-if="attr.type === 'BOOLEAN'">
      <MoreInfoLink :url="attr.more_info_url" />
      <!-- {{attr}} -->
    </div>
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorGlobalOptions',
  components: {
    MoreInfoLink
  },
  computed: mapGetters({
    opts: 'generator/generatorFormOpts'
  })
}
</script>
