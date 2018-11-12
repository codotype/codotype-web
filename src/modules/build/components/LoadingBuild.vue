<template>
  <div class="row d-flex justify-content-center">
    <div class="col-lg-8">

      <div class="card card-body text-center" v-if="buildLoading">
        <p class="lead">Thousands of monkeys are generating your app</p>
        <small class="text-muted">please be nice to them its their first day on the job</small>
        <div class="row mt-4">
          <div class="col-lg-12 text-center d-flex justify-content-center">
            <Circle8 size="80px" class='d-flex my-2'/>
          </div>
        </div>
      </div>

      <div class="card card-body" v-if="buildFinished">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="lead">
              Thank you for using Codotype
            </p>
            <p class="lead mb-0">
              <i class="fa fa-lg fa-heart text-danger"></i>
            </p>
            <!-- <small class="text-muted">Your code has been downloaded as a .zip file.</small> -->
            <small class="text-muted">Your download will start automatically - click <a :href="downloadUrl" target="_blank">here</a> to download it manually</small>
          </div>
        </div>

        <div class="row d-flex justify-content-center mt-3">
          <div class="col-lg-6">
            <b-button
              variant="primary"
              class="w-100"
              size="lg"
              :href="downloadUrl"
              target="_blank"
            >
              <i class="fa fa-fw fa-download"></i>
              Download ZIP
            </b-button>
          </div>
        </div>

        <div class="row d-flex justify-content-center mt-3">
          <div class="col-lg-6 text-center">
            <router-link
              class="w-100" :to="'/blueprints/' + selectedBlueprint._id">
              <i class="fa fa-fw fa-reply"></i>
              Back to Blueprint
            </router-link>
          </div>
        </div>

        <div class="row d-flex justify-content-center mt-3">
          <div class="col-lg-12 text-center">
            <small class="text-muted">
              Give us a <i class="fa fa-fw text-warning fa-star"></i> on <a href="https://github.com/codotype/codotype" target='_blank'>GitHub</a>
              <br>
              or
              <br>
              follow us on <a href="https://twitter.com/codotype" target='_blank'><i class="fab fa-fw fa-twitter"></i>Twitter</a>
            </small>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Circle8 from 'vue-loading-spinner/src/components/Circle8'

export default {
  name: 'LoadingBuild',
  props: ['model'],
  components: {
    Circle8
  },
  computed: {
    ...mapGetters({
      selectedBlueprint: 'project/selectedModel',
      schemas: 'schema/collection',
      newBuildModel: 'build/newModel',
      selectedGenerator: 'generator/selectedModel',
      buildLoading: 'build/fetching',
      buildFinished: 'build/buildFinished',
      downloadUrl: 'build/downloadUrl'
    })
  }
}
</script>
