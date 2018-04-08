<template>
  <!-- <b-navbar toggleable="md" type="dark" variant="dark" fixed="top"> -->
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#/">
      <img class='logo mr-3' src="@/assets/logo_dark.png">
      <!-- <strong>blaze</strong>plate -->
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <!-- Navbar Links -->
      <b-navbar-nav class="mr-auto">

        <!-- Public links -->
        <b-nav-item href="#/projects">Apps</b-nav-item>
        <b-nav-item class="d-none d-sm-none d-md-block" href="#/projects">
          <i class="fa fa-fw fa-plus"></i>
        </b-nav-item>

      </b-navbar-nav>

      <b-navbar-nav class="mr-0">
        <b-nav-item href="#/projects">
          <i class="fa fa-fw fa-question-circle-o"></i>
          About
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
      text-transform: uppercase
      font-weight: 100
      letter-spacing: 0.1rem

      strong
        font-weight: 400

      img.logo
        float: left
        margin-right: 0.4rem
        height: 2rem
        display: flex

</style>
