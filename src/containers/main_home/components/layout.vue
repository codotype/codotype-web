<template>

  <div class="row">
    <div class="col-lg-12">
      <br>
      <div class="row mt-2">
        <div class="col-lg-12 text-center">
          <img src="@/assets/logo_dark.png">
        </div>
      </div>

      <!-- <div class="row my-2"> -->
        <!-- <div class="col-lg-12 text-center"> -->
          <!-- <p class="lead"><a href="https://github.com/aeksco" target="_blank"> blazeplate.io</a> is an open-source tool for building user interfaces to collect and view tabular data.</p> -->
        <!-- </div> -->
      <!-- </div> -->

      <div class="row py-2">
        <div class="col-lg-12 text-center">
          <p class="lead">visual web application boilerplate</p>
        </div>

        <div class="col-lg-12 text-center">
          <p>Prototype new projects <span class='text-warning'>blazingly</span> fast.</p>

          <p>
            Define your models, attributes, and relations - <span class='text-warning'>blazeplate does the rest</span>.
          </p>
        </div>

        <div class="col-lg-12 text-center">
          <gh-btns-star slug="aeksco/blazeplate" show-count></gh-btns-star>
          <!-- <gh-btns-fork slug="aeksco/blazeplate" show-count></gh-btns-fork> -->
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <hr>
        </div>
      </div>

      <div class="row mt-2 justify-content-center">
        <div class="col-lg-4">
          <a href="#/projects" class="btn btn-outline-warning btn-block btn-lg">
            <i class="fa fa-fire mr-2"></i>
            Let's get started.
          </a>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'main_home'
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

  .gh-button-container
    float: none !important
</style>
