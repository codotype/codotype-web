<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <br>
        <div class="row mt-2">
          <div class="col-lg-12 text-center">
            <!-- <img src="@/assets/logo_dark.png"> -->
            <!-- <img width="30%" src="https://github.com/codotype/codotype-branding/blob/master/codotype-02.png?raw=true"> -->
            <h1 class='display-1' style="font-family: monospace;">codotype</h1>
          </div>
        </div>

        <!-- <div class="row my-2"> -->
          <!-- <div class="col-lg-12 text-center"> -->
            <!-- <p class="lead"><a href="https://github.com/aeksco" target="_blank"> codotype.io</a> is an open-source tool for building user interfaces to collect and view tabular data.</p> -->
          <!-- </div> -->
        <!-- </div> -->

        <div class="row py-2">
          <div class="col-lg-12 text-center">
            <p class="lead">visual web application boilerplate</p>
          </div>

          <div class="col-lg-12 text-center">
            <p>Prototype new projects blazingly fast.</p>

            <p>
              Define your models, attributes, and relations - codotype does the rest.
            </p>
          </div>

          <div class="col-lg-12 text-center">
            <gh-btns-star slug="codotype/codotype" show-count></gh-btns-star>
            <!-- <gh-btns-fork slug="aeksco/codotype" show-count></gh-btns-fork> -->
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <hr>
          </div>
        </div>

        <div class="row mt-2 justify-content-center">
          <div class="col-lg-4">
            <router-link to="/projects" class="btn btn-outline-warning btn-block btn-lg">
              <i class="fa fa-fire mr-2"></i>
              Let's get started.
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'main_home',
  metaInfo: {
    title: 'Home'
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

  .gh-button-container
    float: none !important
</style>
