
<template>
  <div class="container">
  	<div class="row">
  		<div class="col-lg-12">

        <!-- Header -->
  			<h2>Application List</h2>
  			<hr>

        <!-- New Button -->
  			<ul class="list-group mt-2 mb-4 text-center">
  				<a class="list-group-item" href="#/applications/new">NEW</a>
  			</ul>

        <!-- Fetching -->
        <!-- <p class='lead' v-if="fetching"> -->
          <!-- <i class="fa fa-2x fa-spin fa-spinner"></i> -->
        <!-- </p> -->

        <!-- EmptyView -->
        <!-- TODO - abstract into ListView -->
        <p class='lead' v-if="!collection[0]">
          EMPTY
        </p>

        <!-- ListView -->
  			<ListView :collection="collection"></ListView>

  		</div>
  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'

export default {
  props: ['collection'],
  computed: {
    fetching () {
      return this.$store.getters['application/fetching']
    }
  },
  components: {
    ListView
  }
}
</script>


