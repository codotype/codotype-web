<template>

  <div class="row">
    <div class="col-lg-12">
      <br>
      <br>
      <br>
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
          <p>Build projects <span class='text-warning'>blazingly</span> fast.</p>
        </div>

        <div class="col-lg-12 text-center">
          <gh-btns-star slug="aeksco/blazeplate" show-count></gh-btns-star>
          <!-- <gh-btns-fork slug="aeksco/blazeplate" show-count></gh-btns-fork> -->

          <br>
          <br>

          <a class='px-2' href="http://github.com/aeksco/blazeplate" target='_blank'>
            <i class="fa fa-2x fa-github"></i>
          </a>

          <a class='px-2' href="mailto:aeksco@gmail.com" target='_blank'>
            <i class="fa fa-2x fa-envelope-o"></i>
          </a>

        </div>
      </div>

      <!-- <div class="row py-4"> -->
        <!-- <div class="col-lg-12 text-center"> -->
          <!-- <p class="lead">Define your schema and its attributes - blazeplate.io does the rest.</p> -->
        <!-- </div> -->
      <!-- </div> -->

      <div class="row mt-4 pt-4 justify-content-center">
        <div class="col-lg-6">
          <a href="#/projects" class="btn btn-outline-light btn-block btn-lg p-4">
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
