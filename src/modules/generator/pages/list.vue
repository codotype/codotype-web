<template>
  <div class="row mt-3 mb-5">

    <div class="col-lg-12 d-flex justify-content-between align-items-center">
      <h2>Generators</h2>
      <span>
        <TourButton tour="generatorListSteps" />
        <!-- <a class="btn btn-outline-primary btn-lg" id='new-generator-button' href="#/generators/new"> -->
          <!-- <i class="fa fa-fw fa-plus"></i> -->
          <!-- Add Generator -->
        <!-- </a> -->
      </span>
    </div>

    <div class="col-lg-12">
      <hr>
    </div>

    <b-col>

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

        <b-col lg=12>

          <transition-group name="generator-list" tag='div'>
            <GeneratorListItem
              v-for="m in generators"
              :model="m"
              :key="m.id"
              v-if="m.id"
            />
          </transition-group>

          <div class="card py-4 my-4 border-dark bg-transparent">
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

        </b-col>
      </b-row>

    </b-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GeneratorListItem from '@/modules/generator/components/GeneratorListItem'
import TourButton from '@codotype/ui/src/components/TourButton'

export default {
  components: {
    GeneratorListItem,
    TourButton
  },
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    ...mapGetters({
      generatorCollection: 'generator/collection'
    }),
    generators () {
      // Filters all generators and returns the result
      return this.generatorCollection.filter((g) => {
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
