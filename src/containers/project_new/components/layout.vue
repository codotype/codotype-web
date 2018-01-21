
<template>
  <div class="container">
    <a href="#/projects">Back</a>
    <h2>Project - New</h2>
    <hr>

    <form v-on:submit.prevent="formSubmit">
    
    
      <div class="col-lg-12">
        <div class="form-group">
          <label class='mb-0'>
            Label
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted mb-2">The name of your project</small>
        
          <input type="text" class="form-control" placeholder="Label" v-model="model.label">
        
        </div>
      </div>
    
    
      <div class="col-lg-12">
        <div class="form-group">
          <label class='mb-0'>
            Identifier
            <span class='text-danger'>*</span>
          </label>
          <small class="form-text text-muted mb-2">The lowercase-only version of the Label </small>
        
          <input type="text" class="form-control" placeholder="Identifier" v-model="model.identifier">
        
        </div>
      </div>
    

      <!-- <div class="form-group"> -->
        <!-- <button class="btn btn-primary">Create</button> -->
      <!-- </div> -->

      <div class="row">
        <div class="col-lg-12 text-right">

          <button class="btn btn-outline-dark mr-2">
            <i class="fa fa-fw fa-times mr-1"></i>
            Cancel
          </button>

          <!-- <button class="btn btn-outline-success" @click="validateAttributes()" v-if="record._id"> -->
            <!-- <i class="fa fa-fw fa-plus mr-1"></i> -->
            <!-- Update {{ schema.label }} -->
          <!-- </button> -->

          <button class="btn btn-outline-success">
            <i class="fa fa-fw fa-plus mr-1"></i>
            Create Project
          </button>

        </div>
      </div>

    </form>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  name: 'project_new',
  data () {
    return {
      model: {}
    }
  },
  methods: {
    formSubmit () {
      return store.dispatch('project/create', this.model)
    }
  }
}
</script>


