<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <p class="lead">Generators</p>
        <hr>
        <GeneratorChild v-for="m in opts.client" :model="m" :key="m.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GeneratorChild from './components/GeneratorChild'

export default {
  components: {
    GeneratorChild
  },
  computed: mapGetters({
    opts: 'generator/generatorFormOpts'
  })
}
</script>
