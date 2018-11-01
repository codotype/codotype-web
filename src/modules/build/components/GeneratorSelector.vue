<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select a generator"
        help="Select a generator with which to build your codebase"
      />
      <hr>

      <b-row>
        <b-col lg=12>
          <input type="text" class="form-control form-control-lg mb-2" placeholder="Filter Generators">
        </b-col>
      </b-row>

      <b-row>

        <!-- <b-col lg=3 class='pr-0'> -->
          <!-- <div class="card card-body border-light shadow-sm"> -->
            <!-- <h4>Filters</h4> -->
            <!-- <input type="text" class="form-control" placeholder="Filter Generators"> -->
            <!-- <input type="text" class="form-control form-control-sm mb-2" placeholder="Label"> -->
            <!-- <input type="text" class="form-control form-control-sm mb-2" placeholder="Type"> -->
            <!-- <input type="text" class="form-control form-control-sm mb-2" placeholder="Tech"> -->
          <!-- </div> -->
        <!-- </b-col> -->

        <b-col lg=12>

          <transition-group name="generator-list" tag='div'>
            <GeneratorListItem
              v-for="m in generators"
              :model="m"
              :key="m.id"
              :selectMethod="selectGenerator"
              v-if="m.id"
            />
          </transition-group>

          <div class="card card-body text-center" v-if="!generators[0]">
            <p class="lead mb-0">No Generators available</p>
            <small class="text-muted my-2">You may be using all available generators in your current build</small>
          </div>

        </b-col>
      </b-row>

    </b-col>
  </b-row>
</template>

<script>
import EditorHeader from '@/components/EditorHeader'
import GeneratorListItem from '@/modules/generator/components/GeneratorListItem'
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

<style type="text/css">

  .generator-list-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }

  .generator-list-enter, .generator-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .generator-list-leave-active {
    position: absolute;
  }

</style>
