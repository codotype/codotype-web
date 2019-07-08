<template>
  <NavbarWrapper fixed>
    <template slot="brand">
      <NavbarBrand :href="homeUrl" />
    </template>

    <template slot="links">
      <b-navbar-nav class="mr-auto">
        <a :href="generatorUrl" class="navbar-text" v-if="model.id">
          {{ model.label }}
        </a>
      </b-navbar-nav>
      <NavbarLinks />
    </template>
  </NavbarWrapper>
</template>

<script>
import NavbarWrapper from '@codotype/ui/src/components/Navbar/NavbarWrapper'
import NavbarBrand from '@codotype/ui/src/components/Navbar/NavbarBrand'
import NavbarLinks from '@codotype/ui/src/components/Navbar/NavbarLinks'

export default {
  name: 'Navbar',
  components: {
    NavbarWrapper,
    NavbarBrand,
    NavbarLinks
  },
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
    }
  }
}
</script>
