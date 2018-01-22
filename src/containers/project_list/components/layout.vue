
<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-8">
        <h2>
          Projects
        </h2>
      </div>

      <div class="col-lg-4 text-right">
        <a class='btn btn-outline-success' href="#/projects/new">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New Project
        </a>
      </div>

      <div class="col-lg-12">
        <hr>
      </div>
    </div>

  	<div class="row">

      <!-- List View -->
  		<div class="col-lg-12">
  			<ListView :collection="collection"></ListView>
  		</div>

        <!-- Fetching -->
      <div class="col-lg-12 text-center" v-if="fetching">
        <p class='lead'>
          <i class="fa fa-2x fa-spin fa-spinner"></i>
        </p>
      </div>

  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'
import store from '@/store'

export default {
  props: ['collection'],
  computed: {
    fetching () {
      return store.getters['project/fetching']
    }
  },
  components: {
    ListView
  }
}
</script>
