<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select a generator"
        help="Select a generator with which to build your codebase"
      />
      <hr>

      <b-card-group deck>
        <GeneratorListItem
          v-for="m in generators"
          :model="m"
          :key="m.id"
          :selectMethod="selectGenerator"
          v-if="m.id"
        />

        <div class="card card-body text-center" v-if="!generators[0]">
          <p class="lead mb-0">No Generators available</p>
          <small class="text-muted my-2">You may be using all available generators in your current build</small>

          <div class="row d-flex justify-content-center mt-2">
            <div class="col-lg-4">
              <b-button variant="success" size="lg" @click="$store.commit('build/choosingGenerator', false)">
                <i class="fa fa-reply mr-1"></i>
                Back to Build Configuration
              </b-button>
            </div>
          </div>

        </div>

      </b-card-group>

    </b-col>
  </b-row>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import GeneratorListItem from '@/modules/generator/components/GeneratorCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    EditorHeader,
    GeneratorListItem
  },
  created () {
    this.$store.commit('build/choosingGenerator', true)
  },
  computed: {
    ...mapGetters({
      newBuildModel: 'build/newModel',
      generatorCollection: 'generator/collection'
    }),
    generators () {
      let generatorIds = this.newBuildModel.stages.map(s => s.generator_id)
      return this.generatorCollection.filter((g) => {
        return !generatorIds.includes(g.id)
      })
    }
  },
  methods: mapActions({
    selectGenerator: 'build/addNewStage'
  })
}
</script>
