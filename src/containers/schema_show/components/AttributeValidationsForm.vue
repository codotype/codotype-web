<template>
  <div class="row">

    <div class="col-lg-12">
      <p class="lead mb-0">Advanced Properties</p>
    </div>

    <div class="col-lg-6 col-sm-12">
      <div class="form-group">
        <label>
          Required
          <span class='text-danger'>*</span>
        </label>
        <small class="form-text text-muted">Whether or not this attribute is required.</small>
        <input type="checkbox" class="form-control" v-model="model.required" >
      </div>
    </div>

    <div class="col-lg-6 col-sm-12">
      <div class="form-group">
        <label>Unique</label>
        <small class="form-text text-muted">Whether or not to enforce unique values for this attribute.</small>
        <input type="checkbox" class="form-control" v-model="model.unique" >
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>
