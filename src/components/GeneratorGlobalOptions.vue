<template>
  <div>
    <span class='d-flex flex-row align-items-center'>
      <p class="lead mb-0 mr-3">Global Options</p>
      <MoreInfoLink url="https://codotype.github.io" />
    </span>
    <small>Configure global options for this generator</small>

    <div class="card card-body" v-for="attr in opts.client[3].global_options">
      <!-- <span class='d-flex flex-row align-items-center'> -->
        <!-- <label class='mb-0 mr-2'>{{attr.label}}</label> -->
        <!-- <MoreInfoLink :url="attr.more_info_url" /> -->
      <!-- </span> -->
      <!-- <small>{{attr.help}}</small> -->
      <!-- <input class='form-control' type="checkbox" v-if="attr.type === 'BOOLEAN'"> -->

      <div class="row">
        <div class="col-lg-9">
          <label>{{attr.label}}</label>
          <br>
          <small>{{attr.help}}</small>
          <MoreInfoLink :url="attr.more_info_url" />
        </div>
        <div class="col-lg-3">
          <input class='form-control' type="checkbox" v-if="attr.type === 'BOOLEAN'">
          <input class='form-control' type="text" v-if="attr.type === 'TEXT'">
        </div>
      </div>

      <!-- {{attr}} -->
    </div>
  </div>
</template>

<script>
import MoreInfoLink from '@/components/MoreInfoLink'
import { mapGetters } from 'vuex'

export default {
  name: 'GeneratorGlobalOptions',
  components: {
    MoreInfoLink
  },
  computed: mapGetters({
    opts: 'generator/generatorFormOpts'
  })
}
</script>
