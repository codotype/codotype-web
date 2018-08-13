<template>
  <div>
    <span class='d-flex flex-row align-items-center'>
      <p class="lead mb-0 mr-3">Model Options</p>
      <MoreInfoLink url="https://codotype.github.io" />
    </span>
    <small>Define additional model-specific options for this generator</small>

    <div class="card mt-2" v-for="model in schemas">
      <div class="card-header d-flex justify-content-between align-items-center">
        {{ model.label }} Model Options
        <button class="btn btn-sm btn-outline-light">
          <i class="fa fa-chevron-down"></i>
        </button>
      </div>
      <ul class="list-group list-group-flush" v-if="false">
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
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorModelOptions',
  components: {
    MoreInfoLink
  },
  computed: mapGetters({
    model: 'project/selectedModel',
    schemas: 'schema/collection',
    opts: 'generator/generatorFormOpts'
  })
}
</script>
