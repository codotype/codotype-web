<template>
  <div class="row mt-5">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-12 text-center">
          <img class='generator-icon' :src="model.icon"/>
          <h2>{{model.label}}</h2>
        </div>
      </div>

      <div class="row py-2">

        <div class="col-lg-12 text-center">
          <p class="lead">{{model.description}}</p>
        </div>

        <div class="col-lg-12 text-center d-flex align-items-center justify-content-center">
          <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <hr class='mt-2'>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6 d-flex justify-content-between align-items-center">

          <!-- TODO - break out into a distinct component -->
          <span class="d-flex">
            <span class='badge badge-primary mr-1' v-for="tag in model.type_tags" :key="tag">{{ tag }}</span>
            <span class='badge badge-info' v-if="model.self_configuring">Self-Configuring</span>
            <span class='badge badge-light mr-1' v-for="tag in model.tech_tags" :key="tag">{{ tag }}</span>
          </span>

        </div>
      </div>

      <div class="row mt-4 mb-4 justify-content-center">
        <div class="col-lg-12">
          <div class='card-header bg-primary text-light'>README.md</div>
          <div class="card-body bg-white" v-html="compiledMarkdown"></div>
          <!-- <pre class="bg-dark text-light">{{model}}</pre> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['model'],
  computed: {
    compiledMarkdown () {
      return marked(this.model.readme, { sanitize: true })
    }
  }
}
</script>
