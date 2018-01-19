<template>

  <div class="row h-100 align-items-center">
    <div class="col-lg-12">

      <div class="row my-2">
        <div class="col-lg-12 text-center">
          <p class="welcome-text">WELCOME</p>
        </div>
      </div>

      <div class="row my-2">
        <div class="col-lg-12 text-center">
          <p class="lead"><a href="https://github.com/aeksco" target="_blank"> blazeplate.io</a> is an open-source tool for building user interfaces to collect and view tabular data.</p>
        </div>
      </div>

      <div class="row py-2">
        <div class="col-lg-12 text-center">
          <p class="lead">Define your schema and its attributes - blazeplate.io does the rest.</p>
        </div>
      </div>

      <div class="row py-2 justify-content-center">
        <div class="col-lg-6">

          <b-carousel id="carousel1" :interval="4000" img-width="1024" img-height="480">

            <!-- Text slides with image -->
            <b-carousel-slide :img-blank="true">
              <div class="card card-body bg-dark text-light border-light">
                <div class="row">
                  <div class="col-lg-12">
                    <h2 class='text-left'>Work Order</h2>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <table class="table table-striped table-hover">
                      <tbody>
                        <tr>
                          <td class='text-left'>
                            <strong>Job ID</strong>
                          </td>
                          <td>wo_002817</td>
                        </tr>
                        <tr>
                          <td class='text-left'>
                            <strong>...</strong>
                          </td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td class='text-left'>
                            <strong>...</strong>
                          </td>
                          <td>...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </b-carousel-slide>

            <b-carousel-slide :img-blank="true">
              <div class="card card-body bg-dark text-light border-light">
                <div class="row">
                  <div class="col-lg-12">
                    <h2 class='text-left'>Contact</h2>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <table class="table table-striped table-hover">
                      <tbody>
                        <tr>
                          <td class='text-left'>
                            <strong>Name</strong>
                          </td>
                          <td>John Doe</td>
                        </tr>
                        <tr>
                          <td class='text-left'>
                            <strong>...</strong>
                          </td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td class='text-left'>
                            <strong>...</strong>
                          </td>
                          <td>...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </b-carousel-slide>

            <b-carousel-slide :img-blank="true">
              <div class="card card-body bg-dark text-light border-light">
                <div class="row">
                  <div class="col-lg-12">
                    <h2 class='text-left'>Invoice</h2>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <table class="table table-striped table-hover">
                      <tbody>
                        <tr>
                          <td class='text-left'>
                            <strong>Amount</strong>
                          </td>
                          <td>$4800.00</td>
                        </tr>
                        <tr>
                          <td class='text-left'>
                            <strong>...</strong>
                          </td>
                          <td>...</td>
                        </tr>
                        <tr>
                          <td class='text-left'>
                            <strong>...</strong>
                          </td>
                          <td>...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </b-carousel-slide>

          </b-carousel>

        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-4"><a href="#/schemas" class="btn btn-light btn-block btn-lg"><i class="fa fa-fw fa-list-alt mr-2"></i>Let's get started.</a></div>
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
