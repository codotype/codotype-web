
<template>
  <div class="container">
  	<div class="row">
  		<div class="col-lg-12">

        <!-- Header -->
  			<h2>User List</h2>
  			<hr>

        <!-- Fetching -->
        <p class='lead' v-if="fetching">
          <i class="fa fa-2x fa-spin fa-spinner"></i>
        </p>

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
  computed: {
    collection: () => {
      return this.$store.getters['user/collection']
    },
    fetching: () => {
      return this.$store.getters['user/fetching']
    }
  },
  mounted: () => {
    return this.$store.dispatch('user/fetchCollection')
  },
  components: {
    ListView
  }
}
</script>
