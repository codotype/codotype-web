<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-between align-items-center">
        <h2>Generators</h2>
        <span>
          <HelpButton :tour="tourSteps" />
          <a class="btn btn-outline-primary btn-lg" id='new-generator-button' href="#/generator_new">
            <i class="fa fa-fw fa-plus"></i>
            Add Generator
          </a>
        </span>
      </div>
      <div class="col-lg-12">
        <hr>
      </div>
      <div class="col-lg-12" >
        <GeneratorChild v-for="m in opts.client" :model="m" :key="m.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GeneratorChild from './components/GeneratorChild'
import HelpButton from '@/components/HelpButton'

export default {
  components: {
    GeneratorChild,
    HelpButton
  },
  computed: mapGetters({
    opts: 'generator/generatorFormOpts',
    tourSteps: 'tour/generatorListSteps'
  })
}
</script>
