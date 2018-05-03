<template>

  <div class="row align-items-center">
    <div class="col-lg-12">
      <br>

      <div class="row mt-2">
        <div class="col-lg-12 text-center">
          <h2>A B O U T</h2>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-lg-12 text-center">
          <img class='logo' src="@/assets/logo_dark.png">
        </div>
      </div>

      <div class="row">

        <div class="col-lg-12 text-center">
          <p>Build projects blazingly fast.</p>
        </div>

        <div class="col-lg-12 text-center">
          <gh-btns-star slug="aeksco/blazeplate" show-count></gh-btns-star>

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

          Share
          <social-sharing class='mt-3' url="https://alpha.blazeplate.io" inline-template>
            <div>
              <network network="facebook">
                <i class="fa fa-lg fa-facebook mx-1"></i>
              </network>
              <network network="googleplus">
                <i class="fa fa-lg fa-google-plus mx-1"></i>
              </network>
              <network network="linkedin">
                <i class="fa fa-lg fa-linkedin mx-1"></i>
              </network>
              <network network="pinterest">
                <i class="fa fa-lg fa-pinterest mx-1"></i>
              </network>
              <network network="reddit">
                <i class="fa fa-lg fa-reddit mx-1"></i>
              </network>
              <network network="twitter">
                <i class="fa fa-lg fa-twitter mx-1"></i>
              </network>
              <!-- <network network="vk"> -->
                <!-- <i class="fa fa-lg fa-vk"></i> -->
              <!-- </network> -->
              <!-- <network network="weibo"> -->
                <!-- <i class="fa fa-lg fa-weibo"></i> -->
              <!-- </network> -->
              <!-- <network network="whatsapp"> -->
                <!-- <i class="fa fa-lg fa-whatsapp"></i> -->
              <!-- </network> -->
            </div>
          </social-sharing>

          <br>
          <br>

          Get in touch.
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
