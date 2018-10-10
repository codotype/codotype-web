<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card card-body">
        <p class="lead">BUILD LOADING</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoadingBuild',
  props: ['model'],
  computed: {
    ...mapGetters({
      schemas: 'schema/collection',
      newBuildModel: 'build/newModel',
      selectedGenerator: 'generator/selectedModel'
    })
  }
}
</script>
