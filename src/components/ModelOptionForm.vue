<template>
  <div class="card mt-2">
    <div class="card-header d-flex justify-content-between align-items-center">
      {{ model.label }} Model Options
      <button class="btn btn-sm btn-outline-light" @click="collapsed = !collapsed">
        <i :class="collapseButtonIcon"></i>
      </button>
    </div>

    <!-- TODO - make this actually collapsable -->
    <ul class="list-group list-group-flush" v-if="!collapsed">
      <li class="list-group-item" v-for="attr in opts.client[1].model_options">
        <div class="row">
          <div class="col-lg-9">
            <label>{{attr.label}}</label>
            <br>
            <small>{{attr.help}}</small>
            <MoreInfoLink :url="attr.more_info_url" />
          </div>
          <div class="col-lg-3">
            <input class='form-control' type="checkbox" name="" v-if="attr.type === 'BOOLEAN'">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorModelOptions',
  props: ['model'],
  components: {
    MoreInfoLink
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
      opts: 'generator/generatorFormOpts'
    })
  }
}
</script>
