
<template>
  <div class="container">
    <a href="#/applications">Back</a>
    <h2>Application - New</h2>
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
        <button class="btn btn-primary">Create</button>
      </div>
    </form>

  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  name: 'application_new',
  data () {
    return {
      model: {}
    }
  },
  methods: {
    formSubmit () {
      return store.commit('application/persist', { app: this.model })
    }
  }
}
</script>


