<template>
  <b-row>
    <b-col>
      <EditorHeader
        title="Select your generators"
        help="Generators produce code for different purposes using different languages and frameworks"
      />
      <hr>

      <b-row class='mb-2'>
        <b-col lg=9>
          <input type="text" class="form-control form-control-lg mb-2" placeholder="Filter Generators" v-model='filter'>
        </b-col>

        <b-col lg=3 class='pl-0'>
          <b-button
            block
            size='lg'
            variant="outline-warning"
            @click="clearFilter()"
          >
            <i class="fa fa-times"></i>
            Clear Filter
          </b-button>
        </b-col>

      </b-row>

      <b-row>

        <!-- TODO - implement filters later - search sufficient for the time being -->
        <!-- <b-col lg=3 class='pr-0'> -->
          <!-- <FilterList/> -->
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
import FilterList from '@/modules/generator/components/FilterList'
import GeneratorListItem from '@/modules/generator/components/GeneratorListItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    FilterList,
    GeneratorListItem
  },
  data () {
    return {
      filter: ''
    }
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
      const generatorIds = this.newBuildModel.stages.map(s => s.generator_id)

      // Filters all generators and returns the result
      return this.generatorCollection.filter((g) => {
        // Automatically exclude selected generators
        if (generatorIds.includes(g.id)) return false

        // Filters available generators based on this.filter data
        if (!this.filter) return true

        // Assembles query string for local filtering
        const queryString = [
          g.tech_tags.join(' '),
          g.type_tags.join(' '),
          g.label,
          g.description
        ].join(' ').toLowerCase()

        // Filters based on queryString and filter
        return queryString.includes(this.filter.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions({
      selectGenerator: 'build/addNewStage'
    }),
    clearFilter () {
      this.filter = ''
    }
  }
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
