<template>
  <div class="card card-body mb-2" id="generator-list">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-title mb-0">
          <a :href="'#/generators/' + model.id">{{ model.label }}</a>
        </div>
      </div>
      <div class="col-lg-12">
        <small>{{ model.description }}</small>
        <!-- <MoreInfoLink :url="model.github_url"/> -->
      </div>
      <div class="col-lg-12">

        <!-- <span class='badge badge-dark' v-if="model.addons[0]">{{ model.addons.length }} Addon(s)</span> -->
        <!-- <span class='badge badge-dark' v-if="model.global_options[0]">{{ model.global_options.length }} Option(s)</span> -->
        <!-- <span class='badge badge-dark' v-if="model.model_options[0]">{{ model.model_options.length }} Model Option(s)</span> -->
        <!-- <br> -->

        <span class='badge badge-primary mr-1' v-for="tag in model.type_tags" :key="tag">{{ tag }}</span>
        <span class='badge badge-info' v-if="model.self_configuring">Self-Configuring</span>
        <span class='badge badge-warning' v-if="model.official">Codotype Official</span>

        <br>

        <span class='badge badge-light mr-1' v-for="tag in model.tech_tags" :key="tag">{{ tag }}</span>
        <span class='badge badge-secondary float-right'>Version {{ model.version }}</span>

      </div>
    </div>
  </div>
</template>

<script>

import MoreInfoLink from '@/components/MoreInfoLink'
export default {
  name: 'GeneratorListItem',
  props: ['model'],
  components: {
    MoreInfoLink
  }
}
</script>
