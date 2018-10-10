<template>
  <div class='row'>

    <div class="col-lg-12">
      <div class="row">

          <!-- TODO - only show when user is NOT logged in -->
          <div class="col-lg-4 mb-4">
            <a role="button" id="app-new-button" style='cursor: pointer;' v-b-modal="'new-project-modal'" class="card card-body border-primary bg-gradient-primary text-white h-100 d-flex align-items-center justify-content-center shadow-hover">

              <div class="row">
                <div class="col-lg-12 text-center">
                  <p class='lead'>
                    <i class="fas fa-plus mr-2"></i>
                    New Blueprint
                  </p>
                  <p class='mb-0'>Generate apps from your Blueprints</p>
                  <!-- <p class='mb-0'>Unlimited Blueprints when you register</p> -->
                </div>
              </div>

            </a>
          </div>

          <!-- Blueprint List -->
          <BlueprintListItem v-for="project in collection" v-bind:key="project._id" :project="project" />

          <!-- Empty -->
          <div class="col-lg-4 mb-4" v-if="!collection[0]">
            <div class="card card-body border-warning bg-transparent text-warning h-100 d-flex align-items-center justify-content-center text-center">
              <div class="row">
                <div class="col-lg-12">
                  <p class="lead card-text">
                    <i class="fa fa-fw fa-drafting-compass"></i>
                    <br>
                    Your Blueprints go here
                  </p>
                </div>
                <div class="col-lg-12">
                  <hr class='border-warning'>
                </div>
                <div class="col-lg-12">
                  <small class="card-text">Create a new Blueprint or copy an example below</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="col-lg-12">
      <hr>
      <h4 class="text-muted">
        <span id="example-blueprint-header">
          <i class="fas fa-map-signs"></i>
          Example Blueprints
        </span>
      </h4>
      <small class="text-muted">Not sure where to start? Clone an Example Blueprint you can grasp understand and make some modifications from there</small>

    </div>

    <!-- Example Blueprints -->
    <div class="col-lg-12 mt-3">
      <div class="row">
        <ExampleListItem v-for="project in exampleCollection" v-bind:key="project._id" :project="project" />
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'
import BlueprintListItem from './BlueprintListItem'
import ExampleListItem from './ExampleListItem'

export default {
  components: {
    BlueprintListItem,
    ExampleListItem
  },
  computed: mapGetters({
    collection: 'project/collection',
    exampleCollection: 'project/exampleCollection'
  })
}
</script>
