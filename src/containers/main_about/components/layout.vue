<template>

  <div class="row h-100 align-items-center">
    <div class="col-lg-12">

      <div class="row mt-2 mb-4 pb-4">
        <div class="col-lg-12 text-center">
          <img class='logo' src="@/assets/logo_dark.png">
        </div>
      </div>

      <div class="row py-4">
        <div class="col-lg-12 text-center">
          <h2>A B O U T</h2>
        </div>
      </div>

      <div class="row py-2">
        <div class="col-lg-12 text-center">
          <!-- <h2>Visual web application boilerplate</h2> -->
          <p class="lead">visual web application boilerplate</p>
        </div>

        <div class="col-lg-12 text-center">
          <p class="lead text-warning"></p>
          <p>Build projects <span class='text-warning'>blazingly</span> fast.</p>

          <!-- Place this tag where you want the button to render. -->
          <!-- <a class="github-button" href="https://github.com/blazeplate/blazeplate_web_client" data-size="large" data-show-count="true" aria-label="Star blazeplate/blazeplate_web_client on GitHub">Star</a> -->

          <!-- <a class="github-button" href="https://github.com/aeksco/blazeplate" data-size="large" data-show-count="true" aria-label="Star blazeplate/blazeplate_web_client on GitHub">Star</a> -->

        </div>

        <div class="col-lg-12 text-center">
          <p class="lead">Define your schema and its attributes - blazeplate.io does the rest.</p>
        </div>

        <div class="col-lg-12 text-center">
          <gh-btns-star slug="aeksco/blazeplate" show-count></gh-btns-star>
          <!-- <gh-btns-fork slug="aeksco/blazeplate" show-count></gh-btns-fork> -->

          <br>
          <br>

          <span>Built with</span>
          <i class="fa fa-heart ml-1 text-danger"></i>
          <span class='px-1'>by</span>
          <a href="https://github.com/aeksco" target='_blank'>@aeksco</a>

          <br>
          <gh-btns-follow class='mt-3' user="aeksco" show-count></gh-btns-follow>

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

<style lang="sass" scoped="true">

  img.logo
    height: 4rem

</style>
