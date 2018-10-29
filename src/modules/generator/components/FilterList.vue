<template>
  <div class="card border-light shadow-sm">

    <!-- TODO - abstract card-header into separate component -->
    <div class="card-header d-flex justify-content-between align-items-center">
      <p class="lead mb-0">Type</p>
      <button class="btn btn-sm btn-link">
        <i class="fa fa-chevron-down"></i>
      </button>
    </div>

    <ul class="list-group list-group-flush">
      <FilterItem :tag="tag" v-model="tag.selected" v-for="tag in typeTags" :key="tag.label" />
    </ul>

    <div class="card-header d-flex justify-content-between align-items-center">
      <p class="lead mb-0">Tech</p>
      <button class="btn btn-sm btn-link">
        <i class="fa fa-chevron-down"></i>
      </button>
    </div>

    <ul class="list-group list-group-flush">
      <FilterItem :tag="tag" v-model="tag.selected" v-for="tag in techTags" :key="tag.label" />
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterItem from '@/modules/generator/components/FilterItem'

export default {
  components: {
    FilterItem
  },
  computed: mapGetters({
    techTags: 'generator/techTags',
    typeTags: 'generator/typeTags'
  })
}
</script>
