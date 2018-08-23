<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-between align-items-center">
        <h2>Generators</h2>
        <span>
          <HelpButton :tour="tourSteps" />
          <a class="btn btn-outline-primary btn-lg" id='new-generator-button' href="#/generators/new">
            <i class="fa fa-fw fa-plus"></i>
            Add Generator
          </a>
        </span>
      </div>
      <div class="col-lg-12">
        <hr>
      </div>
      <div class="col-lg-12" >
        <GeneratorListItem v-for="m in opts.client" :model="m" :key="m.id"/>
      </div>
      <div class="col-lg-12 my-4">
        <div class="card py-4 border-dark">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center bg-transparent border-dark text-dark">
              <i class="fa fa-lg fa-info-circle"></i>
              <p class="mb-0 mt-2">
                Looking for something we don't support?
                <br>
                Take a look at our roadmap or vote for upcoming features
                <!-- Open an issue or leave feedback here -->
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GeneratorListItem from '@/modules/generator/components/GeneratorListItem'
import HelpButton from '@/components/HelpButton'

export default {
  components: {
    GeneratorListItem,
    HelpButton
  },
  computed: mapGetters({
    opts: 'generator/generatorFormOpts',
    tourSteps: 'tour/generatorListSteps'
  })
}
</script>
