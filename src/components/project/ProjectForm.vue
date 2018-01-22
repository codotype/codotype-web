
<template>
  <div class="row d-flex flex-column align-items-center">

    <div class="col-lg-12">
      <h2>New Project</h2>
      <hr>
    </div>

    <div class="col-lg-6 d-flex flex-column">
      <div class="form-group">
        <label class='mb-0'>
          Label
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted mb-2">The name of your project</small>
        <input type="text" class="form-control" placeholder="Label" v-model="model.label" @input="onLabelInput()">
      </div>
    </div>

    <div class="col-lg-6 d-flex flex-column text-right">
      <div class="btn-group w-100">
        <button class="btn w-50 btn-outline-light mr-2" @click="cancel()">
          <i class="fa fa-fw fa-times mr-1"></i>
          Cancel
        </button>

        <!-- <button class="btn btn-outline-success" @click="validateAttributes()" v-if="record._id"> -->
          <!-- <i class="fa fa-fw fa-plus mr-1"></i> -->
          <!-- Update {{ schema.label }} -->
        <!-- </button> -->

        <button class="btn w-50 btn-outline-success" @click="submit()">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Create Project
        </button>
      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  props: ['model', 'cancel', 'submit'],
  methods: {
    onLabelInput () {
      this.$store.commit('project/set_identifier')
    }
  }
}
</script>
