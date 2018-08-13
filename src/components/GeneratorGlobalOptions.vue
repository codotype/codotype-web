<template>
  <div>
    <p class="lead">Global Options</p>
    <li class="list-group-item" v-for="attr in opts.client[1].global_options">
      <label>{{attr.label}}</label>
      <br>
      <small>{{attr.help}}</small>
      <input class='form-control' type="checkbox" name="" v-if="attr.type === 'BOOLEAN'">
      <MoreInfoLink :url="attr.more_info_url" />
      <!-- {{attr}} -->
    </li>
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
