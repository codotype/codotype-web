<template>
  <div class="card mt-2">
    <div class="card-header d-flex justify-content-between align-items-center">
      {{ model.label }} Model Options
      <button class="btn btn-sm btn-outline-dark" @click="collapsed = !collapsed">
        <i :class="collapseButtonIcon"></i>
      </button>
    </div>

    <!-- TODO - make this actually collapsable -->
    <ul class="list-group list-group-flush" v-if="!collapsed">
      <li class="list-group-item" v-for="attr in selectedGenerator.model_options">
        <OptionFormItem :model="attr" />
      </li>
    </ul>
  </div>
</template>

<script>
import OptionFormItem from '@/modules/option/components/OptionFormItem'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorModelOptions',
  props: ['model'],
  components: {
    OptionFormItem
  },
  data () {
    return {
      collapsed: true
    }
  },
  computed: {
    collapseButtonIcon () {
      if (this.collapsed) return 'fa fa-chevron-down'
      return 'fa fa-chevron-up'
    },
    ...mapGetters({
      schemas: 'schema/collection',
      selectedGenerator: 'generator/selectedModel'
    })
  }
}
</script>
