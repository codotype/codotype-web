<template>
  <div class="card border-light shadow">

    <!-- TODO - abstract card-header into separate component -->
    <div class="card-header d-flex justify-content-between align-items-center">
      <p class="mb-0">Type</p>
      <!-- <button class="btn btn-sm btn-link" @click="showType = !showType"> -->
        <!-- <i class="fa fa-chevron-down" v-if="showType"></i> -->
        <!-- <i class="fa fa-chevron-up" v-else></i> -->
      <!-- </button> -->
    </div>

    <ul class="list-group list-group-flush" v-if="showType">
      <FilterItem :tag="tag" v-for="tag in typeTags" :key="tag.label" />
    </ul>

    <!-- <div class="card-header d-flex justify-content-between align-items-center"> -->
      <!-- <p class="mb-0">Tech</p> -->
      <!-- <button class="btn btn-sm btn-link" @click="showTech = !showTech"> -->
        <!-- <i class="fa fa-chevron-down" v-if="showTech"></i> -->
        <!-- <i class="fa fa-chevron-up" v-else></i> -->
      <!-- </button> -->
    <!-- </div> -->

    <!-- <ul class="list-group list-group-flush" v-if="showTech"> -->
      <!-- <FilterItem :tag="tag" v-model="tag.selected" v-for="tag in techTags" :key="tag.label" /> -->
    <!-- </ul> -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import smoothReflow from 'vue-smooth-reflow'
import FilterItem from '@/modules/generator/components/FilterItem'

export default {
  mixins: [smoothReflow],
  mounted () {
    this.$smoothReflow()
  },
  components: {
    FilterItem
  },
  data () {
    return {
      showType: true,
      showTech: true
    }
  },
  computed: mapGetters({
    techTags: 'generator/techTags',
    typeTags: 'generator/typeTags'
  })
}
</script>
