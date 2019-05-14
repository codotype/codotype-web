<template>
  <b-navbar toggleable="md" type="light" variant="white" fixed="top">
    <b-navbar-brand :href="homeUrl">
      <strong>Codotype</strong>
    </b-navbar-brand>

    <a :href="generatorUrl" class="navbar-text" v-if="model.id">
      <img class='generator-icon' style="width: 1rem;" :src="model.icon"/>
      {{ model.label }}
    </a>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="ml-auto">

        <b-nav-item target="_blank" :href="aboutUrl">
          <i class="fa fa-question-circle"></i>
          About
        </b-nav-item>

        <b-nav-item target="_blank" href="https://codotype.org">
          <i class="fa fa-book text-info"></i>
          Docs
        </b-nav-item>

        <b-nav-item target="_blank" href="https://twitter.com/codotype">
          <i class="fab fa-twitter text-primary"></i>
          Twitter
        </b-nav-item>

        <b-nav-item target="_blank" href="https://github.com/codotype">
          <i class="fab fa-github"></i>
          GitHub
        </b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: 'Navbar',
  computed: {
    model() {
      const generator = this.$store.getters['generator/selectedModel']
      return generator || {}
    },
    homeUrl() {
      return process.env.VUE_APP_CODOTYPE_WWW_HOST
    },
    generatorUrl() {
      return process.env.VUE_APP_CODOTYPE_WWW_HOST + '/generators/' + this.model.id
    },
    aboutUrl() {
      return process.env.VUE_APP_CODOTYPE_WWW_HOST + '/about'
    }
  }
}
</script>

<style lang="sass">

  nav.navbar
    border-bottom: 1px solid #d3d3d3

</style>
