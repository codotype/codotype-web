<template>

  <div class="row h-100 align-items-center">
    <div class="col-lg-12">

      <div class="row mt-2 mb-4 pb-4">
        <div class="col-lg-12 text-center">
          <img src="@/assets/logo_dark.png">
        </div>
      </div>

      <!-- <div class="row my-2"> -->
        <!-- <div class="col-lg-12 text-center"> -->
          <!-- <p class="lead"><a href="https://github.com/aeksco" target="_blank"> blazeplate.io</a> is an open-source tool for building user interfaces to collect and view tabular data.</p> -->
        <!-- </div> -->
      <!-- </div> -->

      <div class="row py-4">
        <div class="col-lg-12 text-center">
          <h2>Next-generation web application boilerplate.</h2>
        </div>

        <div class="col-lg-12 mt-4 text-center">
          <!-- Place this tag where you want the button to render. -->
          <!-- <a class="github-button" href="https://github.com/blazeplate/blazeplate_web_client" data-size="large" data-show-count="true" aria-label="Star blazeplate/blazeplate_web_client on GitHub">Star</a> -->
        </div>
      </div>

      <!-- <div class="row py-4"> -->
        <!-- <div class="col-lg-12 text-center"> -->
          <!-- <p class="lead">Define your schema and its attributes - blazeplate.io does the rest.</p> -->
        <!-- </div> -->
      <!-- </div> -->

      <div class="row mt-4 pt-4 justify-content-center">
        <div class="col-lg-6">
          <a href="#/projects/new" class="btn btn-outline-light btn-block btn-lg p-4">
            <i class="fa fa-lg fa-fire mr-2"></i>
            <br>
            <p class="lead mb-0 mt-2">
              Let's get started.
            </p>
          </a>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'main_home',
    computed: {
    }
  }
</script>

<style lang="sass">
  img.welcome-logo
    height: 4rem
    width: 4rem

  .welcome-text
    letter-spacing: .6rem
    font-weight: 300
    font-size: 2rem
</style>
