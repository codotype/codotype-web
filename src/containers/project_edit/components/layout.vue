
<template>
  <div class="container">
    <h2>Project Edit - {{model.label}}</h2>
    <hr>

    <form v-on:submit.prevent="formSubmit">


        <div class="form-group">
          <label>
            Label
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted">The name of your project</small>

          <input type="text" class="form-control" placeholder="Label" v-model="model.label">

        </div>


        <div class="form-group">
          <label>
            Identifier
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted">The lowercase-only version of the Label </small>

          <input type="text" class="form-control" placeholder="Identifier" v-model="model.identifier">

        </div>


      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>

  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  props: ['model'],
  methods: {
    formSubmit () {
      // TODO - validations
      return store.dispatch('project/update', this.model)
    }
  }

}
</script>
