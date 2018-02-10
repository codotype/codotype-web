<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <a class="navbar-brand" href="#/">
      <img class='logo mr-3' src="@/assets/logo_dark.png">
      <!-- <strong>blaze</strong>plate -->
    </a>

	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">

        <!-- <li class="nav-item" v-for="s in selectedApplication.navSchemas" :key="s._id" v-if="selectedApplication[navSchemas]"> -->
        <!-- <li class="nav-item" v-for="s in navSchemas" :key="s._id" > -->
          <!-- <a class="nav-link" :href="'#/schemas/' + s._id ">{{s.label_plural}}</a> -->
        <!-- </li> -->

        <li class="nav-item">
          <a class="nav-link" href="#/projects">
            Projects
          </a>
        </li>

        <!-- <li class="nav-item"> -->
          <!-- <a class="nav-link" href="#/projects"> -->
            <!-- Examples -->
          <!-- </a> -->
        <!-- </li> -->

        <li class="nav-item">
          <a class="nav-link" href="#/projects/new" v-b-tooltip.hover.right title="New Project">
            <i class="fa fa-fw fa-plus"></i>
          </a>
        </li>

      </ul>

      <ul class="navbar-nav ml-auto">

        <li class="nav-item">
          <a class="nav-link" href="#/about">
            <i class="fa fa-fw fa-question-circle-o"></i>
            About
          </a>
        </li>

        <!-- <li class="nav-item" v-if="!isAuthenticated"> -->
          <!-- <a class="nav-link" href="#/auth/login">Login</a> -->
        <!-- </li> -->

        <!-- <li class="nav-item" v-if="currentUser.displayName"> -->
          <!-- <a class="nav-link" href="#/applications"> -->
            <!-- <img class='profile' :src="currentUser.image.url"> -->
            <!-- {{currentUser.displayName}} -->
          <!-- </a> -->
        <!-- </li> -->

        <!-- <b-nav-item-dropdown text="Admin" right> -->
          <!-- <b-dropdown-item href="#/projects">Projects</b-dropdown-item> -->
          <!-- <b-dropdown-item href="#/schemas">Schemas</b-dropdown-item> -->
        <!-- </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown text="User" right> -->
          <!-- <b-dropdown-item href="#/auth/register">Register</b-dropdown-item> -->
          <!-- <b-dropdown-item href="#/auth/login">Login</b-dropdown-item> -->
        <!-- </b-nav-item-dropdown> -->

	    </ul>
	  </div>
	</nav>
</template>

<script>
import _ from 'lodash'

// TODO - this should be split into a series of smaller components
export default {
  name: 'Navbar',
  computed: {
    navSchemas () {
      return _.filter(this.$store.getters['schema/collection'], (s) => { return s.display.navbar_link })
    }
    // currentUser () {
      // return store.getters['auth/currentUser']
    // }
    // isAuthenticated () {
      // return store.getters['auth/isAuthenticated']
    // }
  }
}
</script>

<style lang="sass">

  .navbar-brand
    margin-right: 0
    img.logo
      float: left
      height: 2rem
      display: flex

</style>
