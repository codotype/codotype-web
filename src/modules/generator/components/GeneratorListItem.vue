<template>
  <div class="card card-body border-light shadow-hover mb-2">
    <div class="row">
      <div class="col-lg-12 d-flex justify-content-between align-items-center">
        <p class="lead mb-0 w-100 d-flex justify-content-between align-items-center">

          <button
            v-if="selectMethod"
            @click="selectMethod(model.id)"
            class="btn btn-link pl-0"
            style='text-decoration: none; font-size: 1.5rem'
          >
            <img class='generator-icon' :src="model.icon"/>
            {{ model.label }}
          </button>

          <router-link
            v-else
            :to="'/generators/' + model.id"
          >
            <img class='generator-icon' :src="model.icon"/>
            {{ model.label }}
          </router-link>

          <small class='ml-2'>
            <a class='text-muted' target="_blank" :href="'https://github.com/' + model.github_url">
              <i class="fab fa-github"></i>
              {{ model.github_url.split('/')[0] }}
            </a>
            <span class='badge badge-light text-muted'>{{ model.version }}</span>
            <!-- <span class='badge badge-warning' v-if="model.official">Official</span> -->
          </small>

        </p>

      </div>
      <div class="col-lg-12">
        <p class="card-text mb-2">
          {{ model.description }}
        </p>
        <!-- <MoreInfoLink :url="model.github_url"/> -->
      </div>
      <div class="col-lg-12 d-flex justify-content-between align-items-center">

        <span class="d-flex">
          <span class='badge badge-primary mr-1' v-for="tag in model.type_tags" :key="tag">{{ tag }}</span>
          <span class='badge badge-info' v-if="model.self_configuring">Self-Configuring</span>
          <span class='badge badge-light mr-1' v-for="tag in model.tech_tags" :key="tag">{{ tag }}</span>
        </span>

        <span class="d-flex">
          <span class='badge badge-success mr-1' v-if="model.experience">
            {{ model.experience }}
          </span>
        </span>

      </div>
    </div>
  </div>
</template>

<script>
import MoreInfoLink from '@codotype/ui/src/components/MoreInfoLink'
import { mapActions } from 'vuex'

export default {
  name: 'GeneratorListItem',
  props: ['model', 'selectMethod'],
  components: {
    MoreInfoLink
  },
  methods: mapActions({
    selectGenerator: 'build/addNewStage'
  })
}
</script>

<style type="text/css" scoped>
  .generator-icon {
    max-width: 2rem;
  }
</style>
