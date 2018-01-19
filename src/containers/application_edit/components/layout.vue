
<template>
  <div class="container">
    <a :href="'#/applications/' + model._id">Back</a>
    <h2>Application Edit - {{model.name}}</h2>
    <hr>

    <form v-on:submit.prevent="formSubmit">


        <div class="form-group">
          <label>
            Name
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted">Application Name</small>

          <input type="text" class="form-control" placeholder="Name" v-model="model.name">

        </div>


        <div class="form-group">
          <label>
            Google Sheets ID

          </label>
          <small class="form-text text-muted">ID of the Google Sheet used to build the application.</small>

          <input type="text" class="form-control" placeholder="Google Sheets ID" v-model="model.google_sheets_id">

        </div>


      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>

  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['id'],
  methods: {
    formSubmit () {
      // TODO - validations
      return this.$store.commit('application/persist', { app: this.model })
    }
  },
  computed: {
    model () {
      return this.$store.getters['application/current']
    }
  }

}
</script>


