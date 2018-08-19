b<template>
  <!-- <b-navbar toggleable="md" type="dark" variant="dark" fixed="top"> -->
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#/">
      <!-- <img class='logo' src="@/assets/logo_dark.png"> -->
      <strong>codotype</strong>
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <!-- Navbar Links -->
      <b-navbar-nav class="mr-auto">

        <!-- Public links -->
        <b-nav-item href="#/projects">Apps</b-nav-item>
        <!-- <b-nav-item href="#/examples">Example Apps</b-nav-item> -->
        <b-nav-item href="#/generators">Generators</b-nav-item>
        <!-- <b-nav-item href="#/generator_new">New Generator</b-nav-item> -->

      </b-navbar-nav>

      <b-navbar-nav class="mr-0">

        <b-nav-item href="#/about">
          <i class="fa fa-fw fa-question-circle-o"></i>
          About
        </b-nav-item>

        <b-nav-item target="_blank" href="https://github.com/codotype">
          <!-- <i class="fa fa-fw fa-graduation-cap"></i> -->
          <i class="fa fa-fw fa-book"></i>
          Documentation
        </b-nav-item>

        <!-- <b-nav-item target="_blank" href="https://github.com/codotype"> -->
          <!-- <i class="fa fa-fw fa-dollar"></i> -->
          <!-- Donate -->
        <!-- </b-nav-item> -->

        <b-nav-item target="_blank" href="https://github.com/codotype">
          <i class="fa fa-lg fa-fw fa-github-alt text-light"></i>
          <!-- GitHub -->
        </b-nav-item>

        <b-nav-item target="_blank" href="https://twitter.com/codotype">
          <i class="fa fa-lg fa-fw fa-twitter text-primary"></i>
        </b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">

  nav.navbar
    border-bottom: 1px solid #fff

    .navbar-brand
      letter-spacing: .25rem !important
      font-family: sans-serif
      font-weight: 100
      letter-spacing: 0.1rem
      // text-transform: uppercase
      // font-size: 1.5rem

      strong
        font-weight: 400

      img.logo
        float: left
        margin-right: 0.4rem
        height: 2rem
        display: flex

    .nav-item
      font-size: 1.1rem
</style>
