<template>
  <div class="card card-body mb-2" id="generator-list">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-between align-items-center">
        <p class="lead mb-0">
          <a :href="'#/generators/' + model.id">
            <i :class="model.icon + ' mb-2'" style="font-size: 1rem"></i>
            {{ model.label }}
          </a>
          <!-- <small> -->
          <!-- </small> -->
          <small class='ml-2'>
            <a class='text-muted' :href="model.github_url">
              <i class="fa fa-cube"></i>
              codotype
            </a>
            <span class='badge badge-light text-muted'>{{ model.version }}</span>
            <span class='badge badge-warning' v-if="model.official">Official</span>
          </small>

        </p>

        <!-- <span> -->
          <!-- <gh-btns-watch :slug="model.github_url" /> -->
          <!-- <gh-btns-star :slug="model.github_url" /> -->
          <!-- <gh-btns-fork :slug="model.github_url" /> -->
        <!-- </span> -->

        <!-- TODO - this is sloppy, fix at some point -->
        <button class="btn btn-primary pull-right" v-if="selectMethod" @click="selectMethod(model)">
          SELECT
        </button>
      </div>
      <div class="col-lg-12">
        <p class="card-text">
          {{ model.description }}
        </p>
        <!-- <MoreInfoLink :url="model.github_url"/> -->
      </div>
      <div class="col-lg-12">

        <!-- <span class='badge badge-dark' v-if="model.addons[0]">{{ model.addons.length }} Addon(s)</span> -->
        <!-- <span class='badge badge-dark' v-if="model.global_options[0]">{{ model.global_options.length }} Option(s)</span> -->
        <!-- <span class='badge badge-dark' v-if="model.model_options[0]">{{ model.model_options.length }} Model Option(s)</span> -->
        <!-- <br> -->

        <!-- <gh-btns-star :slug="model.github_url" show-count></gh-btns-star> -->

        <span class='badge badge-primary mr-1' v-for="tag in model.type_tags" :key="tag">{{ tag }}</span>
        <span class='badge badge-info' v-if="model.self_configuring">Self-Configuring</span>
        <span class='badge badge-light mr-1' v-for="tag in model.tech_tags" :key="tag">{{ tag }}</span>
        <!-- <span class='badge badge-warning' v-if="model.official">Codotype Official</span> -->

      </div>
    </div>
  </div>
</template>

<script>

import MoreInfoLink from '@/components/MoreInfoLink'
export default {
  name: 'GeneratorListItem',
  props: ['model', 'selectMethod'],
  components: {
    MoreInfoLink
  }
}
</script>
