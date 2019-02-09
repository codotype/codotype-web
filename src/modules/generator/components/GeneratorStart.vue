<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="row">
        <div class="col-lg-12 text-center">
          <img class='generator-icon' :src="model.icon"/>
          <h2>{{model.label}}</h2>
        </div>
      </div>

      <div class="row py-2">

        <div class="col-lg-12 text-center">
          <!-- <p class="lead">visual code scaffolding for the modern web</p> -->
          <!-- <p class="lead"></p> -->
          <p class="lead">{{model.description}}</p>
          <!-- <p>Prototype new web applications amazingly fast</p> -->
          <!-- <p>Define your models, attributes, and relations - Codotype does the rest</p> -->
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

      <div class="row mt-2 mb-4 justify-content-center">
        <div class="col-lg-12">
          <pre class="bg-dark text-light">{{model}}</pre>
          <div class='card card-body bg-white' v-html="compiledMarkdown"></div>
        </div>
      </div>
<!--       <div class="row mt-2 mb-4 justify-content-center">
        <div class="col-lg-4">
          <b-button
            size="lg"
            variant="primary"
            block
            :to="'/generators/' + model.id + '/run'"
          >
            <i class="fas fa-drafting-compass faa-wrench animated mr-2"></i>
            Start Your Next Project
          </b-button>
        </div>
      </div>
 -->
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

<style type="text/css" scoped>
  .generator-icon {
    max-width: 4rem;
  }
</style>
