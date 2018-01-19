
<template>
  <div class="container">
    <a href="#/applications">Back</a>
    <h2>Application Show - {{model.name}}</h2>
  	<hr>

    <!-- Edit Link -->
  	<a class='btn btn-secondary' :href="'#/applications/' + model._id + '/edit'">
      Edit Application
    </a>

    <!-- Opens Destroy Confirmation Modal -->
    <b-btn variant="danger" v-b-modal.confirm-modal>Destroy</b-btn>

    <!-- Bootstrap Modal Component -->
    <b-modal id="confirm-modal" title="Destroy Application?" @ok="onConfirm">
      <p class="my-4">Are you sure you want to destroy this Application?</p>
    </b-modal>

  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['model'],
  methods: {
    onConfirm () {
      return this.$store.commit('application/destroy', { app: this.model })
    }
  }
}
</script>


